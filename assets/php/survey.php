<?php include 'connection.php';
session_start();


$id = $_SESSION["id"];
$sql = "INSERT INTO answers (user_id, answer, question_id) VALUES (?, ?, ?)";
$sql1 = "INSERT INTO answers_questions (questions_id, devices, socials, accts, time_q, frequency, access, using_q, usings, purpose, willingness) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

for ($i=1; $i<=20; $i++) {
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isi", $id, $_SESSION['survey_data']["question-".$i], $i);

    if ($stmt->execute() === TRUE) {
        $result = 1;
    } else {
        $result = $conn->error;
    }
}

$questions_id = mysqli_insert_id($conn);
$devices = $socials = "";


for ($i=0; $i < count($_POST["devices"]); $i++) {
    $devices .= $_POST["devices"][$i]." ";
}

for ($i=0; $i < count($_POST["socials"]); $i++) {
    $socials .= $_POST["socials"][$i]." ";
}

$stmt = $conn->prepare($sql1);
$stmt->bind_param("issssssssss", $questions_id, $devices, $socials, $_POST["accts"], $_POST["time"], $_POST["frequency"], $_POST["access"], $_POST["using"], $_POST["usings"], $_POST["purpose"], $_POST["willingness"]);

if ($stmt->execute() === TRUE) {
    $result = 1;
} else {
    $result = $conn->error;
}

echo $result;