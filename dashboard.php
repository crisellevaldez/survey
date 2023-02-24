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
                <div class="card border-left-primary h-100 py-2" style="border: 1px solid black; border-radius: 5px;">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold btn-custom text-uppercase mb-1">
                                    <h6> Total Users </h6> </div>
                                <div id="ttl-users" class="h5 mb-0 font-weight-bold text-gray-800"></div>
                            </div>
                            <div class="col-auto">
                                <i class="fa-solid fa-2x fa-user btn-custom"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-xl-6 col-md-6 mb-4">
                <div class="card border-left-success h-100 py-2" style="border: 1px solid black; border-radius: 5px;">
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
                <a href="questions.php" class="btn gradient-custom text-white w-100 mt-2 p-2"> View Questions</a>
            </div>

            <div class="col-lg-6 mt-3">
                <p class="fw-semibold"> To view the survey. Click the button below. </br> (Admin cannot answer the survey).
                <a href="survey.php" class="btn gradient-custom text-white w-100 mt-2 p-2"> View Survey </a>
            </div>
        </div>

        <div class="row mt-5 pt-5 bg-light mb-5" style="border: 1px solid black; border-radius: 5px;">
            <h3> Chart Reports </h3>
            <p class="mb-5"> Below are the chart reports of the data. These data are from the registred users. 
            <button id="export" class="btn gradient-custom text-white w-25 d-block float-end"> Export </button> </p>
            <div id="chart" class="d-flex justify-content-center align-items-center mb-5">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4 mb-5">
                            <h5> Survey Results </h5>
                            <canvas id="myChart" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-5">
                            <h5> Users Age </h5>
                            <canvas id="chartAge" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-5">
                            <h5> Users Gender </h5>
                            <canvas id="chartGender" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-5">
                            <h5> Users Year Level </h5>
                            <canvas id="chartYearLevel" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <h5> Users Course </h5>
                            <canvas id="chartCourse" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <h5> Users Devices </h5>
                            <canvas id="chartDevices" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <h5> Users Social Media Accounts </h5>
                            <canvas id="chartSocials" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <h5> Users No. of Accounts </h5>
                            <canvas id="chartAccounts" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <h5> Users Time Spent </h5>
                            <canvas id="chartTimeSpent" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <h5> Users Frequency </h5>
                            <canvas id="chartFrequency" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <h5> Users Access </h5>
                            <canvas id="chartAccess" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <h5> Users Use (Wake Up) </h5>
                            <canvas id="chartWU" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <h5> Users Use (Before Sleep) </h5>
                            <canvas id="chartBS" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <h5> Users Purpose </h5>
                            <canvas id="chartPurpose" ></canvas>
                        </div>

                        <div class="col-lg-4 mb-4">
                            <h5> Users Williness </h5>
                            <canvas id="chartWillingness" ></canvas>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <?php include 'templates/_back-to-top.html'; ?>
    </div>

    <?php include 'templates/_footer.html'; ?>

</body>

</html>