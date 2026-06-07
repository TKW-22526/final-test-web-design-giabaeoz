// Hàm định dạng giá tiền
function formatPrice(price) {
    return price.toLocaleString("vi-VN") + "đ";
}

// Hàm xử lý đường dẫn ảnh
function getImagePath(imagePath) {
    if (imagePath.startsWith("data:image")) {
        return imagePath;
    }

    if (window.location.pathname.includes("/html/")) {
        return "../" + imagePath;
    }

    return imagePath;
}

// Khóa dùng để lưu dữ liệu sản phẩm vào localStorage
const PRODUCT_STORAGE_KEY = "gb_garden_products";

// Lấy dữ liệu sản phẩm từ localStorage
function loadProductsFromLocalStorage() {
    const savedProducts = localStorage.getItem(PRODUCT_STORAGE_KEY);

    if (savedProducts) {
        const parsedProducts = JSON.parse(savedProducts);

        products.length = 0;

        parsedProducts.forEach(function(product) {
            products.push(product);
        });
    }
}

// Lưu dữ liệu sản phẩm vào localStorage
function saveProductsToLocalStorage() {
    localStorage.setItem(PRODUCT_STORAGE_KEY, JSON.stringify(products));
}

// Chuyển file ảnh thành chuỗi base64 để lưu vào localStorage
function convertImageToBase64(file) {
    return new Promise(function(resolve, reject) {
        const reader = new FileReader();

        reader.onload = function() {
            resolve(reader.result);
        };

        reader.onerror = function() {
            reject("Không thể đọc file ảnh.");
        };

        reader.readAsDataURL(file);
    });
}

// Tải dữ liệu đã lưu khi mở trang
loadProductsFromLocalStorage();

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
const editToggleBtn = document.getElementById("edit-toggle-btn");

let isEditMode = false;
let editingProductId = null;
let currentImageValue = "";

