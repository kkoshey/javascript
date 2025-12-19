document.addEventListener('DOMContentLoaded', function () {
    let products = ['Арбуз', 'Книга', 'Макароны', 'Яблоки'];
    const productsList = document.querySelector('#products');
    const createList = () => {
        products.forEach(product => {
            let currentProduct = document.createElement('li');
            currentProduct.textContent = product;
            productsList.append(currentProduct);
        });
    }
    createList();

    const add = document.querySelector('.addProduct');
    add.onclick = function () {
        let newProduct = prompt('Введите название товара');
        if (newProduct == '') {
            alert('Название товара не введено!');
        } else {
            let currentProduct = document.createElement('li');
            currentProduct.textContent = newProduct;
            productsList.append(currentProduct);
            products.push(newProduct);
        }
        productsList.innerHTML = '';
        products.sort();
        createList();
    }
})
