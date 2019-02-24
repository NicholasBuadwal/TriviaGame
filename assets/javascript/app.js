var presentQuestion = 0;
var score = 0;
var allQuestions = questions.length;

var container = document.getElementById('quizContainer');
var container = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextButton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');



function loadQuestion (questionIndex){
    var q = questions[questionIndex];
    questions.textContent = (questionIndex + 1) +'. '+ q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type = radio]:checked')
    if(!selectedOption){
        alert('Is it really that difficult of a question?');
        return
    }
    var answer = selectedOption.value;
    if(questions[presentQuestion].answer == answer){
        score += 1;
    }
    selectedOption.checked = false;
    presentQuestion++;
    if(presentQuestion == allQuestions - 1){
        nextButton.textContent = 'Finish';
    }
    if(presentQuestion == allQuestions){
        container.style.display = 'none';
        resultCont.style.display = '';
        resultCont.textContent = 'Your Score: ' + score;
        return;
    }
}
loadQuestion(presentQuestion);