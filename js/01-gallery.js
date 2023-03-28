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
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    })
    .join("");
}

// 2. Реалізація делегування, відкриття/закриття модального вікна

listEl.addEventListener("click", onImageClick);

function onImageClick(event) {
  event.preventDefault();
  const isGalleryImageEl = event.target.classList.contains("gallery__image");

  if (!isGalleryImageEl) {
    return;
  }
  const ImgUrl = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${ImgUrl}">
`);

  instance.show();

  window.addEventListener("keydown", onEscKeyPress);

  function onEscKeyPress(event) {
    if (event.code === "Escape") {
      instance.close(() =>
        window.removeEventListener("keydown", onEscKeyPress)
      );
    }
  }
}
