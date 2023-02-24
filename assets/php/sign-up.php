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
$gender = $_POST['gender'];
$course = $_POST['course'];
$hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);
$type = 2;

$target_dir = "../../uploads/cor/";
$fileName = basename($firstname.$lastname.$_FILES["cor"]["name"]);
$target_file = $target_dir.$fileName;
if (move_uploaded_file($_FILES["cor"]["tmp_name"], $target_file)) {
    $stmt = $conn->prepare("INSERT INTO users (firstname, lastname, middlename, dob, gender, contact, address, email, college, course, year_level, cor, password, type) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssssssssssissi", $firstname, $lastname, $middlename, $dob, $gender, $contact, $address, $email, $college, $course, $yearlevel, $fileName, $hashed_password, $type);

    if ($stmt->execute() === TRUE) {
        echo 1;
    } else {
        echo "Error Sign Up: " . $conn->error;
    }
}

$conn->close();
