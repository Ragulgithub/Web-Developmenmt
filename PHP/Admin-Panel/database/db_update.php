<?php
require_once "connection.php";
$id = $_GET['id'];
if($_SERVER["REQUEST_METHOD"]=="POST"){

   $firstname= ucfirst($_POST["fname"]);
   $lastname=ucfirst($_POST["lname"]);
   $email=ucfirst($_POST["email"]);
  



   $sql = "UPDATE user_list SET firstname='$firstname', lastname='$lastname',email='$email' WHERE id='$id'";


if($conn->query($sql)===TRUE){
   header("Location: ../User/tables-data.php?page=1");
}
else{
   echo"Error".$sql. "<br>" .$conn->error;
}

}
$conn->close();


?>