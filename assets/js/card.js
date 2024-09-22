document.addEventListener('DOMContentLoaded', function() {
    // Get the card element
    const card = document.getElementById('card');
    const maxTilt = 10; // Maximum skew in degrees

    document.addEventListener('mousemove', (e) => {
        const { innerWidth, innerHeight } = window;
        const x = e.clientX - innerWidth / 2;
        const y = e.clientY - innerHeight / 2;
    
        // Calculate skew angles based on cursor position
        const skewY = (x / (innerWidth / 2)) * maxTilt; // Left-right
        const skewX = -(y / (innerHeight / 2)) * maxTilt; // Top-bottom
    
        // Apply the skew transform
        card.style.transform = `skew(${skewX}deg, ${skewY}deg) translate(-50%, -50%)`;
    });
    
    // Reset skew when mouse leaves the window
    document.addEventListener('mouseleave', () => {
        card.style.transform = `skew(0deg, 0deg)`;
    });
});
