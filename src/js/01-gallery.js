// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const galleryMarcup = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
<a class="gallery__link"
    href= "${original}">
    <img
    class="gallery__image"
    src= "${preview}"
    alt= "${description}"
    />
</a>
</li>`
}).join('');

galleryRef.insertAdjacentHTML('beforeend', galleryMarcup)

console.log(galleryItems);

new SimpleLightbox(".gallery a", {
  captionPosition: 'bottom',
  captionsData: "alt",
  captionDelay: 250,
});