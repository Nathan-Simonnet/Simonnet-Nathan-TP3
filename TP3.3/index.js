console.log("gouv")
// [Documentation API](https://adresse.data.gouv.fr/api-doc/adresse)
// [Géolocalisation](https://developer.mozilla.org/fr/docs/Web/API/Geolocation_API)

fetch('https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast')
    .then((response) => response.json())
    .then((data) => console.log(data))
























