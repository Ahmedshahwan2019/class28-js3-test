'use strict';
const movieAPI = `http://www.omdbapi.com/?t=${title}&apikey=e6a3e2df`;
async function main() {
    const response = await fetch(movieAPI);
    const data = await response.json();

    createMovieList(data);
}
main();

function createMovieList(data) {
    const title = data.Title;
    const img = data.Poster;
    const plot = data.Plot;
    const selector = document.getElementById('selector');
    selector.addEventListener('change', function(e) {
        if (e.target.value === option.name) {
            const display = document.getElementById('display');
            display.innerHTML = `
    <h1>${title}</h1>
    <img src ='${img}' alt=''>
    <p>${plot}</p>
    `;
        }
    });
}