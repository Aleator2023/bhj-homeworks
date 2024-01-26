document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signin__form');
    const signin = document.getElementById('signin');
    const welcome = document.getElementById('welcome');
    const userIdSpan = document.getElementById('user_id');

    const checkAuth = () => {
        const userId = localStorage.getItem('user_id');
        if (userId) {
            userIdSpan.textContent = userId;
            welcome.classList.add('welcome_active');
            signin.classList.remove('signin_active');
        }
    };

    form.addEventListener('submit', event => {
        event.preventDefault();
        const formData = new FormData(form);
        
        fetch('https://students.netoservices.ru/nestjs-backend/auth', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                localStorage.setItem('user_id', data.user_id);
                checkAuth();
            } else {
                alert('Неверный логин/пароль');
            }
        })
        .catch(error => {
            console.error('Ошибка:', error);
        });
    });

    checkAuth();
});
