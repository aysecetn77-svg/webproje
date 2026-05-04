<?php

$ogrenciNo = "b251210017";
$ogrenciMail = $ogrenciNo . "@sakarya.edu.tr";

$username = isset($_POST["username"]) ? $_POST["username"] : "";
$password = isset($_POST["password"]) ? $_POST["password"] : "";

if (strtolower($username) === strtolower($ogrenciMail) && strtolower($password) === strtolower($ogrenciNo)) {

    echo "<h2>Hoşgeldiniz " . strtoupper($ogrenciNo) . "</h2>";
    echo "<p>3 saniye içinde Ana Sayfa'ya yönlendirileceksiniz...</p>";
    header("refresh:3;url=../index.html");
} else {

    echo "<h2>Hatalı kullanıcı adı veya şifre!</h2>";
    echo "<p>3 saniye içinde tekrar Login sayfasına yönlendirileceksiniz...</p>";
    header("refresh:3;url=../login.html");
}
?>
