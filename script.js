// --- 1. بيانات جميع المنتجات والأقسام ---
const storeData = {
    "featured": [
        { id: 1, name: "بوكس مثلث 6.8x7.5x11", price: 0.01, badge: "وصول إلى 0.73 ريال", img: "images/img1.webp" },
        { id: 2, name: "بكج انطلاقة المشروع", price: 199, badge: "ابتداءً من 50 ريال", img: "images/img1.webp" },
        { id: 3, name: "ستيكرات في شيت A6", price: 2.2, badge: "ابتداءً من 2.2 ريال", img: "images/img1.webp" },
        { id: 4, name: "كرت شخصي مخملي", price: 90, badge: "طباعة فاخرة", img: "images/img1.webp" }
    ],
    "boxes": [
        { id: 101, name: "بوكس مثلث 6.8x7.5x11", price: 0.01, badge: "وصول إلى 0.73 ريال للحبة", img: "images/img1.webp" },
        { id: 102, name: "بوكس قاعدة وغطاء طولي بحبل", price: 2.84, badge: "وصول إلى 2.84 ريال", img: "images/img1.webp" },
        { id: 103, name: "حامل بوكسات مقاس 12.5x12.5x20.5", price: 2.7, badge: "وصول إلى 2.7 ريال", img: "images/img1.webp" }
    ],
    "cartons": [
        { id: 201, name: "كرتون شحن مقاس 29x20x14", price: 3.2, badge: "وصول إلى 3.2 ريال", img: "images/img1.webp" }
    ],
    "bags": [
        { id: 301, name: "كيس كرتوني فاخر مقاس 28x28x15", price: 9, badge: "وصول إلى 9 ريال", img: "images/img1.webp" }
    ],
    "packaging": [
        { id: 401, name: "حامل اكواب او زجاجات (2 كوب)", price: 2.09, badge: "وصول إلى 2.09 ريال", img: "images/img1.webp" }
    ]
};

// --- 2. إدارة السلة وتخزين البيانات ---
let cart = JSON.parse(localStorage.getItem('printnesCart')) || [];

// تحديث العداد في الهيدر
function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) badge.innerText = cart.length;
}

// الوظيفة اللي كانت ناقصة عندك (لفتح صفحة السلة)
function openFullCart() {
    window.location.href = 'cart.html';
}

// إضافة منتج للسلة فوراً
function addToCartDirectly(id, category) {
    const product = storeData[category].find(p => p.id === id);
    if (!product) return;

    const itemToAdd = {
        name: product.name,
        price: product.price,
        img: product.img,
        quantity: 1
    };

    cart.push(itemToAdd);
    localStorage.setItem('printnesCart', JSON.stringify(cart));
    updateCartBadge();
    showCartToast(product);
}

// إظهار التنبيه فوق (Toast)
function showCartToast(p) {
    const toast = document.getElementById('cart-toast');
    if(!toast) return;
    document.getElementById('toast-product-img').src = p.img;
    document.getElementById('toast-product-name').innerText = p.name;
    document.getElementById('toast-product-price').innerText = p.price;
    
    toast.classList.remove('hidden');
    setTimeout(() => { hideToast(); }, 4000);
}

function hideToast() {
    const toast = document.getElementById('cart-toast');
    if(toast) toast.classList.add('hidden');
}

// --- 3. وظائف عرض المنتجات ---
function renderSection(categoryKey, targetId) {
    const grid = document.getElementById(targetId);
    if (!grid) return;
    const items = storeData[categoryKey];
    grid.innerHTML = items.map(p => `
        <div class="product-card">
            <div class="p-badge">${p.badge}</div>
            <img src="${p.img}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p style="color:#f26a2e; font-weight:900;">${p.price} ر.س</p>
            <button class="add-to-cart" onclick="addToCartDirectly(${p.id}, '${categoryKey}')">
                إضافة للسلة <i class="fas fa-cart-plus"></i>
            </button>
        </div>
    `).join('');
}

// --- 4. وظائف صفحة السلة (cart.html) ---
function renderCartPage() {
    const emptyView = document.getElementById('empty-cart-view');
    const fullView = document.getElementById('full-cart-view');
    const tableBody = document.getElementById('cart-table-body');
    const totalDisplay = document.getElementById('grand-total');

    if (!emptyView || !fullView) return;

    if (cart.length === 0) {
        emptyView.classList.remove('hidden');
        fullView.classList.add('hidden');
    } else {
        emptyView.classList.add('hidden');
        fullView.classList.remove('hidden');
        
        tableBody.innerHTML = cart.map((item, index) => `
            <tr>
                <td><strong>${item.name}</strong></td>
                <td><img src="${item.img}" style="width:40px; border-radius:5px;"></td>
                <td>${parseFloat(item.price).toFixed(2)} ر.س</td>
                <td><button style="color:red; border:none; background:none; cursor:pointer;" onclick="removeItem(${index})"><i class="fas fa-trash-alt"></i></button></td>
            </tr>
        `).join('');
        
        let total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
        totalDisplay.innerText = total.toFixed(2);
    }
}

function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem('printnesCart', JSON.stringify(cart));
    renderCartPage();
    updateCartBadge();
}

function checkoutFullCart() {
    if(cart.length === 0) return;
    let message = `*طلب جديد من برنتس*%0A---------------------------%0A`;
    let grandTotal = 0;
    cart.forEach((item, index) => {
        message += `*(${index + 1}) المنتج:* ${item.name}%0A*المبلغ:* ${parseFloat(item.price).toFixed(2)} ر.س%0A---------------------------%0A`;
        grandTotal += parseFloat(item.price);
    });
    message += `*الإجمالي النهائي:* ${grandTotal.toFixed(2)} ريال عماني`;
    window.open(`https://wa.me/966554804857?text=${message}`, '_blank');
}

// --- 5. وظائف واجهة المستخدم الأخرى (المنيو، المودال، إلخ) ---
function openSideMenu() {
    document.getElementById('side-menu').classList.add('active');
    document.getElementById('menu-overlay').classList.add('active');
}
function closeSideMenu() {
    document.getElementById('side-menu').classList.remove('active');
    document.getElementById('menu-overlay').classList.remove('active');
}
function toggleFaq(element) {
    element.classList.toggle('active');
}
function openLoginModal() { document.getElementById('login-modal').classList.remove('hidden'); }
function closeLoginModal() { document.getElementById('login-modal').classList.add('hidden'); }

// --- 6. التشغيل عند التحميل ---
window.onload = function() {
    renderSection("featured", "products-render");
    renderSection("boxes", "render-boxes");
    renderSection("cartons", "render-cartons");
    renderSection("bags", "render-bags");
    renderSection("packaging", "render-packaging");
    
    updateCartBadge();
    
    if(window.location.href.includes('cart.html')) {
        renderCartPage();
    }
};