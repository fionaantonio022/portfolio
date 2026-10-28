document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".image-preview").forEach(function (imagePreview) {
    const imageDialog = document.getElementById(
      imagePreview.getAttribute("aria-controls")
    );

    if (imageDialog) {
      imagePreview.addEventListener("click", function () {
        imageDialog.showModal();
      });

      imageDialog.addEventListener("click", function (event) {
        if (event.target === imageDialog) {
          imageDialog.close();
        }
      });
    }
  });

  VANTA.GLOBE({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0
  });
});
