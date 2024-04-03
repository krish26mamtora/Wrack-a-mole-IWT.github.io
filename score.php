<?php

if(isset($_POST['add'])){

    $link = mysqli_connect("localhost", "root","", "iwt_game");
 
    if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}   
        
$_name = $_POST['playername'];
echo $_name;
$sql = "INSERT INTO `score_info` (`name`, `score`) VALUES ('$_name', '0');";

if(mysqli_query($link, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($link);
}
 
// Close connection
mysqli_close($link);
}
?>