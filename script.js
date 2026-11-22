// Đổi màu nền (Trắng / Xám nhạt / Tối) và lưu lại
const bgButtons = document.querySelectorAll(".bg-btn");

function setBackground(mode) {
  document.documentElement.setAttribute("data-bg", mode);
  bgButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.bg === mode);
  });
  try {
    localStorage.setItem("site-bg", mode);
  } catch (err) {
    // Bỏ qua nếu trình duyệt chặn localStorage
  }
}

let savedBg = "white";
try {
  savedBg = localStorage.getItem("site-bg") || "white";
} catch (err) {
  savedBg = "white";
}
setBackground(savedBg);

bgButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setBackground(btn.dataset.bg);
  });
});

// Xử lý form liên hệ đơn giản (nếu trang hiện tại có form)
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("contact-name").value.trim();
    const email = document.getElementById("contact-email").value.trim();
    const message = document.getElementById("contact-message").value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Vui lòng điền đầy đủ họ tên, email và nội dung.";
      return;
    }

    formStatus.textContent = "Đã ghi nhận thông tin liên hệ của " + name + ".";
    contactForm.reset();
  });
}
