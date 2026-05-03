<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST["name"]);
    $email = htmlspecialchars($_POST["email"]);
    $phone = htmlspecialchars($_POST["phone"]);
    $gender = isset($_POST["gender"]) ? $_POST["gender"] : "";
    $interests = isset($_POST["interest"]) ? $_POST["interest"] : [];
    $subject = htmlspecialchars($_POST["subject"]);
    $message = htmlspecialchars($_POST["message"]);

    echo "<h2>Form Bilgileri</h2>";
    echo "Ad Soyad: $name <br>";
    echo "E-posta: $email <br>";
    echo "Telefon: $phone <br>";
    echo "Cinsiyet: $gender <br>";
    echo "İlgi Alanları: " . implode(", ", $interests) . "<br>";
    echo "Konu: $subject <br>";
    echo "Mesaj: $message <br>";
}
?>
