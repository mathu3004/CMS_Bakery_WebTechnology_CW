//Query validation and summary popup
document.addEventListener('DOMContentLoaded', function() {
    // Add an event listener to the form for the 'submit' event
    const contactForm = document.getElementById('contactForm');
	console.log('Contact Form:', contactForm); // This should log the form element or null
    if (!contactForm) {
        console.error('Contact form not found in the DOM');
        return; }
	contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        // Reset all error messages
        document.querySelectorAll('.error-message').forEach(function(el) {
            el.textContent = '';
        });

        // Fetch values from form fields and trim leading/trailing spaces
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let theme = document.getElementById('theme').value.trim();
        let details = document.getElementById('details').value.trim();

        // Initialize validation flag
        let isValid = true;

        // Validate Name field
        if (name === '') {
            document.getElementById('nameError').textContent = '***Name is required.';
            isValid = false;
        }

        // Validate Email field
        if (email === '') {
            document.getElementById('emailError').textContent = '***Email is required.';
            isValid = false;
        } else if (!isValidEmail(email)) {
            document.getElementById('emailError').textContent = '***Please enter a valid email address.';
            isValid = false;
        }

        // Validate Query Subject (Theme) field
        if (theme === '') {
            document.getElementById('themeError').textContent = '***Query subject is required.';
            isValid = false;
        }

        // Validate Query Details field
        if (details === '') {
            document.getElementById('detailsError').textContent = '***Query details are required.';
            isValid = false;
        }

        // If all fields are valid, format details and display summary in popup
        if (isValid) {
            // Format the details with capitalized first letter
            let formattedDetails = capitalizeFirstLetter(details);
            // Create summary HTML
            let summary = `
                <strong>Name:</strong> ${capitalizeFirstLetter(name)}<br><br>
                <strong>Email:</strong> ${email}<br><br>
                <strong>Subject:</strong> ${capitalizeFirstLetter(theme)}<br><br>
                <strong>Details:</strong> ${formattedDetails}<br><br>
                <strong>We will solve your issue as soon as possible. Thank you!</strong>
            `;

            // Display the modal popup with the summary
            let modal = document.getElementById('popupModal');
            document.getElementById('summaryContent').innerHTML = summary;
            modal.style.display = 'block';

            // Debugging log to confirm modal opening
            console.log('Modal opened');

            // Close the modal when the close button is clicked
            let closeButton = modal.querySelector('.close');
            closeButton.onclick = function() {
                modal.style.display = 'none';
            };

            // Close the modal when clicking outside the modal
            window.onclick = function(event) {
                if (event.target === modal) {
                    modal.style.display = 'none';
                }
            };
        }
    });

    // Helper function to capitalize the first letter of each sentence
    function capitalizeFirstLetter(text) {
        let sentences = text.split(/\.|\?|!/); // Split text by punctuation
        // Capitalize the first letter of each sentence
        for (let i = 0; i < sentences.length; i++) {
            sentences[i] = sentences[i].trim();
            if (sentences[i]) {
                sentences[i] = sentences[i][0].toUpperCase() + sentences[i].substring(1);
            }
        }
        // Rejoin sentences with punctuation (using period in this case)
        return sentences.join('. ');
    }

    // Helper function to validate email format
    function isValidEmail(email) {
        // Simple email validation regex
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
});
