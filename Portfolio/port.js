document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('nav ul li a');
    const tabContents = document.querySelectorAll('.tab-content');
    const header = document.querySelector('header');
    const mainImage = document.querySelector('.profile-picture');

    tabLinks.forEach(tabLink => {
        tabLink.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);

            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
            });

            document.getElementById(targetId).classList.add('active');
            // Hide header and main image when a tab is clicked
            header.classList.add('hidden');
            mainImage.classList.add('hidden');
        });
    });

    

    const aboutLink = document.getElementById("about-link");
    const aboutSection = document.getElementById("about");

    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        aboutSection.classList.toggle("active");
         // Toggle visibility of header and main image when clicking About
         header.classList.toggle("hidden");
         mainImage.classList.toggle('hidden');
    });
});
    const educationTitles = document.querySelectorAll('.education-title');

    educationTitles.forEach(function(title) {
        title.addEventListener('click', function() {
            this.nextElementSibling.classList.toggle('active');
            // Toggle visibility of header and main image when clicking on education sections
            header.classList.toggle("hidden");
            mainImage.classList.toggle('hidden');
        });
    });