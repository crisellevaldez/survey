<?php include 'connection.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $stmt = $conn->prepare("SELECT id, firstname, lastname, middlename, dob, college, year_level, password, type FROM users WHERE email=?");
    $stmt->bind_param("s", $email);
    $stmt->execute();

    $stmt->bind_result($userId, $firstName, $lastName, $middleName, $dob, $college, $year_level, $hash, $type);
    $stmt->store_result();
    if($stmt->num_rows == 1) {
        if($stmt->fetch()) {
            if(password_verify($password, $hash)) {
                $_SESSION['id'] = $userId;
                $_SESSION['name'] = $firstName." ".$middleName." ".$lastName;
                $_SESSION['loa'] = $type;
                $_SESSION['college'] = $college;
                $_SESSION['year_level'] = $year_level;

                $from = new DateTime($dob);
                $to   = new DateTime('today');
                $age = $from->diff($to)->y;
                $_SESSION['age'] = $age;
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

