import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
console.log(galleryEl)
galleryItems.forEach(element => {
    galleryEl.insertAdjacentHTML("beforeend",`<li class="gallery__item">
    <a class="gallery__link" href="${element.original}">
       <img class="gallery__image" src="${element.preview}" alt="${element.description}" />
    </a>
 </li>`)
});

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
