
$(document).ready(function () {



    //Countdown
    let second      = $('#second');
    let numSecond   = 30;
    let number1     = randomizer(100);
    let number2     = randomizer(200);
    let operator    = ["+","-","/","*"];
    let randomOp    = randomizer(3);
    let answerRet   = $('#answer-return');
    let scoreSpam   = $('#score');
    let score       = 0;
    // // Vitória 3! Eu tenho O CODE VALDA!!!
    let equal = eval(number1 + operator[randomOp] + number2);
    // // Vitória 4! Definir se for decimal com até duas casas, e integral sem casas decimais.
    result = Number.isInteger(equal) ? equal.toFixed(0) : equal.toFixed(1);
    Swal.fire({
        title: 'Let\'s begin the Math challenge??',
        width: 600,
        padding: '3em',
        background: '#fff',
        backdrop: `
          rgba(80,200,0,0.4)
          url("giphy.gif")
          left top
          no-repeat
        `,
        confirmButtonText: 'Start',
      }).then((result) => {
          if(result.isConfirmed) {
              numSecond = 31;
              $('#song').get(0).play();
              $('#song').prop('volume', 0.3);
          }
      }); 

    makeEquation();

    second.html(numSecond);
    scoreSpam.html(score);

    //Vitória 5! Reconhecer o valor da resposta e comparar com o resultado
    $('#submit').click(function () {
        checkAnswer();
    });
    $('#answer').keypress(function(event){
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if(keycode == '13'){
            checkAnswer();
        }
    });

    // Countdown Execution
    setInterval(function(){

        // Vitória 1! Até aqui nos ajudou o Senhor.
        if (numSecond >= 0) {
            let inputVal = $('#answer').val();
            if (numSecond == 0 ) {
                if (inputVal == result) {
                    removeClass('success');
                    decrementor(numSecond);
                    score++;
                    checkScore();
                    scoreSpam.html(score);
                } else {
                    removeClass('failed');
                    score--;
                    checkScore();
                    scoreSpam.html(score);
                }
                makeEquation();
                timeClearer();  
            } else {
                numSecond--;
                second.html(numSecond);
            }           
            
        } else {

        }
        checkCountdown(numSecond);
        console.log("Hora da Verdade:   " + number1 + " "+ operator[randomOp] + " " + number2 + " = " + result);
     }, 1000);

// Vitória 2! Xaramanaias!
    //  console.log(eval("225" + "+" + "15"));



function randomizer (param) {
    return Math.floor(Math.random()*param);
}

function timeClearer() {
    clearInterval();
    numSecond = 0;
    setTimeout( function () {
        answerRet.addClass('d-none');

        numSecond = 31;
    }, 1000);
}

function decrementor(val) {
    if (val >= 25) {
        val = 25;
    } else if (val >= 20 < 25) {
        val = 20;
    } else if (val >= 15 < 20) {
        val = 15;
    } else if (val >= 10 < 15) {
        val = 10;
    } else if (val >= 5 < 10) {
        val = 5;
    }
    console.log(val);
    return numSecond = val;
}

function makeEquation() {
    // Equation and Randomizer
    number1     = randomizer(100);
    number2     = randomizer(200);
    operator    = ["+","-","/","*"];
    randomOp    = randomizer(3);
    equal = eval(number1 + operator[randomOp] + number2);
    result = Number.isInteger(equal) ? equal.toFixed(0) : equal.toFixed(1);
    // Get the Equation
    $('#number1').html(number1);
    $('#operator').html(operator[randomOp]);
    $('#number2').html(number2);
}

function removeClass (status) {
    if (status === 'success') {
        answerRet.removeClass('d-none').addClass('text-success').removeClass('text-danger');
        answerRet.html('Aê miserarver!');
    } else {
        answerRet.removeClass('d-none').addClass('text-danger').removeClass('text-success');
        answerRet.html('Errrrou Bobão!');
    }
}

function checkAnswer() {
    let answer = $('#answer').val();
        console.log(answer);
        if (answer == result) {
            score++;
            checkScore();
            removeClass('success');
            console.log('acertou');
            decrementor(numSecond);
            second.html(second);
            scoreSpam.html(score);
        } else {
            removeClass('failed');
            console.log('errou');
            numSecond = 31;
            score--;
            checkScore();
            scoreSpam.html(score);
        }
        makeEquation();
}

function checkScore() {
    $('#answer').focus();
    if (score === 3) {
        $('#song').get(0).pause();
        $('#fanfare').get(0).play();
        $('#fanfare').prop('volume', 0.4);
        callAlert();
    } else if (score <= 0) {
        score = 0;
    }

}

function callAlert () {
    Swal.fire({
        title: 'Are you sure you didn\'t cheat my code?',
        width: 600,
        padding: '3em',
        imageUrl: 'nerd.jpg',
        imageWidth: 386,
        imageHeight: 211,
        background: '#fff',
        backdrop: `
          rgba(125,125,0,0.4)
          url("giphy.gif")
          left top
          no-repeat
        `,
        confirmButtonText: 'Restart',
      }).then((result) => {
          if(result.isConfirmed) {
              location.reload();
          }
      }); 
}

function checkCountdown (sec) {
    if (sec <= 10) {
        $('.countdown').addClass('text-danger');
    } else {
        $('.countdown').removeClass('text-danger');
    }
}


});
