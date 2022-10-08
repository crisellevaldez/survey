<?php include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {

  if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET["counts"])) {
    $sql = "SELECT COUNT(id) as count FROM users";
    $result = $conn->query($sql);

    $array = array();
    if ($result->num_rows > 0) {
      $data = array();
      $row = $result->fetch_assoc();

      $user = ['users' => $row];
      $array[0] = $user;
    }

    $sql = "SELECT COUNT(DISTINCT user_id) as count FROM answers";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      $data = array();
      $row = $result->fetch_assoc();

      $user = ['answers' => $row];
      $array[1] = $user;
    }

    echo json_encode($array);
  } else {

    $sql = "SELECT answers.answer, questions.question, questions.id, questions.order_by FROM answers RIGHT JOIN questions ON answers.question_id = questions.id ORDER BY questions.id";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
      $data = array();
      while ($row = $result->fetch_assoc()) {
        $data[] = $row;
      }

      echo json_encode($data);
    }
  }
}
