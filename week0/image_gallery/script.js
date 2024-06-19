"use strict";
const images = [
  { full: "images/image1.jpg", caption: "Image 1" },
  { full: "images/image2.jpg", caption: "Image 2" },
  { full: "images/image3.jpg", caption: "Image 3" },
  { full: "images/image4.jpg", caption: "Image 4" },
  { full: "images/image5.jpg", caption: "Image 5" },
];

const galleryContainer = document.querySelector(".gallery-container");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");
const lightboxCaption = document.getElementById("lightbox-caption");
let currentIndex = 0;

// Create gallery
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
  lightboxCaption.textContent = images[currentIndex].caption;
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
    console.log(event.target.dataset)
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
