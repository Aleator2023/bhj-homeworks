var seconds = 60;

function updateTimer() {
    var hours = Math.floor(seconds / 3600);
    var minutes = Math.floor((seconds - (hours * 3600)) / 60);
    var remainingSeconds = seconds % 60;

    function addLeadingZero(n) {
        return (n < 10 ? "0" : "") + n;
    }

    var formattedTime = addLeadingZero(hours) + ":" + addLeadingZero(minutes) + ":" + addLeadingZero(remainingSeconds);
    document.getElementById('timer').innerText = formattedTime;

    if (seconds <= 0) {
        clearInterval(countdownTimer);
        alert('Вы победили в конкурсе!');
    } else {
        seconds--;
    }
}

var countdownTimer = setInterval(updateTimer, 1000);
