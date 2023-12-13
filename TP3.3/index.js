
const geoContainer = document.querySelector('.geo-container');

// properties.label

todoDisplayer = (data) => {
    console.log(data)
    geoContainer.innerHTML +=
        `
        <p>Ville: ${data[0].nom}</p>
        <p>Population: ${data[0].population}</p>
        <p>Code postaux: ${data[0].codesPostaux}</p>
        <button id="lol">Click here for more</button>
        `
    document.getElementById('lol').addEventListener('click', () => {
        document.getElementById('lol').textContent = "non"
    });
}

adressDisplayer = (data) => {
    console.log(data)
    geoContainer.innerHTML +=
        `
        <p>Adresse: ${data.properties.label}</p>
        `
    console.log(data.properties.postcode)
    todofetcher(data.properties.postcode)

}

todofetcher = (code) => {
    fetch('https://geo.api.gouv.fr/communes?codePostal=' + code)
        .then((response) => response.json())
        .then((data) => todoDisplayer(data))

}

adressFetcher = (lat, lon) => {
    fetch('https://api-adresse.data.gouv.fr/reverse/?lon=' + lon + '&lat=' + lat)
        // fetch('https://api-adresse.data.gouv.fr/reverse/?lon=2.37&lat=48.357')
        // fetch('https://api-adresse.data.gouv.fr/reverse/?lon=2.37&lat=48.357&type=street')
        .then((response) => (response.json()))
        .then((data) =>
            adressDisplayer(data.features[0]))

}

geolocDispalyer = (Lattitude, longitude) => {

    geoContainer.innerHTML =
        `
<p>Lattitude:  ${Lattitude}</p> 
<p>longitude:  ${longitude}</p>
`
}

function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    geolocDispalyer(latitude, longitude)
    adressFetcher(latitude, longitude)
    // todoFetcher(latitude, longitude)
}

document.getElementById('go').addEventListener('click', () => {
    getUserLocation()
});








