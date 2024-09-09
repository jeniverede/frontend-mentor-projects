document.addEventListener("DOMContentLoaded", function () {
    const menuTrigger = document.getElementById("menu-trigger");
    const reverseTrigger = document.getElementById("menu-trigger-reverse");
    const socialMenu = document.getElementById("social-menu");

    function toggleMenu() {
        // Toggle visibility of the social menu
        socialMenu.classList.toggle("social-menu-hidden");
        socialMenu.classList.toggle("social-menu-visible");

        // Toggle the share icon's image or reverse color
        if (socialMenu.classList.contains("social-menu-visible")) {
            menuTrigger.src = "/images/icon-share-reverse.svg"; // Replace with reverse icon
            reverseTrigger.style.display = 'flex'; // Show reverse icon
        } else {
            menuTrigger.src = "/images/icon-share.svg"; // Restore original icon
            reverseTrigger.style.display = 'none'; // Hide reverse icon
        }
    }

    // Event listener for the forward share icon click
    menuTrigger.addEventListener("click", toggleMenu);

    // Event listener for the reverse share icon click
    reverseTrigger.addEventListener("click", function () {
        socialMenu.classList.add("social-menu-hidden");
        socialMenu.classList.remove("social-menu-visible");
        menuTrigger.src = "/images/icon-share.svg"; // Restore original icon
        reverseTrigger.style.display = 'none'; // Hide reverse icon
    });
});





