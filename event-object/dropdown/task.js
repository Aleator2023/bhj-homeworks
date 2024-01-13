document.addEventListener("DOMContentLoaded", () => {
    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        const valueElement = dropdown.querySelector('.dropdown__value');
        const list = dropdown.querySelector('.dropdown__list');
        const items = dropdown.querySelectorAll('.dropdown__item');

        valueElement.addEventListener('click', () => {
            list.classList.toggle('dropdown__list_active');
        });

        items.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                valueElement.textContent = item.textContent;
                list.classList.remove('dropdown__list_active');
            });
        });
    });
});

