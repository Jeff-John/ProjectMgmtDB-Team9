<?php
$dbhost = "localhost";
$dbuser = "user1";
$dbpass = "Team9ProjectDB";
$dbname = "projmgmtdb";

if(!$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname)){

    die("failed to connect!");
}
