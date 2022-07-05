<?php
// Check for empty fields
if(empty($_POST['pickup']) || empty($_POST['passanger']) || empty($_POST['returns']) || empty($_POST['datepicker']) || empty($_POST['bname']) || empty($_POST['bphone']) || empty($_POST['bemail'])){
 echo json_encode(array('error'=>'true'));
 return false;
}
$pickup = $_POST['pickup'];
$returns = $_POST['returns'];
$datepicker = $_POST['datepicker'];
$bname = $_POST['bname'];
$passanger = $_POST['passanger'];
$bphone = $_POST['bphone'];
$bemail = $_POST['bemail'];
$to = 'info@abctravel.co.uk';
$to = 'sanbirtrading2016@gmail.com';
$email_subject = "Sub: Website Quote Request Form: $bname";
$email_body = "Greetings!\n\nYou have received a new Quote Request from your website's Home page Quote Form.\n"."Here are the details:\n\nApplication Name: $bname\nApplicant E-Mail: $bemail\nPhone / Telephone: $bphone\nNumber of Passengers: $passanger\nPickup Location: $pickup\nDrop off Location: $returns\nDate of Travel: $datepicker";
$headers = "From: noreply@abctravel.co.uk\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
echo json_encode(array('success'=>'true'));
return true;
?>
