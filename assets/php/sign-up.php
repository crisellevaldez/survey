<?php include 'connection.php';

$firstname = $_POST['first-name'];
$lastname = $_POST['last-name'];
$middlename = $_POST['middle-name'];
$email = $_POST['email'];
$password = $_POST['password'];
$contact = $_POST['contact'];
$address = $_POST['address'];
$hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$type = 2;

$stmt = $conn->prepare("INSERT INTO users (firstname, lastname, middlename, contact, address, email, password, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("sssssssi", $firstname, $lastname, $middlename, $contact, $address, $email, $hashed_password, $type);


$stmt->execute();

echo "New records created successfully";

$conn->close();
?>