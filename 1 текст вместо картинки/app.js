'use strict';

function clickHandler(clickOnButtonCard) {
    let divCard = clickOnButtonCard.target.parentNode;

    let card = {
        wrap: divCard,
        img: divCard.querySelector('img'),
        productName: divCard.querySelector('.productName'),
        button: divCard.querySelector('button'),
    };

    let buttonName = card.button.innerText;
    if (buttonName == 'Подробнее') {
        addText(card);
    } else if (buttonName == 'Назад') {
        removeText(card);
    }
}

function addText(card) {
    let text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magni illum fugit aliquid magnam sapiente quaerat? Vero ipsam debitis cumque?';
    card.img.style.display = 'none';
    card.productName.insertAdjacentHTML('afterbegin', `<p class='text'>${text}</p>`);
    card.button.innerText = 'Назад';
}

function removeText(card) {
    card.img.style.display = 'block';
    card.wrap.querySelector('.text').remove();
    card.innerText = 'Подробнее';
}

let buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', clickHandler);
});
