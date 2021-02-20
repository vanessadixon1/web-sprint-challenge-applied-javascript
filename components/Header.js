
let headerContainer = document.querySelector('.header-container');

function Header() {
    const div = document.createElement('div');
    div.classList.add('header');

    const span = document.createElement('span');
    span.textContent = 'March 28, 2020';
    span.classList.add('date');

    const h1 = document.createElement('h1');
    h1.textContent = 'Lambda Times';

    const span2 = document.createElement('span');
    span2.classList.add('temp');

    div.append(span,h1,span2);
    return div;
}

headerContainer.append(Header());
