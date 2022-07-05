<?php
if(empty($_POST['name']) || empty($_POST['email']) || empty($_POST['phone']) || !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
 echo json_encode(array('error'=>'true'));
 return false;
}
$name = $_POST['name'];   
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$message = $_POST['message'];
$subject = $_POST['subject'];
$subjects = ($_POST['user-subject'] ? $_POST['subject'] : "Sub: Website Contact Form: $name");
$to = 'sanbirtrading2016@gmail.com'; 
$to = 'info@abctravel.co.uk'; 
$email_subject = $subjects;
$email_body = "Greetings!\n\nYou have received a new message from your website's Contact form.\n\n"."Here are the details:\n\nName: $name\nEmail: $email_address\nPhone: $phone\nSubject: $subject\nMessage: $message";
$headers = "From: noreply@abctravel.co.uk\n"; 
$headers .= "Reply-To: $email_address"; 
mail($to,$email_subject,$email_body,$headers);
echo json_encode(array('success'=>'true'));
return true;
?>