import { galleryItems } from "./gallery-items.js";

// Change code below this line

const gallery = document.querySelector(".gallery");

function createGalleryItem(item) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = item.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = item.preview;
  galleryImage.dataset.source = item.original;
  galleryImage.alt = item.description;

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

for (let i = 0; i < galleryItems.length; i++) {
  const galleryItem = createGalleryItem(galleryItems[i]);
  gallery.appendChild(galleryItem);
}
gallery.addEventListener("click", (event) => {
  event.preventDefault();
  const target = event.target;
  if (target.classList.contains("gallery__image")) {
    const source = target.dataset.source;
    const instance = basicLightbox.create(`
      <img src="${source}">
    `);
    instance.show();
  }
});
