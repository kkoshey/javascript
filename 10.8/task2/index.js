document.addEventListener('DOMContentLoaded', function () {
    const elementsList = document.querySelector('#elements');

    const add = document.querySelector('.add');
    add.onclick = function () {
        let newElement = document.createElement('li');
        newElement.textContent = 'Новый элемент списка';
        elementsList.append(newElement);
    }

    const remove = document.querySelector('.remove');
    remove.onclick = function () {
        if (elementsList.lastElementChild.remove()) {
            elementsList.lastElementChild.remove();
        };
    }
})
