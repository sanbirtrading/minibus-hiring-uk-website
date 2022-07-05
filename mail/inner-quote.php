<?php
// Check for empty fields
if(empty($_POST['name']) || empty($_POST['phone']) || empty($_POST['email']) || empty($_POST['subject']) || empty($_POST['service']) || empty($_POST['message']) || !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
 echo json_encode(array('error'=>'true'));
 return false;
}
$name = $_POST['name'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$service = $_POST['service'];
$phone = $_POST['phone'];
$subject = ($_POST['user-subject'] ? $_POST['subject'] : "Sub: Website Inner Quote Form: $name");
$to = 'info@abctravel.co.uk'; 
$to = 'sanbirtrading@gmail.com';
$email_subject = $subject;
$email_body = "Greetings!\n\nYou have received a new message from your website's Inner Quote Form.\n"."Here are the details:\n\nName: $name\nEmail: $email_address\nPhone: $phone\nService Catergory: $service\nSubject: $subject\nMessage: $message";
$headers = "From: noreply@abctravel.co.uk\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
echo json_encode(array('success'=>'true'));
return true;
?>
