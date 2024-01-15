document.querySelectorAll('.rotator').forEach(rotator => {
    let currentCase = rotator.querySelector('.rotator__case_active');
    
    setInterval(() => {
        let nextCase = currentCase.nextElementSibling || rotator.firstElementChild;
        let speed = nextCase.dataset.speed || 1000; // Скорость смены
        let color = nextCase.dataset.color || 'black'; // Цвет текста

        currentCase.classList.remove('rotator__case_active');
        nextCase.classList.add('rotator__case_active');
        nextCase.style.color = color;

        currentCase = nextCase;
    }, currentCase.dataset.speed || 1000); // Установка начальной скорости
});
