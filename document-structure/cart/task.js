document.addEventListener('DOMContentLoaded', () => {
    // Изменение количества товаров
    document.querySelectorAll('.product__quantity-control').forEach(control => {
        control.addEventListener('click', () => {
            const quantityValue = control.closest('.product__quantity-controls').querySelector('.product__quantity-value');
            let quantity = parseInt(quantityValue.textContent);

            if (control.classList.contains('product__quantity-control_inc')) {
                quantity++;
            } else if (control.classList.contains('product__quantity-control_dec')) {
                quantity = Math.max(1, quantity - 1);
            }

            quantityValue.textContent = quantity;
        });
    });

    // Добавление товаров в корзину
    document.querySelectorAll('.product__add').forEach(addButton => {
        addButton.addEventListener('click', () => {
            const product = addButton.closest('.product');
            const productId = product.dataset.id;
            const productImageSrc = product.querySelector('.product__image').src;
            const quantity = parseInt(product.querySelector('.product__quantity-value').textContent);

            let cartProduct = document.querySelector(`.cart__products .cart__product[data-id="${productId}"]`);

            if (cartProduct) {
                let cartProductCount = cartProduct.querySelector('.cart__product-count');
                cartProductCount.textContent = parseInt(cartProductCount.textContent) + quantity;
            } else {
                const cartProducts = document.querySelector('.cart__products');
                cartProduct = document.createElement('div');
                cartProduct.classList.add('cart__product');
                cartProduct.dataset.id = productId;
                cartProduct.innerHTML = `
                    <img class="cart__product-image" src="${productImageSrc}">
                    <div class="cart__product-count">${quantity}</div>
                `;
                cartProducts.appendChild(cartProduct);
            }
        });
    });
});
