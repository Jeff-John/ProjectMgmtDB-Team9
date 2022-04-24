<?php
require("private/autoload.php");

$result = mysqli_query($conn, "SELECT task_desc FROM task");

//storing in array
$data = array();
while ($row = mysqli_fetch_assoc($result))
{
    $data[] = $row;
}
// returning response in JSOn format
echo json_encode($data);