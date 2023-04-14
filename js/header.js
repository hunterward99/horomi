let header = document.querySelector('header'),
    coordinateY = document.querySelector('.coordinateY'),
    btnServices = document.querySelector('.header__services'),
    servicesItem = document.querySelectorAll('.header__item'),
    blockSubmenu1 = document.querySelector('.header__submenu-1'),
    blockSubmenu1Active = document.querySelector('.header__submenu-1_active');
    body = document.body;

let posShowBgHeader = 390;

// Появление фона шапки при скролле вниз и исчезание при позиции окна на 290 и менее px

window.addEventListener('scroll', () => {

  if(window.scrollY <= posShowBgHeader) {
    header.style.cssText = 'background-color: none';
  } else {
    header.style.cssText = 'background-color: rgba(27,27,27, .9); box-shadow: inset 0px -3px 0px #BD6736; transition: box-shadow 1.5s, background-color 1s';
  }

});

// dropdown

document.addEventListener('click', (e) => {
      if(!blockSubmenu1.matches('.header__submenu-1_active')){
        if(btnServices.contains(e.target) || document.querySelector('.header__item-galka-bottom').contains(e.target) || servicesItem[1].contains(e.target)){
          blockSubmenu1.classList.add('header__submenu-1_active');
          header.style.cssText = 'background-color: rgba(27,27,27, .9)';
          btnServices.style.color = '#BD6736';
          document.addEventListener('scroll', () => {
            blockSubmenu1.classList.remove('header__submenu-1_active');
            btnServices.style.color = '#fff';
          })
        }
    } else {
        if(!blockSubmenu1.contains(e.target)){
                    // blockSubmenu1.style.transform = 'translateY(-5%)';
          // blockSubmenu1.style.transition = 'transform 1s';
          blockSubmenu1.classList.remove('header__submenu-1_active');
          btnServices.style.color = '#fff';

          if(window.scrollY <= posShowBgHeader) {
            header.style.cssText = 'background-color: none';
        }
        }
    }
});
