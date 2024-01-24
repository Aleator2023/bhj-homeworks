document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', event => {
        if (event.target.classList.contains('has-tooltip')) {
            event.preventDefault();
            let tooltip = document.querySelector('.tooltip');
            if (!tooltip) {
                tooltip = document.createElement('div');
                tooltip.className = 'tooltip';
                document.body.appendChild(tooltip);
            }
            tooltip.textContent = event.target.getAttribute('title');
            const coords = event.target.getBoundingClientRect();
            tooltip.style.left = coords.left + 'px';
            tooltip.style.top = coords.bottom + 'px';
            tooltip.classList.toggle('tooltip_active');
        }
    });
});
