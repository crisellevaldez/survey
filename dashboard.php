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
<!-- Back To Top JS -->
<script src="assets/js/back-to-top.js"></script>
<title> Dashboard </title>

<!-- Charts JS -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/3.9.1/chart.min.js" integrity="sha512-ElRFoEQdI5Ht6kZvyzXhYG9NqjtkmlkfYk0wr6wHxU9JEHakS7UJZNeml5ALk+8IKlU6jDgMabC3vkumRokgJA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
<script src="assets/js/charts.js"></script>
</head>

<body class="text-center">
    <?php include 'templates/_navbar.php'; ?>

    <div class="container mt-5">
        <div class="row">
            <div class="col-xl-6 col-md-6 mb-4">
                <div class="card border-left-primary shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                    <h6> Total Users </h6> </div>
                                <div id="ttl-users" class="h5 mb-0 font-weight-bold text-gray-800"></div>
                            </div>
                            <div class="col-auto">
                                <i class="fa-solid fa-2x fa-user text-primary"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-6 col-md-6 mb-4">
                <div class="card border-left-success shadow h-100 py-2">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                    <h6> Total Answers </h6> </div>
                                <div id="ttl-answers" class="h5 mb-0 font-weight-bold text-gray-800"></div>
                            </div>
                            <div class="col-auto">
                                <i class="fa-solid fa-square-poll-horizontal fa-2x text-success"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-6 mt-3">
                <p class="fw-semibold"> To view all the questions. Click the button below. (Admin can also update the survey questions if necessary).
                <a href="questions.php" class="btn btn-primary w-100 mt-2 p-2"> View Questions</a>
            </div>

            <div class="col-lg-6 mt-3">
                <p class="fw-semibold"> To view the survey. Click the button below. </br> (Admin cannot answer the survey).
                <a href="survey.php" class="btn btn-primary w-100 mt-2 p-2"> View Survey </a>
            </div>
        </div>

        <div class="row mt-5 shadow-lg pt-5 bg-light " style="border-radius: 10px" id="chart">
            <h3> Survey Results </h3>
            <p class="mb-5"> Below are the results of the survey per question. These data are from the users who answered the survey. 
            <button id="export" class="btn gradient-custom text-white w-25 d-block float-end"> Export </button> </p>
        </div>
       
        <?php include 'templates/_footer.html'; ?>
        <?php include 'templates/_back-to-top.html'; ?>
    </div>

</body>

</html>