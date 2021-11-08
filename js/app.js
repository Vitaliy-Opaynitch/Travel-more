'use strict'

function getBurger() {
    const btn = document.querySelector('#btn');
    const menu = document.querySelector('#menu-list');

    btn.classList.toggle('active');
    menu.classList.toggle('active');
}

const links = document.querySelectorAll('a[href^="#"]');
for (let link of links) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const id = link.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};