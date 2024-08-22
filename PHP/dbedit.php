<?php
require_once "db_connect.php";
$id = $_GET['id'];
if($_SERVER["REQUEST_METHOD"]=="POST"){

   $firstname= ucfirst($_POST["fname"]);
   $lastname=ucfirst($_POST["lname"]);

   $sql = "UPDATE employee SET firstname='$firstname', lastname='$lastname' WHERE ID='$id' ";


if($conn->query($sql)===TRUE){
   header("Location: admintodo.php?page=1");
}
else{
   echo"Error".$sql. "<br>" .$conn->error;
}

}
$conn->close();


?>