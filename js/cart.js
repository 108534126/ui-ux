// ShoppingCart 物件
const ShoppingCart = (function() {
    let items = [];

    function init() {
        // 從localStorage讀取購物車數據
        items = JSON.parse(localStorage.getItem('cart')) || [];
        updateCartDisplay();
        // addCartIconToHeader();
        initModalWithCartSupport();
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(items));
    }

    function addItem(product) {
        const existingItemIndex = items.findIndex(item =>
            item.productId === product.productId && item.consumptionType === product.consumptionType
        );
        if (existingItemIndex !== -1) {
            items[existingItemIndex].quantity += product.quantity;
        } else {
            items.push({...product});
        }
        saveCart();
        updateCartDisplay();
        showSuccessMessage(product);
        return true;
    }

    function removeItem(index) {
        if (index >= 0 && index < items.length) {
            items.splice(index, 1);
            saveCart();
            updateCartDisplay();
            return true;
        }
        return false;
    }

    function updateItemQuantity(index, quantity) {
        if (index >= 0 && index < items.length) {
            items[index].quantity = quantity;
            saveCart();
            updateCartDisplay();
            return true;
        }
        return false;
    }

    function clearCart() {
        items = [];
        saveCart();
        updateCartDisplay();
    }

    function getItems() {
        return [...items];
    }

    function getTotalItems() {
        return items.reduce((total, item) => total + item.quantity, 0);
    }

    function getTotalPrice() {
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    function updateCartDisplay() {
        const cartCounter = document.getElementById('cart-counter');
        if (cartCounter) {
            cartCounter.textContent = getTotalItems();
            if (getTotalItems() > 0) {
                cartCounter.classList.remove('hidden');
            } else {
                cartCounter.classList.add('hidden');
            }
        }
    }

    function showSuccessMessage(product) {
        const oldSuccessModal = document.querySelector('.success-modal');
        if (oldSuccessModal) {
            document.body.removeChild(oldSuccessModal);
        }
        const successModal = document.createElement('div');
        successModal.className = 'success-modal';
        successModal.innerHTML = `
            <div class="success-modal-content">
                <span class="close-success-modal">&times;</span>
                <div class="success-icon">✓</div>
                <h3>已成功加入購物車</h3>
                <p>${product.name} (${product.consumptionType}) x ${product.quantity}</p>
                <div class="success-buttons">
                    <button class="continue-shopping-btn">繼續購物</button>
                    <button class="view-cart-btn">查看購物車</button>
                </div>
            </div>
        `;
        document.body.appendChild(successModal);

        setTimeout(() => {
            successModal.classList.add('show');
        }, 10);

        const closeBtn = successModal.querySelector('.close-success-modal');
        const continueBtn = successModal.querySelector('.continue-shopping-btn');
        const viewCartBtn = successModal.querySelector('.view-cart-btn');

        closeBtn.onclick = () => closeModal(successModal);
        continueBtn.onclick = () => closeModal(successModal);
        viewCartBtn.onclick = () => {
            closeModal(successModal);
            openCartPage();
        };

        setTimeout(() => closeModal(successModal), 2000);

        function closeModal(modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(modal)) {
                    document.body.removeChild(modal);
                }
            }, 300);
        }
    }

    function openCartPage() {
        renderCartPanel();
    }

    function renderCartPanel() {
        let cartPanel = document.getElementById('shopping-cart-panel');
        if (cartPanel) {
            document.body.removeChild(cartPanel);
        }
        cartPanel = document.createElement('div');
        cartPanel.id = 'shopping-cart-panel';
        cartPanel.className = 'shopping-cart-panel';

        let cartContent = `
            <div class="cart-panel-header">
                <h2>購物車</h2>
                <span class="close-cart-panel">&times;</span>
            </div>
        `;
        if (items.length === 0) {
            cartContent += `
                <div class="empty-cart">
                    <p>您的購物車是空的</p>
                    <button class="continue-shopping-btn">繼續購物</button>
                </div>
            `;
        } else {
            cartContent += `<div class="cart-items">`;
            items.forEach((item, index) => {
                cartContent += `
                    <div class="cart-item" data-index="${index}">
                        <div class="cart-item-info">
                            <h3>${item.name}</h3>
                            <p>${item.consumptionType}</p>
                            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                        </div>
                        <div class="cart-item-quantity">
                            <button class="decrease-quantity">-</button>
                            <input type="number" min="1" value="${item.quantity}" class="item-quantity">
                            <button class="increase-quantity">+</button>
                        </div>
                        <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
                        <button class="remove-item">&times;</button>
                    </div>
                `;
            });
            cartContent += `</div>`;
            const totalPrice = getTotalPrice();
            cartContent += `
                <div class="cart-summary">
                    <div class="cart-total">
                        <span>總計：</span>
                        <span>$${totalPrice.toFixed(2)}</span>
                    </div>
                    <div class="cart-actions">
                        <button class="clear-cart-btn">清空購物車</button>
                        <button class="checkout-btn">結帳</button>
                    </div>
                </div>
            `;
        }
        cartPanel.innerHTML = cartContent;
        document.body.appendChild(cartPanel);

        setTimeout(() => {
            cartPanel.classList.add('show');
        }, 10);

        const closeBtn = cartPanel.querySelector('.close-cart-panel');
        closeBtn.onclick = () => closePanel(cartPanel);

        const continueBtn = cartPanel.querySelector('.continue-shopping-btn');
        if (continueBtn) {
            continueBtn.onclick = () => closePanel(cartPanel);
        }

        if (items.length > 0) {
            const clearCartBtn = cartPanel.querySelector('.clear-cart-btn');
            clearCartBtn.onclick = () => {
                clearCart();
                closePanel(cartPanel);
            };

            const checkoutBtn = cartPanel.querySelector('.checkout-btn');
            checkoutBtn.onclick = () => {
                const checkoutData = {
                    items: getItems(),
                    totalCount: getTotalItems(),
                    total: getTotalPrice(),
                    couponCode: null // 如果有優惠券系統可從這裡加入
                };
                sessionStorage.setItem('checkoutData', JSON.stringify(checkoutData));
                window.location.href = 'checkout.html';
            };

            const cartItems = cartPanel.querySelectorAll('.cart-item');
            cartItems.forEach(item => {
                const index = parseInt(item.dataset.index);
                const decreaseBtn = item.querySelector('.decrease-quantity');
                const increaseBtn = item.querySelector('.increase-quantity');
                const quantityInput = item.querySelector('.item-quantity');
                const removeBtn = item.querySelector('.remove-item');

                decreaseBtn.onclick = () => {
                    let quantity = parseInt(quantityInput.value);
                    if (quantity > 1) {
                        quantity--;
                        quantityInput.value = quantity;
                        updateItemQuantity(index, quantity);
                    }
                };
                increaseBtn.onclick = () => {
                    let quantity = parseInt(quantityInput.value);
                    quantity++;
                    quantityInput.value = quantity;
                    updateItemQuantity(index, quantity);
                };
                quantityInput.onchange = () => {
                    let quantity = parseInt(quantityInput.value);
                    if (quantity < 1) quantity = 1;
                    quantityInput.value = quantity;
                    updateItemQuantity(index, quantity);
                };
                removeBtn.onclick = () => {
                    removeItem(index);
                    renderCartPanel();
                };
            });
        }

        function closePanel(panel) {
            panel.classList.remove('show');
            setTimeout(() => {
                if (document.body.contains(panel)) {
                    document.body.removeChild(panel);
                }
            }, 300);
        }
    }

    return {
        init,
        addItem,
        removeItem,
        updateItemQuantity,
        clearCart,
        getItems,
        getTotalItems,
        getTotalPrice,
        openCartPage
    };
})();

