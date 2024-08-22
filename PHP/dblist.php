<?php

require_once "db_connect.php";
$sql="SELECT * FROM tasks ORDER BY created_at DESC limit 10";


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
        <td>".$user['taskname']."</td>
        <td>";
        $string = $user['taskdescription'];
       // Conditionally display the string

        if (strlen($string) <= 10) {
            echo $string;
        } else {
            echo substr($string, 0, 10) . '...';
        }

        echo "</td>
        <td>".$user['assigneddate']."</td>
        <td>".$user['status']."</td>
        </tr>";
        $i++;
    
    }
}
else{
    echo"No Record Found";
}

// print_r($data)

$conn->close();