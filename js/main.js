let p = document.getElementById('text');

let textLists = [
    'Hello World',
    'This is a pen',
    'How are you?',
    'Hello JavaScript'
];
let checkTexts = [];

createText();

function createText() {
    let rand = Math.floor(Math.random() * textLists.length);

    p.textContent = '';

    checkTexts = textLists[rand].split('').map(function(value) {
        let span = document.createElement('span');
    
        span.textContent = value;
        p.appendChild(span);
    
        return span;
    });
}


console.log(checkTexts);

document.addEventListener('keydown', e => {
    if (e.key === checkTexts[0].textContent) {
        checkTexts[0].classList.add('add-blue');

        checkTexts.shift();

        if (!checkTexts.length) {
            createText();
        }
    } 
});