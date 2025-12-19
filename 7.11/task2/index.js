document.addEventListener('DOMContentLoaded', function () {
    let heights = [164, 157, 160, 143, 170];
    const heightsList = document.querySelector('#studentsHeights');
    const createList = (limit) => {
        heights.forEach(height => {
            if (height >= limit) {
                let currentHeight = document.createElement('li');
                currentHeight.textContent = height;
                heightsList.append(currentHeight);
            }
        });
    }
    createList(0);

    const add = document.querySelector('.addHeight');
    add.onclick = function () {
        let newHeight = prompt('Введите рост ученика');
        if (newHeight == '') {
            alert('Рост не введён!');
        } else {
            let currentHeight = document.createElement('li');
            currentHeight.textContent = newHeight;
            heightsList.append(currentHeight);
            heights.push(newHeight);
        }
    }
    const find = document.querySelector('.filter');
    find.onclick = function () {
        let minHeight = prompt('Введите минимальный рост');
        heightsList.innerHTML = '';
        if (minHeight == "") {
            createList(0);
        } else {
            createList(minHeight);
        }
    }
})
