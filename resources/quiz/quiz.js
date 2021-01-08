const quizContent = document.getElementById('content');
const quizStartButton = document.getElementById('start-button');
const quizStartDiv = document.getElementById('start-div');
let httpRequest = new XMLHttpRequest();
let questions = {};
let answers = [0, 0, 0, 0, 0];
let blocks = [];

quizStartButton.addEventListener('click', () => {
    quizStartDiv.classList.toggle('active');

    httpRequest.open('GET', '/GET/quiz', true);
    httpRequest.send();
});

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
        questions = JSON.parse(httpRequest.response);
        createQuestions();
    }
}

function createQuestions() {
    for(let x = 0; x < 5; x++) {
        let block = document.createElement('div');
        block.classList.toggle('block');
        block.classList.toggle('active');

        let question = document.createElement('h1');
        question.classList.toggle('text')
        question.innerText = questions[x + 1]['question'];

        let image = document.createElement('img');
        image.classList.toggle('image');
        image.src = questions[x + 1]['image'];


        let answerA = document.createElement('button');
        let answerAText = document.createElement('p');

        answerA.classList.toggle('button');
        answerAText.innerText = questions[x + 1]['A'];
        answerAText.classList.toggle('button-text');

        answerA.appendChild(answerAText);

        let answerB = document.createElement('button');
        let answerBText = document.createElement('p');

        answerB.classList.toggle('button');
        answerBText.innerText = questions[x + 1]['B'];
        answerBText.classList.toggle('button-text');

        answerB.appendChild(answerBText);

        let answerC = document.createElement('button');
        let answerCText = document.createElement('p');

        answerC.classList.toggle('button');
        answerCText.innerText = questions[x + 1]['C'];
        answerCText.classList.toggle('button-text');

        answerC.appendChild(answerCText);

        block.appendChild(question);
        block.appendChild(image);
        block.appendChild(answerA);
        block.appendChild(answerB);
        block.appendChild(answerC);
        quizContent.appendChild(block);

        let answers = [answerA, answerB, answerC];

        answerA.addEventListener('click', () => {
            answerClick(x, 'A', answers, answerA);
        });

        answerB.addEventListener('click', () => {
            answerClick(x, 'B', answers, answerB);
        });

        answerC.addEventListener('click', () => {
            answerClick(x, 'C', answers, answerC);
        });

        blocks[x] = block;
    }
}

function answerClick(questionNumber, ABC, allAnswers, answer) {
    for(let x = 0; x < 3; x++) {
        allAnswers[x].className = 'button';
    }

    answer.classList.toggle('selected');

    answers[questionNumber] = ABC;


    let allAnswered = true;
    answers.forEach(element => {
        if(element == 0) {
            allAnswered = false;
        }
    });

    if(allAnswered) {
        blocks.forEach(element => {
            element.classList.toggle('active');
        });
    }
}