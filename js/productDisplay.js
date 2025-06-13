// productDisplay.js
document.addEventListener('DOMContentLoaded', function() {
    // 取得產品容器元素
    const coffeeGrid = document.getElementById('coffee-grid');
    const categoryButtonsContainer = document.getElementById('category-buttons');
    
    // 檢查是否找到容器和產品數據
    if (!coffeeGrid) {
        console.error('找不到產品容器元素');
        return;
    }
    
    if (!productData || Object.keys(productData).length === 0) {
        console.error('產品數據為空');
        return;
    }
    
    // 創建類別按鈕
    createCategoryButtons(categoryButtonsContainer);
    
    // 初始顯示所有產品
    displayProductsByCategory('all');
    
    // 初始化彈窗元素和功能
    initModal();
});

// 建立類別按鈕
function createCategoryButtons(container) {
    if (!container) return;
    
    const allButton = document.createElement('button');
    allButton.className = 'category-btn active';
    allButton.textContent = '全部';
    allButton.dataset.category = 'all';
    allButton.addEventListener('click', function() {
        setActiveButton(this);
        displayProductsByCategory('all');
    });
    container.appendChild(allButton);
    
    // 每個類別的按鈕
    const categories = {
        'productCoffee': '咖啡',
        'productDrink': '特色飲品',
        'productDessert': '甜點',
        'productFood': '熟食品項',
        'productBean': '咖啡豆'
    };
    
    for (const key in categories) {
        const button = document.createElement('button');
        button.className = 'category-btn';
        button.textContent = categories[key];
        button.dataset.category = key;
        button.addEventListener('click', function() {
            setActiveButton(this);
            displayProductsByCategory(key);
        });
        container.appendChild(button);
    }
}

function setActiveButton(clickedButton) {
    // 移除所有按鈕的 active 類
    const buttons = document.querySelectorAll('.category-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    
    // 給被點擊的按鈕添加 active 類
    clickedButton.classList.add('active');
}

// 按類別顯示產品
function displayProductsByCategory(category) {
    const coffeeGrid = document.getElementById('coffee-grid');
    if (!coffeeGrid) return;
    
    // 清空當前顯示的產品
    coffeeGrid.innerHTML = '';
    
    // 顯示所選類別的產品
    if (category === 'all') {
        // 顯示所有類別的產品
        for (const categoryKey in productData) {
            displayProducts(productData[categoryKey], coffeeGrid);
        }
    } else if (productData[category]) {
        // 顯示特定類別的產品
        displayProducts(productData[category], coffeeGrid);
    }
}

// 顯示產品
function displayProducts(products, container) {
    for (const key in products) {
        const product = products[key];
        
        // 創建產品項目
        const coffeeItem = document.createElement('div');
        coffeeItem.className = 'coffee-item';
        coffeeItem.dataset.category = product.category;
        
        // 創建產品圖片容器和圖片
        const coffeeImage = document.createElement('div');
        coffeeImage.className = 'coffee-image';
        
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.onerror = function() {
            // 如果圖片加載失敗，使用替代圖片
            this.onerror = null;
            this.src = '../img/placeholder.png';
        };
        coffeeImage.appendChild(img);
        
        // 創建產品資訊區域
        const coffeeInfo = document.createElement('div');
        coffeeInfo.className = 'coffee-info';
        
        // 產品名稱
        const coffeeName = document.createElement('div');
        coffeeName.className = 'coffee-name';
        coffeeName.textContent = product.name;
        
        // 產品價格
        const coffeePrice = document.createElement('div');
        coffeePrice.className = 'coffee-price';
        coffeePrice.textContent = 'NT$' + product.price;
        
        // 產品類別標籤
        const categoryTag = document.createElement('div');
        categoryTag.className = 'category-tag';
        categoryTag.textContent = product.category;
        
        // 查看詳情按鈕
        const viewDetailsBtn = document.createElement('button');
        viewDetailsBtn.className = 'view-details-btn';
        viewDetailsBtn.textContent = '查看詳情';
        viewDetailsBtn.dataset.productId = product.id;
        viewDetailsBtn.onclick = function() {
            openProductModal(product);
        };
        
        // 組合所有元素
        coffeeInfo.appendChild(coffeeName);
        coffeeInfo.appendChild(coffeePrice);
        coffeeInfo.appendChild(categoryTag);
        coffeeInfo.appendChild(viewDetailsBtn);
        
        coffeeItem.appendChild(coffeeImage);
        coffeeItem.appendChild(coffeeInfo);
        
        // 將產品卡片添加到容器中
        container.appendChild(coffeeItem);
    }
}

// 初始化彈窗功能
function initModal() {
    const modal = document.getElementById('product-modal');
    const closeButton = document.querySelector('.close-button');
    
    // 關閉彈窗功能
    if (closeButton) {
        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });
    }
    
    // 點擊彈窗外部區域關閉彈窗
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
    
    // 數量增減功能
    const decreaseBtn = document.querySelector('.quantity-btn.decrease');
    const increaseBtn = document.querySelector('.quantity-btn.increase');
    const quantityInput = document.getElementById('quantity');
    
    if (decreaseBtn && quantityInput) {
        decreaseBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue > 1) {
                quantityInput.value = currentValue - 1;
            }
        });
    }
    
    if (increaseBtn && quantityInput) {
        increaseBtn.addEventListener('click', function() {
            const currentValue = parseInt(quantityInput.value);
            if (currentValue < 99) {
                quantityInput.value = currentValue + 1;
            }
        });
    }
    
    // 修改後的加入購物車按鈕功能
    const addToCartBtn = document.querySelector('.add-to-cart-btn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', function() {
            const productId = this.getAttribute('data-product-id');
            const quantity = parseInt(quantityInput.value);
            const consumptionType = document.querySelector('input[name="consumption"]:checked').value;
            
            // 獲取商品其他信息
            const productName = document.getElementById('modal-title').textContent;
            const productPrice = parseFloat(document.getElementById('modal-price').textContent);
            
            // 使用購物車系統添加商品
            window.cart.addItem({
                productId: productId,
                name: productName,
                price: productPrice,
                quantity: quantity,
                consumptionType: consumptionType
            });
            
            // 關閉彈窗
            modal.style.display = 'none';
        });
    }
}

// 開啟產品詳情彈窗
function openProductModal(product) {
    const modal = document.getElementById('product-modal');
    
    // 填充彈窗內容
    document.getElementById('modal-image').src = product.image;
    document.getElementById('modal-title').textContent = product.name;
    document.getElementById('modal-price').textContent = product.price;
    document.getElementById('modal-description').textContent = product.description;
    document.getElementById('modal-id').textContent = product.id;
    document.getElementById('modal-category').textContent = product.category;
    
    // 設置添加到購物車按鈕的產品ID
    document.querySelector('.add-to-cart-btn').setAttribute('data-product-id', product.id);
    
    // 重設數量
    document.getElementById('quantity').value = 1;
    
    // 顯示彈窗
    modal.style.display = 'block';
}