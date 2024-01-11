(() => {
    let deadCount = 0;
    let lostCount = 0;
    const maxDeadCount = 10;
    const maxLostCount = 5;

    const deadCounter = document.getElementById('dead');
    const lostCounter = document.getElementById('lost');
    
    const updateCounters = () => {
        deadCounter.textContent = deadCount;
        lostCounter.textContent = lostCount;
    };

    const resetGame = () => {
        deadCount = 0;
        lostCount = 0;
        updateCounters();
    };

    const checkGameStatus = () => {
        if (deadCount >= maxDeadCount) {
            alert('Победа! Вы убили 10 кротов.');
            resetGame();
        } else if (lostCount >= maxLostCount) {
            alert('Игра окончена. Вы допустили 5 промахов.');
            resetGame();
        }
    };

    // Получаем все лунки
    const holes = document.querySelectorAll('.hole');

    holes.forEach(hole => {
        hole.addEventListener('click', () => {
            if (hole.classList.contains('hole_has-mole')) {
                deadCount++;
            } else {
                lostCount++;
            }
            updateCounters();
            checkGameStatus();
        });
    });
})();
