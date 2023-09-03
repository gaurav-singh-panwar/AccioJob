const apiKey = 'R1I4K6ywLuR8f35bsTn4o1IxHs13igQegcW7kKW0';

const searchForm = document.getElementById('search-form');

const searchInput = document.getElementById('search-input');

const currentImageContainer = document.getElementById('current-image-container');

const searchHistory = document.getElementById('search-history');


const currentDate = new Date().toISOString().split('T')[0];


function getCurrentImageOfTheDay() {
    const currentDate = new Date().toISOString().split('T')[0];
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${currentDate}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const h2 = document.createElement('h2');
            h2.innerHTML = 'NASA Picture of the Day'; // Change the title here
            const p = document.createElement('p');
            p.innerHTML = data.explanation;
            const h4 = document.createElement('h4');
            h4.innerHTML = data.title;
            const image = document.createElement('img');
            image.src = data.url;
            image.alt = data.title;
            currentImageContainer.innerHTML = '';
            currentImageContainer.appendChild(h2);
            currentImageContainer.appendChild(image);
            currentImageContainer.appendChild(h4);
            currentImageContainer.appendChild(p);
            saveSearch(currentDate);
            addSearchToHistory();
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function getImageOfTheDay(date) {

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    fetch(url)

        .then(response => response.json())

        .then(data => {

            console.log(data)

            const h2 = document.createElement('h2');

            h2.innerHTML = `Picture On ${date}`;

            const p = document.createElement('p');

            p.innerHTML = data.explanation;

            const h4 = document.createElement('h4');

            h4.innerHTML = data.title;

            const image = document.createElement('img');

            image.src = data.url;

            image.alt = data.title;

            currentImageContainer.innerHTML = '';

            currentImageContainer.appendChild(h2);

            currentImageContainer.appendChild(image);

            currentImageContainer.appendChild(h4);

            currentImageContainer.appendChild(p);

            saveSearch(date);

            addSearchToHistory();



        })

        .catch(error => {

            console.error('Error:', error);

        });

}

const mes = (date) => {

    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`;

    fetch(url)

        .then(response => response.json())

        .then(data => {

            console.log(data)

            const h2 = document.createElement('h2');

            h2.innerHTML = `Picture On ${date}`;

            const p = document.createElement('p');

            p.innerHTML = data.explanation;

            const h4 = document.createElement('h4');

            h4.innerHTML = data.title;

            const image = document.createElement('img');

            image.src = data.url;

            image.alt = data.title;

            currentImageContainer.innerHTML = '';

            currentImageContainer.appendChild(h2);

            currentImageContainer.appendChild(image);

            currentImageContainer.appendChild(h4);

            currentImageContainer.appendChild(p);

        })

}


function saveSearch(date) {



    const currentDateNow = new Date().toISOString().split('T')[0];

    if (date !== currentDateNow) {

        const searches = JSON.parse(localStorage.getItem('searches')) || [];

        searches.push(date);

        localStorage.setItem('searches', JSON.stringify(searches));

    }

}

function addSearchToHistory() {

    searchHistory.innerHTML = '';

    const searches = JSON.parse(localStorage.getItem('searches')) || [];

    searches.forEach(date => {

        const listItem = document.createElement('li');

        listItem.textContent = date;

        listItem.addEventListener('click', () => {

            mes(date);

        });

        searchHistory.appendChild(listItem);

    });

}

searchForm.addEventListener('submit', event => {

    event.preventDefault();

    const selectedDate = searchInput.value;

    getImageOfTheDay(selectedDate);

});

getCurrentImageOfTheDay();
