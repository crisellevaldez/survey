$(document).ready(function(){

    $.ajax({
        url: "assets/php/results.php",
        method: "GET",
        success: function(res){

            let msg = "";
            let bgColor = "";
            let msg2 = "", msg3 = "";
            if (res >= 60){
                msg = "Digital Literate";
                bgColor = "#6fc771";
                msg2 = `You're highly engage and consume internet content responsibly.
                Engaging with high intellectual activity such as reasoning and thinking. Very attentive towards the environment you live in and act appropriate. Creativeness and critical thinking skills have developed 
                in this stage very often because of the amount of information you experience.`;
                msg3 = `Having these essential skills and digital ethics toward the digital world is very pleasant to be around with. Stay responsibly and well informed.`;
            }

            else if (res >= 40){
                msg = "Customary Literate";
                bgColor = "#ff52fc";
                msg2 = `You're somehow engage and aware about the digital content that 
                you're witnessing. Usually, a very hot topic or currently trending type
                of information’s but you don't get yourself to involve or not very 
                intrigue in the situation. Very passive type of   user or viewer. 
                Let other users dictate what type of content you're seeing on your 
                screen.`;
                msg3 = `Being a passive onlooker means you lack initiative and enthusiasm towards different interest. But doesn’t necessarily mean it’s bad.`;
            }

            else if (res >= 0){
                msg = "Digital Illiterate";
                bgColor = "#f27252";
                msg2 = `You find using digital platforms difficult. Doesn't adapt very 
                easily on the technological process and can be easily affected by 
                disinformation’s. You lack the ability to think critically and be 
                creative to some degree. The most vulnerable on being influence by 
                public figures such as vloggers, youtubers etc.`;
                msg3 = `You should have manage your time on the internet responsibly and don’t just consume but also get yourself engage in a way you have to think critically so that you can be well informed.`;
            }

        $('.row').prepend(`
            <div class="col-lg-6">
                <p class="fw-semibold"> Note: The results are based on the survey. You cannot repeat the survey once submitted. Please contact the admin if there are any concerns or inquiries. </p>
                <div class="p-5 bg-light rounded-3" style="border: 1px solid rgba(0, 0, 0, 0.546);">
                    <h1> Result </h1>
                    <p class="fs-5" style="color: ${bgColor}">${res}% = ${msg}</p>
                    <p class="fs-5">${msg2}</p>
                    <div class="alert alert-primary" role="alert">
                        <p> <b> Recommendations: </b> </p>
                        ${msg3}
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
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