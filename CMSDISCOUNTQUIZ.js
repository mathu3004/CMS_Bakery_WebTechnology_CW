// Array containing quiz questions and answers
let quiz = [
    { question: "In which year was CMS Bakery founded? (a) 1995 (b) 2000 (c) 2010 (d) 2015", answer: "b" },
    { question: "Where was the original location of CMS Bakery? (a) Colombo (b) Kandy (c) Galle (d) Jaffna", answer: "a" },
    { question: "What is the primary ingredient in macarons? (a) Flour (b) Almond flour (c) Coconut flour (d) Cornmeal", answer: "b" },
    { question: "Which two flavors are classic choices for macarons at CMS Bakery? (a) Vanilla and Chocolate (b) Strawberry and Lemon (c) Pistachio and Rose (d) Coffee and Caramel", answer: "c" },
    { question: "Which of the following is a popular pastry sold at CMS Bakery? (a) Croissant (b) Bagel (c) Muffin (d) Doughnut", answer: "a" },
    { question: "What is a key feature of CMS Bakery's pastries? (a) They are gluten-free (b) They are made with local ingredients (c) They are vegan (d) They contain no sugar", answer: "b" },
    { question: "Which of these cocktails is a specialty at CMS Bakery? (a) Mojito (b) Margarita (c) Pina Colada (d) Sangria", answer: "d" },
    { question: "What ingredient is commonly used in CMS Bakery's signature cocktail? (a) Rum (b) Whiskey (c) Vodka (d) Gin", answer: "a" },
    { question: "What is the most popular cake flavor at CMS Bakery? (a) Vanilla (b) Chocolate (c) Red Velvet (d) Carrot", answer: "b" },
    { question: "Which occasion is CMS Bakery's custom cakes most popular for? (a) Birthdays (b) Weddings (c) Anniversaries (d) Graduation", answer: "b" },
    { question: "What frosting flavor is a customer favorite for cupcakes at CMS Bakery? (a) Chocolate ganache (b) Buttercream (c) Cream cheese (d) Whipped cream", answer: "b" },
    { question: "Which unique cupcake flavor can you find at CMS Bakery? (a) Matcha (b) Blueberry (c) Lemon poppy seed (d) Pumpkin spice", answer: "a" },
    { question: "What type of brownie is CMS Bakery famous for? (a) Fudge brownie (b) Blondie (c) Nut brownie (d) Gluten-free brownie", answer: "a" },
    { question: "Which additional ingredient does CMS Bakery often use in their brownies? (a) Walnuts (b) Almonds (c) Hazelnuts (d) Pecans", answer: "a" },
    { question: "When did CMS Bakery first open a branch in Sri Lanka? (a) 2005 (b) 2010 (c) 2015 (d) 2020", answer: "c" },
    { question: "Which city in Sri Lanka is CMS Bakery most popular in? (a) Colombo (b) Kandy (c) Galle (d) Jaffna", answer: "a" },
    { question: "Which product is CMS Bakery known for introducing to the Sri Lankan market? (a) Gluten-free bread (b) Vegan pastries (c) Macarons (d) Artisanal chocolates", answer: "c" },
    { question: "What is CMS Bakery's philosophy when it comes to ingredient sourcing? (a) Only organic ingredients (b) Locally sourced ingredients (c) Imported ingredients (d) Seasonal ingredients", answer: "b" },
    { question: "Which holiday sees the highest sales for CMS Bakery? (a) Christmas (b) New Year (c) Easter (d) Valentine's Day", answer: "a" },
    { question: "What is a unique feature of CMS Bakery's customer service in Sri Lanka? (a) Home delivery (b) Personalized cakes (c) On-site baking classes (d) Loyalty program", answer: "b" }
];

// Initialize the score and an array to track asked questions
let score = 0;
let askedQuestions = []; // Array to track questions that have been asked

// Function to get a random question from the quiz
function getRandomQuestion() {
    let index = Math.floor(Math.random() * quiz.length); // Get random index
    let randomQuestion = quiz[index]; // Get random question

    // Ensure the question hasn't been asked before in the current game
    while (askedQuestions.includes(randomQuestion)) {
        index = Math.floor(Math.random() * quiz.length);
        randomQuestion = quiz[index];
    }

    askedQuestions.push(randomQuestion); // Add the question to askedQuestions array
    return randomQuestion;
}

// Function to show the quiz results
function showResults(userName) {
    let resultMessage;
    let color;

    if (score > 0) {
        resultMessage = "Hello " + userName + "! You have earned " + score + " points. Please claim the points in your next purchase.";
        color = "green"; // Positive feedback color
    } else {
        resultMessage = "Hello " + userName + "! You scored " + score + " points. Better luck next time!";
        color = "red"; // Negative feedback color
    }

    // Update the text and color in the HTML element
    let quizResultsElement = document.getElementById('quiz-results');
    quizResultsElement.innerText = resultMessage;
    quizResultsElement.style.color = color;
}

// Function to start the quiz
function startQuiz() {
    alert("Welcome to CMS Quiz!"); // Welcome message
    let userName = prompt("Enter your name:"); // Prompt user for their name

    if (userName === null || userName.trim() === "") {
        alert("Please enter a valid name to start the quiz."); // Check for valid name
        return;
    }

    askedQuestions = []; // Reset askedQuestions array for a new game
    score = 0; // Reset score for a new game

    alert("Participate in our exciting online quiz where correct answers earn you points towards a discount on your total bill. Each correct answer awards 2 points, with incorrect answers deducting 1 point. Test your knowledge at your convenience and start saving today!");
    alert("Starting the quiz!");

    for (let i = 0; i < 5; i++) { // Asking 5 questions
        let questionObj = getRandomQuestion(); // Get a random question
        let userAnswer = prompt(questionObj.question); // Prompt user for their answer

        if (userAnswer === null) {
            break; // Exit loop if user cancels
        }

        // Ensure the answer is a single character and in uppercase
        userAnswer = userAnswer.trim().toUpperCase(); 

        // Validate if userAnswer is a valid choice
        if (userAnswer !== 'A' && userAnswer !== 'B' && userAnswer !== 'C' && userAnswer !== 'D') {
            alert("Invalid answer! Please enter a valid choice (a, b, c, d).");
            i--; // Decrement i to ask the same question again
            continue;
        }

        if (userAnswer === questionObj.answer.toUpperCase()) {
            score += 2; // Add 2 points for correct answer
        } else {
            score -= 1; // Subtract 1 point for wrong answer
        }
    }

    showResults(userName); // Show the results to the user
}
