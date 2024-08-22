<?php
require_once "db_connect.php";
    $id = $_GET['id'];
    $sql = "DELETE FROM employee WHERE id ='$id'";
     $result = $conn->query($sql);
     if ($result == TRUE) {
        header("Location: admintodo.php?page=1");
}else{
        echo "Error:" . $sql . "<br>" . $conn->error;
}
?>