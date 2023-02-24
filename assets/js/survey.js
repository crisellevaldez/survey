$(document).ready(function () {

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
            location.href = 'index.php';
        }
    })

    $.ajax({
        url: "assets/php/tables.php",
        method: "GET",
        success: function (res) {
            let questions = JSON.parse(res);
            let rows = "";
            let count = 1;
            for (let question of questions) {

                if (count == 1) {
                    rows += `<tr> <td><div class="mx-0 mx-sm-auto"> <h6> <img src="./assets/imgs/facebook.png" width="25"> Facebook  </h6> </div> </td>
                    </tr>`;
                }

                else if (count == 6) {
                    rows += `<tr> <td><div class="mx-0 mx-sm-auto"> <h6> <img src="./assets/imgs/twitter.png" width="25"> Twitter  </h6> </div> </td>
                    </tr>`;
                }

                else if (count == 11) {
                    rows += `<tr> <td><div class="mx-0 mx-sm-auto"> <h6> <img src="./assets/imgs/youtube.png" width="25"> Youtube  </h6> </div> </td>
                    </tr>`;
                }

                else if (count == 16) {
                    rows += `<tr> <td><div class="mx-0 mx-sm-auto"> <h6> <img src="./assets/imgs/tiktok.png" width="25"> Tiktok  </h6> </div> </td>
                    </tr>`;
                }
                rows += `<tr> <td id="question-td"><div class="mx-0 mx-sm-auto">

                
                    <div class="text-start">
                        <p>
                            <strong>Q${question.order_by}:</strong>
                            <span class="fs-5"> ${question.question} </span>
                        </p>
                    </div>

                    <div class="text-start mb-3">
                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="question-${question.id}" name="question-${question.id}" value="1" required/>
                        <label class="form-check-label" for="question-${question.id}"> 1 Strongly Disagree </label>
                        </div>
                        <br>

                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="question-${question.id}" name="question-${question.id}" value="2" />
                        <label class="form-check-label" for="question-${question.id}"> 2 Disagree </label>
                        </div>
                        <br>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="question-${question.id}" name="question-${question.id}" value="3" />
                            <label class="form-check-label" for="question-${question.id}"> 3 Neutral </label>
                        </div>
                        <br>

                        <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="question-${question.id}" name="question-${question.id}" value="4" />
                        <label class="form-check-label" for="question-${question.id}"> 4 Agree </label>
                        </div>
                        <br>

                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="radio" id="question-${question.id}" name="question-${question.id}" value="5" />
                            <label class="form-check-label" for="question-${question.id}"> 5 Strongly Agree </label>
                            <div class="invalid-feedback text-start"> Please choose your answer.</div>
                        </div>
                    </div>
                </div> 
                
                
                </td> </tr>`;
                count++;
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
                url: "assets/php/survey-next.php",
                data: data,
                method: 'POST',
                contentType: false,
                processData: false,
                success: function (res) {
                        $('.card').html(`<form class="next needs-validation" novalidate>
                        <div class="card-header">
                            <h5 class="card-title mt-2" id="exampleModalLabel">Answer the survey:</h5>
                        </div>
                        <div class="modal-body">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-12">
    
                                        <table class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <br>
                                                    <th>
                                                        <h5> Answer the following question (Q1-Q10): <h5>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
    
                                            </tbody>
                                        </table>
    
                                        <table class="table table-bordered table-striped">
                                            <tr>
                                                <td id="question-td">
                                                    <div class="mx-0 mx-sm-auto">
                                                        <div class="text-start">
                                                            <p>
                                                                <strong>Q1:</strong>
                                                                <span class="fs-5"> The device used to access social media. </span>
                                                            </p>
                                                        </div>
                                                        <div class="text-start mb-3">
                                                            <div class="form-check form-check-inline">
                                                                <input class="devices form-check-input" type="checkbox" id="C-s" name="devices[]" value="Smartphone" required />
                                                                <label class="form-check-label" for="device-s"> Smartphone </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="devices form-check-input" type="checkbox" id="device-l" name="devices[]" value="Laptop" required/>
                                                                <label class="form-check-label" for="device-l"> Laptop </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="devices form-check-input" type="checkbox" id="device-t" name="devices[]" value="Tablet" required/>
                                                                <label class="form-check-label" for="device-t"> Tablet </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="devices form-check-input" type="checkbox" id="device-d" name="devices[]" value="Desktop" required/>
                                                                <label class="form-check-label" for="device-d"> Desktop </label>
                                                                <div class="invalid-feedback text-start"> Please choose your answer.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td id="question-td">
                                                    <div class="mx-0 mx-sm-auto">
                                                        <div class="text-start">
                                                            <p>
                                                                <strong>Q2:</strong>
                                                                <span class="fs-5"> Types of social media. </span>
                                                            </p>
                                                        </div>
                                                        <div class="text-start mb-3">
                                                            <div class="form-check form-check-inline">
                                                                <input class="socials form-check-input" type="checkbox" id="social-fb" name="socials[]" value="Facebook" required/>
                                                                <label class="form-check-label" for="social-fb"> Facebook </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="socials form-check-input" type="checkbox" id="social-twt" name="socials[]" value="Twitter" required/>
                                                                <label class="form-check-label" for="social-twt"> Twitter </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="socials form-check-input" type="checkbox" id="social-yt" name="socials[]" value="Youtube" required />
                                                                <label class="form-check-label" for="social-yt"> Youtube </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="socials form-check-input" type="checkbox" id="social-tk" name="socials[]" value="Tiktok" required/>
                                                                <label class="form-check-label" for="social-tk"> Tiktok </label>
                                                                <div class="invalid-feedback text-start"> Please choose your answer.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td id="question-td">
                                                    <div class="mx-0 mx-sm-auto">
                                                        <div class="text-start">
                                                            <p>
                                                                <strong>Q3:</strong>
                                                                <span class="fs-5"> Number of social media accounts. </span>
                                                            </p>
                                                        </div>
                                                        <div class="text-start mb-3">
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="accts-0" name="accts" value="0" required />
                                                                <label class="form-check-label" for="accts-0"> 0 </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="accts-1" name="accts" value="1" required />
                                                                <label class="form-check-label" for="accts-1"> 1 </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="accts-2" name="accts" value="2 to 4" required />
                                                                <label class="form-check-label" for="accts-2"> 2 to 4 </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="accts-5" name="accts" value="More than 5" required />
                                                                <label class="form-check-label" for="accts-5"> More than 5 </label>
                                                                <div class="invalid-feedback text-start"> Please choose your answer.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td id="question-td">
                                                    <div class="mx-0 mx-sm-auto">
                                                        <div class="text-start">
                                                            <p>
                                                                <strong>Q4:</strong>
                                                                <span class="fs-5"> Time spent on social media daily. </span>
                                                            </p>
                                                        </div>
                                                        <div class="text-start mb-3">
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="time-min" name="time" value="30 minutes to 1 hour" required />
                                                                <label class="form-check-label" for="time-min"> 30 minutes to 1 hour </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="time-2" name="time" value="2-5 hours" required />
                                                                <label class="form-check-label" for="time-2"> 2-5 hours </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="time-5" name="time" value="More than 5 hours" required />
                                                                <label class="form-check-label" for="time-5"> More than 5 hours </label>
                                                                <div class="invalid-feedback text-start"> Please choose your answer.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td id="question-td">
                                                    <div class="mx-0 mx-sm-auto">
                                                        <div class="text-start">
                                                            <p>
                                                                <strong>Q5:</strong>
                                                                <span class="fs-5"> Frequency of following social media daily. </span>
                                                            </p>
                                                        </div>
                                                        <div class="text-start mb-3">
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="frequency-n" name="frequency" value="Not daily" required />
                                                                <label class="form-check-label" for="frequency-n"> Not daily </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="frequency-10" name="frequency" value="1-10 times a day" required />
                                                                <label class="form-check-label" for="frequency-10"> 1-10 times a day </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="frequency-M" name="frequency" value="More than 10 times a day" required />
                                                                <label class="form-check-label" for="frequency-M"> More than 10 times a day </label>
                                                                <div class="invalid-feedback text-start"> Please choose your answer.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td id="question-td">
                                                    <div class="mx-0 mx-sm-auto">
                                                        <div class="text-start">
                                                            <p>
                                                                <strong>Q6:</strong>
                                                                <span class="fs-5"> Accessing social media. </span>
                                                            </p>
                                                        </div>
                                                        <div class="text-start mb-3">
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="access-f" name="access" value="During free time" required />
                                                                <label class="form-check-label" for="access-f"> During free time </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="access-a" name="access" value="Any spare moment" required />
                                                                <label class="form-check-label" for="access-a"> Any spare moment </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="access-u" name="access" value="While at university" required />
                                                                <label class="form-check-label" for="access-u"> While at university </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="access-S" name="access" value="During social occasions" required />
                                                                <label class="form-check-label" for="access-S"> Any spare moment </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="access-m" name="access" value="Mealtime" required />
                                                                <label class="form-check-label" for="access-m"> Mealtime </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="access-l" name="access" value="During lectures" required />
                                                                <label class="form-check-label" for="access-l"> During lecture </label>
                                                                <div class="invalid-feedback text-start"> Please choose your answer.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td id="question-td">
                                                    <div class="mx-0 mx-sm-auto">
                                                        <div class="text-start">
                                                            <p>
                                                                <strong>Q7:</strong>
                                                                <span class="fs-5"> Using social media just after waking up. </span>
                                                            </p>
                                                        </div>
                                                        <div class="text-start mb-3">
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="using-yes" name="using" value="Yes" required />
                                                                <label class="form-check-label" for="using-no"> Yes </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="using-no" name="using" value="No" required />
                                                                <label class="form-check-label" for="using-no"> No </label>
                                                                <div class="invalid-feedback text-start"> Please choose your answer.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td id="question-td">
                                                    <div class="mx-0 mx-sm-auto">
                                                        <div class="text-start">
                                                            <p>
                                                                <strong>Q8:</strong>
                                                                <span class="fs-5"> Using social media just before sleep. </span>
                                                            </p>
                                                        </div>
                                                        <div class="text-start mb-3">
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="usings-yes" name="usings" value="Yes" required />
                                                                <label class="form-check-label" for="usings-yes"> Yes </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="usings-no" name="usings" value="No" required />
                                                                <label class="form-check-label" for="usings-no"> No </label>
                                                                <div class="invalid-feedback text-start"> Please choose your answer.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td id="question-td">
                                                    <div class="mx-0 mx-sm-auto">
                                                        <div class="text-start">
                                                            <p>
                                                                <strong>Q9:</strong>
                                                                <span class="fs-5"> Purposes of using social media. </span>
                                                            </p>
                                                        </div>
                                                        <div class="text-start mb-3">
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="purpose-c" name="purpose" value="Communicating with friends" required />
                                                                <label class="form-check-label" for="purpose-c"> Communicating with friends </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="purpose-e" name="purpose" value="Entertainment" required />
                                                                <label class="form-check-label" for="purpose-e"> Entertainment </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="purpose-o" name="purpose" value="Online learning" required />
                                                                <label class="form-check-label" for="purpose-o"> Online learning </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="purpose-n" name="purpose" value="News" required />
                                                                <label class="form-check-label" for="purpose-n"> News </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="purpose-r" name="purpose" value="Reading information" required />
                                                                <label class="form-check-label" for="purpose-r"> Reading information </label>
                                                            </div>
                                                            <br>
    
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="purpose-p" name="purpose" value="Passing time" required />
                                                                <label class="form-check-label" for="purpose-p"> Passing time </label>
                                                                <div class="invalid-feedback text-start"> Please choose your answer.</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
    
                                            <tr>
                                                <td id="question-td">
                                                    <div class="mx-0 mx-sm-auto">
                                                        <div class="text-start">
                                                            <p>
                                                                <strong>Q10:</strong>
                                                                <span class="fs-5"> Willingness to use social media for academic purposes. </span>
                                                            </p>
                                                        </div>
                                                        <div class="text-start mb-3">
                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="willingness-1" name="willingness" value="1" required/>
                                                                <label class="form-check-label" for="willingness-1"> 1 Strongly Disagree </label>
                                                            </div>
                                                            <br>

                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="willingness-2" name="willingness" value="2" />
                                                                <label class="form-check-label" for="willingness-2"> 2 Disagree </label>
                                                            </div>
                                                            <br>

                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="willingness-3" name="willingness" value="3" />
                                                                <label class="form-check-label" for="willingness-3"> 3 Neutral </label>
                                                            </div>
                                                            <br>

                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="willingness-4" name="willingness" value="4" />
                                                                <label class="form-check-label" for="willingness-4"> 4 Agree </label>
                                                            </div>
                                                            <br>

                                                            <div class="form-check form-check-inline">
                                                                <input class="form-check-input" type="radio" id="willingness-5" name="willingness" value="5" />
                                                                <label class="form-check-label" for="willingness-5"> 5 Strongly Agree </label>
                                                                <div class="invalid-feedback text-start"> Please choose your answer.</div>
                                                            </div>

                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
    
                                        </table>
                                    </div>
                                </div>
    
                            </div>
                            <div class="card-footer text-end">
                                    <button type="submit" class="btn gradient-custom text-white">Submit</button>
                            </div>
                            </form>`)

                            const form = document.querySelector('form');
                            const checkboxes = form.querySelectorAll('.devices');
                        
                            checkboxes.forEach((checkbox) => {
                                checkbox.addEventListener('click', validateCheckboxes);
                            });

                            function validateCheckboxes() {
                                const checked = [...checkboxes].some((checkbox) => checkbox.checked);
                                checkboxes.forEach((checkbox) => {
                                    if (checked) {
                                    checkbox.removeAttribute('required');
                                    } else {
                                    checkbox.setAttribute('required', '');
                                    }
                                });
                            }

                            const checkboxes1 = form.querySelectorAll('.socials');
                        
                            checkboxes1.forEach((checkbox) => {
                                checkbox.addEventListener('click', function(){
                                    const checked = [...checkboxes1].some((checkbox) => checkbox.checked);
                                    checkboxes1.forEach((checkbox) => {
                                        if (checked) {
                                        checkbox.removeAttribute('required');
                                        } else {
                                        checkbox.setAttribute('required', '');
                                        }
                                    });
                                });
                            });
                    
                }
            });
        }

        $(this).addClass('was-validated');
    })

    $('.card').on('submit', '.next', function (e) {
        e.preventDefault();
        e.stopPropagation();

        console.log(this)
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

                        setTimeout(function(){location.href = 'result.php'}, 1500);
                    }
                }
            }); 
        }

        $(this).addClass('was-validated');
    })

    
})