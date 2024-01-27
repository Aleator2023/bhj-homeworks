document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const clearButton = document.createElement('button');
    
    clearButton.textContent = 'Очистить содержимое';
    clearButton.addEventListener('click', () => {
        editor.value = '';
        localStorage.removeItem('editorText');
    });
    document.querySelector('.card').appendChild(clearButton);

    // Получение сохранённого текста и установка его в редактор
    editor.value = localStorage.getItem('editorText') || '';

    // Сохранение текста при его изменении
    editor.addEventListener('input', () => {
        localStorage.setItem('editorText', editor.value);
    });
});
