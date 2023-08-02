import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")


function createMarkup(arr) {
    return arr.map(({ preview, original, description }) =>`
    <li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('')
   
}

galleryContainer.insertAdjacentHTML('beforeend', createMarkup(galleryItems))


function openModal(evt) {
    evt.preventDefault();

    if (!evt.target.classList.contains("gallery__image")) {
        return;
    }
    
    const imageSource = evt.target.dataset.source;

    const instance = basicLightbox.create(
        `<img src="${imageSource}" height="800">`
    );

    instance.show();

    function closeModalOnEscape(event) {
        if (event.key === "Escape") {
            instance.close();
            document.removeEventListener("keydown", closeModalOnEscape);
        }
    }

    document.addEventListener("keydown", closeModalOnEscape);
}

galleryContainer.addEventListener("click", openModal);

























