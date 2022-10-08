$(document).ready(function(){
    $('.needs-validation').on('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.checkValidity()) {
            let email = $('#email').val();
            let password = $('#password').val();
            $.ajax({
                url: "assets/php/login.php",
                method: "POST",
                data: {
                    email: email,
                    password: password
                },
                success: function(res){
                    if (res == 1){
                        location.href = 'dashboard.php';
                    }

                    else {
                        Swal.fire(
                            'Error',
                            'Email/Password is wrong.',
                            'error'
                          )
                    }
                }
            });
        }
  
        $(this).addClass('was-validated');
    })
})