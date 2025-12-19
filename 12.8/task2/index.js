document.addEventListener('DOMContentLoaded', function() {
    
    function getCookie() {
        return document.cookie.split('; ').reduce((acc, item) => {
            const [name, value] = item.split('=')
            acc[name] = value
            return acc
        }, {})
    }
    const cookie = getCookie()
    
    const popup = document.getElementById('popup');
    const claim = document.getElementById('claim');
    const content = document.querySelector('.content');

    const promocodeObj = {
        promocode: "PROM50",
        gift: "Скидка 50%"
    }

    popup.style.display = 'flex';

    let isCorrect = document.createElement('p');
    let promo = document.getElementById('promo');

    if (cookie.active) {
        isCorrect.textContent = "Промокод применён. Скидка 50%";
        content.append(isCorrect);
        promo.value = promocodeObj.promocode;
    }

    claim.addEventListener('click', () => {
        if (promo.value == promocodeObj.promocode) {
            isCorrect.textContent = "Промокод применён. Скидка 50%";
            content.append(isCorrect);
            document.cookie = 'active=true'
        } else {
            location.reload();
        }
    });
});
