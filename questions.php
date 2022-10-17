<?php
session_start();
if (isset($_SESSION['id'])) {
    if ($_SESSION['loa'] == 2) {
        header('location: student-dashboard.php');
    }
} else {
    header('location: login.php');
}
?>

<?php include 'templates/_resources.html'; ?>

<link rel="stylesheet" href="assets/css/back-to-top.css">
<!-- Sort JS -->
<script src="assets/js/questions.js"></script>
<!-- Back To Top JS -->
<script src="assets/js/back-to-top.js"></script>
<title> Survey Questions </title>
</head>

<body class="bg-light">
    <?php include 'templates/_navbar.php'; ?>

    <div class="container bg-light mt-5" style="border-radius: 10px">
        <div class="row">
            <div class="col-12">
                <h3 class="mt-5"> Survey Questions </h1>
                    <p> To update the question content, fill out the fields and click the update button. </p>
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th scope="col">No.</th>
                                <th scope="col">Question</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
            </div>
        </div>
        <?php include 'templates/_back-to-top.html'; ?>
    </div>
    <?php include 'templates/_footer.html'; ?>
</body>

</html>