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
