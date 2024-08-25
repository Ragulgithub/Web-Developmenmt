<?php
require_once "connection.php" ;

if ($_SERVER["REQUEST_METHOD"]==="POST") {
$fname =  ucfirst ($_POST ['fname']);
$lname = ucfirst  ($_POST['lname']);
$email =  $_POST['email'];
$password = $_POST['password'];
$hash= password_hash($password,PASSWORD_DEFAULT);




$sql = "INSERT INTO user_list(firstname,lastname,email,password) VALUES('$fname','$lname','$email','$hash')";

if ($conn->query($sql) === TRUE) {
   
    header("Location:../User/tables-data.php?page=1");
}
else{

    echo "error:" . $sql . "<br>" . $conn->error;

}

}

$conn->close();
?>