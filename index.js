// переключатель меню
const toggler = document.querySelector('.toggler');

// при изменении размера окна скрыть меню
window.addEventListener('resize', () => toggler.checked = false);

// при клике по ссылкам меню скрывать меню
const itemNavMenu = document.querySelectorAll('.nav__link');
Array.from(itemNavMenu).forEach( link => {
    link.addEventListener('click', () => handleItemNavLink(link) )
});

// при клике по ссылкам меню-гамбургера также скрывать меню
const itemHamburgerMenu = document.querySelectorAll('.menu-hamburger__item');
Array.from(itemHamburgerMenu).forEach( link => {
    link.addEventListener('click', () => toggler.checked = false)
});

const handleItemNavLink = (selectedLink) => {
    Array.from(itemNavMenu).forEach( link => link.classList.remove('nav__link_active') );
    selectedLink.classList.add('nav__link_active')
};