document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('signupForm');
    const userMessage = document.getElementById('UserMessage');
    const inputs = form.querySelectorAll('input, select');

    // Function to validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Function to validate password strength
    function isStrongPassword(password) {
        return password.length >= 8 && /[A-Z]/.test(password) && /[a-z]/.test(password) && /[0-9]/.test(password);
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let isValid = true;

        inputs.forEach(function (input) {
            if (!input.value.trim()) {
                isValid = false;
                input.classList.add('error');
                input.setAttribute('aria-invalid', 'true');
            } else {
                input.classList.remove('error');
                input.removeAttribute('aria-invalid');
            }

            // Specific validation for email and password
            if (input.type === 'email' && !isValidEmail(input.value)) {
                isValid = false;
                input.classList.add('error');
                input.setAttribute('aria-invalid', 'true');
            }
            if (input.type === 'password' && !isStrongPassword(input.value)) {
                isValid = false;
                input.classList.add('error');
                input.setAttribute('aria-invalid', 'true');
            }
        });

        if (isValid) {
            userMessage.style.display = 'block';
            userMessage.textContent = 'Thank you for signing up! The recommended results will be shown shortly.';

            setTimeout(function () {
                userMessage.style.display = 'none';
                form.submit();
            }, 2000);
        } else {
            alert('Please fill in all fields correctly.');
        }
    });

    // Add focus and blur event listeners for better keyboard navigation
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.boxShadow = '0 0 5px #3970f0';
        });
        input.addEventListener('blur', function() {
            this.style.boxShadow = 'none';
        });
    });
});