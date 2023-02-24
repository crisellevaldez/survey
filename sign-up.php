<?php
session_start();
if (isset($_SESSION['id'])) {

    if ($_SESSION['loa'] == 1) {
        header('location: dashboard.php');
    } else {
        header('location: student-dashboard.php');
    }
}
?>

<?php include 'templates/_resources.html'; ?>
<link rel="stylesheet" href="assets/css/sign-up.css">
<link rel="stylesheet" href="assets/css/forms.css">
<title> Sign Up </title>

<style>
    input, select {
        border: 1px solid rgba(0, 0, 0, 0.546) !important;
    }

    .content {
        min-height: calc(100% - 100px);
        padding-bottom: 100px;
    }
</style>

<!-- Sign Up JS -->
<script src="assets/js/sign-up.js"></script>
</head>

<body class="text-center">
    <?php include 'templates/_navbar.php'; ?>

    <section class="h-100 content">
        <div class="container py-5 h-100">
            <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col">
                    <div class="card card-registration my-4" style="border: 1px solid rgba(0, 0, 0, 0.546);">
                        <form class="needs-validation" novalidate>
                            <div class="row g-0">
                                <div class="col-xl-6">
                                    <div class="card-body p-md-5 text-black">
                                        <h3> Sign Up </h3>
                                        <div class="row">
                                            <h5 class="mb-3"> Personal Information </h5>
                                            <div class="col-md-4 mb-2 p-1">
                                                <div class="form-outline">
                                                    <input type="text" placeholder="FIRST NAME" name="first-name" class="form-control pt-2 pb-2" style="border: 1px solid rgba(0, 0, 0, 0.546);"required />
                                                    <div class="invalid-feedback text-start"> Please enter your first name.</div>
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-2 p-1">
                                                <div class="form-outline">
                                                    <input type="text" placeholder="MIDDLE NAME" name="middle-name" class="form-control pt-2 pb-2" />
                                                </div>
                                            </div>
                                            <div class="col-md-4 mb-2 p-1">
                                                <div class="form-outline">
                                                    <input type="text" placeholder="LAST NAME" name="last-name" class="form-control pt-2 pb-2" required />
                                                    <div class="invalid-feedback text-start"> Please enter your last name.</div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 mb-2 p-1">
                                                <div class="form-outline">
                                                    <h6 class="text-start"> Date of Birth </h6>
                                                    <input type="date" placeholder="Date of Birth" name="dob" class="form-control pt-2 pb-2" required />
                                                    <div class="invalid-feedback text-start"> Please enter your date of birth.</div>
                                                </div>
                                            </div>

                                            <div class="col-md-6 mb-2 p-1">
                                                <div class="form-outline">
                                                    <h6 class="text-start"> Gender </h6>
                                                    <select class="form-select pt-2 pb-2 mb-2" name="gender" required>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                        <option value="Others">Others</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-md-6 mb-2 p-1">
                                                <div class="form-outline">
                                                    <input type="tel" placeholder="CONTACT NO." name="contact-no" maxlength="11" pattern="09[0-9]{9}" class="form-control pt-2 pb-2" required />
                                                    <div class="invalid-feedback text-start"> Please enter a valid contact no.</div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 mb-2 p-1">
                                                <div class="form-outline">
                                                    <input type="text" placeholder="ADDRESS" name="address" class="form-control pt-2 pb-2" required />
                                                    <div class="invalid-feedback text-start"> Please enter your address.</div>
                                                </div>
                                            </div>

                                            <div class="col-md-12 mb-2 p-1">
                                                <div class="form-outline">
                                                    <input type="email" placeholder="EMAIL" name="email" class="form-control pt-2 pb-2" required />
                                                    <div class="invalid-feedback text-start"> Please enter a valid email address.</div>
                                                </div>
                                            </div>
                                            <div class="col-md-12 mb-2 p-1">
                                                <div class="form-outline">
                                                    <input type="password" placeholder="PASSWORD" name="password" class="form-control pt-2 pb-2" required />
                                                    <div class="invalid-feedback text-start"> Please enter a pasword.</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6">
                                    <div class="card-body p-md-5 text-black">
                                        <div class="row">
                                            <h5 class="mb-3"> School Information </h5>

                                            <div class="col-md-12 mb-2 p-1">
                                                <div class="form-outline">
                                                    <h6 class="text-start"> College </h6>
                                                    <input class="form-control" type="text" value="CICT" name="college" required readonly>
                                                </div>
                                            </div>

                                            <div class="col-md-6 mb-2 p-1">
                                                <div class="form-outline">
                                                    <h6 class="text-start"> Course </h6>
                                                    <select class="form-select pt-2 pb-2 mb-2" id="course" name="course" required>
                                                        <option value="BSIT">BSIT</option>
                                                        <option value="BLIS">BLIS</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-md-6 mb-2 p-1">
                                                <div class="form-outline">
                                                    <h6 class="text-start"> Year Level </h6>
                                                    <select class="form-select pt-2 pb-2 mb-2" id="year-level" name="year-level" required>
                                                        <option value="1">1st Year</option>
                                                        <option value="2">2nd Year</option>
                                                        <option value="3">3rd Year</option>
                                                        <option value="4">4th Year</option>
                                                    </select>
                                                </div>
                                            </div>

                                            <div class="col-md-12 mb-2 p-1">
                                                <div class="form-outline">
                                                    <h6 class="text-start"> COR </h6>
                                                    <input class="form-control" type="file" name="cor" required>
                                                </div>
                                            </div>

                                            <div class="col-md-12 mb-2 p-1">
                                                <button type="submit" class="btn gradient-custom text-white btn-block mb-4 w-100 p-2">
                                                    Sign Up
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <?php include 'templates/_footer.html'; ?>
</body>

</html>