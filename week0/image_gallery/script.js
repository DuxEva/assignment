// script.js
document.addEventListener("DOMContentLoaded", function () {
  const images = [
    { full: "images/image1.jpg", caption: "Image 1" },
    { full: "images/image2.jpg", caption: "Image 2" },
    { full: "images/image3.jpg", caption: "Image 3" },
    { full: "images/image4.jpg", caption: "Image 4" },
    { full: "images/image5.jpg", caption: "Image 5" },
    // { full: "images/image6.png", caption: "Image 6" },
    // { full: "images/image7.png", caption: "Image 7" },
    // { full: "images/image8.png", caption: "Image 8" },
    // { full: "images/image9.png", caption: "Image 9" },
  ];

  const galleryContainer = document.querySelector(".gallery-container");
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");
  let currentIndex = 0;

  // Create thumbnails
  images.forEach((image, index) => {
    const imageContainer = document.createElement("div");
    imageContainer.classList.add("image-container");
    const img = document.createElement("img");
    img.src = image.full;
    img.alt = image.caption;
    img.dataset.index = index;
    imageContainer.appendChild(img);
    galleryContainer.appendChild(imageContainer);
  });

  // Open lightbox
  function openLightbox(index) {
    currentIndex = index;
    lightboxImage.src = images[currentIndex].full;
    lightbox.style.display = "flex";
    updateNavigationButtons();
  }

  // Close lightbox
  function closeLightbox() {
    lightbox.style.display = "none";
  }

  // Navigate lightbox
  function navigateLightbox(step) {
    currentIndex += step;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex >= images.length) currentIndex = images.length - 1;
    openLightbox(currentIndex);
  }

  // Update navigation buttons
  function updateNavigationButtons() {
    lightboxPrev.style.display = currentIndex === 0 ? "none" : "block";
    lightboxNext.style.display =
      currentIndex === images.length - 1 ? "none" : "block";
  }

  // Event listeners
  galleryContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "IMG") {
      openLightbox(parseInt(event.target.dataset.index, 10));
    }
  });

  lightboxClose.addEventListener("click", closeLightbox);
  lightboxPrev.addEventListener("click", () => navigateLightbox(-1));
  lightboxNext.addEventListener("click", () => navigateLightbox(1));

  // Close lightbox on background click
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });
});
