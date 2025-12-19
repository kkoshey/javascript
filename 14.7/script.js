let isEditMode = false;
let currentEditIndex = null;

function handleFormSubmit(e) {
    e.preventDefault();
    
    const title = document.querySelector('#title').value;
    const genre = document.querySelector('#genre').value;
    const releaseYear = document.querySelector('#releaseYear').value;
    const isWatched = document.querySelector('#isWatched').checked;

    const film = {
        title,
        genre,
        releaseYear,
        isWatched
    }

    if (isEditMode) {
        updateFilmInLocalStorage(currentEditIndex, film);
        isEditMode = false;
        currentEditIndex = null;
        document.querySelector("#submit").textContent = "Добавить";
    } else {
        addFilmToLocalStorage(film);
    }
}

function addFilmToLocalStorage(film) {
    const films = JSON.parse(localStorage.getItem('films')) || [];
    films.push(film);
    localStorage.setItem('films', JSON.stringify(films));

    renderTable();
}

function updateFilmInLocalStorage(index, updatedFilm) {
    const films = JSON.parse(localStorage.getItem("films")) || [];
    if (films[index]) {
        films[index] = updatedFilm;
        localStorage.setItem("films", JSON.stringify(films));
        renderTable();
    }
}

function removeFilmFromLocalStorage(index) {
    const films = JSON.parse(localStorage.getItem("films")) || [];
    films.splice(index, 1); 
    localStorage.setItem("films", JSON.stringify(films));
    renderTable(); 
}

function renderTable() {
    const sortedFilms = getSortedFilms();

    const filmTableBody = document.querySelector('#film-tbody');

    filmTableBody.innerHTML = "";

    sortedFilms.forEach((film, index) => {
        const row = document.createElement('tr');

        

        row.innerHTML = `
            <td>${film.title}</td>
            <td>${film.genre}</td>
            <td>${film.releaseYear}</td>
            <td>${film.isWatched ? "Да" : "Нет"}</td>
            <td>
                <button class="edit" index="${index}">Редактировать</button>
                <button class="delete" index="${index}">Удалить</button>
            </td>
        `;

        filmTableBody.appendChild(row);
    });

    attachEvents();
}

function attachEvents() {
    const deleteButtons = document.querySelectorAll(".delete");
    deleteButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const index = this.getAttribute("index");
            removeFilmFromLocalStorage(parseInt(index));
        });
    });

    const editButtons = document.querySelectorAll(".edit");
    editButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const index = parseInt(this.getAttribute("index"));
            enterEditMode(index);
        });
    });
}

function enterEditMode(index) {
    const films = JSON.parse(localStorage.getItem("films")) || [];
    const film = films[index];

    if (!film) return;

    document.querySelector("#title").value = film.title;
    document.querySelector("#genre").value = film.genre;
    document.querySelector("#releaseYear").value = film.releaseYear;
    document.querySelector("#isWatched").checked = film.isWatched;

    isEditMode = true;
    currentEditIndex = index;
    document.querySelector("#submit").textContent = "Обновить";
}

function getSortedFilms() {
    const films = JSON.parse(localStorage.getItem("films")) || [];
    const sortSelect = document.querySelector("#sort-select");
    const sortValue = sortSelect.value;
  
    const filmsCopy = [...films];
  
    switch(sortValue) {
        case 'title-asc':
            return filmsCopy.sort((a, b) => a.title.localeCompare(b.title));
        case 'genre-asc':
            return filmsCopy.sort((a, b) => a.genre.localeCompare(b.genre));
        case 'year-asc':
            return filmsCopy.sort((a, b) => {
                const yearA = parseInt(a.releaseYear) || 0;
                const yearB = parseInt(b.releaseYear) || 0;
                return yearA - yearB;
            });
        default:
            return films;
    }
}

document.querySelector("#sort-select").addEventListener("change", function() {
    renderTable();
});

document.querySelector('#film-form').addEventListener('submit', handleFormSubmit);

renderTable();