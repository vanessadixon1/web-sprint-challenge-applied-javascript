// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
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
