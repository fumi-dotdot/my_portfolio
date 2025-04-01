<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["your-name"];
    $email = $_POST["your-mail"];
    $inquiry = implode(", ", $_POST["form-checkbox"]);
    $content = $_POST["your-content"];

    // Replace with the recipient email
    $to = "watanaf9184@gmail.com";
    $subject = "New Inquiry Received";
    $message = "Name: $name\nEmail: $email\nInquiry: $inquiry\nContent:\n$content";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Message sent successfully!";
    } else {
        echo "Failed to send the message.";
    }
}
?>

