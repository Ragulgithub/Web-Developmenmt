<?php
require_once "db_connect.php";
$page = $_GET['page'];
$offset = ($page-1)*5;
$sql="SELECT * FROM employee ORDER BY created_at DESC limit 5 OFFSET $offset";
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
        <td>".$user['Firstname']." ".$user["Lastname"]."</td>
        <td>".$user['status']."</td> 
        <td><button class='btn3'><a href='editemployee.php?id=$user[ID]' >"."Edit"."</a></button>
        <button class='btn4'><a href='delete.php?id=$user[ID]' onclick='popup()'>"."Delete"."</a></button></td>
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