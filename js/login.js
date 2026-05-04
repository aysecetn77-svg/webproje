document.getElementById("loginForm").addEventListener("submit", function(e) {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

     if (!username && !password) {
    alert("Kullanıcı adı ve şifre boş bırakılamaz!");
    e.preventDefault();
    return;
  }

 else  if (!username) {
    alert("Kullanıcı adı boş bırakılamaz!");
    e.preventDefault();
    return;
  }

    else if (!password) {
    alert("Şifre boş bırakılamaz!");
    e.preventDefault();
    return;
  }

 
  const emailRegex = /^[^@]+@sakarya\.edu\.tr$/i;
  if (!emailRegex.test(username)) {
    alert("Mail adresi sakarya.edu.tr formatında olmalıdır!");
    e.preventDefault();
    return;
  }
});
