// Form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitButton = document.querySelector('.form__submit');

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function showError(input, message) {
        const formGroup = input.closest('.form__group');
        const errorMessage = formGroup.querySelector('.error-message');
        const errorIcon = formGroup.querySelector('.error-icon');

        formGroup.classList.add('has-error');
        input.classList.add('error');
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
        errorIcon.classList.add('show');
    }

    function hideError(input) {
        const formGroup = input.closest('.form__group');
        const errorMessage = formGroup.querySelector('.error-message');
        const errorIcon = formGroup.querySelector('.error-icon');

        formGroup.classList.remove('has-error');
        input.classList.remove('error');
        errorMessage.classList.remove('show');
        errorIcon.classList.remove('show');
    }

    function validateName() {
        const value = nameInput.value.trim();
        if (value === '') {
            showError(nameInput, "Sorry, can't be empty");
            return false;
        } else if (value.length < 2) {
            showError(nameInput, "Sorry, invalid format here");
            return false;
        } else {
            hideError(nameInput);
            return true;
        }
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        if (value === '') {
            showError(emailInput, "Sorry, can't be empty");
            return false;
        } else if (!emailRegex.test(value)) {
            showError(emailInput, "Sorry, invalid format here");
            return false;
        } else {
            hideError(emailInput);
            return true;
        }
    }

    function validateMessage() {
        const value = messageInput.value.trim();
        if (value === '') {
            showError(messageInput, "Sorry, can't be empty");
            return false;
        } else if (value.length < 10) {
            showError(messageInput, "Sorry, message too short");
            return false;
        } else {
            hideError(messageInput);
            return true;
        }
    }

    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);

    // Input validation (while typing)
    nameInput.addEventListener('input', function () {
        if (nameInput.classList.contains('error')) {
            validateName();
        }
    });

    emailInput.addEventListener('input', function () {
        if (emailInput.classList.contains('error')) {
            validateEmail();
        }
    });

    messageInput.addEventListener('input', function () {
        if (messageInput.classList.contains('error')) {
            validateMessage();
        }
    });

    // Clear errors on focus
    nameInput.addEventListener('focus', () => hideError(nameInput));
    emailInput.addEventListener('focus', () => hideError(emailInput));
    messageInput.addEventListener('focus', () => hideError(messageInput));

    // Form submission
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isMessageValid = validateMessage();

        if (isNameValid && isEmailValid && isMessageValid) {
            // Form is valid, you can submit it here
            console.log('Form is valid, ready to submit');
            alert('Message sent successfully!');
        } else {
            console.log('Form has errors');
        }
    });
});
