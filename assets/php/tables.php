<?php include 'connection.php';

$sql = "SELECT * FROM questions ORDER BY order_by";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  $questions = array();
  while($row = $result->fetch_assoc()) {
    $questions[] = $row;
  }

  echo json_encode($questions);
} 

$conn->close();