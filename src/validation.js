// Form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const submitButton = document.querySelector('.form__submit');
    const nacimientoInput = document.getElementById('nacimiento');
    const direccionInput = document.getElementById('direccion');

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

    function showSuccess(input) {
        const formGroup = input.closest('.form__group');
        const successIcon = formGroup.querySelector('.success-icon');
        formGroup.classList.remove('has-error');
        formGroup.classList.add('has-success');
        input.classList.remove('error');
        successIcon.classList.add('show');
    }
    function hideSuccess(input) {
        const formGroup = input.closest('.form__group');
        const successIcon = formGroup.querySelector('.success-icon');
        formGroup.classList.remove('has-success');
        successIcon.classList.remove('show');
    }

    function validateName() {
        const value = nameInput.value.trim();
        if (value === '') {
            showError(nameInput, "El nombre no puede estar vacío");
            hideSuccess(nameInput);
            return false;
        } else if (value.length < 2) {
            showError(nameInput, "Introduce al menos 2 caracteres");
            hideSuccess(nameInput);
            return false;
        } else {
            hideError(nameInput);
            showSuccess(nameInput);
            return true;
        }
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        if (value === '') {
            showError(emailInput, "El email no puede estar vacío");
            hideSuccess(emailInput);
            return false;
        } else if (!emailRegex.test(value)) {
            showError(emailInput, "Formato de email no válido");
            hideSuccess(emailInput);
            return false;
        } else {
            hideError(emailInput);
            showSuccess(emailInput);
            return true;
        }
    }

    function validateNacimiento() {
        const value = nacimientoInput.value.trim();
        if (value === '') {
            showError(nacimientoInput, "La fecha de nacimiento es obligatoria");
            hideSuccess(nacimientoInput);
            return false;
        } else {
            hideError(nacimientoInput);
            showSuccess(nacimientoInput);
            return true;
        }
    }

    function validateDireccion() {
        const value = direccionInput.value.trim();
        if (value === '') {
            showError(direccionInput, "La ciudad de residencia es obligatoria");
            hideSuccess(direccionInput);
            return false;
        } else {
            hideError(direccionInput);
            showSuccess(direccionInput);
            return true;
        }
    }

    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    nacimientoInput.addEventListener('blur', validateNacimiento);
    direccionInput.addEventListener('blur', validateDireccion);

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

    nacimientoInput.addEventListener('input', function () {
        if (nacimientoInput.classList.contains('error')) {
            validateNacimiento();
        }
    });

    direccionInput.addEventListener('input', function () {
        if (direccionInput.classList.contains('error')) {
            validateDireccion();
        }
    });

    // Clear errors on focus
    nameInput.addEventListener('focus', () => { hideError(nameInput); hideSuccess(nameInput); });
    emailInput.addEventListener('focus', () => { hideError(emailInput); hideSuccess(emailInput); });
    nacimientoInput.addEventListener('focus', () => { hideError(nacimientoInput); hideSuccess(nacimientoInput); });
    direccionInput.addEventListener('focus', () => { hideError(direccionInput); hideSuccess(direccionInput); });

    // Form submission
    submitButton.addEventListener('click', function (e) {
        e.preventDefault();

        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isNacimientoValid = validateNacimiento();
        const isDireccionValid = validateDireccion();

        if (isNameValid && isEmailValid && isNacimientoValid && isDireccionValid) {
            // Form is valid, you can submit it here
            console.log('Form is valid, ready to submit');
            alert('Message sent successfully!');
        } else {
            console.log('Form has errors');
        }
    });
});
