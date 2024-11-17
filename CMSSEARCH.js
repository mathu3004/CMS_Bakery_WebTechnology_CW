//Search bar Function
document.addEventListener("DOMContentLoaded", function() {
    const searchButton = document.getElementById("searchButton"); // Assuming there's a search button for activation
    const searchBar = document.getElementById("searchBar");
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    // Show the search bar when the search button is hovered over
    searchButton.addEventListener("mouseover", function() {
        searchBar.classList.add("active");
    });

    // Hide the search bar when the mouse leaves the search bar area
    searchBar.addEventListener("mouseleave", function() {
        searchBar.classList.remove("active");
    });

    // Implement search functionality
    searchInput.addEventListener("input", function() {
        const searchTerm = searchInput.value.toLowerCase().trim(); // Get and clean the search term
        const categoryPopups = document.querySelectorAll("#list .menu-list .category-popup"); // Select all category popups

        // Clear previous results only if there's no search term
        if (searchTerm.length === 0) {
            searchResults.innerHTML = ""; // Clear the search results
            return; // Exit the function if the search term is empty
        }

        let foundItems = [];

        // Loop through category popups
        categoryPopups.forEach(categoryPopup => {
            const categoryLink = categoryPopup.querySelector("a");
            const category = categoryLink.textContent.toLowerCase().trim().split(" "); // Split by space to get words
            const varieties = categoryPopup.querySelectorAll("ul li a");

            // Check if any word in the category matches the search term
            let matchFound = false;
            category.forEach(word => {
                if (word.startsWith(searchTerm)) {
                    foundItems.push(categoryLink); // Add the category link to found items
                    matchFound = true;
                }
            });

            if (!matchFound) {
                // Check if any variety matches the search term
                varieties.forEach(variety => {
                    const varietyName = variety.textContent.toLowerCase().trim();
                    const varietyWords = varietyName.split(" ");

                    varietyWords.forEach(word => {
                        if (word.startsWith(searchTerm)) {
                            foundItems.push(variety); // Add the variety link to found items
                        }
                    });
                });
            }
        });

        // Display search results
        if (foundItems.length === 0) {
            searchResults.innerHTML = "<li>No items found. Try another search term.</li>";
        } else {
            searchResults.innerHTML = ""; // Clear previous results
            foundItems.forEach(item => {
                let li = document.createElement("li");
                let link = document.createElement("a");
                link.href = item.href || "#"; // Use item.href if available, otherwise fallback to #
                link.textContent = item.textContent;
                li.appendChild(link);
                searchResults.appendChild(li);
            });
        }
    });
});