<?php
//getting data from database
require("private/autoload.php");
//getting data from employee_info table
$result = mysqli_query($conn, "SELECT * FROM employee_info");

//storing in array
$data = array();
while ($row = mysqli_fetch_assoc($result))
{
    $data[] = $row;
}
// returning response in JSONformat
echo json_encode($data);