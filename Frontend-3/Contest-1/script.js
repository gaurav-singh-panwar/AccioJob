const apiKey = "b5f5bb48";

const apiKeyInput = document.getElementById("api-key");
const movieTitleInput = document.getElementById("movie-title");
const searchButton = document.getElementById("search-logo"); // Change to search-logo
const loader = document.getElementById("loader");
const errorContainer = document.getElementById("error");
const resultsContainer = document.getElementById("results");

document.addEventListener("DOMContentLoaded", function () {
    searchButton.addEventListener("click", searchMovies); // Add click event to search logo
});

function searchMovies() {
    const movieTitle = movieTitleInput.value;

    if (!movieTitle) {
        showError("Please provide a movie title.");
        return;
    }

    loader.style.display = "block";
    errorContainer.textContent = "";
    resultsContainer.innerHTML = "";

    fetch(`https://www.omdbapi.com/?s=${movieTitle}&apikey=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            loader.style.display = "none";
            if (data.Response === "True") {
                displayMovies(data.Search);
            } else {
                showError(data.Error);
            }
        })
        .catch((error) => {
            loader.style.display = "none";
            showError("An error occurred. Please try again later.");
        });
}

function displayMovies(movies) {
    movies.forEach((movie) => {
        const card = document.createElement("div");
        card.classList.add("movie-card");

        const poster = movie.Poster !== "N/A" ? movie.Poster : "no-poster.jpg";

        card.innerHTML = `
            <img src="${poster}" alt="${movie.Title} Poster">
            <h3>${movie.Title} (${movie.Year})</h3>
            <p>Rated: ${movie.Rated}</p>
            <p>Runtime: ${movie.Runtime}</p>
            <p>Genre: ${movie.Genre}</p>
            <p>Director: ${movie.Director}</p>
            <p>Actors: ${movie.Actors}</p>
            <p>Plot: ${movie.Plot}</p>
            <a class="imdb-link" href="https://www.imdb.com/title/${movie.imdbID}" target="_blank">More Details</a>
        `;

        resultsContainer.appendChild(card);
    });
}

function showError(message) {
    errorContainer.textContent = message;
}
