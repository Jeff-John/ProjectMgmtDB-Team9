<?php
session_start();
    require("private/autoload.php");
    //include("functions.php");

   if($_SERVER['REQUEST_METHOD'] == "POST")
   {
       //something was posted
      $fname = $_POST['fname'];
      $minit = $_POST['minit'];
      $lname = $_POST['lname'];
      $phone = $_POST['tel'];
      $address = $_POST['addr'];
      $city = $_POST['city'];
      $state = $_POST['state'];
      $dob = $_POST['dob'];
      $username =  $_POST['uname'];
      $p_word =  $_POST['psw'];
      $email = $_POST['email'];
      if(!preg_match("/^[\w\-]+@[\w\-]+.[\w\-]+$/", $email))
      {
          $Error = "Please enter a valid email!";
      }
      if(!empty($username) && !empty($p_word) && !is_numeric($username))
      {
        //save to database
        $employee_id = random_num(5);
        $query = "INSERT INTO employee_login (username, p_word) VALUES ('$username', '$p_word') ;
         INSERT INTO employee_info (employee_id, employee_fname, employee_minit, employee_lname, employee_phone, employee_email, employe_address, employee_city, employee_state, employee_dob) 
         VALUES ('$employee_id', '$fname', '$minit', '$lname', '$phone', '$email', '$address', '$city', '$state', '$dob');";
                         
        mysqli_multi_query($conn, $query);
        header("Location: login.php");
        die;

      }
      else
      {
          echo "Please enter valid information!";
      }
      


   }

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <title>Login</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style>
  body {font-family: Arial, Helvetica, sans-serif;}
  form {border: 3px solid #f1f1f1;}

  input[type=text], input[type=password], input[type=email], input[type=tel], input[type=date] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

button {
  background-color: #04AA6D;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

button:hover {
  opacity: 0.8;
}

.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

.container {
  padding: 16px;
}

span.psw {
  float: right;
  padding-top: 16px;
}
.signup {
  margin: 15px;
  float:right;
  text-align: center;
  width: auto;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
     display: block;
     float: none;
  }
  .cancelbtn {
     width: 100%;
  }
}


</style>
</head>
<body>
    <h2>Signup</h2>

    <form method="post">
    <div><?php 
        if(isset($Error) && $Error != "")
        {
            echo $Error;
        }
        ?>
    </div>
    <div class="container">

        <label for="fname"><b>First Name</b></label>
        <input type="text" placeholder="Enter First Name" name="fname" required>

        <label for="minit"><b>Middle Initial</b></label>
        <input type="text" placeholder="Enter Middle Initial" name="minit" required>

        <label for="lname"><b>Last Name</b></label>
        <input type="text" placeholder="Enter Last Name" name="lname" required>

        <label for="tel"><b>Phone Number</b></label>
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Enter Phone # (Ex: 123-456-7890)" name="tel" required>

        <label for="addr"><b>Home Address</b></label>
        <input type="text" placeholder="Enter Home Address" name="addr" required>

        <label for="city"><b>City</b></label>
        <input type="text" placeholder="Enter City" name="city" required>

        <label for="state"><b>State</b></label>
        <input type="text" placeholder="Enter State" name="state" required>

        <label for="dob"><b>Date Of Birth</b></label>
        <input type="date" placeholder="Enter DOB (Format: MM-DD-YYYY)" name="dob" required>

        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Create Username" name="uname" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Create Password" name="psw" required>

        <label for="email"><b>Email</b></label>
        <input type="email" placeholder="Enter Email" name="email" required>
                    

        <button type="submit">Signup</button>
        <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
        <button type="button" class="cancelbtn">Cancel</button>
        <span class="signup"><a href="login.php">Click to Login</a></span>
    </div>
    </form>    
    
</body>
</html>