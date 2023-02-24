<?php include 'connection.php';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $stmt = $conn->prepare("SELECT answers.id, answers.user_id, users.firstname, users.lastname, users.middlename, users.gender, users.college, users.course, users.year_level FROM answers INNER JOIN users ON users.id = answers.user_id INNER JOIN questions ON questions.id = answers.question_id");
    $stmt->execute();

    $result = $stmt->get_result();
    $array = array();
    $array2 = array();
    $count = $count1 = 1;

    while ($row = $result->fetch_assoc()) {
        $array[] = $row;

        if ($count % 20 == 0){
            $index = (int) $count1 * 19;
            $stmt1 = $conn->prepare("SELECT * FROM answers_questions WHERE questions_id=?");
            $stmt1->bind_param("i", $row["id"]);
            $stmt1->execute();

            $result1 = $stmt1->get_result();
            while ($row1 = $result1->fetch_assoc()) {
                $array2[] = $row1;
            }
            $count1++;
        }
        $count++;
        
    }

    $array1 = array();
    $id = 0;
    for($x = 0; $x < count($array); $x++){
        if ($id != $array[$x]["user_id"]){
            $stmt = $conn->prepare("SELECT SUM(answer) as result FROM answers WHERE user_id=?");
            $stmt->bind_param("i", $array[$x]["user_id"]);
            $stmt->execute();

            $result = $stmt->get_result(); // get the mysqli result
            $results = $result->fetch_assoc(); // fetch data  
            $array1[] = $results;
        }

    }

    $reports = array();
    $reports[0] = $array;
    $reports[1] = $array1;
    $reports[2] = $array2;
    echo json_encode($reports);
}
