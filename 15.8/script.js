let currentFilters = {
    title: '',
    genre: '',
    releaseYear: '',
    isWatched: ''
};

function handleFormSubmit(e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const genre = document.getElementById("genre").value;
  const releaseYear = document.getElementById("releaseYear").value;
  const isWatched = document.getElementById("isWatched").checked;

  const film = {
    title: title,
    genre: genre,
    releaseYear: releaseYear,
    isWatched: isWatched,
  };

  addFilm(film);
}

async function addFilm(film) {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  // films.push(film);
  // localStorage.setItem("films", JSON.stringify(films));

  // console.log(film);
  await fetch("https://sb-film.skillbox.cc/films", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: "ovikdevil@gmail.com",
    },
    body: JSON.stringify(film),
  });
  renderTable();
}

async function deleteFilm(filmId) {
  
  const response = await fetch(`https://sb-film.skillbox.cc/films/${filmId}`, {
    method: "DELETE",
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });

  if (response.ok) {
    renderTable();
  } else {
    alert("Не удалось удалить фильм. Попробуйте снова.");
  }
  
}

async function deleteAllFilms() {
  
  const response = await fetch("https://sb-film.skillbox.cc/films", {
    method: "DELETE",
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });

  if (response.ok) {
    renderTable();
  } else {
    alert("Не удалось удалить фильмы. Попробуйте снова.");
  }
}

function buildFilmsUrl() {
    const baseUrl = "https://sb-film.skillbox.cc/films";
    const params = new URLSearchParams();
    
    if (currentFilters.title.trim()) {
        params.append('title', currentFilters.title.trim());
    }
    if (currentFilters.genre.trim()) {
        params.append('genre', currentFilters.genre.trim());
    }
    if (currentFilters.releaseYear.trim()) {
        params.append('releaseYear', currentFilters.releaseYear.trim());
    }
    if (currentFilters.isWatched !== '') {
        params.append('isWatched', currentFilters.isWatched);
    }
    
    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

async function renderTable() {
  // const films = JSON.parse(localStorage.getItem("films")) || [];
  const url = buildFilmsUrl();
  const filmsResponse = await fetch(url, {
    headers: {
      email: "ovikdevil@gmail.com",
    },
  });
  const films = await filmsResponse.json();

  const filmTableBody = document.getElementById("film-tbody");

  // Clear table body first
  filmTableBody.innerHTML = "";

  // Then add new rows
  films.forEach((film) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${film.title}</td>
      <td>${film.genre}</td>
      <td>${film.releaseYear}</td>
      <td>${film.isWatched ? "Да" : "Нет"}</td>
      <td>
        <button class="delete" index="${film.id}">Удалить</button>
      </td>
    `;
    filmTableBody.appendChild(row);
  });

  attachDelete();
}

function attachDelete() {
  const deleteButtons = document.querySelectorAll(".delete");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const filmId = this.getAttribute("index");
      deleteFilm(filmId);
    });
  });
}

function updateFilters() {
    currentFilters = {
        title: document.getElementById("filter-title").value,
        genre: document.getElementById("filter-genre").value,
        releaseYear: document.getElementById("filter-year").value,
        isWatched: document.getElementById("filter-watched").value
    };

    renderTable();
}



document
  .getElementById("film-form")
  .addEventListener("submit", handleFormSubmit);

document.getElementById("delete-all").addEventListener("click", deleteAllFilms);

document.getElementById("filter-title").addEventListener("input", updateFilters);
document.getElementById("filter-genre").addEventListener("input", updateFilters);
document.getElementById("filter-year").addEventListener("input", updateFilters);
document.getElementById("filter-watched").addEventListener("change", updateFilters);

// Display films on load
renderTable();
