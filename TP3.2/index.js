// (https://geo.api.gouv.fr/decoupage-administratif)

// store the city of the current departement
let dataCity = "";

const container = document.querySelector('.container');
const regions = document.getElementById('regions-selector');
const departements = document.getElementById('departements-selector');
const cityBtn = document.getElementById('city-btn');
const cityContainer = document.querySelector('.city-container');


// display the regions in a select
const RegionsDisplayer = (data) => {
    for (let i = 0; i < data.length; i++) {
        regions.innerHTML +=
            `<option value="${data[i].code}" class="region"
            >${data[i].nom}</option>`
    }
}

// display the departements in a select
const departementsDisplayer = (data) => {
    departements.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        departements.innerHTML +=
            `<option value="${data[i].code}" class="departement">${data[i].nom}</option>`
    }
}

// display the city below the button
const cityDisplayer = (data) => {
    console.log(data)
    cityContainer.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
        cityContainer.innerHTML +=
            `<p class="city">${data[i].nom}</p>`
    }
}

// Fetch all regions of my beloved France
const regionsFetcher = () => {
    fetch('https://geo.api.gouv.fr/regions')
        .then((response) => response.json())
        .then((data) => RegionsDisplayer(data))
        .catch((error) => console.log(error))
}

//Ftech the departements of  1 region 
const departementsFetcher = (region) => {
    fetch('https://geo.api.gouv.fr/regions/' + region + '/departements')
        .then((response) => response.json())
        .then((data) => departementsDisplayer(data))
        .catch((error) => console.log(error))
}

//Ftech the cities of  1 departement 
const cityFetcher = (departement) => {
    fetch('https://geo.api.gouv.fr/departements/' + departement + '/communes')
        .then((response) => response.json())
        .then((data) => dataCity = data)
        .catch((error) => console.log(error))
}
// automatic display
window.addEventListener('load', () => {
    regionsFetcher();
    departementsFetcher(11);
    cityFetcher(75);
});

// if a region is selmected, fetch the departements
regions.addEventListener('change', () => {
    const selectedOption = regions.options[regions.selectedIndex];
    departementsFetcher(selectedOption.value)
});

// If a departement is selected, store the city in an array
departements.addEventListener('change', () => {
    const selectedOption = departements.options[departements.selectedIndex];
    console.log(selectedOption.value)
    cityFetcher(selectedOption.value)
});


// setimeout for the fetch, and then allow to displays the cities
setTimeout(() => {
    cityBtn.addEventListener('click', () => {
        cityDisplayer(dataCity)
    });
}, 1000)


