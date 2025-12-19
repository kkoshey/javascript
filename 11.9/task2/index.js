document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form1'); 
    const table = document.querySelector('tbody');


    form.addEventListener('submit', (e) => {
        let tr = document.createElement('tr');

        e.preventDefault();
        const formData = new FormData(form);

        const name = formData.get('name');
        const weight = formData.get('weight');
        const range = formData.get('range');
        const warn = document.querySelector('.warning');

        if (weight < 0 || range < 0) {
            warn.textContent = "Пожалуйста, введите корректные значения для веса и расстояния";
        } else {
            warn.textContent = '';
            let td = document.createElement('td');
            td.textContent = name;
            tr.append(td);
            
            td = document.createElement('td');
            td.textContent = weight;
            tr.append(td);

            td = document.createElement('td');
            td.textContent = range;
            tr.append(td);

            td = document.createElement('td');
            td.textContent = weight*range/10;
            tr.append(td);

            table.append(tr);
        }
    });
})
