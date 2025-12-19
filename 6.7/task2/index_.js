document.addEventListener('DOMContentLoaded', function () {
    const values = [12, 5, 8, 20, 3, 16];
    const elements = document.querySelector('.all-elements');
    values.forEach(value => {
        elements.textContent += `${value}, `;
    });
        
    const minButton = document.querySelector('.min');
    const maxButton = document.querySelector('.max');
    const minNumber = document.querySelector('.minNumber');
    const maxNumber = document.querySelector('.maxNumber');

    minButton.onclick = function () {
        let minValue = Number.MAX_SAFE_INTEGER;
        values.forEach(value => {
            (value < minValue) ? minValue = value : 0
        });
        minNumber.textContent = minValue;
    }

    maxButton.onclick = function () {
        let maxValue = Number.MIN_SAFE_INTEGER;
        values.forEach(value => {
            (value > maxValue) ? maxValue = value : 0
        });
        maxNumber.textContent = maxValue;
    }
})