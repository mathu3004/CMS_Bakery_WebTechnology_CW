//Vacancy form validation & summary popup 
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('vacancyForm');

    // Function to display error messages
    function showError(element, message) {
        const errorElement = element.closest('.form-group').querySelector('.error-message');
        errorElement.textContent = message;
    }

    // Function to clear error messages
    function clearErrors() {
        const errorMessages = document.querySelectorAll('.error-message');
        errorMessages.forEach(function(error) {
            error.textContent = '';
        });
    }

    // Event listeners for real-time validation and uppercase conversion
    const textFields = ['Fname', 'Lname', 'city', 'country', 'address', 'EQ', 'WE'];
    textFields.forEach(function(fieldId) {
        const field = document.getElementById(fieldId);
        field.addEventListener('input', function() {
            validateAndUppercase(field);
        });
    });

    // Function to validate and convert input to uppercase
    function validateAndUppercase(element) {
        element.value = element.value.toUpperCase();
        const textPattern = /^[A-Z\s]+$/;
        if (!textPattern.test(element.value.trim())) {
            showError(element, ' ***This field must contain only letters and spaces.');
        } else {
            showError(element, '');
        }
    }

    // Form submission validation
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        clearErrors(); // Clear previous error messages

        let isValid = true;

        // First Name validation
        const Fname = document.getElementById('Fname');
        if (Fname.value.trim() === '') {
            showError(Fname, ' ***Please enter your first name.');
            isValid = false;
        }

        // Last Name validation
        const Lname = document.getElementById('Lname');
        if (Lname.value.trim() === '') {
            showError(Lname, ' ***Please enter your last name.');
            isValid = false;
        }

        // Gender validation
        const genderInputs = document.querySelectorAll('input[name="Gender"]');
        let genderSelected = false;
        genderInputs.forEach(function(input) {
            if (input.checked) {
                genderSelected = true;
            }
        });
        if (!genderSelected) {
            const genderError = document.getElementById('GenderError');
            genderError.textContent = ' ***Please select your gender.';
            isValid = false;
        }

        // Contact Number validation
        const Phone = document.getElementById('Phone');
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(Phone.value.trim())) {
            showError(Phone, ' ***Please enter a valid contact number (10 digits).');
            isValid = false;
        }

        // Date of Birth validation
        const DOB = document.getElementById('DOB');
        const age = new Date().getFullYear() - new Date(DOB.value).getFullYear();
        if (isNaN(age) || age < 18) {
            showError(DOB, ' ***Please enter a valid DOB & ensure you are at least 18 years old.');
            isValid = false;
        }

        // Email validation
        const Email = document.getElementById('Email');
        if (Email.value.trim() === '') {
            showError(Email, ' ***Please enter a valid email.');
            isValid = false;
        }

        // Address validation
        const address = document.getElementById('address');
        if (address.value.trim() === '') {
            showError(address, ' ***Please enter your address.');
            isValid = false;
        }

        // City validation
        const city = document.getElementById('city');
        if (city.value.trim() === '') {
            showError(city, ' ***Please enter your city.');
            isValid = false;
        }

        // Zipcode validation
        const zipcode = document.getElementById('zipcode');
        const zipPattern = /^[0-9]{5}$/;
        if (!zipPattern.test(zipcode.value.trim())) {
            showError(zipcode, ' ***Please enter a valid zipcode (5 digits).');
            isValid = false;
        }

        // Country validation
        const country = document.getElementById('country');
        if (country.value.trim() === '') {
            showError(country, ' ***Please enter your country.');
            isValid = false;
        }

        // Educational Qualifications validation
        const EQ = document.getElementById('EQ');
        if (EQ.value.trim() === '') {
            showError(EQ, ' ***Please enter your educational qualifications.');
            isValid = false;
        }

        // Work Experiences validation
        const WE = document.getElementById('WE');
        if (WE.value.trim() === '') {
            showError(WE, ' ***Please enter your work experiences.');
            isValid = false;
        }

        // CV/Resume validation
        const myFile = document.getElementById('myFile');
        if (myFile.files.length === 0) {
            showError(myFile, ' ***Please upload your CV/Resume.');
            isValid = false;
        }

        // Agreement checkbox validation
        const agreeCheckbox = document.getElementById('agreeCheckbox');
        if (!agreeCheckbox.checked) {
            showError(agreeCheckbox, ' ***You must agree to the above information.');
            isValid = false;
        }

        // If form is valid, show success modal
        if (isValid) {
            showSuccessModal();
        }
    });

    // Function to show success modal
    function showSuccessModal() {
        const successModal3 = document.getElementById('successModal3'); // Assuming this is the ID of the success modal
        successModal3.style.display = 'block'; // Display the success modal

        // Close the modal when clicking on the close button
        const closeButton = successModal3.querySelector('.close');
        closeButton.onclick = function() {
            successModal3.style.display = 'none';
            form.reset(); // Reset the form after closing the modal
        };

        // Close the modal when clicking outside the modal content
        window.onclick = function(event) {
            if (event.target === successModal3) {
                successModal3.style.display = 'none';
                form.reset(); // Reset the form after closing the modal
            }
        };
    }
});
