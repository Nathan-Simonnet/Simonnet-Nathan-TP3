console.log("kaamelot")
// (https://github.com/A3lfyr/kaamelott-api)

fetch('https://kaamelott.reiter.tf/quotes').then(response => response.json()).then(response => {
    console.log(response);
});