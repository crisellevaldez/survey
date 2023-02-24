$(document).ready(function () {

    $('#course').change(function () {
        var selectedValue = $(this).val();
        if (selectedValue == 'BLIS') {
            $('#year-level').html(
                `<option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>`
            );
        } else {
            $('#year-level').html(
                `<option value="1">1st Year</option>
                <option value="2">2nd Year</option>
                <option value="3">3rd Year</option>
                <option value="4">4th Year</option>`
            );
        }
    });


    $('.needs-validation').on('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.checkValidity()) {

            let data = new FormData(this);
            $.ajax({
                url: "assets/php/sign-up.php",
                data: data,
                method: 'POST',
                contentType: false,
                processData: false,
                success: function (res) {
                    if (res == 1) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: "Sign Up Success",
                            showConfirmButton: false,
                            timer: 1500
                        })

                        setTimeout(function () { location.href = 'login.php' }, 1500);
                    }

                    else {
                        Swal.fire(
                            'Error',
                            'Email is already existing. \nPlease choose another email.',
                            'error'
                        )
                    }
                }
            });
        }

        $(this).addClass('was-validated');
    })
})