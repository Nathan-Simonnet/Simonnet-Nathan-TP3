// (https://github.com/A3lfyr/kaamelott-api)

const here = document.getElementById('here');
const quoteContainer = document.querySelector('.quote-container');

const quoteDisplayer = function (data) {

    const randomNumber = Math.floor(Math.random() * data.length)
    console.log(randomNumber)
    quoteContainer.innerHTML =
        `
    <p>Personnage: ${data[randomNumber].infos.personnage}</p>
    <p>Citation: ${data[randomNumber].citation}</p>
    
    `
}

const quoteFetcher = function () {
    fetch('https://kaamelott.reiter.tf/quotes')
        .then(response => response.json())
        .then(data => {
            quoteDisplayer(data);
        });
}

here.addEventListener('click', () => {
    quoteFetcher();
});