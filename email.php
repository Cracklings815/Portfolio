<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "llemitllemit15@gmail.com"; // Replace with your actual email
    $subject = "New Message from Portfolio Contact Form";
    $email = $_POST["contact-email"];
    $message = $_POST["message"];

    $headers = "From: $email\r\n"; // Set the "From" header

    if (mail($to, $subject, $message, $headers)) {
        http_response_code(200); // Success
    } else {
        http_response_code(500); // Error
    }
}