if (allProductsList) {

    const productFormModal = document.getElementById("product-form-modal");
    const productForm = document.getElementById("product-form");
    const productFormTitle = document.getElementById("product-form-title");
    const cancelProductFormBtn = document.getElementById("cancel-product-form");
    const imageInput = document.getElementById("product-image");
    const imagePreview = document.getElementById("product-image-preview");

    const productNameInput = document.getElementById("product-name");
    const productPriceInput = document.getElementById("product-price");
    const productCategoryInput = document.getElementById("product-category");
    const productOriginInput = document.getElementById("product-origin");
    const productDescriptionInput = document.getElementById("product-description");
    const productDetailInput = document.getElementById("product-detail-input");
    const productCareInput = document.getElementById("product-care");

    // Tạo danh mục tự động từ mảng products
    function renderCategoryOptions() {
        categoryFilter.innerHTML = `<option value="all">Tất cả danh mục</option>`;

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
    }

    // Hàm hiển thị danh sách sản phẩm
    function renderAllProducts(productArray) {
        allProductsList.innerHTML = "";

        if (productArray.length === 0) {
            const emptyMessage = document.createElement("p");
            emptyMessage.className = "empty-message";
            emptyMessage.textContent = "Không tìm thấy sản phẩm phù hợp.";
            allProductsList.appendChild(emptyMessage);

            if (isEditMode) {
                renderAddProductCard();
            }

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

            if (isEditMode) {
                const editActions = document.createElement("div");
                editActions.className = "product-edit-actions";

                const editBtn = document.createElement("button");
                editBtn.className = "edit-product-btn";
                editBtn.textContent = "Sửa";

                const deleteBtn = document.createElement("button");
                deleteBtn.className = "delete-product-btn";
                deleteBtn.textContent = "Xóa";

                editBtn.addEventListener("click", function() {
                    openEditProductForm(product.id);
                });

                deleteBtn.addEventListener("click", function() {
                    deleteProduct(product.id);
                });

                editActions.appendChild(editBtn);
                editActions.appendChild(deleteBtn);

                productCard.appendChild(editActions);
            }

            allProductsList.appendChild(productCard);
        });

        if (isEditMode) {
            renderAddProductCard();
        }
    }

    // Hàm tạo ô thêm sản phẩm
    function renderAddProductCard() {
        const addCard = document.createElement("div");
        addCard.className = "add-product-card";

        addCard.innerHTML = `
            <div class="add-product-content">
                <span class="plus-icon">+</span>
                <h3>Thêm sản phẩm</h3>
                <p>Thêm sản phẩm mới vào danh sách</p>
            </div>
        `;

        addCard.addEventListener("click", function() {
            openAddProductForm();
        });

        allProductsList.appendChild(addCard);
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

    // Hiện ảnh xem trước
    function showImagePreview(imageSrc) {
        if (!imageSrc) {
            imagePreview.src = "";
            imagePreview.classList.remove("show");
            return;
        }

        imagePreview.src = getImagePath(imageSrc);
        imagePreview.classList.add("show");
    }

    // Mở form thêm sản phẩm
    function openAddProductForm() {
        editingProductId = null;
        currentImageValue = "";

        productFormTitle.textContent = "Thêm sản phẩm mới";
        productForm.reset();
        showImagePreview("");

        productFormModal.classList.add("show");
    }

    // Mở form sửa sản phẩm
    function openEditProductForm(productId) {
        const product = products.find(function(item) {
            return item.id === productId;
        });

        if (!product) return;

        editingProductId = product.id;
        currentImageValue = product.image;

        productFormTitle.textContent = "Sửa sản phẩm";

        productNameInput.value = product.name;
        productPriceInput.value = product.price;
        productCategoryInput.value = product.category;
        productOriginInput.value = product.origin;
        productDescriptionInput.value = product.description;
        productDetailInput.value = product.detail;
        productCareInput.value = product.care;

        imageInput.value = "";
        showImagePreview(product.image);

        productFormModal.classList.add("show");
    }

    // Đóng form
    function closeProductForm() {
        productFormModal.classList.remove("show");

        productForm.reset();
        editingProductId = null;
        currentImageValue = "";
        showImagePreview("");
    }

    if (cancelProductFormBtn) {
        cancelProductFormBtn.addEventListener("click", function() {
            closeProductForm();
        });
    }

    if (imageInput) {
        imageInput.addEventListener("change", async function() {
            const imageFile = imageInput.files[0];

            if (!imageFile) {
                showImagePreview(currentImageValue);
                return;
            }

            const imageBase64 = await convertImageToBase64(imageFile);
            currentImageValue = imageBase64;
            showImagePreview(imageBase64);
        });
    }

    if (productForm) {
        productForm.addEventListener("submit", async function(event) {
            event.preventDefault();

            const name = productNameInput.value.trim();
            const price = Number(productPriceInput.value);
            const category = productCategoryInput.value.trim();
            const origin = productOriginInput.value.trim();
            const description = productDescriptionInput.value.trim();
            const detail = productDetailInput.value.trim();
            const care = productCareInput.value.trim();

            const selectedImageFile = imageInput.files[0];

            if (selectedImageFile) {
                currentImageValue = await convertImageToBase64(selectedImageFile);
            }

            if (
                name === "" ||
                price <= 0 ||
                category === "" ||
                origin === "" ||
                description === "" ||
                detail === "" ||
                care === ""
            ) {
                alert("Vui lòng nhập đầy đủ và đúng thông tin sản phẩm.");
                return;
            }

            if (!currentImageValue) {
                alert("Vui lòng chọn hình ảnh cho sản phẩm.");
                return;
            }

            // Nếu đang sửa sản phẩm
            if (editingProductId !== null) {
                const product = products.find(function(item) {
                    return item.id === editingProductId;
                });

                if (!product) return;

                product.name = name;
                product.price = price;
                product.category = category;
                product.origin = origin;
                product.image = currentImageValue;
                product.description = description;
                product.detail = detail;
                product.care = care;

                saveProductsToLocalStorage();
                renderCategoryOptions();
                filterProducts();
                closeProductForm();

                alert("Đã cập nhật sản phẩm.");
                return;
            }

            // Nếu đang thêm sản phẩm mới
            const newId = products.length > 0
                ? Math.max(...products.map(function(product) {
                    return product.id;
                })) + 1
                : 1;

            const newProduct = {
                id: newId,
                name: name,
                price: price,
                category: category,
                origin: origin,
                image: currentImageValue,
                description: description,
                detail: detail,
                care: care,
                isBestSeller: false
            };

            products.push(newProduct);

            saveProductsToLocalStorage();
            renderCategoryOptions();
            filterProducts();
            closeProductForm();

            alert("Đã thêm sản phẩm mới.");
        });
    }

    // Hàm xóa sản phẩm
    function deleteProduct(productId) {
        const confirmDelete = confirm("Bạn có chắc muốn xóa sản phẩm này không?");

        if (!confirmDelete) return;

        const index = products.findIndex(function(product) {
            return product.id === productId;
        });

        if (index !== -1) {
            products.splice(index, 1);
        }

        saveProductsToLocalStorage();
        renderCategoryOptions();
        filterProducts();

        alert("Đã xóa sản phẩm.");
    }

    // Bật / tắt chế độ chỉnh sửa
    if (editToggleBtn) {
        editToggleBtn.addEventListener("click", function() {
            isEditMode = !isEditMode;

            if (isEditMode) {
                editToggleBtn.textContent = "Tắt chỉnh sửa";
                editToggleBtn.classList.add("active");
            } else {
                editToggleBtn.textContent = "Chỉnh sửa";
                editToggleBtn.classList.remove("active");
            }

            filterProducts();
        });
    }

    searchInput.addEventListener("input", filterProducts);
    categoryFilter.addEventListener("change", filterProducts);

    renderCategoryOptions();
    renderAllProducts(products);
}
// ===============================
// ĐĂNG NHẬP MÔ PHỎNG
// ===============================

