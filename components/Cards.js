    const cardsContainer = document.querySelector('.cards-container');


    function articleCard(articleObj) {
        const div = document.createElement('div');
        div.classList.add('card');
        const div2 = document.createElement('div');
        div2.classList.add('headline');
        div2.textContent = `${articleObj.headline}`;
        const div3 = document.createElement('div');
        div3.classList.add('author');

        const div4 = document.createElement('div');
        div4.classList.add('img-container');

        const img = document.createElement('img');
        img.setAttribute('src', `${articleObj.authorPhoto}`);

        const span = document.createElement('span');
        span.textContent = `By ${articleObj.authorName}`;

        div.append(div2,div3,div4,span);
        div3.append(div4);
        div4.append(img);

        div.addEventListener('click', function() {
            console.log(`${articleObj.headline}`)
        })
        return div;
    }

    const arr = ["javascript", "bootstrap", "technology", "jquery", "node"];

    axios.get('https://lambda-times-api.herokuapp.com/articles')
    .then(response => {

        arr.forEach(topic => {
            response.data.articles[topic].forEach(item => {
                const div = articleCard(item);
            cardsContainer.append(div);
            })
        })
    })
