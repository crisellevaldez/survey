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
  }
  
  else {
    $data = array();

    //RESULT
    $sql = "SELECT SUM(answer) as result FROM answers GROUP BY user_id";
    $result = $conn->query($sql);

    $results = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $results[] = $row;
      }
      $data[0] = $results;
    }

    //AGE
    $sql = "SELECT TIMESTAMPDIFF(YEAR, dob, CURDATE()) AS age, count(*) as count  FROM users GROUP BY age ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $age = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $age[] = $row;
      }

      $data[1] = $age;
    }

    //GENDER
    $sql = "SELECT gender, count(*) as count  FROM users GROUP BY gender ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $gender = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $gender[] = $row;
      }
      $data[2] = $gender;
    }

    //YEAR LEVEL
    $sql = "SELECT year_level, count(*) as count  FROM users GROUP BY year_level ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $year_level = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $year_level[] = $row;
      }
      $data[3] = $year_level;
    }

    //COURSE
    $sql = "SELECT course, count(*) as count  FROM users GROUP BY course ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $course = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $course[] = $row;
      }
      $data[4] = $course;
    }

    //DEVICES
    $sql = "SELECT devices, count(*) as count  FROM answers_questions GROUP BY devices ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $devices = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $devices[] = $row;
      }
      $data[5] = $devices;
    }

    //SOCIALS
    $sql = "SELECT socials, count(*) as count  FROM answers_questions GROUP BY socials ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $socials = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $socials[] = $row;
      }
      $data[6] = $socials;
    }

    //ACCOUNTS
    $sql = "SELECT accts, count(*) as count  FROM answers_questions GROUP BY accts ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $accts = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $accts[] = $row;
      }
      $data[7] = $accts;
    }

    //TIME SPENT
    $sql = "SELECT time_q, count(*) as count  FROM answers_questions GROUP BY time_q ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $time_q = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $time_q[] = $row;
      }
      $data[8] = $time_q;
    }

    //FREQUENCY
    $sql = "SELECT frequency, count(*) as count  FROM answers_questions GROUP BY frequency ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $frequency = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $frequency[] = $row;
      }
      $data[9] = $frequency;
    }

    //ACCESS
    $sql = "SELECT access, count(*) as count  FROM answers_questions GROUP BY access ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $access = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $access[] = $row;
      }
      $data[10] = $access;
    }

    //USE (WAKE UP)
    $sql = "SELECT using_q, count(*) as count  FROM answers_questions GROUP BY using_q ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $using_q = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $using_q[] = $row;
      }
      $data[11] = $using_q;
    }

    //USE (SLEEP)
    $sql = "SELECT usings, count(*) as count  FROM answers_questions GROUP BY usings ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $usings = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $usings[] = $row;
      }
      $data[12] = $usings;
    }

    //PURPOSE
    $sql = "SELECT purpose, count(*) as count  FROM answers_questions GROUP BY purpose ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $purpose = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $purpose[] = $row;
      }
      $data[13] = $purpose;
    }

    //WILLLINGNESS
    $sql = "SELECT willingness, count(*) as count  FROM answers_questions GROUP BY willingness ORDER BY count(*) DESC";
    $result = $conn->query($sql);

    $willingness = array();
    if ($result->num_rows > 0) {
      while ($row = $result->fetch_assoc()) {
        $willingness[] = $row;
      }
      $data[14] = $willingness;
    }

    echo json_encode($data);
  }
}