const AUTH_STORAGE_KEY = "gb_garden_login";

function isLoggedIn() {
  return localStorage.getItem(AUTH_STORAGE_KEY) === "true";
}

function loginUser() {
  localStorage.setItem(AUTH_STORAGE_KEY, "true");
}

function logoutUser() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
}

function updateAuthButton() {
  const authButton = document.getElementById("auth-btn");

  if (!authButton) return;

  if (isLoggedIn()) {
    authButton.textContent = "Đăng xuất";
  } else {
    authButton.textContent = "Đăng nhập";
  }
}

function toggleLoginDropdown() {
  const loginDropdown = document.getElementById("login-dropdown");

  if (!loginDropdown) return;

  loginDropdown.classList.toggle("show");
}

function closeLoginDropdown() {
  const loginDropdown = document.getElementById("login-dropdown");

  if (!loginDropdown) return;

  loginDropdown.classList.remove("show");
}

function initLogin() {
  const authButton = document.getElementById("auth-btn");
  const loginForm = document.getElementById("login-form");
  const loginDropdown = document.getElementById("login-dropdown");

  updateAuthButton();

  if (authButton) {
    authButton.addEventListener("click", function (event) {
      event.stopPropagation();

      if (isLoggedIn()) {
        const confirmLogout = confirm("Bạn có muốn đăng xuất không?");

        if (confirmLogout) {
          logoutUser();
          updateAuthButton();
          alert("Đã đăng xuất.");
        }

        return;
      }

      toggleLoginDropdown();
    });
  }

  if (loginDropdown) {
    loginDropdown.addEventListener("click", function (event) {
      event.stopPropagation();
    });
  }

  document.addEventListener("click", function () {
    closeLoginDropdown();
  });

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const username = document.getElementById("login-username").value.trim();
      const password = document.getElementById("login-password").value.trim();
      const loginMessage = document.getElementById("login-message");

      if (username === "" || password === "") {
        loginMessage.textContent = "Vui lòng nhập đầy đủ thông tin.";
        loginMessage.style.color = "var(--orange)";
        return;
      }

      loginUser();

      loginMessage.textContent = "Đăng nhập thành công.";
      loginMessage.style.color = "var(--primary)";

      updateAuthButton();

      setTimeout(function () {
        closeLoginDropdown();
      }, 700);
    });
  }
}

initLogin();
// ===============================
// 3. HIỂN THỊ CHI TIẾT SẢN PHẨM
// ===============================

const productDetail = document.getElementById("product-detail");

if (productDetail) {
    const params = new URLSearchParams(window.location.search);
    const productId = Number(params.get("id"));

    const product = products.find(function(item) {
        return item.id === productId;
    });

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

        formMessage.textContent = "Cảm ơn bạn đã liên hệ với GB Garden. Chúng tôi sẽ phản hồi sớm nhất!";
        formMessage.style.color = "#2e7d32";

        contactForm.reset();
    });
}