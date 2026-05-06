document.addEventListener('DOMContentLoaded', () => {
    // If already logged in, redirect to chat
    if (localStorage.getItem('secureChatUser')) {
        window.location.href = 'chat.html';
        return;
    }

    const step1 = document.getElementById('step1');
    const step2 = document.getElementById('step2');
    const phoneInput = document.getElementById('phoneInput');
    const nextBtn = document.getElementById('nextBtn');
    const otpInput = document.getElementById('otpInput');
    const verifyBtn = document.getElementById('verifyBtn');
    const phoneDisplay = document.getElementById('phoneDisplay');

    let phoneNumber = '';

    // Step 1: Submit Phone Number
    nextBtn.addEventListener('click', () => {
        phoneNumber = phoneInput.value.trim();
        if (phoneNumber.length < 5) {
            alert("Please enter a valid phone number.");
            return;
        }

        // Switch to OTP step
        phoneDisplay.textContent = phoneNumber;
        step1.classList.remove('active');
        step2.classList.active = true; // Wait, use classList.add
        step2.classList.add('active');
        otpInput.focus();
    });

    phoneInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') nextBtn.click();
    });

    // Step 2: Verify OTP
    verifyBtn.addEventListener('click', () => {
        const otp = otpInput.value.trim();
        if (otp !== '12345') {
            alert("For this mock login, please enter '12345'");
            return;
        }

        // Login successful! Save to localStorage
        localStorage.setItem('secureChatUser', phoneNumber);
        
        // Redirect to chat app
        window.location.href = 'chat.html';
    });

    otpInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') verifyBtn.click();
    });
});
