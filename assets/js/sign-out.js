$(document).ready(function(){
    $('#sign-out').click(function(){

        Swal.fire({
          title: 'Sign Out',
          text: "Are you sure you want to sign out?",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Sign Out'
        }).then((result) => {
          if (result.isConfirmed) {
            $.ajax({
              url: 'assets/php/login.php',
              success: function(data){
                if(data == 1){
                  location.href = "login.php";
                }
              }
            });
          }
        })
    
      });
})
    