function percentage(size, data) {
    let per = data / size;
    per = per * 100;
    return per;
}

$(document).ready(function () {

    $("#export").on("click", function (e) {
        let data = "";
        $.ajax({
            url: "assets/php/reports.php",
            method: "GET",
            success: function (res) {
                data = JSON.parse(res);
                let row = `<tr>`;
                console.log(data)
                let id = 0;
                let count = 0, count1 = 0, count2 = 0;

                for (datum of data[0]) {
                    if (id != datum.user_id) {
                        row += `
                            <td>${datum.firstname}</td>
                            <td>${datum.middlename}</td>
                            <td>${datum.lastname}</td>
                            <td>${datum.gender}</td>
                            <td>${datum.college}</td>
                            <td>${datum.course}</td>
                            <td>${datum.year_level}</td>`
                    }

                    count++;
                    if (count == 20) {
                        let sumRes = data[1][count1].result;
                        let msg1 = "";

                        if (sumRes >= 60) {
                            msg1 = "Digital Literate";
                        }

                        else if (sumRes >= 40) {
                            msg1 = "Customary Literate";
                        }

                        else if (sumRes >= 0) {
                            msg1 = "Digital Illiterate";
                        }
                        row += `<td>${sumRes}</td>`
                        row += `<td>${msg1}</td>`
                        row += `<td>${data[2][count1].devices}</td>
                        <td>${data[2][count1].socials}</td>
                        <td>${data[2][count1].accts}</td>
                        <td>${data[2][count1].time_q}</td>
                        <td>${data[2][count1].frequency}</td>
                        <td>${data[2][count1].access}</td>
                        <td>${data[2][count1].using_q}</td>
                        <td>${data[2][count1].usings}</td>
                        <td>${data[2][count1].purpose}</td>
                        <td>${data[2][count1].willingness}</td></tr><tr>`

                        count = 0;
                        count1++;
                        count2++;
                    }
                    id = datum.user_id;
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

                        <style>
                        .table-responsive::-webkit-scrollbar {
                            -webkit-appearance: none;
                        }
                        
                        .table-responsive::-webkit-scrollbar:vertical {
                            width: 12px;
                        }
                        
                        .table-responsive::-webkit-scrollbar:horizontal {
                            height: 12px;
                        }
                        
                        .table-responsive::-webkit-scrollbar-thumb {
                            background-color: rgba(0, 0, 0, .5);
                            border-radius: 10px;
                            border: 2px solid #ffffff;
                        }
                        
                        .table-responsive::-webkit-scrollbar-track {
                            border-radius: 10px;  
                            background-color: #ffffff; 
                        }
                        </style>

                        <!-- JQuery -->
                        <script src="assets/dist/jquery/jquery-3.6.1/jquery-3.6.1.min.js"></script>
                        <script src="assets/dist/jquery/jquery-ui-1.13.2.custom/jquery-ui.min.js"></script>


                    </head>
                    <body> <div class="container">
                    <button id="export" onclick="exportTableToExcel('tblData', 'report')" class="btn btn-primary text-white w-25 d-block mt-5"> Export XLS </button>
                    <br>
                    <div class="table-responsive" style="overflow-x:scroll;">   
                        <table class="table" id="tblData">
                            <thead>
                                <tr>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Middle Name</th>
                                    <th scope="col"> Last Name</th>
                                    <th scope="col"> Gender</th>
                                    <th scope="col"> College </th>
                                    <th scope="col"> Course </th>
                                    <th scope="col"> Year Level </th>
                                    <th scope="col"> Total </th>
                                    <th scope="col"> Result </th>

                                    <th scope="col"> Devices </th>
                                    <th scope="col"> Socials </th>
                                    <th scope="col"> No. of Accounts </th>
                                    <th scope="col"> Time Spent </th>
                                    <th scope="col"> Frequency </th>
                                    <th scope="col"> Access </th>
                                    <th scope="col"> Use (Wake Up) </th>
                                    <th scope="col"> Use (Before Sleep) </th>
                                    <th scope="col"> Purpose </th>
                                    <th scope="col"> Willingness </th>

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
            }
        });


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

            if (res.length == 0) {
                $('#myChart').remove();
                $('#chart').after(`<h5 class="mb-5"> No data </h5>`);
            }

            else {
                let one = 0, two = 0, three = 0;
                var barColors = [
                    "#b91d47",
                    "#00aba9",
                    "#2b5797"
                ];
                var xValues = ["Digital Literate", "Customary Literate", "Digital Illiterate"];
                let data = JSON.parse(res);
                for (datum of data[0]) {
                    if (datum.result >= 60) {
                        one++;
                    }

                    else if (datum.result >= 40) {
                        two++;
                    }

                    else if (datum.result >= 0) {
                        three++;
                    }
                }

                let size = data.length;
                let oneP = percentage(size, one)
                let twoP = percentage(size, two)
                let threeP = percentage(size, three)

                var yValues = [oneP, twoP, threeP];
                createChart('myChart', xValues, barColors, yValues)
                
                const ageData = createData(data[1], "age")
                createChart('chartAge', ageData.labels, ageData.colors, ageData.counts)

                const genderData = createData(data[2], "gender")
                createChart('chartGender', genderData.labels, genderData.colors, genderData.counts)

                const yLData = createData(data[3], "year_level")
                createChart('chartYearLevel', yLData.labels, yLData.colors, yLData.counts)

                const courseData = createData(data[4], "course")
                createChart('chartCourse', courseData.labels, courseData.colors, courseData.counts)

                const deviceData = createData(data[5], "devices")
                createChart('chartDevices', deviceData.labels, deviceData.colors, deviceData.counts)

                const socialData = createData(data[6], "socials")
                createChart('chartSocials', socialData.labels, socialData.colors, socialData.counts)
            
                const acctData = createData(data[7], "accts")
                createChart('chartAccounts', acctData.labels, acctData.colors, acctData.counts)

                const timeSData = createData(data[8], "time_q")
                createChart('chartTimeSpent', timeSData.labels, timeSData.colors, timeSData.counts)

                const frequencyData = createData(data[9], "frequency")
                createChart('chartFrequency', frequencyData.labels, frequencyData.colors, frequencyData.counts)

                const accessData = createData(data[10], "access")
                createChart('chartAccess', accessData.labels, accessData.colors, accessData.counts)

                const uSData = createData(data[11], "using_q")
                createChart('chartWU', uSData.labels, uSData.colors, uSData.counts)
            
                const uBWData = createData(data[12], "usings")
                createChart('chartBS', uBWData.labels, uBWData.colors, uBWData.counts)

                const purposeData = createData(data[13], "purpose")
                createChart('chartPurpose', purposeData.labels, purposeData.colors, purposeData.counts)

                const willingnessData = createData(data[14], "willingness")
                createChart('chartWillingness', willingnessData.labels, willingnessData.colors, willingnessData.counts)
            }


        }
    });


});

function createData(data, category) {
    let labelAges = [];
    let counts = [];
    let colorBars = [];
    const colors = ['#b91d47', '#00aba9', '#2b5797', '#3A0088', '#930077', '#E61C5D', '#FFE98A']; // array of colors

    for (let i = 0; i < data.length; i++) {
        labelAges.push(data[i][category]);
        counts.push(data[i].count);
        colorBars.push(colors[i % colors.length]); // generate a color from the array based on the index of data
    }

    const chartData = {
        labels: labelAges,
        counts: counts,
        colors: colorBars
    }

    return chartData
    
}

function createChart(chartName, labels, barColors, data) {
    new Chart(chartName, {
        type: "pie",
        data: {
            labels: labels,
            datasets: [{
                backgroundColor: barColors,
                data: data
            }]
        }
    });
}