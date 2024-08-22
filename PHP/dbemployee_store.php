<?php

// include the database connection file

require_once "db_connect.php";

// process form data 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$firstname  = ucfirst( $_POST ['fname']);
$lastname = ucfirst( $_POST ['lname']);
$password = ucfirst( $_POST ['password']);
$hash = password_hash($password,PASSWORD_DEFAULT);
}

//SQL query to inset data into table 

$sql = "INSERT INTO employee (Firstname, Lastname, Pass ) VALUES ('$firstname', '$lastname', '$hash')";

if ($conn->query($sql) === TRUE) {
   header ("Location:admintodo.php?page=1");
   die();
} 
else {
    echo "Error: " .sql . "<br>" . $conn->error;
}

// Close the database 

$conn->close();

?>