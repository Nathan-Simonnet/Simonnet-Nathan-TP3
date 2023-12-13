console.log("regions")
// (https://geo.api.gouv.fr/decoupage-administratif)


const container = document.querySelector('.container');
const regions = document.getElementById('regions-selector');
const departements = document.getElementById('departements-selector');

let dataRegions = "";
let dataDepartements = "";

const RegionsDisplayer = (data) => {
    for (let i = 0; i < data.length; i++) {
        regions.innerHTML +=
            `<option value="${data[i].nom}" class="region">${data[i].nom}</option>`
    }
}

const departementsDisplayer = (data) => {
    for (let i = 0; i < data.length; i++) {
        departements.innerHTML +=
            `<option value="${data[i].nom}" class="region">${data[i].nom}</option>`
    }
}

const regionsFetcher = () => {
    fetch('https://geo.api.gouv.fr/regions')
        .then((response) => response.json())
        .then((data) => RegionsDisplayer(data))
        .catch((error) => console.log(data))
}

regionsFetcher();

const departementsFetcher = () => {
    fetch('https://geo.api.gouv.fr/departements')
        .then((response) => response.json())
        .then((data) => departementsDisplayer(data))
        .catch((error) => console.log(data))
}

departementsFetcher()
















