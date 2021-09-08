const APIURL = 
    "https://api.themoviedb.org/3/movie/now_playing?api_key=0c96e3e0bf84ab754a8547fdff224572&language=fr&page=&region=fr";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=0c96e3e0bf84ab754a8547fdff224572&language=fr&query=";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// initially get fav movies
getMovies(APIURL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();

    console.log(respData);

    showMovies(respData.results);
}

function showMovies(movies) {
    // clear main
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { poster_path, title, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("bibli_movie");

        movieEl.innerHTML = `
            <img
                src="${IMGPATH + poster_path}"
                alt="${title}"
            />
            <a href="${'#'}"><div class="bibli_info">
                <h3>${title}</h3>
                <h4>Note : <span class="${getClassByRate(
                    vote_average
                )}">${vote_average}</span></h4>
                <h4>Genres</h4>
                <h4>Tagline</h4>
            </div></a>
        `;

        main.appendChild(movieEl);
    });
}

function getClassByRate(vote) {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 5) {
        return "orange";
    } else {
        return "red";
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm) {
        getMovies(SEARCHAPI + searchTerm);

        search.value = "";
        
    }
});