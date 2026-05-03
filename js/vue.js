const app = new Vue({
  el: '#contactForm',
  methods: {
    vueValidate: function() {
      const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
      const phoneRegex = /^[0-9]+$/;

      if (!this.$el.name.value || !this.$el.email.value || !this.$el.phone.value) {
        alert("Tüm alanları doldurmalısınız!");
        return;
      }
      if (!emailRegex.test(this.$el.email.value)) {
        alert("Geçerli bir e-posta giriniz!");
        return;
      }
      if (!phoneRegex.test(this.$el.phone.value)) {
        alert("Telefon sadece rakamlardan oluşmalıdır!");
        return;
      }
      alert("Vue.js doğrulama başarılı!");
    }
  }
});

document.getElementById("vueValidateBtn").addEventListener("click", function() {
  app.vueValidate();
});
