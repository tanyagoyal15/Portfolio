<?php
if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $sub = $_POST['subject'];
  $msg = $_POST['msg'];

  $to = 'tanyagoyal15@gmail.com';
  $subject = 'Form Submission';
  $message = 'Name:' .$name. "\n". "Phone: " .$phone. "\n". "Wrote the following: ". "\n\n".$msg;
  $headers = "From: ".$email;

  if(mail($to, $subject, $message, $headers)) {
    echo "<h1>Sent Succeessfully! Thank You"." ".$name.", We will contact you shortly!</h1>";
  }
  else {
    echo "Something went wrong!";
  }
}
?>