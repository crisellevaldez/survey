<?php include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
  $sql = "SELECT * FROM questions ORDER BY order_by";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    $questions = array();
    while($row = $result->fetch_assoc()) {
      $questions[] = $row;
    }

    echo json_encode($questions);
  } 
}

else if ($_SERVER['REQUEST_METHOD'] === 'POST') {

  $ques = $_POST['question'];
  $id = $_POST['id'];

  $stmt = $conn->prepare("UPDATE questions SET question=? WHERE id=?");
  $stmt->bind_param("si", $ques, $id);
  $result = $stmt->execute();
  
  if ($stmt->execute() === TRUE) {
    echo json_encode($_POST);
  } else {
    echo "Error updating record: " . $conn->error;
  }

}


