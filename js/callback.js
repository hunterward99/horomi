const callbackBtn = document.querySelector('.callback__button');
const modal = document.querySelector('.modal');
import showModal from './modal.js';

callbackBtn.addEventListener('click', () => {
    showModal();
});
