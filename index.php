<?php
    session_start();
    require("private/autoload.php");
    //include("functions.php");

    $user_data = check_login($conn);
?>

<!doctype html>
<html class="no-js" lang="">

<head>
  <meta charset="utf-8">
  <meta name="description" content="">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <meta property="og:title" content="">
  <meta property="og:type" content="">
  <meta property="og:url" content="">
  <meta property="og:image" content="">

  <link rel="manifest" href="site.webmanifest">
  <link rel="apple-touch-icon" href="icon.png">
  <!-- Place favicon.ico in the root directory -->

  <link rel="stylesheet" href="css/normalize.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/Colab.css">
  <link rel="stylesheet" href="css/Tasks.css">
  <link rel="stylesheet" href="css/Chat.css">
  <link rel="stylesheet" href="css/Sidebar.css">
  <link rel="stylesheet" href="css/UserData.css">
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined">


  <meta name="theme-color" content="#fafafa">
</head>
<body>


  <div id="mySidebar" class="sidebar" onmouseover="toggleSidebar()" onmouseout="toggleSidebar()">
    <a href="#" onclick="openDat()"><span><i class="material-symbols-outlined md-36">
      monitoring</i><span class="icon-text">User Data</span></a>
    <a href="#" onclick="openCal()"><span><i class="material-symbols-outlined md-36">
      calendar_month</i><span class="icon-text">Calendar</span></a>
    <a href="#" onclick="openTeam()"><span><i class="material-symbols-outlined md-36">
      group</i><span class="icon-text">Teams</span></a>
    <table class="TaskList"></table>
  </div>

  <div id="main" class="viewport" >

    <div class="UserData" >
      <table class="UserData" ></table>
    </div>

    <div class="CalInput">
      <input type="text" placeholder="Add Title" class="calText">
      <input type="date" class="calDate">
      <input type="time" class="calTimeFrom">
      <p class="calP">-</p>
      <input type="time" class="calTimeTo">
      <select class="calTeam">
      </select>
      <input type="submit" class="calSub" onclick="calSub()">
    </div>

    <div class="TeamInput">
      <input type="text" placeholder="Add Title" class="TeamText">
      <input type="date" class="TeamDate">
      <input type="time" class="TeamTimeFrom">
      <p class="TeamP">-</p>
      <input type="time" class="TeamTimeTo">
      <input type="submit" class="TeamSub" onclick="TeamSub()">
    </div>

    <div class="calPage">
      <table class="calendar" ></table>
    </div>

  </div>

  <script src="js/Calendar.js"></script>
  <script src="js/Colab.js"></script>
  <script src="js/Tasks.js"></script>
  <script src="js/Chat.js"></script>
  <script src="js/Sidebar.js"></script>
  <script src="js/UserData.js"></script>
  <script src="js/NewTeams.js"></script>

  <script src="js/vendor/modernizr-3.11.2.min.js"></script>
  <script src="js/plugins.js"></script>


  <!-- Google Analytics: change UA-XXXXX-Y to be your site's ID. -->
<!--  <script>-->
<!--    window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;-->
<!--    ga('create', 'UA-XXXXX-Y', 'auto'); ga('set', 'anonymizeIp', true); ga('set', 'transport', 'beacon'); ga('send', 'pageview')-->
<!--  </script>-->
<!--  <script src="https://www.google-analytics.com/analytics.js" async></script>-->


</body>

</html>
