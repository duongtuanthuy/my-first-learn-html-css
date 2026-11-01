// Tự động lấy năm hiện tại gán vào Footer
const yearElement = document.getElementById('current-year');
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

// Thông điệp ẩn cho những lập trình viên thích F12
console.log("%c🚀 Chào mừng đến với không gian sáng tạo của tôi!", "color: #0ea5e9; font-size: 16px; font-weight: bold;");
console.log("Portfolio này được xây dựng hoàn toàn bằng HTML, CSS và Vanilla JS.");