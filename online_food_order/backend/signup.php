<?php
include 'db.php';

$name = $_POST['f_name'];
$email = $_POST['email'];
$password = $_POST['psw'];
$contact = $_POST['contact'];

$sql = "INSERT INTO users (name, email, password, contact) 
VALUES ('$name', '$email', '$password', '$contact')";

if ($conn->query($sql) === TRUE) {
    header("Location: ../signsuccess.html");
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>