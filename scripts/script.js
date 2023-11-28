const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
let IsMenuOpen = false;

// Define menu toggle function
menuBtn.addEventListener("click", () => {
    // Check if menu is open
    if (IsMenuOpen) {
        // Close the menu by setting the transform property to 100%
        menu.style.transform = "translateX(100%)";
        // Update the menu open status to false
        IsMenuOpen = false;
    } else {
        // Open the menu by setting the transform property to 0
        menu.style.transform = "translateX(0)";
        // Update the menu open status to true
        IsMenuOpen = true;
    }
});
