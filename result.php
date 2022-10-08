<?php
session_start();
include 'assets/php/connection.php';
if (!isset($_SESSION['id'])) {
    header('location: login.php');
}

else { 
    $stmt = $conn->prepare("SELECT * FROM answers WHERE user_id=?");

    $stmt->bind_param("i", $_SESSION['id']);
    $stmt->execute();
    $stmt->store_result();

    if($stmt->num_rows() < 1){
        header('location: survey.php');
    }
}

?>

<?php include 'templates/_resources.html'; ?>
<link rel="stylesheet" href="assets/css/back-to-top.css">
<link rel="stylesheet" href="assets/css/circle.css">
<title> Results </title>

<!-- Results JS -->
<script src="assets/js/results.js"></script>

<!-- Back To Top JS -->
<script src="assets/js/back-to-top.js"></script>
</head>

<body class="text-center bg-white">
    <?php include 'templates/_navbar.php'; ?>

    <div class="container mt-5">
        <div class="row">

        </div>
        <?php include 'templates/_back-to-top.html'; ?>
    </div>
    <?php include 'templates/_footer.html'; ?>
</body>

</html>