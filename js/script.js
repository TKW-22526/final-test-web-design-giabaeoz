// File main.js xử lý DOM cho trang chủ và trang sản phẩm

// Hàm định dạng giá tiền
function formatPrice(price) {
    return price.toLocaleString("vi-VN") + "đ";
}

// Hàm xử lý đường dẫn ảnh
// Vì index.html nằm ngoài thư mục html, còn san-pham.html nằm trong thư mục html
function getImagePath(imagePath) {
    if (window.location.pathname.includes("/html/")) {
        return "../" + imagePath;
    }

    return imagePath;
}

// ===============================
// 1. HIỂN THỊ SẢN PHẨM NỔI BẬT Ở TRANG INDEX
// ===============================

const bestsellerList = document.getElementById("bestseller-list");

if (bestsellerList) {
    const bestsellerProducts = products.filter(function(product) {
        return product.isBestSeller === true;
    });

    bestsellerProducts.forEach(function(product) {
        const productCard = document.createElement("div");
        productCard.className = "product-card";

        const productImage = document.createElement("img");
        productImage.src = getImagePath(product.image);
        productImage.alt = product.name;

        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productCategory = document.createElement("p");
        productCategory.className = "product-category";
        productCategory.textContent = product.category;

        const productDescription = document.createElement("p");
        productDescription.className = "product-description";
        productDescription.textContent = product.description;

        const productPrice = document.createElement("p");
        productPrice.className = "price";
        productPrice.textContent = formatPrice(product.price);

        const detailButton = document.createElement("a");
        detailButton.className = "detail-btn";
        detailButton.href = "html/chi-tiet.html?id=" + product.id;
        detailButton.textContent = "Xem chi tiết";

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productCategory);
        productCard.appendChild(productDescription);
        productCard.appendChild(productPrice);
        productCard.appendChild(detailButton);

        bestsellerList.appendChild(productCard);
    });
}

// ===============================
// 2. HIỂN THỊ TOÀN BỘ SẢN PHẨM Ở TRANG SAN-PHAM
// ===============================

const allProductsList = document.getElementById("all-products-list");
const searchInput = document.getElementById("search-input");
const categoryFilter = document.getElementById("category-filter");

if (allProductsList) {
    // Tạo danh mục tự động từ mảng products
    const categories = [];

    products.forEach(function(product) {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
    });

    categories.forEach(function(category) {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categoryFilter.appendChild(option);
    });

    // Hàm hiển thị danh sách sản phẩm
    function renderAllProducts(productArray) {
        allProductsList.innerHTML = "";

        if (productArray.length === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.className = "empty-message";
            emptyMessage.textContent = "Không tìm thấy sản phẩm phù hợp.";
            allProductsList.appendChild(emptyMessage);
            return;
        }

        productArray.forEach(function(product) {
            const productCard = document.createElement("div");
            productCard.className = "product-card";

            const productImage = document.createElement("img");
            productImage.src = getImagePath(product.image);
            productImage.alt = product.name;

            const productName = document.createElement("h3");
            productName.textContent = product.name;

            const productCategory = document.createElement("p");
            productCategory.className = "product-category";
            productCategory.textContent = product.category;

            const productOrigin = document.createElement("p");
            productOrigin.className = "product-origin";
            productOrigin.textContent = "Xuất xứ: " + product.origin;

            const productDescription = document.createElement("p");
            productDescription.className = "product-description";
            productDescription.textContent = product.description;

            const productPrice = document.createElement("p");
            productPrice.className = "price";
            productPrice.textContent = formatPrice(product.price);

            const detailButton = document.createElement("a");
            detailButton.className = "detail-btn";
            detailButton.href = "chi-tiet.html?id=" + product.id;
            detailButton.textContent = "Xem chi tiết";

            productCard.appendChild(productImage);
            productCard.appendChild(productName);
            productCard.appendChild(productCategory);
            productCard.appendChild(productOrigin);
            productCard.appendChild(productDescription);
            productCard.appendChild(productPrice);
            productCard.appendChild(detailButton);

            allProductsList.appendChild(productCard);
        });
    }

    // Hàm lọc sản phẩm theo tìm kiếm và danh mục
    function filterProducts() {
        const keyword = searchInput.value.toLowerCase().trim();
        const selectedCategory = categoryFilter.value;

        const filteredProducts = products.filter(function(product) {
            const matchName = product.name.toLowerCase().includes(keyword);
            const matchCategory = selectedCategory === "all" || product.category === selectedCategory;

            return matchName && matchCategory;
        });

        renderAllProducts(filteredProducts);
    }

    searchInput.addEventListener("input", filterProducts);
    categoryFilter.addEventListener("change", filterProducts);

    // Hiển thị toàn bộ sản phẩm ban đầu
    renderAllProducts(products);
}
// ===============================
// 3. HIỂN THỊ CHI TIẾT SẢN PHẨM
// ===============================

