<?php
require("private/autoload.php");

$result = mysqli_query($conn, "SELECT employee_fname FROM employee_info");

//storing in array
$data = array();
while ($row = mysqli_fetch_assoc($result))
{
    $data[] = $row;
}
// returning response in JSOn format
echo json_encode($data);