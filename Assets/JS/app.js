var questions = ["Which character says,'Damn good coffee!'?","Where does 'Twin Peaks' take place?","Which character does Dana Ashbrook play?"];
var answer= ["Dale Cooper","Sheriff Truman","Benjamin Horne","Washington","Canada","Oregon","Bobby","Leo","Ed"];
var correct = 0;
var incorrect = 0;
var myAnswer = 0;
var questionAnswer = 0;
var counter = 30;
var timer;


$("#start").click(function () {

    chooseQuestion();
    timerWrapper ();

});

$("#answer1").click(function (){
    myAnswer = 1;
    checkAnswer ();
});

$("#answer2").click(function () {
    myAnswer = 2;
    checkAnswer ();
});

$("#answer3").click(function () {
    myAnswer = 3;
    checkAnswer ();
});



function chooseQuestion(){

    var randomQuestion = Math.floor(Math.random() * 3);
    console.log(randomQuestion);

    if(randomQuestion === 0){

        $("#quiz").html(questions[0]);

        $("#dispAnswer1").html(answer[1]);

        $("#dispAnswer2").html(answer[0]);

        $("#dispAnswer3").html(answer[2]);

        questionAnswer = 2;
    }

    if(randomQuestion === 1){
        
        $("#quiz").html(questions[1]);

        $("#dispAnswer1").html(answer[3]);

        $("#dispAnswer2").html(answer[5]);

        $("#dispAnswer3").html(answer[4]);

        questionAnswer = 1;

    }

    if(randomQuestion === 2){
        
        $("#quiz").html(questions[2]);
    
        $("#dispAnswer1").html(answer[8]);

        $("#dispAnswer2").html(answer[7]);

        $("#dispAnswer3").html(answer[6]);

        questionAnswer = 3;
    }

}

function checkAnswer(){

    if(questionAnswer === myAnswer){

        correct ++;
        $("#Correct").html(correct);
        chooseQuestion();


    }


    else{

        incorrect ++;
        $("#Incorrect").html(incorrect);
        chooseQuestion();


    }

}

function timerWrapper() {
    theClock = setInterval(thirtySeconds, 1000);
    function thirtySeconds() {
        if (counter === 0) {
            clearInterval(theClock);
            timeoutLoss();
        }
        if (counter > 0) {
            counter--;
        }
        $("#timer").html(counter);
    }
};

