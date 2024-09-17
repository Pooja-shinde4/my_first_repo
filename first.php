<?php
echo "DB Connection";
$server="Localhost";
$username="root";
$pass="";

$conn=mysqli_connect($server,$username,$pass);
if(!$conn)
 die("sry fail to connect".mysqli_connect_error());
else
echo "Connection done";
 $q='show databases';
 $res=mysqli_query($conn,$q);
 echo var_dump($res);

 if(!$res){
    echo "not";
 }
 else echo "done";

 echo "<br>";
 $qry='use student';
 $result=mysqli_query($conn,$qry);
 

echo "<br>";
 $qr='select * from student_info';
 $result=mysqli_query($conn,$qr);
 
 echo var_dump($result);
?>