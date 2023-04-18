let feedbackBtn = document.querySelector('.feedback__button');
let calcBtn = document.querySelector('.calc__button');
let modal = document.querySelector('.modal');
let modalBg = document.querySelector('.modal__bg');
let closeBtn = document.querySelector('.modal__button-close');
let modalBlock = document.querySelector('.modal__block');

feedbackBtn.addEventListener('click', () => {
    showModal(); 
});

calcBtn.addEventListener('click', () => {
    showModal(); 
});

export default function showModal() {
    // modal.style.cssText = 'visibility: visible; opacity: 1; transition: visibility 1s, opacity 1s';
    modal.style.visibility = 'visible';
    modal.style.opacity = 1;
    modalBlock.style.cssText = 'transform: translate(-50%, -50%)';
    modal.style.transition = 'visibility .7s, opacity .7s';
    modalBlock.style.transition = 'transform 1s';
    document.body.style.overflow = 'hidden';

    // modalBlock.style.cssText = 'transform: translateY(100%)';

    modalBg.addEventListener('click', () => {
        closeModal();
    })
    closeBtn.addEventListener('click',() => {
        closeModal();
    })
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape'){
            closeModal();
        }
    })
    
}

function closeModal() {
    modal.style.visibility = 'hidden';
    modal.style.opacity = 0;
    modalBlock.style.cssText = 'transform: translate(-50%, -300%)';
    modalBlock.style.transition = 'transform 1s';
    modal.style.transition = 'visibility .3s, opacity .3s';
    document.body.style.overflow = 'visible';
}