const productDetail = document.getElementById("product-detail");

if (productDetail) {
    // Lấy id từ URL, ví dụ: chi-tiet.html?id=1
    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("id"));

    // Tìm sản phẩm có id tương ứng
    const product = products.find(function(item) {
        return item.id === productId;
    });

    // Nếu không tìm thấy sản phẩm
    if (!product) {
        productDetail.innerHTML = `
            <div class="not-found">
                <h2>Không tìm thấy sản phẩm</h2>
                <p>Sản phẩm bạn đang xem không tồn tại hoặc đã bị xóa.</p>
                <a href="san-pham.html" class="back-btn">Quay lại trang sản phẩm</a>
            </div>
        `;
    } else {
        productDetail.innerHTML = `
            <div class="detail-card">
                <div class="detail-image">
                    <img src="${getImagePath(product.image)}" alt="${product.name}">
                </div>

                <div class="detail-info">
                    <h1>${product.name}</h1>

                    <span class="detail-category">${product.category}</span>

                    <p class="detail-price">${formatPrice(product.price)}</p>

                    <p class="detail-short">${product.description}</p>

                    <div class="detail-table">
                        <div class="detail-row">
                            <strong>Mã sản phẩm:</strong>
                            <span>GB-${product.id}</span>
                        </div>

                        <div class="detail-row">
                            <strong>Danh mục:</strong>
                            <span>${product.category}</span>
                        </div>

                        <div class="detail-row">
                            <strong>Xuất xứ:</strong>
                            <span>${product.origin}</span>
                        </div>

                        <div class="detail-row">
                            <strong>Tình trạng:</strong>
                            <span>Còn hàng</span>
                        </div>
                    </div>

                    <div class="detail-box">
                        <h3>Thông tin chi tiết</h3>
                        <p>${product.detail}</p>
                    </div>

                    <div class="detail-box">
                        <h3>Hướng dẫn chăm sóc</h3>
                        <p>${product.care}</p>
                    </div>

                    <div class="detail-actions">
                        <a href="san-pham.html" class="back-btn">Quay lại sản phẩm</a>
                        <a href="lien-he.html" class="buy-btn">Liên hệ mua hàng</a>
                    </div>
                </div>
            </div>
        `;
    }
}
// ===============================
// 4. XỬ LÝ FORM LIÊN HỆ
// ===============================

const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const message = document.getElementById("message").value.trim();
        const formMessage = document.getElementById("form-message");

        if (fullname === "" || email === "" || phone === "" || message === "") {
            formMessage.textContent = "Vui lòng nhập đầy đủ thông tin.";
            formMessage.style.color = "#d35400";
            return;
        }

        formMessage.textContent = "Cảm ơn bạn đã liên hệ với GBGreen. Chúng tôi sẽ phản hồi sớm nhất!";
        formMessage.style.color = "#2e7d32";

        contactForm.reset();
    });
}