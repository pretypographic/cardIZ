let contactButton = document.querySelector('.footer__image');
let contactCloseButton = document.querySelector('.contact__close-button');
let contactInfo = document.querySelector('.contact');

function openContact() {
    contactInfo.classList.toggle('contact_disabled');
};

contactButton.addEventListener('click', openContact);
contactCloseButton.addEventListener('click', openContact);
