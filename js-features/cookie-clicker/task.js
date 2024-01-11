let clicks = 0;
let lastClickTime = null;
let cookieSize = 200; // начальный размер печеньки
const cookie = document.getElementById('cookie');
const clickerCounter = document.getElementById('clicker__counter');
const clickSpeedDisplay = document.createElement('div'); // элемент для отображения скорости кликов

clickSpeedDisplay.classList.add('clicker__status');
document.querySelector('.clicker').appendChild(clickSpeedDisplay);

cookie.onclick = function() {
    // Увеличение счетчика кликов
    clicks++;
    clickerCounter.innerText = clicks;

    // Изменение размера печеньки
    cookieSize = (cookieSize === 200) ? 180 : 200;
    cookie.style.width = `${cookieSize}px`;
    cookie.style.height = `${cookieSize}px`;

    // Расчет скорости кликов
    const now = new Date();
    if (lastClickTime) {
        const clickSpeed = 1 / ((now - lastClickTime) / 1000);
        clickSpeedDisplay.innerText = `Скорость кликов: ${clickSpeed.toFixed(2)} кликов в секунду`;
    }
    lastClickTime = now;
};
