import { API_KEY, BASE_URL, IMG_URL } from '../utils/http.js';
import { cE, qS } from '../utils/fn.js';

const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');

const response = await fetch(`${BASE_URL}/movie/${movieId}?${API_KEY}`);
const movie = await response.json();

const movieDetailsEl = document.getElementById('movie-details');

const titleEl = document.createElement('h1');
titleEl.textContent = movie.title;
movieDetailsEl.appendChild(titleEl);

const overviewEl = document.createElement('p');
overviewEl.textContent = movie.overview;
movieDetailsEl.appendChild(overviewEl);

const ratingEl = document.createElement('div');
ratingEl.className = 'rating';

const ratingTextEl = document.createElement('span');
ratingTextEl.className = 'rating-text';
ratingTextEl.textContent = 'Rating: ';
ratingEl.appendChild(ratingTextEl);

const maxStars = 5;
const numStars = Math.min(Math.round(movie.vote_average / 2), maxStars);

for (let i = 0; i < numStars; i++) {
    const starEl = document.createElement('span');
        starEl.className = 'star gold';
        ratingEl.appendChild(starEl);
}

for (let i = numStars; i < maxStars; i++) {
    const starEl = document.createElement('span');
        starEl.className = 'star';
        ratingEl.appendChild(starEl);
}

movieDetailsEl.appendChild(ratingEl);

const releaseDateEl = document.createElement('p');
    releaseDateEl.textContent = `Release date: ${movie.release_date}`;
    movieDetailsEl.appendChild(releaseDateEl);

const runtimeEl = document.createElement('p');
    runtimeEl.textContent = `Runtime: ${movie.runtime} minutes`;
    movieDetailsEl.appendChild(runtimeEl);

const responseVideos = await fetch(`${BASE_URL}/movie/${movieId}/videos?${API_KEY}`);
const videos = await responseVideos.json();

const trailer = videos.results.find(video => video.type === 'Trailer');
if (trailer) {
    const youtubeUrl = `https://www.youtube.com/embed/${trailer.key}`;
    const videoEl = document.createElement('iframe');
        videoEl.classList.add('iframe-trailer');
        videoEl.src = youtubeUrl;
        videoEl.setAttribute('frameborder', '0');
        videoEl.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
        videoEl.allowFullscreen = true;

    const trailerContainerEl = cE('div');
        trailerContainerEl.appendChild(videoEl);
        movieDetailsEl.insertBefore(trailerContainerEl, titleEl);
} else {
    const youtubeUrl = 'https://www.youtube.com/watch?v=NANeQiwnVEg'; // URL del video generico su YouTube
    const videoEl = document.createElement('iframe');
        videoEl.classList.add('iframe-trailer');
        videoEl.src = youtubeUrl;
        videoEl.setAttribute('frameborder', '0');
        videoEl.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
        videoEl.allowFullscreen = true;

    const trailerContainerEl = cE('div');
        trailerContainerEl.appendChild(videoEl);
        movieDetailsEl.insertBefore(trailerContainerEl, titleEl);
}

export const navToggle = document.querySelector(".navbar_toggle");
export const links = document.querySelector(".main_nav");

navToggle.addEventListener('click', function(){
    links.classList.toggle("show_nav");
});