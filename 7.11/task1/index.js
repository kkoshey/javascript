document.addEventListener('DOMContentLoaded', function () {
    let books = ['Мастер и маргарита', 'Гарри Поттер', 'Над пропастью во ржи', 'Властелин колец', 'Отцы и дети'];
    const bookList = document.querySelector('#bookList');
    books.forEach(book => {
        let currentBook = document.createElement('li');
        currentBook.textContent = book;
        bookList.append(currentBook);
    });
    const add = document.querySelector('.addBook');
    add.onclick = function () {
        let newBook = prompt('Введите название книги');
        if (newBook == '') {
            alert('Название книги не введено!');
        } else {
            let currentBook = document.createElement('li');
            currentBook.textContent = newBook;
            bookList.append(currentBook);
            books.push(newBook);
        }
    }
    const find = document.querySelector('.findBook');
    find.onclick = function () {
        let findBook = prompt('Введите название книги');
        let index = books.indexOf(findBook);
        let allBooks = document.querySelectorAll('ol li');
        allBooks.forEach(book => {
            book.classList = '';
        });
        if (index == -1) {
            alert('Книга не найдена!');
        } else {
            let allBooks = document.querySelectorAll('ol li');
            allBooks[index].classList.add('founded');
        }
    }
})
