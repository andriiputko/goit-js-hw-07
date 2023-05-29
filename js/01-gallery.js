import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');
console.log(galleryEl)
galleryEl.addEventListener("click", openModalImg)



galleryItems.forEach(element => {
    galleryEl.insertAdjacentHTML("beforeend", `<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
      <img
        class="gallery__image"
        src="${element.preview}"
        data-source="${element.original}"
        alt="${element.description}"
      />
    </a>
  </li>`)
})

const instance = basicLightbox.create(`<div class="gallery__item"><img width="800" heigth="auto" src=""><img/></div>`, {
    onShow: (instance) => {
      window.addEventListener('keydown', onEscKeyPress);
    },
    onClose: (instance) => {
      window.removeEventListener('keydown', onEscKeyPress);
    },
  })

function openModalImg(e) {
    e.preventDefault();
  const datasetSource = e.target.dataset.source;
  if (!datasetSource) return;
  instance.element().querySelector('img').src = datasetSource;
  instance.show();
}

function onEscKeyPress(e) {
    if (e.code !== 'Escape') return;
    instance.close();
  }

