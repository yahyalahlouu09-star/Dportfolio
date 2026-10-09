<?php
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: index.html');
    exit;
}

$name = trim($_POST['name'] ?? '');
$business = trim($_POST['business'] ?? '');
$phone = trim($_POST['phone'] ?? '');
$city = trim($_POST['city'] ?? '');
$message = trim($_POST['message'] ?? '');
$replyEmail = '[REPLACE: your-email@example.com]';
$fromMail = '[REPLACE: noreply@yourdomain.com]';

if (empty($name) || empty($phone) || empty($message)) {
    header('Location: index.html?success=0');
    exit;
}

$to = '[REPLACE: your-email@example.com]';
$subject = 'New website inquiry from ' . $name;

$body = "Name: $name\n";
$body .= "Business: $business\n";
$body .= "Phone: $phone\n";
$body .= "City: $city\n\n";
$body .= "Project details:\n$message\n";

$headers = "From: $fromMail\r\n";
$headers .= "Reply-To: $replyEmail\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

mail($to, $subject, $body, $headers);
header('Location: index.html?success=1');
exit;
