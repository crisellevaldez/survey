<?php include 'connection.php';

$firstname = $_POST['first-name'];
$lastname = $_POST['last-name'];
$middlename = $_POST['middle-name'];
$email = $_POST['email'];
$password = $_POST['password'];
$contact = $_POST['contact-no'];
$address = $_POST['address'];
$college = $_POST['college'];
$yearlevel = $_POST['year-level'];
$dob = $_POST['dob'];
$hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$type = 2;

$stmt = $conn->prepare("INSERT INTO users (firstname, lastname, middlename, dob, contact, address, email, college, year_level, password, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssssssisi", $firstname, $lastname, $middlename, $dob, $contact, $address, $email, $college, $yearlevel, $hashed_password, $type);


if ($stmt->execute() === TRUE) {
    echo 1;
} else {
    echo "Error Sign Up: " . $conn->error;
}

$conn->close();
