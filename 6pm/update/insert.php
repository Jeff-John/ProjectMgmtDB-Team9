<?php
require("private/autoload.php");

    $projdesc = $_REQUEST['projdesc'];
    $sql = "INSERT INTO projects (project_desc) VALUES ('$projdesc')";
    if(mysqli_query($conn, $sql)){
        echo "<h3>data stored in a database successfully.</h3>"; 
    } else{
        echo "ERROR: Sorry $sql. ". mysqli_error($conn);
    }
?>