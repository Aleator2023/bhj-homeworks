document.addEventListener('DOMContentLoaded', () => {
    const tasksForm = document.getElementById('tasks__form');
    const taskInput = document.getElementById('task__input');
    const tasksList = document.getElementById('tasks__list');

    // Функция для добавления задачи
    const addTask = (taskTitle) => {
        const task = document.createElement('div');
        task.className = 'task';
        task.innerHTML = `
            <div class="task__title">${taskTitle}</div>
            <a href="#" class="task__remove">&times;</a>
        `;
        tasksList.appendChild(task);
    };

    // Восстановление задач из localStorage
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    savedTasks.forEach(task => {
        addTask(task);
    });

    // Обработка добавления задачи
    tasksForm.addEventListener('submit', event => {
        event.preventDefault();
        if (taskInput.value.trim() !== '') {
            addTask(taskInput.value.trim());
            savedTasks.push(taskInput.value.trim());
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
            taskInput.value = '';
        }
    });

    // Обработка удаления задачи
    tasksList.addEventListener('click', event => {
        if (event.target.classList.contains('task__remove')) {
            const taskToRemove = event.target.closest('.task');
            const taskTitleToRemove = taskToRemove.querySelector('.task__title').textContent;
            savedTasks.splice(savedTasks.indexOf(taskTitleToRemove), 1);
            localStorage.setItem('tasks', JSON.stringify(savedTasks));
            taskToRemove.remove();
        }
    });
});
