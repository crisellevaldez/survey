<?php include 'connection.php';
session_start();


$id = $_SESSION["id"];
$usage = 1;
$gwa = $_POST["gwa"];
$param1 = "";
$param2 = "";
$sql = "INSERT INTO answers (user_id, answer, usage_time, gwa, question_id) VALUES (?, ?, ?, ?, ?)";

for ($i=1; $i<=20; $i++) {

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("isidi", $id, $_POST["question-".$i],$usage,$gwa,$i);

    if ($stmt->execute() === TRUE) {
        $result = 1;
    } else {
        $result = $conn->error;
}


}

echo $result;



