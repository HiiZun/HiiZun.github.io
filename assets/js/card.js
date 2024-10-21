document.addEventListener('DOMContentLoaded', function() {
    const card = document.getElementById('card');
    const maxTilt = 10; // Maximum skew in degrees
    const transitionSpeed = 200; // Transition duration in ms

    // Add transition to the card for smoothness
    card.style.transition = `transform ${transitionSpeed}ms ease-out`;

    document.addEventListener('mousemove', (e) => {
        const { innerWidth, innerHeight } = window;
        const x = e.clientX - innerWidth / 2;
        const y = e.clientY - innerHeight / 2;

        // Calculate tilt angles based on cursor position
        const tiltY = (x / (innerWidth / 2)) * maxTilt; // Left-right
        const tiltX = -(y / (innerHeight / 2)) * maxTilt; // Top-bottom

        // Apply the tilt transform
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translate(-50%, -50%)`;
    });

    // Reset tilt when mouse leaves the window
    document.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translate(-50%, -50%)`;
    });
});
