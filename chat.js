document.addEventListener('DOMContentLoaded', () => {
    // 1. Session Check
    const currentUserPhone = localStorage.getItem('secureChatUser');
    if (!currentUserPhone) {
        window.location.href = 'login.html';
        return;
    }

    // Set profile name
    document.getElementById('myProfileName').textContent = currentUserPhone;

    // Logout
    document.getElementById('logoutBtn').addEventListener('click', () => {
        localStorage.removeItem('secureChatUser');
        window.location.href = 'login.html';
    });

    // 2. Connect to Socket
    const socket = typeof io !== 'undefined' ? io() : null;
    
    let activeChatUser = null;
    const chatHistories = {};
    
    // Contacts System
    let myContacts = JSON.parse(localStorage.getItem('secureChatContacts_' + currentUserPhone)) || [];
    let cachedOnlineUsers = [];

    const messageInput = document.getElementById('messageInput');
    const sendBtn = document.getElementById('sendBtn');
    const micBtn = document.getElementById('micBtn');
    const chatHistoryDOM = document.getElementById('chatHistory');
    const securityBadge = document.getElementById('securityBadge');
    const chatListDOM = document.getElementById('chatList');
    const mainChatArea = document.getElementById('mainChatArea');
    const activeChatNameDOM = document.getElementById('activeChatName');
    
    const contactSearchInput = document.getElementById('contactSearchInput');
    const addContactBtn = document.getElementById('addContactBtn');

    if (socket) {
        socket.emit('register', currentUserPhone);

        socket.on('online_users', (users) => {
            cachedOnlineUsers = users;
            renderContacts();
        });

        socket.on('private_message', (data) => {
            const { fromPhone, text, timestamp } = data;
            
            // Auto-add to contacts if someone messages you
            if (!myContacts.includes(fromPhone)) {
                myContacts.push(fromPhone);
                saveContacts();
            }

            if (!chatHistories[fromPhone]) chatHistories[fromPhone] = [];
            chatHistories[fromPhone].push({ text, type: 'received', timestamp });

            if (activeChatUser === fromPhone) {
                appendMessageToDOM(text, 'received', timestamp);
            } else {
                renderContacts(); 
            }
        });
    }

    // Search / Add Contact Logic
    addContactBtn.addEventListener('click', addContact);
    contactSearchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') addContact();
    });

    function addContact() {
        const query = contactSearchInput.value.trim();
        if (!query) return;

        if (query === currentUserPhone) {
            alert("You cannot add yourself.");
            return;
        }

        if (myContacts.includes(query)) {
            alert("User is already in your contacts.");
            contactSearchInput.value = '';
            return;
        }

        // Check if user is online
        const isOnline = cachedOnlineUsers.some(u => u.phone === query);
        if (isOnline) {
            myContacts.push(query);
            saveContacts();
            renderContacts();
            contactSearchInput.value = '';
            
            // Auto open the chat
            openChat(query);
        } else {
            alert(`User ${query} is not currently online or does not exist. (For this local version, they must have the app open).`);
        }
    }

    function saveContacts() {
        localStorage.setItem('secureChatContacts_' + currentUserPhone, JSON.stringify(myContacts));
    }

    function renderContacts() {
        chatListDOM.innerHTML = '';
        
        // Only show people who are in our contacts
        if (myContacts.length === 0) {
            chatListDOM.innerHTML = `
                <div style="padding: 20px; text-align: center; color: var(--text-secondary); font-size: 0.9rem;">
                    Your contact list is empty.<br><br>Find your friends by typing their phone number above!
                </div>`;
            return;
        }

        myContacts.forEach(phone => {
            const isOnline = cachedOnlineUsers.some(u => u.phone === phone);
            const history = chatHistories[phone] || [];
            const lastMsg = history.length > 0 ? history[history.length - 1].text : "Start a secure chat";

            const item = document.createElement('div');
            item.className = `chat-item ${activeChatUser === phone ? 'active' : ''}`;
            item.innerHTML = `
                <div class="avatar group-avatar" style="${!isOnline ? 'filter: grayscale(1); opacity: 0.5;' : ''}">
                    <i class="fa-solid fa-user"></i>
                </div>
                <div class="chat-item-details">
                    <div class="chat-item-header">
                        <h4>${phone}</h4>
                        <span class="time" style="color: ${isOnline ? 'var(--text-secure)' : 'var(--text-secondary)'}">${isOnline ? 'Online' : 'Offline'}</span>
                    </div>
                    <div class="chat-item-last-message">
                        <i class="fa-solid fa-lock text-secure" title="Encrypted Message"></i>
                        <p>${escapeHTML(lastMsg)}</p>
                    </div>
                </div>
            `;

            item.addEventListener('click', () => {
                openChat(phone);
            });

            chatListDOM.appendChild(item);
        });
    }

    function openChat(phone) {
        activeChatUser = phone;
        mainChatArea.style.display = 'flex';
        activeChatNameDOM.textContent = phone;
        
        renderContacts(); // update active state in sidebar

        chatHistoryDOM.innerHTML = `
            <div class="encryption-notice">
                <i class="fa-solid fa-shield-check"></i>
                <p>Messages are end-to-end encrypted. Only you and this contact can read them.</p>
            </div>
        `;
        
        const history = chatHistories[phone] || [];
        history.forEach(msg => {
            appendMessageToDOM(msg.text, msg.type, msg.timestamp);
        });
        
        scrollToBottom();
    }

    // Input listeners
    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim().length > 0) {
            sendBtn.style.display = 'flex';
            micBtn.style.display = 'none';
        } else {
            sendBtn.style.display = 'none';
            micBtn.style.display = 'flex';
        }
    });

    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') sendMessage();
    });

    sendBtn.addEventListener('click', sendMessage);

    function sendMessage() {
        if (!activeChatUser) return;
        
        const text = messageInput.value.trim();
        if (!text) return;

        messageInput.value = '';
        sendBtn.style.display = 'none';
        micBtn.style.display = 'flex';

        simulateEncryptionAndSend(text);
    }

    function simulateEncryptionAndSend(text) {
        const originalBadgeHTML = securityBadge.innerHTML;
        securityBadge.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i><span>Encrypting...</span>';
        securityBadge.style.color = '#ffb74d';
        securityBadge.style.borderColor = 'rgba(255, 183, 77, 0.3)';

        setTimeout(() => {
            const timestamp = new Date().toISOString();
            
            if (!chatHistories[activeChatUser]) chatHistories[activeChatUser] = [];
            chatHistories[activeChatUser].push({ text, type: 'sent', timestamp });

            appendMessageToDOM(text, 'sent', timestamp);
            
            if (socket) {
                socket.emit('private_message', {
                    toPhone: activeChatUser,
                    text: text,
                    timestamp: timestamp
                });
            }
            
            renderContacts();

            securityBadge.innerHTML = originalBadgeHTML;
            securityBadge.style.color = 'var(--text-secure)';
            securityBadge.style.borderColor = 'rgba(0, 230, 118, 0.2)';
            
        }, 400);
    }

    function appendMessageToDOM(text, type, timestampStr) {
        const date = timestampStr ? new Date(timestampStr) : new Date();
        const timeString = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}`;
        
        const tickHTML = type === 'sent' ? '<i class="fa-solid fa-check-double read"></i>' : '';

        messageDiv.innerHTML = `
            <div class="message-content">
                <p>${escapeHTML(text)}</p>
                <span class="timestamp">${timeString} ${tickHTML}</span>
            </div>
        `;

        chatHistoryDOM.appendChild(messageDiv);
        scrollToBottom();
    }

    function scrollToBottom() {
        chatHistoryDOM.scrollTop = chatHistoryDOM.scrollHeight;
    }

    function escapeHTML(str) {
        return str.replace(/[&<>'"]/g, 
            tag => ({
                '&': '&amp;',
                '<': '&lt;',
                '>': '&gt;',
                "'": '&#39;',
                '"': '&quot;'
            }[tag])
        );
    }
});
