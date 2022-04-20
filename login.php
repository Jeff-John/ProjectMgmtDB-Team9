<?php
session_start();
    require("private/autoload.php");
    //include("functions.php");


    if($_SERVER['REQUEST_METHOD'] == "POST")
    {
        //something was posted
    $username =  $_POST['uname'];
    $p_word =  $_POST['psw'];

    if(!empty($username) && !empty($p_word) && !is_numeric($username))
    {
        //read from the database
        //$login_id = random_num(20);
        $query = "SELECT * FROM employee_login WHERE username = '$username' limit 1";

        $result = mysqli_query($conn, $query);

        if($result)
        {
            if ($result && mysqli_num_rows($result) > 0)
            {
                $user_data = mysqli_fetch_assoc($result);
                if ($user_data['password'] === $password)
                {

                    $_SESSION['login_id'] = $user_data['login_id'];
                    header("Location: index.php");
                    die;
                }
            }
        }
        echo "Wrong username or password!";

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

  input[type=text], input[type=password] {
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
  margin: 15px 500px 0;
  float:none;
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
    <h2>Login</h2>

    <form method="post">

    <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required>   

        <button type="submit">Login</button>
        <label>
        <input type="checkbox" checked="checked" name="remember"> Remember me
        </label>
    </div>

    <div class="container" style="background-color:#f1f1f1">
        <button type="button" class="cancelbtn">Cancel</button>
        <span class="signup">Don't have an account? <a href="signup.php">Signup now</a></span>
        <span class="psw">Forgot <a href="#">password?</a></span>
    </div>
    </form>    
    
</body>
</html>