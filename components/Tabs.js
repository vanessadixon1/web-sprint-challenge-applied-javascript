
const tabs = document.querySelector('div.topics');

 axios.get('https://lambda-times-api.herokuapp.com/topics')
.then(response => {
    const topics =response.data.topics;
   
    topics.forEach(topic => {
        let div = document.createElement('div');
        div.classList.add('tab');
        div.textContent =`${topic}`;
        console.log(div)
        tabs.append(div)
    }) 
})
