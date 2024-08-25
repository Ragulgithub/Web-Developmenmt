<?php
require "connection.php";
$id = $_GET['id'];
$sql= "DELETE FROM user_list WHERE id=$id";
if ($conn->query($sql) === TRUE) {
   
}
else{

    echo "error:" . $sql . "<br>" . $conn->error;

}


?>