const videoCardContainer = document.querySelector('.video-container');
let api_key = "AIzaSyAhmARvLkh01tDGiMzs7wxAe6RjFfz-F90";
let video_http = "https://www.googleapis.com/youtube/v3/videos?";
let regionCode = 'IN';
let maxResults = 50;

fetch(video_http + new URLSearchParams({
    key: api_key,
    part: 'snippet',
    maxResults: maxResults,
    regionCode: regionCode
}))
    .then(res => res.json())
    .then(data => {
        data.items.forEach(item => {
            getChannelIcon(item);
        });
    })
    .catch(err => console.log(err));

const getChannelIcon = (video_data) => {
    fetch(channel_http + new URLSearchParams({
        key: api_key,
        part: 'snippet',
        id: video_data.snippet.channelId
    }))
        .then(res => res.json())
        .then(data => {
            video_data.channelThumbnail = data.items[0].snippet.thumbnails.default.url;
            makeVideoCard(video_data);
        });
};

const makeVideoCard = (data) => {
    videoCardContainer.innerHTML += `
    <div class="video" onclick="location.href = 'https://youtube.com/watch?v=${data.id}'">
        <img src="${data.snippet.thumbnails.high.url}" class="thumbnail" alt="">
        <div class="content">
            <img src="${data.channelThumbnail}" class="channel-icon" alt="">
            <div class="info">
                <h4 class="title">${data.snippet.title}</h4>
                <p class="channel-name">${data.snippet.channelTitle}</p>
            </div>
        </div>
    </div>
    `;
};

const searchInput = document.querySelector('.search-bar');
const searchBtn = document.querySelector('.search-btn');
let searchLink = "https://www.youtube.com/results?search_query=";

searchBtn.addEventListener('click', () => {
    if (searchInput.value.length) {
        location.href = searchLink + searchInput.value;
    }
});

// Add the following code to toggle sidebar and container size
let menuIcon = document.querySelector(".toggle-btn");
let sidebar = document.querySelector(".side-bar");
let container = document.querySelector(".video-container");

menuIcon.onclick = function () {
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
};