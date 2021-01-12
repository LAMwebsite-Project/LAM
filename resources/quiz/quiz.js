const quizContent = document.getElementById('content');
const quizStartButton = document.getElementById('start-button');
const quizStartDiv = document.getElementById('start-div');
let httpRequest = new XMLHttpRequest();
let questions = {};
let answers = [0, 0, 0, 0, 0];
let blocks = [];
let state = 'start';
let ending;

quizStartButton.addEventListener('click', () => {
    quizStartDiv.classList.toggle('active');

    httpRequest.open('GET', '/GET/quiz', true);
    httpRequest.send();
});

httpRequest.onreadystatechange = function() {
    if (httpRequest.readyState === 4) {
        if(state == 'start') {
            questions = JSON.parse(httpRequest.response);
            createQuestions();
        } else {
            ending = JSON.parse(httpRequest.response);
            createEnding();
        }
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

        getEnding();
    }
}

function countAnswers() {
    let As = answers.filter(element => element == 'A').length;
    let Bs = answers.filter(element => element == 'B').length;
    let Cs = answers.filter(element => element == 'C').length;

    let dict = {A: As, B: Bs, C: Cs};

    return Object.keys(dict).reduce((a, b) => dict[a] > dict[b] ? a : b);
}

function getEnding() {
    abc = countAnswers();
    state = 'ending';

    httpRequest.open('GET', `/GET/quizEnding?abc=${abc}`, true);
    httpRequest.send();
}

function createEnding() {
    let block = document.createElement('div');

    block.classList.toggle('block');
    block.classList.toggle('active');

    let image = document.createElement('img');

    image.classList.toggle('image');
    image.src = ending['image'];

    let description = document.createElement('h1');

    description.classList.toggle('text')
    description.innerText = ending['description'];

    let visitButton = document.createElement('button');
    let visitButtonText = document.createElement('p');

    visitButton.classList.toggle('button');
    visitButtonText.innerText = ending['visitButtonText'];
    visitButtonText.classList.toggle('button-text');

    visitButton.appendChild(visitButtonText);

    block.appendChild(image);
    block.appendChild(description);
    block.appendChild(visitButton);
    quizContent.appendChild(block);

    visitButton.addEventListener('click', () => {
        if(document.cookie.includes('lang=en')) {
            window.location.href = 'https://www.lamlisse.nl/en/tickets/';
        } else {
            window.location.href = 'https://www.lamlisse.nl/tickets/';
        }
    });
}