<?php
session_start();
if (isset($_SESSION['id'])) {
    if ($_SESSION['loa'] == 1) {
        header('location: dashboard.php');
    }
} else {
    header('location: login.php');
}
?>

<?php include 'templates/_resources.html'; ?>
<title> Dashboard </title>

</head>

<body class="text-center">
    <?php include 'templates/_navbar.php'; ?>

    <div class="container mt-5">
        <div class="row">
            <div class="col-12 mt-3">
                <p class="fw-semibold"> To view the survey results. Click the button below. (Note: You will be redirected to survey page if you don't have results yet).
                <a href="result.php" class="btn btn-primary w-75 mt-2 p-2"> View Survey/Results </a>
            </div>
    </div>
    <?php include 'templates/_footer.html'; ?>
</body>

</html>