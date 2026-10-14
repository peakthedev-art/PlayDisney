import { ObtenirFilms } from "../Service/filmsService.js";


document.addEventListener('DOMContentLoaded', (event) => {
    
});



async function GETfilms() {
    const films = await ObtenirFilms();
    const container = document.getElementById("container");

    films.forEach(element => {
        container.insertAdjacentHTML(
            "beforeend",
            `${element.name} -> ${element.year}<br>`);
    });
    
}