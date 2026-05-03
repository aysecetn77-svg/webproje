document.addEventListener("DOMContentLoaded", function() {
  const jsBtn = document.getElementById("jsValidateBtn");

  jsBtn.addEventListener("click", function() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    if (!name || !email || !phone) {
      alert("Tüm alanları doldurmalısınız!");
      return;
    }

    const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
    if (!emailRegex.test(email)) {
      alert("Geçerli bir e-posta giriniz!");
      return;
    }

    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      alert("Telefon sadece rakamlardan oluşmalıdır!");
      return;
    }

    alert("JS doğrulama başarılı!");
  });
});
