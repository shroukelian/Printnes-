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
        { id: 501, name: "ستيكرات هولوجرام - Holographic", price: 1.5, badge: "طباعة رقمية عالية الدقة", img: "images/img1.webp" },
        { id: 502, name: "ستيكرات UV في شيت A6", price: 2.5, badge: "ابتداءً من 0.99 ريال", img: "images/img1.webp" },
        { id: 503, name: "ستيكر محاصيل القهوة", price: 0.99, badge: "ستيكر محاصيل القهوة", img: "images/img1.webp" },
        { id: 504, name: "ستيكرات دائرية 5x5", price: 0.5, badge: "ابتداءً من 0.99 ريال", img: "images/img1.webp" }
    ],
    "rect_stickers": [
        {
            id: 601,
            name: "استيكر مقاس 1.5x8cm",
            price: 0.8,
            badge: "ستيكر مقاس 1.5x8 سم",
            img: "images/img1.webp"
        },
        {
            id: 602,
            name: "ستيكرات تغليف بوكس الفلين",
            price: 5,
            badge: "ستيكر تغليف بوكس الفلين",
            img: "images/img1.webp"
        },
        {
            id: 603,
            name: "ستيكر بخلفية (مستطيل)",
            price: 1.2,
            badge: "استيكر مستطيل",
            img: "images/img1.webp"
        },
        {
            id: 604,
            name: "ستيكر محصول القهوة",
            price: 0.99,
            badge: "ستيكر محصول القهوة",
            img: "images/img1.webp"
        }
    ],
    "box_handles": [
        {
            id: 701,
            name: "حامل بوكس (بمقاسات متعددة)",
            price: 2.09,
            badge: "وصول إلى 2.09 ريال",
            img: "images/img1.webp"
        },
        {
            id: 702,
            name: "بوكس عرض 15x25x15",
            price: 3.98,
            badge: "وصول إلى 3.98 ريال",
            img: "images/img1.webp"
        },
        {
            id: 703,
            name: "بوكس قاعدة وغطاء مدبل الاطراف مع حامل",
            price: 5,
            badge: "وصول إلى 5 ريال",
            img: "images/img1.webp"
        },
        {
            id: 704,
            name: "بوكس قاعدة وغطاء طولي بحبل 15x15x40",
            price: 2.84,
            badge: "وصول إلى 2.84 ريال",
            img: "images/img1.webp"
        }
    ],
    "paper_prints": [
        { id: 801, name: "ورق تغليف طعام", price: 0.5, badge: "ورق تغليف طعام", img: "images/img1.webp" },
        { id: 802, name: "أظرف بيضاء مع طباعة", price: 1.5, badge: "أظرف بيضاء مع طباعة", img: "images/img1.webp" },
        { id: 803, name: "تغريسات كيك بشكل مخصص", price: 0.75, badge: "تغريسات كيك بشكل مخصص", img: "images/img1.webp" }
    ],

    // قسم "ملف" الخاص
    "file_prints": [
        { id: 901, name: "ملف (مجلد | حامل أوراق)", price: 3.5, badge: "وصول إلى 3.5 ريال", img: "images/img1.webp" },
        { id: 902, name: "ملف فاخر مقاس A4 بارتفاع 2 سم", price: 2.09, badge: "وصول إلى 2.09 ريال", img: "images/img1.webp" }
    ],
    "design_services": [
        {
            id: 1001,
            name: "تصميم السوشيال ميديا",
            price: 0,
            badge: "تصميم سوشيل ميديا",
            img: "images/img1.webp"
        },
        {
            id: 1002,
            name: "خدمة تصميم - اعادة رسم الشعار بجودة عالية",
            price: 149.99,
            badge: "تحسين جودة الشعار",
            img: "images/img1.webp"
        },
        {
            id: 1003,
            name: "تصميم بنرات ويب سايت",
            price: 110,
            badge: "بانرات موقعك بافضل سعر",
            img: "images/img1.webp"
        },
        {
            id: 1004,
            name: "تصميم موك أب ثرى دى",
            price: 0,
            badge: "نموذج 3D بتصميمك الخاص",
            img: "images/img1.webp"
        }
    ],
    "wrapping_paper": [
        { 
            id: 1101, 
            name: "ورق تغليف", 
            price: 2.3, 
            badge: "ابتداء من 2.3 ريال للحبة", 
            img: "images/img1.webp" 
        },
        { 
            id: 1102, 
            name: "ورق تغليف (جريدة)", 
            price: 2.3, 
            badge: "ابتداء من 2.3 ريال للحبة", 
            img: "images/img1.webp" 
        },
        { 
            id: 1103, 
            name: "ورق تغليف طعام", 
            price: 2.3, 
            badge: "ورق تغليف طعام", 
            img: "images/img1.webp" 
        }
    ],
    "packaging": [
        { 
            id: 1201, 
            name: "حامل اكواب او زجاجات (2 كوب)", 
            price: 2.09, 
            badge: "وصول إلى 2.09 ريال", 
            img: "images/img1.webp" 
        },
        { 
            id: 1202, 
            name: "قاعدة أكواب القهوة ( 4 كوب )", 
            price: 1.34, 
            badge: "وصول إلى 1.34 ريال للحبة", 
            img: "images/img1.webp" 
        },
        { 
            id: 1203, 
            name: "اكواب بلاستيك شفافة مع طباعة", 
            price: 0.37, 
            badge: "وصول لـ 0.37 ريال للكميات", 
            img: "images/img1.webp" 
        },
        { 
            id: 1204, 
            name: "بوكس 10x10x10 سم مع حامل كوب", 
            price: 1.34, 
            badge: "وصول إلى 1.34 ريال للحبة", 
            img: "images/img1.webp" 
        }
    ],
    "gift_cards": [
        { id: 1301, name: "كرت قص مخصص", price: 0, badge: "كرت اهداء بشكل مخصص", img: "images/img1.webp" },
        { id: 1302, name: "كرت بخلفية دائرية", price: 0, badge: "طباعة رقمية عالية الدقة", img: "images/img1.webp" },
        { id: 1303, name: "كرت بخلفية مربع", price: 0, badge: "طباعة رقمية عالية الدقة", img: "images/img1.webp" }
    ],

    "folded_cards": [
        { id: 1401, name: "كرت اهداء مطوي عرضي", price: 85, badge: "ابتدأ من 85 ريال 100 كرت", img: "images/img1.webp" },
        { id: 1402, name: "كرت اهداء مطوي طولي", price: 85, badge: "ابتدأ من 85 ريال 100 كرت", img: "images/img1.webp" },
        { id: 1403, name: "كرت اهداء مطوي على شكل قلب", price: 0, badge: "كرت اهداء مطوي شكل قلب", img: "images/img1.webp" }
    ]
};

