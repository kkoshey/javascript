document.addEventListener('DOMContentLoaded', function () {
    let numbers = [100, 500, 750, 300, 250];
    const numbersList = document.querySelector('#elements');
    const createList = () => {
        numbers.forEach(number => {
            let currentNumber = document.createElement('li');
            currentNumber.textContent = number;
            numbersList.append(currentNumber);
        });
    }
    createList();

    const sort = document.querySelector('.sort');
    sort.onclick = function () {
        numbers.sort();
        numbersList.innerHTML = '';
        createList();
    }

    const sortDesc = document.querySelector('.sortDesc');
    sortDesc.onclick = function () {
        numbers.sort((a, b) => b - a);
        numbersList.innerHTML = '';
        createList();
    }
})
