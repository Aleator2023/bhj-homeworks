document.addEventListener('DOMContentLoaded', () => {
    const editor = document.getElementById('editor');
    const clearButton = document.createElement('button');
    
    clearButton.textContent = 'Очистить содержимое';
    clearButton.addEventListener('click', () => {
        editor.value = '';
        localStorage.removeItem('editorText');
    });
    document.querySelector('.card').appendChild(clearButton);

    const savedText = localStorage.getItem('editorText');
    if (savedText !== null) {
        editor.value = savedText;
    }

        editor.addEventListener('input', () => {
        localStorage.setItem('editorText', editor.value);
    });
});
