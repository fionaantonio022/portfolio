document.addEventListener("DOMContentLoaded", function() {
    VANTA.GLOBE({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
      })
   
});


document.getElementById("tech-stack-btn").addEventListener("click", function() {
    document.getElementById("tech-stack").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contact-btn").addEventListener("click", function() {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("certificate-btn").addEventListener("click", function() {
    document.getElementById("certificates").scrollIntoView({ behavior: "smooth" });
});
