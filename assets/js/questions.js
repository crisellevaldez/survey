$(function() {
    $("table tbody").sortable();

    $.ajax({
        url: "assets/php/tables.php",
        method: "GET",
        success: function(res){
            let questions = JSON.parse(res);
            let rows, count = 1;
            for (let question of questions){
                rows += `<tr>
                    <th scope="row"> ${count} </th>
                    <td> ${question.question} </td>
                    <td> <button type="button" class="btn btn-primary"> <i class="fa-solid fa-pen-to-square"></i> </button> </td>
                </tr>`;
                count++;
            }

            $('table tbody').html(rows);
        }
    });
});