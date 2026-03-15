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
        { 
            id: 301, 
            name: "كيس كرتوني فاخر مقاس 28x28x15", 
            price: 9, 
            badge: "وصول إلى 9 ريال", 
            img: "images/img1.webp" 
        },
        { 
            id: 302, 
            name: "كيس ورد بشكل قمع 39x30", 
            price: 7.5, 
            badge: "وصول إلى 7.5 ريال", 
            img: "images/img1.webp" 
        },
        { 
            id: 303, 
            name: "كيس كرتوني فاخر مقاس 30x20x8", 
            price: 7.5, 
            badge: "وصول إلى 7.5 ريال", 
            img: "images/img1.webp" 
        },
        { 
            id: 304, 
            name: "كيس بقلة علوية مقاس 22x20x10 سم", 
            price: 7.5, 
            badge: "وصول إلى 7.5 ريال", 
            img: "images/img1.webp" 
        }
    ],
    "packaging": [
        { id: 401, name: "حامل اكواب او زجاجات (2 كوب)", price: 2.09, badge: "وصول إلى 2.09 ريال", img: "images/img1.webp" }
    ],

    "stickers": [
        { id: 501, name: "ستيكرات هولوجرام - Holographic", price: 1.5, badge: "طباعة رقمية عالية الدقة", img: "https://cdn.salla.sa/rDvVQ/OQxmT3F9y8bS0SrRQOIZVusIvSyRHalGpw0j7rJX.png" },
        { id: 502, name: "ستيكرات UV في شيت A6", price: 2.5, badge: "ابتداءً من 0.99 ريال", img: "https://cdn.salla.sa/rDvVQ/0Wn6S8lHqsRtMdMLRUfqsmtbIGHj2A43pb0E6OWW.jpg" },
        { id: 503, name: "ستيكر محاصيل القهوة", price: 0.99, badge: "ستيكر محاصيل القهوة", img: "https://cdn.salla.sa/rDvVQ/1pKR8dtK4Hd9UoYFf1hqwqPQJMn5YFEqyOyJngiZ.jpg" },
        { id: 504, name: "ستيكرات دائرية 5x5", price: 0.5, badge: "ابتداءً من 0.99 ريال", img: "https://cdn.salla.sa/rDvVQ/OQxmT3F9y8bS0SrRQOIZVusIvSyRHalGpw0j7rJX.png" }
    ]
};

let cart = JSON.parse(localStorage.getItem('printnesCart')) || [];
let activeProduct = { name: "", price: 0, total: 0 };

// تحديث العداد في الهيدر
function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) badge.innerText = cart.length;
}

// فتح صفحة السلة
function openFullCart() {
    window.location.href = 'cart.html';
}

// إضافة منتج للسلة فوراً
function addToCartDirectly(id, category) {
    // البحث عن المنتج في القسم المحدد أو في كل الأقسام إذا لم يحدد القسم
    let product = null;
    if (category && storeData[category]) {
        product = storeData[category].find(p => p.id === id);
    } else {
        for (let cat in storeData) {
            product = storeData[cat].find(p => p.id === id);
            if (product) break;
        }
    }

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
    if (!toast) return;
    document.getElementById('toast-product-img').src = p.img;
    document.getElementById('toast-product-name').innerText = p.name;
    document.getElementById('toast-product-price').innerText = p.price;

    toast.classList.remove('hidden');
    setTimeout(() => { hideToast(); }, 4000);
}

function hideToast() {
    const toast = document.getElementById('cart-toast');
    if (toast) toast.classList.add('hidden');
}

// --- 3. وظائف عرض المنتجات ---
function renderSection(categoryKey, targetId) {
    const grid = document.getElementById(targetId);
    if (!grid) return;
    const items = storeData[categoryKey];
    grid.innerHTML = items.map(p => `
        <div class="product-card">
            <div class="p-badge">${p.badge}</div>
            <!-- تم إضافة الضغط هنا للانتقال للتفاصيل -->
            <div onclick="goToDetails(${p.id})" style="cursor:pointer">
                <img src="${p.img}" alt="${p.name}">
                <h3>${p.name}</h3>
            </div>
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
    if (cart.length === 0) return;
    let message = `*طلب جديد من برنتس*%0A---------------------------%0A`;
    let grandTotal = 0;
    cart.forEach((item, index) => {
        message += `*(${index + 1}) المنتج:* ${item.name}%0A*المبلغ:* ${parseFloat(item.price).toFixed(2)} ر.س%0A---------------------------%0A`;
        grandTotal += parseFloat(item.price);
    });
    message += `*الإجمالي النهائي:* ${grandTotal.toFixed(2)} ريال عماني`;
    window.open(`https://wa.me/966554804857?text=${message}`, '_blank');
}

function openSideMenu() {
    const menu = document.getElementById('side-menu');
    const overlay = document.getElementById('menu-overlay');

    // تأكدي إن العنصر موجود قبل ما نغير الكلاسات بتاعته
    if (menu && overlay) {
        menu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
        // لو مش موجود هيطبع لك في الكونسول إيه اللي ناقص بالظبط
        console.error("خطأ: لم يتم العثور على side-menu أو menu-overlay في هذه الصفحة!");
    }
}
function closeSideMenu() {
    document.getElementById('side-menu').classList.remove('active');
    document.getElementById('menu-overlay').classList.remove('active');
}
function toggleFaq(element) {
    element.classList.toggle('active');
}
function openLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) modal.classList.remove('hidden');
}
function closeLoginModal() {
    const modal = document.getElementById('login-modal');
    if (modal) modal.classList.add('hidden');
}

