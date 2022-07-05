<?php
if(empty($_POST['name']) || empty($_POST['phone']) || empty($_POST['email']) || empty($_POST['date_of_travel']) || empty($_POST['pickup']) || empty($_POST['destination']) || !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL)){
 echo json_encode(array('error'=>'true'));
 return false;
}
$name = $_POST['name'];
$phone = $_POST['phone'];
$email_address = $_POST['email'];
$date_of_travel = $_POST['date_of_travel'];
$request_type = $_POST['request_type'];
$passanger = $_POST['passanger'];
$luggage = $_POST['luggage'];
$vehicle = $_POST['vehicle'];
$trip = $_POST['trip'];
$pickup = $_POST['pickup'];
$destination = $_POST['destination'];
$return_date = $_POST['return_date'];
$return_pickup = $_POST['return_pickup'];
$return_destination = $_POST['return_destination'];
$flight = $_POST['flight'];
$message = $_POST['message'];
$subjects = ($_POST['subject'] ? $_POST['subject'] : "Sub: Website Booking/Quotation Request: $name");
$to = 'info@abctravel.co.uk'; 
$to = 'sanbirtrading@gmail.com';
$email_subject = $subjects;
$email_body = "Greetings!\n\nYou have received a an Apply Request from your website's Booking/Quotation Form.\n"."Here are the details:\n\nApplicant Name: $name\nPhone / Telephone: $phone\nEmail Address: $email_address\nDate of Travel: $date_of_travel\nApply Request Type: $request_type\nNumber of Passangers: $passanger\nLuggage Cases: $luggage\nVehicle Type: $vehicle\nTrip Type: $trip\nPick up Address: $pickup\nDestination Address: $destination\nReturn Date of Travel: $return_date\nReturn Pick up Address: $return_pickup\nReturn Destination Address: $return_destination\nFlight Number: $flight\nMessage: $message";
$headers = "From: noreply@abctravel.co.uk\n";
$headers .= "Reply-To: $email_address";
mail($to,$email_subject,$email_body,$headers);
echo json_encode(array('success'=>'true'));
return true;
?>
