
export async function GetFilms() {
    try {
        const response = await fetch("../../data/films.json");
        const data = await response.json();
        return data;
    }
    catch(error) {
        console.log("Error : " + error.message)
    }
}