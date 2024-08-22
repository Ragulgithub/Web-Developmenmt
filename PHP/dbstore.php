<?php

// include the database connection file

require_once "db_connect.php";

// process form data 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
$title  = ucfirst( $_POST ['title']);
$description = ucfirst( $_POST ['description']);
$property = ucfirst( $_POST ['property']);
$status = ucfirst($_POST ['status']);
}

//SQL query to inset data into table 

$sql = "INSERT INTO tasks (taskname, taskdescription, assigneddate, status ) VALUES ('$title', '$description', '$property', '$status')";

if ($conn->query($sql) === TRUE) {
   header ("Location: listtodo.php");
   die();
} 
else {
    echo "Error: " .sql . "<br>" . $conn->error;
}

// Close the database 

$conn->close();

?>