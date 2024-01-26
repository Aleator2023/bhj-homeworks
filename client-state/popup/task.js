document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('subscribe-modal');
    const closeModalButton = document.querySelector('.modal__close');

    // Функция для проверки наличия cookie
    const getCookie = (name) => {
        const matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };

    // Проверка, было ли ранее закрыто всплывающее окно
    if (!localStorage.getItem('modalClosed')) {
        modal.classList.add('modal_active');
    }

    // Обработчик событий для закрытия модального окна
    closeModalButton.addEventListener('click', () => {
        console.log('Закрытие модального окна и установка cookie');
        modal.classList.remove('modal_active');
        localStorage.setItem('modalClosed', 'true');        
    });
});
