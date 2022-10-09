
$(document).ready(function () {

    let ex = [];
    $("#export").on("click", function (e) {

        let row = ``;
        console.log(ex);
        for (datum of ex) {
            row += `<tr>
                <td>${datum.question}</td>
                <td>${datum.one}</td>
                <td>${datum.two}</td>
                <td>${datum.three}</td>
                <td>${datum.four}</td>
                <td>${datum.five}</td>
            </tr>`
        }

        row += `</div> </body> </html>`;
        var myWindow = window.open();
        myWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
        
        <!-- Bootstrap -->
        <link rel="stylesheet" href="assets/css/styles.css">
        <link rel="stylesheet" href="assets/dist/bootstrap-v5.2.2/css/bootstrap.min.css">

        <!-- JQuery -->
        <script src="assets/dist/jquery/jquery-3.6.1/jquery-3.6.1.min.js"></script>
        <script src="assets/dist/jquery/jquery-ui-1.13.2.custom/jquery-ui.min.js"></script>
        </head>
        <body> <div class="container">
        <button id="export" onclick="exportTableToExcel('tblData', 'report')" class="btn gradient-custom text-white w-25 d-block float-end"> Export XLS </button> </p>
            <table class="table" id="tblData">
                <thead>
                    <tr>
                        <th scope="col">Question</th>
                        <th scope="col">Strongly Disagree</th>
                        <th scope="col"> Disagree</th>
                        <th scope="col"> Neutral</th>
                        <th scope="col"> Agree </th>
                        <th scope="col"> Strongly Agree </th>
                    </tr>
                </thead>
                <tbody>
                    ${row}
                </tbody>
            </table> </div> <script> 
            function exportTableToExcel(tableID, filename = ''){
                var downloadLink;
                var dataType = 'application/vnd.ms-excel';
                var tableSelect = document.getElementById(tableID);
                var tableHTML = tableSelect.outerHTML.replace(/ /g, '%20');
                
                // Specify file name
                filename = filename?filename+'.xls':'excel_data.xls';
                
                // Create download link element
                downloadLink = document.createElement("a");
                
                document.body.appendChild(downloadLink);
                
                if(navigator.msSaveOrOpenBlob){
                    var blob = new Blob(['\ufeff', tableHTML], {
                        type: dataType
                    });
                    navigator.msSaveOrOpenBlob( blob, filename);
                }else{
                    // Create a link to the file
                    downloadLink.href = 'data:' + dataType + ', ' + tableHTML;
                
                    // Setting the file name
                    downloadLink.download = filename;
                    
                    //triggering the function
                    downloadLink.click();
                }
            }
            </script> </body> </html>`);
    });

    $.ajax({
        url: "assets/php/charts.php",
        method: "GET",
        data: {
            counts: 1
        },
        success: function (res) {
            let data = JSON.parse(res);
            $('#ttl-users').html(data[0].users.count);
            $('#ttl-answers').html(data[1].answers.count);
        }
    });

    $.ajax({
        url: "assets/php/charts.php",
        method: "GET",
        success: function (res) {

            let one = 0, two = 0, three = 0, four = 0, five = 0;
            var barColors = [
                "#b91d47",
                "#00aba9",
                "#2b5797",
                "#e8c3b9",
                "#1e7145"
            ];
            var xValues = ["Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree"];
            let prevId = 0;
            let data = JSON.parse(res);
            for (datum of data) {

                if (datum.answer == 1) {
                    one++;
                }

                else if (datum.answer == 2) {
                    two++;
                }

                else if (datum.answer == 3) {
                    three++;
                }

                else if (datum.answer == 4) {
                    four++
                }

                else if (datum.answer == 5) {
                    five++;
                }

                
                if (datum.id != prevId) {
                    $('#chart').append(`<div class="col-lg-4 col-md-6 mb-5"> <p class="text-start"> <b> Q${datum.order_by}: </b> ${datum.question} <canvas id="myChart-${datum.id}" style="width:100%;max-width:600px"></canvas> </div>`);
                    var yValues = [one, two, three, four, five];

                    new Chart("myChart-" + datum.id, {
                        type: "pie",
                        data: {
                            labels: xValues,
                            datasets: [{
                                backgroundColor: barColors,
                                data: yValues
                            }]
                        }
                    });

                    let array = {
                        question: datum.question,
                        one: one,
                        two: two,
                        three: three,
                        four: four,
                        five: five
                    }

                    ex.push(array);

                    one = 0, two = 0, three = 0, four = 0, five = 0;
                }

                prevId = datum.id;
            }

        }
    });


});