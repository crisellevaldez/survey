<?php
  session_start();
  if(isset($_SESSION['id'])){

    if($_SESSION['loa'] == 1){
        header('location: dashboard.php');
    }
    
    else{
        header('location: student-dashboard.php');
    }
    
  }
?>

<?php include 'templates/_resources.html'; ?>
<link rel="stylesheet" href="assets/css/sign-in.css">
<title> Sign In </title>

<!-- Login JS -->
<script src="assets/js/login.js"></script>
</head>

<body class="text-center">
    <?php include 'templates/_navbar.php'; ?>

    <!-- Section: Design Block -->
    <section class="">
        <!-- Jumbotron -->
        <div class="px-4 py-5 px-md-5 text-center text-lg-start" style="background-color: hsl(0, 0%, 96%)">
            <div class="container">
                <div class="row gx-lg-5 align-items-center">
                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <h1 class="my-5 display-3 fw-bold ls-tight">
                            Lorem Ipsum <br />
                            <span class="text-primary">dolor sit amet</span>
                        </h1>
                        <p style="color: hsl(217, 10%, 50.8%)">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                            quibusdam tempora at cupiditate quis eum maiores libero
                            veritatis? Dicta facilis sint aliquid ipsum atque?
                        </p>
                    </div>

                    <div class="col-lg-6 mb-5 mb-lg-0">
                        <div class="card">
                            <div class="card-body py-5 px-md-5">
                                <form class="needs-validation" novalidate>
                                    <!-- 2 column grid layout with text inputs for the first and last names -->
                                    <div class="row">
                                        <div class="col-md-12 mb-3">
                                            <h3> Sign In </h3>
                                            <p> Login to answer our survey. </p>
                                        </div>
                                    </div>

                                    <!-- Email input -->
                                    <div class="form-outline mb-2">
                                        <input type="email" id="email" placeholder="EMAIL ADDRESS" class="form-control pt-3 pb-3" required/>
                                        <div class="invalid-feedback text-start"> Please enter a valid email address.</div>
                                    </div>

                                    <!-- Password input -->
                                    <div class="form-outline mb-4">
                                        <input type="password" id="password" placeholder="PASSWORD" class="form-control pt-3 pb-3" required/>
                                        <div class="invalid-feedback text-start"> Please enter your password.</div>
                                    </div>

                                    <!-- Submit button -->
                                    <button type="submit" class="btn btn-primary btn-block mb-4 w-100 p-2">
                                        Sign In
                                    </button>

                                    <div class="text-end">
                                        <p class="m-0">Don't have an account?</p>
                                        <a href="sign-up.php" class="text-primary fw-semibold text-decoration-none"> SIGN UP NOW </a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Jumbotron -->
    </section>
    <!-- Section: Design Block -->
    <?php include 'templates/_footer.html'; ?>
</body>

</html>