// 頁面載入時初始化
document.addEventListener('DOMContentLoaded', function() {
    ShoppingCart.init();
});

// 添加購物車圖標到頁面頂部
// function addCartIconToHeader() {
//     if (document.readyState === 'loading') {
//         document.addEventListener('DOMContentLoaded', addCartIconAfterDOMLoaded);
//     } else {
//         addCartIconAfterDOMLoaded();
//     }
// }

// function addCartIconAfterDOMLoaded() {
//     if (document.querySelector('.cart-icon')) return;
//     const header = document.querySelector('header');
//     const nav = document.querySelector('nav');
//     let targetElement;
//     if (header) {
//         targetElement = header;
//     } else if (nav) {
//         targetElement = nav;
//     } else {
//         targetElement = document.createElement('div');
//         targetElement.className = 'cart-container';
//         document.body.insertBefore(targetElement, document.body.firstChild);
//     }
//     const cartIcon = document.createElement('div');
//     cartIcon.className = 'cart-icon';
//     cartIcon.innerHTML = `
//         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
//             <circle cx="9" cy="21" r="1"></circle>
//             <circle cx="20" cy="21" r="1"></circle>
//             <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
//         </svg>
//         <span id="cart-counter" class="cart-counter hidden">0</span>
//     `;
//     cartIcon.onclick = () => {
//         ShoppingCart.openCartPage();
//     };
//     targetElement.appendChild(cartIcon);
// }

// 初始化產品詳情彈窗並確保購物車按鈕正常工作
function initModalWithCartSupport() {
    const modal = document.getElementById('product-modal');
    if (!modal) return;
    const closeButton = modal.querySelector('.close-button');
    if (closeButton) {
        closeButton.onclick = function() {
            modal.style.display = 'none';
        };
    }
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    const decreaseBtn = modal.querySelector('.quantity-btn.decrease');
    const increaseBtn = modal.querySelector('.quantity-btn.increase');
    const quantityInput = modal.querySelector('#quantity');
    if (decreaseBtn && quantityInput) {
        decreaseBtn.onclick = function() {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) quantityInput.value = currentValue - 1;
        };
    }
    if (increaseBtn && quantityInput) {
        increaseBtn.onclick = function() {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue < 99) quantityInput.value = currentValue + 1;
        };
    }
    const addToCartBtn = modal.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.onclick = function(event) {
            event.preventDefault();
            event.stopPropagation();
            const productId = this.getAttribute('data-product-id');
            const quantityInput = modal.querySelector('#quantity');
            const selectedConsumption = modal.querySelector('input[name="consumption"]:checked');
            if (!quantityInput || !selectedConsumption) return false;
            const consumptionType = selectedConsumption.value;
            const quantity = parseInt(quantityInput.value) || 1;
            const productName = modal.querySelector('#modal-title').textContent;
            const productPrice = parseFloat(modal.querySelector('#modal-price').textContent.replace('$', ''));
            ShoppingCart.addItem({
                productId,
                name: productName,
                price: productPrice,
                consumptionType,
                quantity
            });
            modal.style.display = 'none';
        };
    }
}
