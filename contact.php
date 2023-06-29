<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];

  // Perform any required validations or processing with the form data

  // Send an email to yourself with the form data
  $to = "sathyajain99@outlook.com"; // Update with your email address
  $subject = "New message from your portfolio website";
  $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
  $headers = "From: $email";

  if (mail($to, $subject, $body, $headers)) {
    echo "Message sent successfully!";
  } else {
    echo "Sorry, there was an error sending your message.";
  }
}
?>
