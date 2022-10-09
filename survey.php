<?php
session_start();
include 'assets/php/connection.php';
if (!isset($_SESSION['id'])) {
    header('location: login.php');
} else {
    $stmt = $conn->prepare("SELECT * FROM answers WHERE user_id=?");

    $stmt->bind_param("i", $_SESSION['id']);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows() > 0) {
        header('location: result.php');
    }
}

?>

<?php include 'templates/_resources.html'; ?>
<link rel="stylesheet" href="assets/css/back-to-top.css">
<title> Survey </title>

<!-- Survey JS -->
<script src="assets/js/survey.js"></script>
<!-- Back To Top JS -->
<script src="assets/js/back-to-top.js"></script>
</head>

<body class="text-center">
    <?php include 'templates/_navbar.php'; ?>

    <div class="container shadow-lg p-3">
        <div class="mx-0 mx-sm-auto">
            <div class="card mt-5">
                <form class="needs-validation" novalidate>
                    <div class="card-header">
                        <h5 class="card-title mt-2" id="exampleModalLabel">Answer the survey:</h5>
                    </div>
                    <div class="modal-body">
                        <div class="container p-5">
                            <div class="row">
                                <h5 class="mb-3"> Personal Information </h5>

                                <div class="col-md-12 mb-2 p-1">
                                    <div class="form-outline">
                                        <h6 class="text-start"> Full Name </h6>
                                        <input type="text" value="<?php echo $_SESSION['name']; ?>" class="form-control pt-2 pb-2" readonly />
                                    </div>
                                </div>

                                <div class="col-md-6 mb-2 p-1">
                                    <div class="form-outline">
                                        <h6 class="text-start"> Age </h6>
                                        <input type="tel" placeholder="CONTACT NO." name="contact-no" value="<?php echo $_SESSION["age"]; ?>" class="form-control pt-2 pb-2" />
                                    </div>
                                </div>

                                <div class="col-md-6 mb-2 p-1">
                                    <div class="form-outline">
                                        <h6 class="text-start"> GWA (Last Semester) </h6>
                                        <input type="text" placeholder="GWA" name="gwa" class="form-control pt-2 pb-2" required />
                                        <div class="invalid-feedback text-start"> Please enter your GWA.</div>
                                    </div>
                                </div>

                                <div class="col-md-6 p-1">
                                    <div class="form-outline">
                                        <h6 class="text-start"> COLLEGE </h6>
                                        <input type="text" value="<?php echo $_SESSION["college"]; ?>" class="form-control pt-2 pb-2" readonly />
                                    </div>
                                </div>

                                <div class="col-md-6 p-1">
                                    <div class="form-outline">
                                        <h6 class="text-start"> YEAR LEVEL </h6>
                                        <input type="text" value="<?php echo $_SESSION["year_level"]; ?>" class="form-control pt-2 pb-2" readonly />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr />

                        <!-- Insert Questions  -->
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12">
                                    <table class="table table-bordered table-striped">
                                        <thead>
                                            <tr>
                                                <br>
                                                <th id="question-th">
                                                    <h5> Answer the following question (Q1-Q20): <h5>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody id="questions-con">

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div class="card-footer text-end">
                        <?php if ($_SESSION['loa'] == 2) { ?>
                            <button type="submit" class="btn gradient-custom text-white">Submit</button>
                        <?php } ?>
                    </div>
                </form>
            </div>
        </div>

        <?php include 'templates/_back-to-top.html'; ?>
    </div>


    <?php include 'templates/_footer.html'; ?>
</body>

</html>