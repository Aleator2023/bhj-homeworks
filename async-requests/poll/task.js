document.addEventListener('DOMContentLoaded', () => {
    const fetchPollData = async () => {
        try {
            const response = await fetch('https://students.netoservices.ru/nestjs-backend/poll');
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.statusText}`);
            }
            const pollData = await response.json();
            displayPoll(pollData.data);
        } catch (error) {
            console.error('Ошибка при получении данных:', error);
        }
    };

    const displayPoll = (data) => {
        const pollTitle = document.getElementById('poll__title');
        const pollAnswers = document.getElementById('poll__answers');

        pollTitle.textContent = data.title;
        pollAnswers.innerHTML = ''; 
        
        data.answers.forEach(answer => {
            const answerButton = document.createElement('button');
            answerButton.className = 'poll__answer';
            answerButton.textContent = answer;
            answerButton.addEventListener('click', () => alert('Спасибо, ваш голос засчитан!'));
            pollAnswers.appendChild(answerButton);
        });
    };

    fetchPollData();
});
