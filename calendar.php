<?php 

    // MySQLi  connect to database

    $conn = mysqli_connect('localhost', 'user1', 'Team9ProjectDB', 'projmgmtdb');
    
    // check connection
    if(!$conn){
        echo 'Connection error: ' . mysqli_connect_error();
    } else {
        echo 'Connection successful!';
    }

    // write query for all employee_info
    $sql = 'SELECT employee_fname, employee_lname, employee_jobtitle FROM employee_info';

    // make query & get results
    $result = mysqli_query($conn, $sql);

    // fetch the resulting rows as an array
    $employee_info = mysqli_fetch_all($result, MYSQLI_ASSOC);


    // free result from memory
    mysqli_free_result($result);

    // close connection to database
    mysqli_close($conn);

    print_r($employee_info);




?>

<!DOCTYPE html>
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

  <meta name="theme-color" content="#fafafa">
</head>


<body>

  <div class="viewport">
    <table class="calendar"></table>
    <script src="js/main.js"></script>
  </div>




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