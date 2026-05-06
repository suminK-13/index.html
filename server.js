const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

// Serve all static files
app.use(express.static(__dirname));

// Store connected users: socket.id -> { phone, socketId }
const connectedUsers = new Map();

// Helper to get an array of all online users
function getOnlineUsers() {
    return Array.from(connectedUsers.values());
}

io.on('connection', (socket) => {
    console.log('A connection attempt:', socket.id);

    // 1. User registers their phone number after login
    socket.on('register', (phone) => {
        // We only allow one connection per phone number for this simple mock
        // If they refresh, they get a new socket id. Let's remove any old socket with this phone
        for (const [id, user] of connectedUsers.entries()) {
            if (user.phone === phone) {
                connectedUsers.delete(id);
            }
        }

        connectedUsers.set(socket.id, { phone: phone, socketId: socket.id });
        console.log(`${phone} registered with socket ${socket.id}`);

        // Broadcast the updated online users list to everyone
        io.emit('online_users', getOnlineUsers());
    });

    // 2. Handle private messages
    socket.on('private_message', (data) => {
        const { toPhone, text, timestamp } = data;
        const sender = connectedUsers.get(socket.id);
        
        if (!sender) return; // Unregistered

        // Find the target user's socket ID
        let targetSocketId = null;
        for (const user of connectedUsers.values()) {
            if (user.phone === toPhone) {
                targetSocketId = user.socketId;
                break;
            }
        }

        if (targetSocketId) {
            // Send to the specific user
            io.to(targetSocketId).emit('private_message', {
                fromPhone: sender.phone,
                text: text,
                timestamp: timestamp
            });
        }
    });

    // 3. Disconnect
    socket.on('disconnect', () => {
        if (connectedUsers.has(socket.id)) {
            const user = connectedUsers.get(socket.id);
            console.log(`${user.phone} disconnected`);
            connectedUsers.delete(socket.id);
            
            // Broadcast the updated online users list
            io.emit('online_users', getOnlineUsers());
        }
    });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`\n=================================================`);
    console.log(`✅ SecureChat Server with Private Messaging Running!`);
    console.log(`🌍 Open your browser and go to: http://localhost:${PORT}/login.html`);
    console.log(`=================================================\n`);
});
