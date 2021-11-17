/* 
1. Получите ссылку на .text, например с помощью querySelector
2. Получите коллекцию, в которой хранятся все .nav-link, например с помощью querySelectorAll
    2.1 Переберите полученную коллекцию, например с помощью forEach, и каждой ссылке назначьте
    обработчик клика функцию clickHandler.
*/


'use strict';

const TEXTS = {
    text1: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
    text2: 'Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.',
    text3: 'Проснувшись однажды утром после беспокойного сна, Грегор Замза обнаружил.'
};

function clickHandling(event) {
    classUpdate(event);
    textUpdate(event);
}

function classUpdate(event) {
    document.querySelector('.active').classList.remove('active');
    event.target.classList.add('active');
}

function textUpdate(event) {
    switch (event.target.textContent) {
        case "Link 1":
            text.textContent = TEXTS.text1;
            break;
        case "Link 2":
            text.textContent = TEXTS.text2;
            break;
        case "Link 3":
            text.textContent = TEXTS.text3;
            break;
    }
}

let navItems = document.querySelectorAll('.nav-item');
let text = document.querySelector('.text');

navItems.forEach(navItem => navItem.addEventListener('click', clickHandling));
