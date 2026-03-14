<?php
include 'db.php';

$food_name = $_POST['food_name'];
$price = $_POST['price'];

$user_email = "guest@example.com";

$sql = "INSERT INTO orders (user_email, food_name, quantity, total_price) 
VALUES ('$user_email', '$food_name', 1, '$price')";

if ($conn->query($sql) === TRUE) {
    echo "<h2 style='color:green'>Order placed successfully!</h2>";
    echo "<a href='../menu.html'>Back to Menu</a>";
} else {
    echo "Error: " . $conn->error;
}

$conn->close();
?>