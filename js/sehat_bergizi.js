document.addEventListener("DOMContentLoaded", function() {
    // Create an instance of IntersectionObserver
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add 'animate' class to the image when it comes into view
                entry.target.classList.add('animate');
                // Stop observing the target after it has animated
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Adjust this value as needed
    });

    // Select all images that need the animation
    const images = document.querySelectorAll('.aboutku .row .image img, .aboutku1 .row .image img');

    // Observe each image
    images.forEach(image => {
        observer.observe(image);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
                observer.unobserve(entry.target); // Stop observing once the element is visible
            }
        });
    }, observerOptions);

    // Select both the heading and the cards
    const elementsToAnimate = document.querySelectorAll(".card, .astronomi h2");
    
    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});
