<?php include 'connection.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, firstname, lastname, middlename, password, type FROM users WHERE email=?");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $stmt->bind_result($userId, $firstName, $lastName, $middleName, $hash, $type);
    $stmt->store_result();
    if($stmt->num_rows == 1) {
        if($stmt->fetch()) {
            if(password_verify($password, $hash)) {
                $_SESSION['id'] = $userId;
                $_SESSION['name'] = $firstName." ".$middleName." ".$lastName;
                $_SESSION['loa'] = $type;
                echo 1;
            } else {
                echo 0;
            }
        }
    } else {
        echo 0;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    session_destroy();
    echo 1;
}

