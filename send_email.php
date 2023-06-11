<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "sinfia@gmail.com";
    $subject = "Access Request";
    $email = $_POST["email"];
    $message = $_POST["message"];
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email. Please try again.";
    }
}
?>
