// Go top when reloading
history.scrollRestoration = "manual";

$(window).on('beforeunload', function(){
      $(window).scrollTop(0);
});

function scrollToTop() {
            window.scrollTo(0, 0);
        }


// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    const topBarTextElement = document.querySelector("#topBarText");
    const firstViewElement = document.querySelector(".firstView");
    const animatedTextElement = document.querySelector(".animatedText");
    const topBarTexts = ["Welcome to CMS!", "Explore our tasty treats!", "Quality baked goods for you", "Visit us for fresh culinary delights!"];
    const animatedTexts = ["Welcome to CMS!", "Delicious homemade croissants", "Freshly baked culinary delights", "Artisanal pastries"];

    let topBarIndex = 0;
    let imageIndex = 3; // Start with the last image to reveal the first image when refreshed

    // Function to change the top bar text, background image, and animated text
    function changeTopBarTextAndImage() {
        // Change top bar text
        topBarTextElement.textContent = topBarTexts[topBarIndex];
        topBarIndex = (topBarIndex + 1) % topBarTexts.length;

        // Change background image
        imageIndex = (imageIndex + 1) % 4; // 4 is the number of images
        firstViewElement.style.backgroundImage = `url(${getImageUrl(imageIndex)})`;

        // Change animated text
        animatedTextElement.textContent = animatedTexts[imageIndex];
        // Remove previous animation classes
        animatedTextElement.classList.remove("fadeIn", "slideInRight", "slideInLeft");

        // Apply appropriate animation class based on the image index
        switch (imageIndex) {
            case 0:
                animatedTextElement.classList.add("fadeIn");
                break;
            case 1:
                animatedTextElement.classList.add("slideInRight");
                break;
            case 2:
                animatedTextElement.classList.add("slideInLeft");
                break;
            case 3:
                animatedTextElement.classList.add("fadeIn");
                break;
            default:
                break;
        }

        // Schedule the next change
        setTimeout(() => {
            animatedTextElement.style.opacity = 1;
        }, 0); // Immediately show animated text

        setTimeout(() => {
            firstViewElement.style.backgroundImage = '';
            animatedTextElement.style.opacity = 0;
        }, 10000); // Both image and text disappear after 10 seconds

        setTimeout(changeTopBarTextAndImage, 10000); // Repeat every 10 seconds
    }

    // Function to get image URL based on index
    function getImageUrl(index) {
        const backgroundImages = [
            "https://static.vecteezy.com/system/resources/previews/008/525/397/non_2x/top-view-fresh-bread-brown-raisins-sesame-bakery-made-from-wheat-flour-food-homemade-suitable-for-healthy-eating-on-wooden-table-floor-black-rustic-dark-background-free-photo.jpg",
            "https://static.vecteezy.com/system/resources/previews/022/214/291/non_2x/delicious-homemade-croissants-on-rustic-wooden-kitchen-table-ai-generated-free-photo.jpg",
            "https://static.vecteezy.com/system/resources/previews/026/792/252/non_2x/delicious-victoria-sponge-cake-dark-background-with-empty-space-for-text-free-photo.jpg",
            "https://images7.alphacoders.com/829/thumb-1920-829621.jpg"
        ];
        return backgroundImages[index];
    }

    // Initial setup to start the animation cycle
    changeTopBarTextAndImage();
});


// jQuery code for the surprise message and quiz pop-up animations
$(document).ready(function() {
    // Animation for surprise message
    $('.surpriseMessage').click(function() {
        let discountDetailsWrapper = $(this).siblings('.discountDetailsWrapper');

        // Hide the surprise message and reveal the details with animation
        $(this).fadeOut(100, function() {
            discountDetailsWrapper.removeClass('hide').addClass('animate_reveal');
        });
    });
	

// Function to show the quiz pop-up after 30 seconds
    function showQuizPopup() {
        setTimeout(function() {
            // Show the quiz pop-up modal
            $('#quizPopup').fadeIn();
        }, 30000); // 30 seconds delay
    }

    // Call the function to show the quiz pop-up after 30 seconds
    showQuizPopup();

    // Close the quiz pop-up when clicking the close button
    $('.close').click(function() {
        $('#quizPopup').fadeOut();
    });

    // Handle the quiz button click event
    $('#quizButton').click(function() {
        // Redirect or handle the quiz start action here
        window.location.href = 'CMSDISCOUNTQUIZ.html'; // Example: Redirect to the quiz page
    });
});


//For Current active link
document.addEventListener("DOMContentLoaded", function() {
    const currentPath = window.location.pathname;
    const currentUrl = window.location.href;
    const naviLinks = document.querySelectorAll("#naviList a");
    const linksContainerLinks = document.querySelectorAll(".links-container a");

    // Function to add 'active' class to matching link
    function setActiveLink(links) {
      links.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        const linkUrl = link.href;

        // Check if path or full URL matches
        if (linkPath === currentPath || linkUrl === currentUrl) {
          link.classList.add("active");
        }
      });
    }

    // Set active class for navigation links
    setActiveLink(naviLinks);

    // Set active class for links in links-container
    setActiveLink(linksContainerLinks);
});


			/*
			document.addEventListener("DOMContentLoaded", function() {
				const naviLinks = document.querySelectorAll("#naviList a");
				const linksContainerLinks = document.querySelectorAll(".links-container a");

				// Function to add hover effect
				function addHoverEffect(links) {
					links.forEach(link => {
						link.addEventListener("mouseover", function() {
							this.style.fontSize = "25px"; // Adjust as needed
							this.style.color = "red"; // Adjust as needed
							this.style.fontWeight = "bold";
							this.style.textDecoration = "underline";
						});

						link.addEventListener("mouseout", function() {
							this.style.fontSize = ""; // Reset to default
							this.style.color = ""; // Reset to default
							this.style.fontWeight = "";
							this.style.textDecoration = "";
						});
					});
				}

				// Apply hover effect to navigation links
				addHoverEffect(naviLinks);

				// Apply hover effect to links in links-container
				addHoverEffect(linksContainerLinks);
			});
		*/