document.addEventListener('DOMContentLoaded', function() {
    const giftArr = [
    {
        title: "Скидка 20% на первую покупку в нашем магазине!",
        icon: "/img/discount.svg"
    },
    {
        title: "Скидка 10% на всё!",
        icon: "/img/discount_2.svg"
    },
    {
        title: "Подарок при первой покупке в нашем магазине!",
        icon: "/img/gift.svg"
    },
    {
        title: "Бесплатная доставка для вас!",
        icon: "/img/delivery.svg"
    },
    {
        title: "Сегодня день больших скидок!",
        icon: "/img/discount_3.svg"
    }]

    const popup = document.getElementById('popup');
    const claim = document.getElementById('claim');
    const h2 = document.querySelector('h2');
    let random = Math.floor(Math.random()*100%5);
    h2.textContent = giftArr[random].title;

    const icon = document.querySelector('img');
    icon.src = giftArr[random].icon;

    setTimeout(() => {
        popup.style.display = 'flex';
    }, 3000);

    claim.addEventListener('click', () => {
        popup.remove();
    });
});
