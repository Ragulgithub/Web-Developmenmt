<?php
require_once "../database/connection.php";
$page = $_GET['page'];
$offset = ($page-1)*5;
$sql="SELECT * FROM user_list ORDER BY created_at DESC limit 5 OFFSET $offset";
$data = $conn->query($sql);
$i=1;

if ($data === FALSE ){
    echo "ERROR" . $conn->error;
}
elseif ($data->num_rows > 0){

    foreach($data as $user) {
    
     echo "
        <tr>
        <td>".$i."</td>
        <td>".$user['firstname']." ".$user["lastname"]."</td>
        <td>".$user['email']."</td> 
        <td>".$user['status']."</td> 
        <td><button class='btn btn-success'><a class='text-light' href='../database/db_edit.php?id=" .$user['id']."' >"."Edit"."</a></button>
        <button class='btn btn-danger text-light remove' value='$user[id]'>Delete</button></td>
        </tr>
        ";
        $i++;
    
    }
}
else{
    echo"No Record Found";
}

// print_r($data)

$conn->close();