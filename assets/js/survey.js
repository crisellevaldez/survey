$(function () {

    Swal.fire({
        title: 'DISCLAIMER',
        text: `DISCLAIMER: This private information being input is strictly 
        confidential and solely for the use of research studies. The use of 
        data being provided may not be shared, reproduced or circulated 
        without your consent.`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Agree',
        customClass: {
            title: 'swal-title',
            text: 'swal-text'
        }
    }).then((result) => {
        if (result.isConfirmed) {

        }

        else {
            location.href = 'home.php';
        }
    })

    $.ajax({
        url: "assets/php/tables.php",
        method: "GET",
        success: function (res) {
            let questions = JSON.parse(res);
            let rows = "";
            for (let question of questions) {
                rows += `<tr> <td id="question-td"><div class="mx-0 mx-sm-auto">
                    <div class="text-start">
                        <p>
                            <strong>Q${question.order_by}:</strong>
                            <span class="fs-5"> ${question.question} </span>
                        </p>
                    </div>

                    <div class="text-center mb-3">
                        <div class="form-check form-check-inline">
                            <p> Strongly Disagree </p>
                            <input class="form-check-input" type="radio" name="question-${question.id}" value="1" required/>
                            <label class="form-check-label" for="inlineRadio1">1</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <p> Disagree </p>
                            <input class="form-check-input" type="radio" name="question-${question.id}" value="2" />
                            <label class="form-check-label" for="inlineRadio2">2</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <p> Neutral </p>
                            <input class="form-check-input" type="radio" name="question-${question.id}" value="3" />
                            <label class="form-check-label" for="inlineRadio3">3</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <p> Agree </p>
                            <input class="form-check-input" type="radio" name="question-${question.id}" value="4" />
                            <label class="form-check-label" for="inlineRadio4">4</label>
                        </div>

                        <div class="form-check form-check-inline">
                            <p> Strongly Agree </p>
                            <input class="form-check-input" type="radio" name="question-${question.id}" value="5" />
                            <label class="form-check-label" for="inlineRadio5">5</label>
                        </div>
                        <div class="invalid-feedback text-start"> Please enter your answer.</div>
                    </div>
                </div> </td> </tr>`;
            }

            $('#questions-con').html(rows);
        }
    });

    $('.needs-validation').on('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();
        if (this.checkValidity()) {

            let data = new FormData(this);
            $.ajax({
                url: "assets/php/survey.php",
                data: data,
                method: 'POST',
                contentType: false,
                processData: false,
                success: function (res) {
                    if (res == 1) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            showConfirmButton: false,
                            timer: 1500
                        })

                        setTimeout(function(){location.href = 'student-dashboard.php'}, 1500);
                    }
                }
            });
        }

        $(this).addClass('was-validated');
    })
})
