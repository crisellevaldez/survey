<?php include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, firstname, lastname, middlename, password FROM users WHERE email=?");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $stmt->bind_result($userId, $firstName, $lastName, $middleName, $hash);
    $stmt->store_result();
    if($stmt->num_rows == 1) {
        if($stmt->fetch()) {
            if(password_verify($password, $hash)) {
                echo 1;
            } else {
                echo 0;
            }
        }
    } else {
        echo 0;
    }
}