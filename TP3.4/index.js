console.log("pokemooon")
// https://pokeapi.co/docs/v2

pokemonDisplayer = function (data) {
    console.log(data)
    for (let i = 0; i < data.length; i++) {

        document.querySelector('.pokemon-container').innerHTML +=
            `
            <p>Name: ${data[i].name}</p>
            `
    }
}

pokemonFetcher = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=200")
        .then((response) => response.json())
        .then((data) => pokemonDisplayer(data.results))
}
pokemonFetcher()