<?php
    session_start();
    require("private/autoload.php");
    //include("functions.php");

    $user_data = check_login($conn);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>My website</title>
</head>
<body>

    <a href="logout.php">Logout</a>
    <a href="#">Update</a>
    <h1 >This is the index page</h1>

    <br>
    Hello, <?php echo $user_data['username']; ?>


</body>
</html>