let cart = JSON.parse(localStorage.getItem('printnesCart')) || [];
let activeProduct = { name: "", price: 0, total: 0 };

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) badge.innerText = cart.length;
}

function openFullCart() {
    window.location.href = 'cart.html';
}

function addToCartDirectly(id, category) {
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

    if (menu && overlay) {
        menu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    } else {
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


function goToDetails(id) {
    window.location.href = `product-details.html?id=${id}`;
}

function renderProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id'));

    let product = null;
    for (let cat in storeData) {
        product = storeData[cat].find(p => p.id === productId);
        if (product) break;
    }

    if (!product) return;

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

window.onload = function () {
    renderSection("featured", "products-render");
    renderSection("boxes", "render-boxes");
    renderSection("cartons", "render-cartons");
    renderSection("bags", "render-bags");
    renderSection("packaging", "render-packaging");

    updateCartBadge();

    const path = window.location.pathname;
    if (path.includes('cart.html')) {
        renderCartPage();
    }
    if (path.includes('product-details.html')) {
        renderProductDetails();
    }
};

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


const blogPosts = [
    {
        title: "طباعة كروت وهدايا للمناسبات الخاصة",
        url: "post1.html",
        desc: "تعرف على أحدث تصاميم الكروت والهدايا المخصصة التي تجعل مناسباتك لا تُنسى...",
        date: "23 أكتوبر 2024",
        author: "Mena Malak",
        img: "images/img1.webp"
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
        img: "images/img1.webp"
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

function toggleSubMenu(element) {
    const parentLi = element.parentElement;

    document.querySelectorAll('.has-submenu').forEach(item => {
        if (item !== parentLi) {
            item.classList.remove('open');
        }
    });

    parentLi.classList.toggle('open');

    console.log("Submenu toggled for:", parentLi); 
}


function addToCartFromDetails() {
    const design = document.getElementById('option-design').value;
    const sides = document.getElementById('option-sides').value;
    const cover = document.getElementById('option-cover').value;
    const paperType = document.getElementById('option-paper-type').value;
    const corners = document.getElementById('option-corners').value;
    const quantity = document.getElementById('prod-qty').value;

    if (!paperType || !corners) {
        alert("يرجى اختيار النوع وأطراف الكرت أولاً");
        return;
    }

    const item = {
        name: activeProduct.name,
        price: parseFloat(document.getElementById('sticky-price').innerText),
        img: activeProduct.img,
        details: {
            design: design,
            sides: sides,
            cover: cover,
            paperType: paperType,
            corners: corners,
            qty: quantity
        }
    };

    cart.push(item);
    localStorage.setItem('printnesCart', JSON.stringify(cart));
    updateCartBadge();

    showCartToast(item);
}


const swiper = new Swiper('.hero-swiper', {
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade', 
    fadeEffect: {
        crossFade: true
    },
});


const mostSellingSwiper = new Swiper('.most-selling-swiper', {
    slidesPerView: 1.2,        
    spaceBetween: 20,      
    loop: true,              
    
    autoplay: {
        delay: 3000,           
        disableOnInteraction: false, 
    },

    navigation: {
        nextEl: '.swiper-button-next-prod',
        prevEl: '.swiper-button-prev-prod',
    },

    breakpoints: {
        768: {
            slidesPerView: 4, 
        }
    }
});