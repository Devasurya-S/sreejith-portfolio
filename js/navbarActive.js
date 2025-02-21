document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".menu_nav .nav-item");

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Remove 'active' from all links
            navLinks.forEach(item => item.classList.remove("active"));

            // Add 'active' to the clicked link
            this.classList.add("active");
        });
    });
});
