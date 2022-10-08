<main>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark p-3" aria-label="Offcanvas navbar large">
        <div class="container-fluid">
            <a class="navbar-brand" href="#"> </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar2"
                aria-controls="offcanvasNavbar2">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasNavbar2"
                aria-labelledby="offcanvasNavbar2Label">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Offcanvas</h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li class="nav-item">
                            <a class="nav-link active text-white" aria-current="page" href="login.php">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <?php if (isset($_SESSION['loa']) == 2) { ?>
                                <a class="nav-link text-white" href="student-dashboard.php">Dashboard</a>
                            <?php } else {?>
                                <a class="nav-link text-white" href="dashboard.php">Dashboard</a>
                            <?php } ?>
                        </li>
                        <?php if (isset($_SESSION['name'])) { ?>
        
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    <?php echo $_SESSION['name']; ?>
                                </a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item" href="#"> <i class="fa-solid fa-id-card-clip"></i> Profile </a></li>
                                    <li><a id="sign-out" class="dropdown-item" href="#"> <i class="fa-solid fa-right-from-bracket"></i> Sign Out </a></li>
                                </ul>
                            </li>
                        <?php } ?>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
</main>