function handleLogin() {
    const email = document.getElementById('email-input').value;
    if (email) {
        alert("مرحباً بك! تم تسجيل الدخول بـ: " + email);
        closeLoginModal();
    } else {
        alert("يرجى إدخال البريد الإلكتروني");
    }
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// --- 6. وظائف صفحة التفاصيل ---

// وظيفة لتحويل الزبون لصفحة التفاصيل عند الضغط على أي منتج
function goToDetails(id) {
    window.location.href = `product-details.html?id=${id}`;
}

// وظيفة عرض بيانات المنتج المختار في صفحة التفاصيل
function renderProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    let product = null;
    for (let cat in storeData) {
        product = storeData[cat].find(p => p.id === productId);
        if (product) break;
    }

    if (!product) return;

    // ملء البيانات في صفحة التفاصيل (تأكدي من مطابقة IDs في HTML التفاصيل)
    const titleEl = document.getElementById('product-title');
    const breadcrumbEl = document.getElementById('breadcrumb-name');
    const imgEl = document.getElementById('main-product-img');
    const stickyPriceEl = document.getElementById('sticky-price');
    const tabbyPriceEl = document.getElementById('tabby-price');

    if (titleEl) titleEl.innerText = product.name;
    if (breadcrumbEl) breadcrumbEl.innerText = product.name;
    if (imgEl) imgEl.src = product.img;
    if (stickyPriceEl) stickyPriceEl.innerText = product.price + " ر.س";
    if (tabbyPriceEl) tabbyPriceEl.innerText = (product.price / 4).toFixed(2);
}

function changeQty(val) {
    const input = document.getElementById('prod-qty');
    if (!input) return;
    let current = parseInt(input.value);
    if (current + val >= 1) input.value = current + val;
}

// --- 7. التشغيل عند التحميل ---
window.onload = function () {
    // عرض المنتجات في الأقسام المتاحة بالصفحة الرئيسية
    renderSection("featured", "products-render");
    renderSection("boxes", "render-boxes");
    renderSection("cartons", "render-cartons");
    renderSection("bags", "render-bags");
    renderSection("packaging", "render-packaging");

    updateCartBadge();

    // فحص أي صفحة مفتوحة حالياً
    const path = window.location.pathname;
    if (path.includes('cart.html')) {
        renderCartPage();
    }
    if (path.includes('product-details.html')) {
        renderProductDetails();
    }
};

// وظيفة فتح درج التخصيص (Drawer) - أضفتها لضمان عدم حدوث خطأ إذا طلبتِها لاحقاً
function openOrderDrawer(name, price) {
    let foundImg = "";
    for (let cat in storeData) {
        const item = storeData[cat].find(i => i.name === name);
        if (item) { foundImg = item.img; break; }
    }
    activeProduct = { name: name, price: price, total: price, img: foundImg };
    const drawer = document.getElementById('order-drawer');
    if (drawer) {
        drawer.classList.remove('hidden');
        document.getElementById('d-item-name').innerText = name;
        document.getElementById('d-total').innerText = price;
    }
}
function closeDrawer() {
    const drawer = document.getElementById('order-drawer');
    if (drawer) drawer.classList.add('hidden');
}


// بيانات مقالات المدونة
const blogPosts = [
    {
        title: "طباعة كروت وهدايا للمناسبات الخاصة",
        url: "post1.html",
        desc: "تعرف على أحدث تصاميم الكروت والهدايا المخصصة التي تجعل مناسباتك لا تُنسى...",
        date: "23 أكتوبر 2024",
        author: "Mena Malak",
        img: "https://cdn.salla.sa/rDvVQ/1pKR8dtK4Hd9UoYFf1hqwqPQJMn5YFEqyOyJngiZ.jpg"
    },
    {
        title: "كيفية اختيار نوع الورق المناسب لمشروعك",
        url: "post2.html",
        desc: "دليل شامل لأنواع الورق (المطفي، اللامع، المقوى) وكيفية اختيار الأنسب لمطبوعاتك الورقية...",
        date: "22 أكتوبر 2024",
        author: "Mena Malak",
        img: "https://cdn.salla.sa/rDvVQ/0Wn6S8lHqsRtMdMLRUfqsmtbIGHj2A43pb0E6OWW.jpg"
    },
    {
        title: "طباعة علب تغليف بجودة عالية للمشاريع الصغيرة",
        url: "post3.html",
        desc: "في عالم ريادة الأعمال الحديثة، أصبحت علب التغليف هي الوجه الأول لعلامتك التجارية...",
        date: "21 أكتوبر 2024",
        author: "Mena Malak",
        img: "https://cdn.salla.sa/rDvVQ/OQxmT3F9y8bS0SrRQOIZVusIvSyRHalGpw0j7rJX.png"
    }
];
function renderBlogGrid() {
    const grid = document.getElementById('blog-posts-render');
    if (!grid) return;
    grid.innerHTML = blogPosts.map(post => `
        <article class="blog-card">
            <div class="card-img" onclick="location.href='${post.url}'" style="cursor:pointer">
                <img src="${post.img}" alt="${post.title}">
            </div>
            <div class="card-body">
                <div class="post-meta" style="color:#aaa; font-size:11px; margin-bottom:10px;">
                    <span><i class="far fa-calendar"></i> ${post.date}</span>
                    <span style="margin-right:15px;"><i class="far fa-user"></i> ${post.author}</span>
                </div>
                <h3 onclick="location.href='${post.url}'" style="cursor:pointer">${post.title}</h3>
                <p>${post.desc}</p>
                
                <!-- زر اقرأ المزيد المطور -->
                <div onclick="location.href='${post.url}'" 
                     style="margin-top:15px; color:var(--orange); font-weight:bold; font-size:13px; cursor:pointer; display:inline-block;">
                     اقرأ المزيد ←
                </div>
            </div>
        </article>
    `).join('');
}