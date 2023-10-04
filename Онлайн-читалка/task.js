const buttons = document.getElementsByClassName('font-size');
const book = document.getElementById('book');

function selectItem(e) {
    e.preventDefault();

    for (let button of buttons){
        button.classList.remove('font-size_active');
    }

    const buttonClick =e.currentTarget;
    buttonClick.classList.add('font-size_active');

    const size = buttonClick.dataset.size;
    book.className = 'book' + (size ? ` book_fs-${size}` : '');
}

for (let button of buttons){
    button.addEventListener('click', selectItem);
}
