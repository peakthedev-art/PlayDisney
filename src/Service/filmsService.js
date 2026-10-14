import { GetFilms } from "../Infra/filmsRepository.js"

export async function ObtenirFilms() {
    const data = await GetFilms();
    const films = data.films
    return films;
}