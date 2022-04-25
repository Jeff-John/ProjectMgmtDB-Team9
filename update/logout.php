<?php

session_start();

if(isset($_SESSION['login_id']))
{
    unset($_SESSION['login_id']);
    unset($_SESSION['username']);
}

header("Location: login.php");
die;