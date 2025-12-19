document.addEventListener('DOMContentLoaded', function () {

    const form = document.getElementById('form1'); 
    const body = document.querySelector('body');

    form.addEventListener('submit', (e) => {
        body.lastElementChild.remove();
        e.preventDefault();
        const formData = new FormData(form);

        let result = document.createElement('div');

        let h1 = document.createElement('h1');
        h1.textContent = "Результат формы";
        result.append(h1);

        let name = document.createElement('p');
        name.textContent = "Имя пользователя: " +formData.get('name');
        result.append(name);

        let email = document.createElement('p');
        email.textContent = "Email: " + formData.get('email');
        result.append(email);

        let sex = document.createElement('p');
        if (formData.get('male')) {
            sex.textContent = "Пол: Мужской";
        } else {
            sex.textContent = "Пол: Женский";
        }
        result.append(sex);

        let grade = document.createElement('p');
        grade.textContent = "Оценка сервиса: " + formData.get('grade');
        result.append(grade);

        let hobbies = document.createElement('p');
        hobbies.textContent = "Интересы пользователя: ";
        if (formData.get('feature1')) {
            hobbies.textContent += "Спорт, ";
        }
        if (formData.get('feature2')) {
            hobbies.textContent += "Музыка, ";
        }
        if (formData.get('feature3')) {
            hobbies.textContent += "Путешествия, ";
        }
        if (formData.get('feature4')) {
            hobbies.textContent += "Кино, ";
        }

        result.append(hobbies);

        let comments = document.createElement('p');
        comments.textContent = "Дополнительные комментарии " + formData.get('comments');
        result.append(comments);

        body.append(result);
    });
})
