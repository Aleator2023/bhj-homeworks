document.querySelectorAll('.font-size').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('.font-size_active').classList.remove('font-size_active');
        this.classList.add('font-size_active');
        
        const size = this.dataset.size;
        const book = document.getElementById('book');
        book.className = 'book'; // сброс всех классов кроме 'book'
        if (size) {
            book.classList.add(`book_fs-${size}`);
        }
    });
});

document.querySelectorAll('.color').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        if (this.dataset.textColor) {
            let activeTextColor = document.querySelector('.text_color_active');
            if (activeTextColor) {
                activeTextColor.classList.remove('text_color_active');
            }
            this.classList.add('text_color_active');
            const textColor = this.dataset.textColor;
            const book = document.getElementById('book');
            book.classList.remove('book_color-gray', 'book_color-whitesmoke', 'book_color-black');
            if (textColor) {
                book.classList.add(`book_color-${textColor}`);
            }
        } else if (this.dataset.bgColor) {
            let activeBgColor = document.querySelector('.bg_color_active');
            if (activeBgColor) {
                activeBgColor.classList.remove('bg_color_active');
            }
            this.classList.add('bg_color_active');
            const bgColor = this.dataset.bgColor;
            const book = document.getElementById('book');
            book.classList.remove('book_bg-gray', 'book_bg-black', 'book_bg-white');
            if (bgColor) {
                book.classList.add(`book_bg-${bgColor}`);
            }
        }
    });
});