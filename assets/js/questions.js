$(document).ready(function(){

    $("table tbody").sortable();

    $.ajax({
        url: "assets/php/tables.php",
        method: "GET",
        success: function(res){
            let questions = JSON.parse(res);
            let rows;
            for (let question of questions){
                rows += `<tr>
                    <th scope="row"> ${question.order_by} </th>
                    <td style="width: 90%"> <textarea class="form-control" placeholder="Questions">${question.question}</textarea> </td>
                    <td class="text-center"> <button type="button" id="btn-update-q" onclick="updateQuestion(${question.id})" class="btn btn-custom"> <i class="fa-solid fa-pen-to-square"></i> </button> </td>
                </tr>`;
            }

            $('table tbody').html(rows);
        }
    });

});

function updateQuestion(id){
    $('table').on('click', '#btn-update-q', function(e){

        let ques = $(this).parent().prev().children().val().trim();
        console.log(ques)

        Swal.fire({
            title: 'Save changes?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Confirm'
        }).then((result) => {
            if (result.isConfirmed) {

                $.ajax({
                    url: "assets/php/tables.php",
                    method: "POST",
                    data: {
                        id: id,
                        question: ques,
                    },
                    success: function(res){
                        let question = JSON.parse(res);
                        console.log(question)
                    }
                });

              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: "Updated",
                text: 'Question has been changed.',
                showConfirmButton: false,
                timer: 1500
              })
            }
        });
    });
}