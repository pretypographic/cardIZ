let next = document.querySelector('.button-next');
let back = document.querySelector('.button-back');
let close = document.querySelector('.button-close');
let images = document.querySelectorAll('.image');
let i = 0;
let image = images[i];
maxi = images.length - 2;
console.log(maxi);

function nextImage() {
    if (i <= maxi) {
        let image = images[i];
        image.classList.add('image_disabled');
        i = i + 1;
        show();
    } else {
        document.location.href = './index.html';
    }    
};

function backImage() {
    if (i >= 1) {
        let image = images[i];
        image.classList.add('image_disabled');
        i = i - 1;
        show();
    } else {
        document.location.href = './index.html';
    }
};

function show() {
    let image = images[i];
    image.classList.remove('image_disabled');
};

function closeImages() {
    document.location.href = './index.html';
}

next.addEventListener('click', nextImage);
back.addEventListener('click', backImage);
close.addEventListener('click', closeImages);