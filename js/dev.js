let dev = document.querySelector('.dev');
let devBg = document.querySelector('.dev__bg');
let closeBtn = document.querySelector('.dev__button-close');
let devBlock = document.querySelector('.dev__block');

document.addEventListener('DOMContentLoaded', () => {
    showdev(); 
});


export default function showdev() {
    // dev.style.cssText = 'visibility: visible; opacity: 1; transition: visibility 1s, opacity 1s';
    dev.style.visibility = 'visible';
    dev.style.opacity = 1;
    devBlock.style.cssText = 'transform: translate(-50%, -50%)';
    dev.style.transition = 'visibility .7s, opacity .7s';
    devBlock.style.transition = 'transform 1s';
    document.body.style.overflow = 'hidden';

    // devBlock.style.cssText = 'transform: translateY(100%)';

    devBg.addEventListener('click', () => {
        closedev();
    })
    closeBtn.addEventListener('click',() => {
        closedev();
    })
    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape'){
            closedev();
        }
    })
    
}

function closedev() {
    dev.style.visibility = 'hidden';
    dev.style.opacity = 0;
    devBlock.style.cssText = 'transform: translate(-80%, -50%)';
    devBlock.style.transition = 'transform 1s';
    dev.style.transition = 'visibility .3s, opacity .3s';
    document.body.style.overflow = 'visible';
}