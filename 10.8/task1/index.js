document.addEventListener('DOMContentLoaded', function () {
    let first = document.getElementById('first');
    let second = document.getElementById('second');
    let third = document.getElementById('third');

    let current = document.getElementById('current');

    first.onclick = function() {
        current.src = first.src;
    }

    second.onclick = function() {
        current.src = second.src;
    }

    third.onclick = function() {
        current.src = third.src;
    }
})
