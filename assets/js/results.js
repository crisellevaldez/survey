$(document).ready(function(){

    $.ajax({
        url: "assets/php/results.php",
        method: "GET",
        success: function(res){

            let msg = "";
            let bgColor = "";
            let msg2 = "";
            if (res >= 81){
                msg = "Unhealthy State";
                bgColor = "#f27252";
                msg2 = "If all signs keep worsening like fear, anxiety, poor lifestyle, excessive use of tobacco and alcohol, self isolation from friends and family, or even thinking about harming yourself. Seek professional help immediately.";
            }

            else if (res >= 61){
                msg = "High Stress";
                bgColor = "#ff52fc";
                msg2 = "This is concerning! Pain, migraine or tension in the head or body shouldn’t be overlooked. Emotional signs like depression and anxiety in this stage is very serious!"
            }

            else if (res >= 41){
                msg = "Exhaustion";
                bgColor = "#b5ae31";
                msg2 = "You're quite showing a sign of fatigue for having the prolonged period of mild stress. Irritability and insomnia is a bad sign."
            }

            else if (res >= 21){
                msg = "Mild Stress";
                bgColor = "#2cdbde";
                msg2 = "You're showing a little sign of stress that could further affect your physical health, emotional state and psychological state. Self discipline is a must."
            }

            else if (res >= 0){
                msg = "Normal State";
                bgColor = "#6fc771";
                msg2 = "Congratulations! You're in a healthy normal state of mind and body.";
            }

           $('.row').prepend(`
                <div class="col-md-6 mt-">
                    <p> Note: The results are based on the survey. You cannot repeat the survey once submitted. Please contact the admin if there are any concerns or inquiries. </p>
                    <div class="p-5 bg-light border rounded-3 shadow" >
                        <h1> Result </h1>
                        <p class="fs-5" style="color: ${bgColor}">${res}% = ${msg}</p>
                        <p class="fs-5">${msg2}</p>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="sonar-wrapper">
                        <div class="sonar-emitter" style="background-color:${bgColor}">
                            <h4 class="text-white" style="text-align: center; vertical-align: middle; line-height: 50px;"> ${res}% </br> ${msg}</h4>
                            <div class="sonar-wave" style="background-color:${bgColor}"></div>
                        </div>
                    </div>
                </div>`);
        }
    });

});