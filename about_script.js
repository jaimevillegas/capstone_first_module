const navMenu = document.getElementById('modal-menu');
const open = document.getElementById('open-modal-menu');
const close = document.getElementById('close-modal-menu');

function mobileMenuDisplayNone() {
    navMenu.style.display = 'none';
}

function mobileMenuDisplayBlock() {
    navMenu.style.display = 'block';
}

open.addEventListener('click', (() => { mobileMenuDisplayBlock(); }));
close.addEventListener('click', (() => { mobileMenuDisplayNone(); }));
