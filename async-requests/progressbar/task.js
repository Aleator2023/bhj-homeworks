document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');
    const fileInput = document.getElementById('file');
    const progressBar = document.getElementById('progress');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', fileInput.files[0]);

        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload', true);

        xhr.upload.onprogress = function(event) {
            if (event.lengthComputable) {
                const percentComplete = event.loaded / event.total;
                progressBar.value = percentComplete;
            }
        };

        xhr.onload = xhr.onerror = function() {
            if (xhr.status == 200) {
                console.log('Файл успешно загружен');
            } else {
                console.error('Ошибка загрузки файла: ' + xhr.statusText);
            }
        };

        xhr.send(formData);
    });
});
