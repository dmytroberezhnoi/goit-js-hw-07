import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

// 1. Створення і рендер розмітки на підставі масиву даних

const listEl = document.querySelector(".gallery");
const elementGalleryMarkup = createElementGalleryMarkup(galleryItems);

listEl.insertAdjacentHTML("beforeend", elementGalleryMarkup);

function createElementGalleryMarkup(images) {
  return images
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

// 2. Ініціалізація бібліотеки SimpleLightbox

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
