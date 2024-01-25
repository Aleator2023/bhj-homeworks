document.addEventListener('DOMContentLoaded', () => {
    const loader = document.getElementById('loader');
    const itemsContainer = document.getElementById('items');

    // Функция для получения и отображения курсов валют
    const fetchCurrencyData = async () => {
        try {
            const response = await fetch('https://students.netoservices.ru/nestjs-backend/slow-get-courses');
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.statusText}`);
            }
            const data = await response.json();
            displayCurrencyData(data.response.Valute);
            // Кэширование данных
            localStorage.setItem('currencyData', JSON.stringify(data.response.Valute));
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        } finally {
            loader.classList.remove('loader_active');
        }
    };

    // Функция для отображения данных о валютах
    const displayCurrencyData = (currencyData) => {
        itemsContainer.innerHTML = ''; // Очистка предыдущих данных
        for (const [_, currency] of Object.entries(currencyData)) {
            const currencyElement = document.createElement('div');
            currencyElement.classList.add('item');
            currencyElement.innerHTML = `
                <div class="item__code">${currency.CharCode}</div>
                <div class="item__value">${currency.Value}</div>
                <div class="item__currency">руб.</div>
            `;
            itemsContainer.appendChild(currencyElement);
        }
    };

    // Попытка загрузить данные из кэша
    const cachedData = localStorage.getItem('currencyData');
    if (cachedData) {
        displayCurrencyData(JSON.parse(cachedData));
    }

    // Загрузка актуальных данных
    fetchCurrencyData();
});
