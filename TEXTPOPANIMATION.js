// Wait for the DOM to be fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    const topBarTextElement = document.querySelector("#topBarText");
    const topBarTexts = ["Welcome to CMS Bakery!", "Explore our tasty treats!", "Quality baked goods for you", "Visit us for fresh delights!"];
    let topBarIndex = 0;	
    // Function to change the top bar text, background image, and animated text
    function changeTopBarTextAndImage() {
        // Change top bar text
        topBarTextElement.textContent = topBarTexts[topBarIndex];
        topBarIndex = (topBarIndex + 1) % topBarTexts.length;
        setTimeout(changeTopBarTextAndImage, 10000); // Repeat every 10 seconds
    }
    // Initial setup to start the animation cycle
    changeTopBarTextAndImage();
});

//Move top when load the page...
history.scrollRestoration = "manual";

			$(window).on('beforeunload', function(){
				  $(window).scrollTop(0);
			});

			function scrollToTop() {
						window.scrollTo(0, 0);
					}
					
					
//Make an effect for the active(current page)...
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
