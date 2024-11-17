// Function to validate the contact form
function validateFormContact() {
    let isValid = true; // Initialize validation flag

    // Validate Full Name
    const fullname = document.getElementById('fullname').value; // Get Full Name value
    const fullnameError = document.getElementById('fullnameError'); // Get Full Name error element
    const namePattern = /^[a-zA-Z\s]+$/; // Regular expression for only English letters and spaces
    if (fullname.trim() === '') {
        fullnameError.textContent = ' ***Full Name is required'; // Set error message if Full Name is empty
        isValid = false; // Set validation flag to false
    } else if (!namePattern.test(fullname)) {
        fullnameError.textContent = ' ***Full Name must contain only alphabetical letters'; // Set error message if Full Name is invalid
        isValid = false; // Set validation flag to false
    } else {
        fullnameError.textContent = ''; // Clear error message
    }

    // Validate Phone Number
    const phonenumber = document.getElementById('phonenumber').value; // Get Phone Number value
    const phonenumberError = document.getElementById('phonenumberError'); // Get Phone Number error element
    const phonePattern = /^[0-9]{10}$/; // Regular expression for 10-digit phone number
    if (!phonePattern.test(phonenumber)) {
        phonenumberError.textContent = ' ***Please enter a valid 10-digit phone number'; // Set error message if Phone Number is invalid
        isValid = false; // Set validation flag to false
    } else {
        phonenumberError.textContent = ''; // Clear error message
    }

    // Validate Email
    const email = document.getElementById('emailAddress').value; // Get Email value
    const emailError = document.getElementById('emailAddressError'); // Get Email error element
    if (email.trim() === '') {
        emailError.textContent = ' ***Please enter a valid email address'; // Set error message if Email is empty
        isValid = false; // Set validation flag to false
    } else {
        emailError.textContent = ''; // Clear error message
    }

    // Validate Message
    const message = document.getElementById('message').value; // Get Message value
    const messageError = document.getElementById('messageError'); // Get Message error element
    if (message.trim() === '') {
        messageError.textContent = ' ***Message is required'; // Set error message if Message is empty
        isValid = false; // Set validation flag to false
    } else {
        messageError.textContent = ''; // Clear error message
    }

    if (isValid) {
        // If the form is valid, display the modal
        displayModal(fullname, phonenumber, email, message); // Call displayModal function with form values
    }

    return false; // Return false to prevent form submission
}

// Function to display the modal
function displayModal(fullname, phonenumber, email, message) {
    let formattedMessage = capitalizeSentences(message); // Capitalize first letter of each sentence in message
    let summary = `
        <strong>Full Name:</strong> ${fullname}<br><br>
        <strong>Phone Number:</strong> ${phonenumber}<br><br>
        <strong>Email Address:</strong> ${email}<br><br>
        <strong>Message:</strong> ${formattedMessage}<br><br>
        <strong>We will contact you as soon as possible. Thank you!</strong>
    `;

    // Display the modal
    let modal = document.getElementById('popupModal2');
    document.getElementById('summaryContent2').innerHTML = summary;
    modal.style.display = 'block'; // Ensure modal is set to display:block

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

// Function to convert input value to uppercase
function convertToUpperCase(input) {
    input.value = input.value.toUpperCase(); // Convert input value to uppercase
}

// Function to capitalize the first letter of each sentence in a textarea
function capitalizeSentences(text) {
    // Split the text into sentences, capturing the punctuation as separate elements
    const sentences = text.match(/[^.!?]+[.!?]*\s*/g);
    for (let i = 0; i < sentences.length; i++) {
        sentences[i] = sentences[i].trimStart(); // Remove leading whitespace from each sentence
        if (sentences[i]) {
            sentences[i] = sentences[i][0].toUpperCase() + sentences[i].substring(1);
        }
    }
    // Rejoin sentences to form the final text
    return sentences.join(' ');
}