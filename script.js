//Bienvenida y almacenamiento de nombre de usuario.
//Declaración de constantes, almacenan elementos del DOM por su id o selector de tag.
const welcome = document.getElementById('welcome');
const nameUser = document.getElementById('name-user');
const next = document.getElementById('next');

//Saludo y elección de Trivias
const trivias = document.getElementById('trivias');
const greetingWithName = document.getElementById('greeting-with-name');
const triviaOne = document.getElementById('trivia-one');
const triviaTwo = document.getElementById('trivia-two');

//Constantes de las preguntas de la trivia 1
const questionATriviaOne = document.getElementById('question-a-trivia-one');
const questionATriviaOneButtons = document.querySelectorAll('#question-a-trivia-one button');
const questionBTriviaOne = document.getElementById('question-b-trivia-one');
const questionBTriviaOneButtons = document.querySelectorAll('#question-b-trivia-one button');
const questionCTriviaOne = document.getElementById('question-c-trivia-one');
const questionCTriviaOneButtons = document.querySelectorAll('#question-c-trivia-one button');
const resultsTriviaOne = document.getElementById('results-trivia-one');
const firstPResultsTriviaOne = document.querySelector('#results-trivia-one p:first-of-type');
const lastPResultsTriviaOne = document.querySelector('#results-trivia-one p:last-of-type');
const imgResultsTriviaOne = document.querySelector('#results-trivia-one img');

// Constantes de las preguntas de la trivia 2
const questionATriviaTwo = document.getElementById('question-a-trivia-two');
const questionATriviaTwoButtons = document.querySelectorAll('#question-a-trivia-two button');
const questionBTriviaTwo = document.getElementById('question-b-trivia-two');
const questionBTriviaTwoButtons = document.querySelectorAll('#question-b-trivia-two button');
const questionCTriviaTwo = document.getElementById('question-c-trivia-two');
const questionCTriviaTwoButtons = document.querySelectorAll('#question-c-trivia-two button');
const resultsTriviaTwo = document.getElementById('results-trivia-two');
const firstPResultsTriviaTwo = document.querySelector('#results-trivia-two p:first-of-type');
const lastPResultsTriviaTwo = document.querySelector('#results-trivia-two p:last-of-type');
const imgResultsTriviaTwo = document.querySelector('#results-trivia-two img');

const resultsButton = document.querySelectorAll('.results button');

// Constante de las respuestas de las preguntas de ambas trivias.
const answersTriviaOne = {
    "question-a-trivia-one": 'Pedro Picapiedra',
    "question-b-trivia-one": 'Helga Pataki',
    "question-c-trivia-one": 'Majin Boo'
};

const answersTriviaTwo = {
    "question-a-trivia-two": 'Clarence',
    "question-b-trivia-two": 'Jake',
    "question-c-trivia-two": 'Steven Cuarzo Universe'
};

//Por un comienzo todas las respuestas son falsas pero se modifican dependiendo de lo que el usuario responda.
const rightAnswersTriviaOne = {
    "question-a-trivia-one": false,
    "question-b-trivia-one": false,
    "question-c-trivia-one": false
};

const rightAnswersTriviaTwo = {
    "question-a-trivia-two": false,
    "question-b-trivia-two": false,
    "question-c-trivia-two": false
};

// primer argumento recibe el texto del primer parrafo (firstPText)
// el segundo esta recibiendo el texto del ultimo parrafo(lastPText).
// El tercero recibe el origen de la imagen "src" (imgSrc).
// El cuarto recibe el "alt"(descripción de la imagen)(imgAlt).
// Estos argumentos se utilizan para modificar los párrafos y la imagen de la primera trivia.
const setResultsTriviaOne = (firstPText, lastPText, imgSrc, imgAlt) => {
    firstPResultsTriviaOne.textContent = firstPText;
    lastPResultsTriviaOne.textContent = lastPText;
    imgResultsTriviaOne.src = imgSrc;
    imgResultsTriviaOne.alt = imgAlt;
}

// primer argumento recibe el texto del primer parrafo (firstPText)
// el segundo esta recibiendo el texto del ultimo parrafo(lastPText).
// El tercero recibe el origen de la imagen "src" (imgSrc).
// El cuarto recibe el "alt"(descripción de la imagen)(imgAlt).
// Estos argumentos se utilizan para modificar los párrafos y la imagen de la segunda trivia.
const setResultsTriviaTwo = (firstPText, lastPText, imgSrc, imgAlt) => {
    firstPResultsTriviaTwo.textContent = firstPText;
    lastPResultsTriviaTwo.textContent = lastPText;
    imgResultsTriviaTwo.src = imgSrc;
    imgResultsTriviaTwo.alt = imgAlt;
}

// Muestra en pantalla nombre de usuario ingresado anteriormente y opción de trivias.
next.onclick = () => {
    // Se modifica texto del saludo (concatena el texto) con el nombre del usuario ingresado.
    greetingWithName.textContent = 'Hola ' + nameUser.value + ',';
    //Añade la clase "hide" (esconder) al DIV con id "welcome".
    welcome.classList.add('hide');
    
    //Elimina la clase "hide"(esconder) al DIV con id "trivias".
    trivias.classList.remove('hide');
}

// Se ejecutará el juego cuando el usuario haga click en el elemento.
triviaOne.onclick = () => {
    //Añade la clase "hide"(esconder) al DIV con id "trivias".
    trivias.classList.add('hide');
    //Elimina la clase "hide"(esconder) al DIV con id "question-a-trivia-one".
    questionATriviaOne.classList.remove('hide');
}

// Se ejecutará el juego cuando el usuario haga click en el elemento.
triviaTwo.onclick = () => {
    //Añade la clase "hide"(esconder) al DIV con id "trivias".
    trivias.classList.add('hide');
    //Elimina la clase "hide"(esconder) al DIV con id "question-a-trivia-one".
    questionATriviaTwo.classList.remove('hide');
}

// Iterar(repetir) los botones de respuestas de la pregunta A de la trivia 1.
for (let iteration = 0; iteration < questionATriviaOneButtons.length; iteration++) {
    // se almacenan en  la constante "button" el botónn actual que se esta repetiendo
    const button = questionATriviaOneButtons[iteration];
    button.onclick = () => {
        rightAnswersTriviaOne['question-a-trivia-one'] = answersTriviaOne['question-a-trivia-one'] === button.textContent;
        questionATriviaOne.classList.add('hide');
        questionBTriviaOne.classList.remove('hide');
    }
}

// Iterar(repetir) los botones de respuestas de la pregunta B de la trivia 1.
for (let iteration = 0; iteration < questionBTriviaOneButtons.length; iteration++) {
     // se almacenan en  la constante "button" el botónn actual que se esta repetiendo
    const button = questionBTriviaOneButtons[iteration];
    button.onclick = () => {
        rightAnswersTriviaOne['question-b-trivia-one'] = answersTriviaOne['question-b-trivia-one'] === button.textContent;
        questionBTriviaOne.classList.add('hide');
        questionCTriviaOne.classList.remove('hide');
    }
}

// Iterar(repetir) los botones de respuestas de la pregunta C de la trivia 1.
for (let iteration = 0; iteration < questionCTriviaOneButtons.length; iteration++) {
     // se almacenan en  la constante "button" el botónn actual que se esta repetiendo
    const button = questionCTriviaOneButtons[iteration];
    
    // Se captura el evento onclick del botón.
    button.onclick = () => {
        rightAnswersTriviaOne['question-c-trivia-one'] = answersTriviaOne['question-c-trivia-one'] === button.textContent;
        const totalRightAnswers = Object.values(rightAnswersTriviaOne).filter(rightAnswer => rightAnswer).length;
        const savedNameUser = nameUser.value;
    
        // Comentarios y gifs dependiendo del resultado del usurio.
        if (totalRightAnswers === 0) {
            setResultsTriviaOne(
                '0/3',
                'Nooo ' + savedNameUser + '! Haz fallado en esta oportunidad. Vuelve a casa, enciende la TV e intenta nuevamente.',
                'https://media0.giphy.com/media/3o6Ztq9bsJps4ljwZ2/giphy.gif?cid=ecf05e47ym8b3fko4z1x9mxvf7q36a5epbo1q4v6u91c10tc&rid=giphy.gif',
                'cry'
            );
        } else if (totalRightAnswers === 1) {
            setResultsTriviaOne(
                '1/3',
                'Ups ' + savedNameUser + '! Haz fallado en esta ocasión . Pero no te desanimes, intenta nuevamente.',
                'https://media2.giphy.com/media/3o6wrebnKWmvx4ZBio/200w.webp?cid=ecf05e47lmcbncix4mj5pxr2rdiyr1w3u6xrzg5dac0my0q5&rid=200w.webp',
                'sad'
            );
        } else if (totalRightAnswers === 2) {
            setResultsTriviaOne(
                '2/3',
                'Buen trabajo ' + savedNameUser + ', ¡casi le haz acertado a todas! No te rindas, Sigue intentando.',
                'https://media0.giphy.com/media/pejC6N6W5GLEPtA27w/giphy.gif?cid=ecf05e477nja5qguxlnxuscg6gkcugvlboftoqjjee4ib4az&rid=giphy.gif',
                'dance'
            );
        } else {
            setResultsTriviaOne(
                '3/3',
                'WOW... Felicidades ' + savedNameUser + '! Le haz acertado a todas las preguntas. Eres genial, ¡sigue así!',
                'https://media0.giphy.com/media/o75ajIFH0QnQC3nCeD/200.webp?cid=ecf05e476tq2v3hycwk9qp4h3xpzummdfmd8i77rnl7puijs&rid=200.webp',
                'winner'
            );
        }
    
        questionCTriviaOne.classList.add('hide');
        resultsTriviaOne.classList.remove('hide');
    }
}

// Iterar(repetir) los botones de respuestas de la pregunta A de la trivia 2.
for (let iteration = 0; iteration < questionATriviaTwoButtons.length; iteration++) {
    // se almacenan en  la constante "button" el botónn actual que se esta repetiendo
    const button = questionATriviaTwoButtons[iteration];
    button.onclick = () => {
        rightAnswersTriviaTwo['question-a-trivia-two'] = answersTriviaTwo['question-a-trivia-two'] === button.textContent;
        questionATriviaTwo.classList.add('hide');
        questionBTriviaTwo.classList.remove('hide');
    }
}

// Iterar(repetir) los botones de respuestas de la pregunta B de la trivia 2.
for (let iteration = 0; iteration < questionBTriviaTwoButtons.length; iteration++) {
    // se almacenan en  la constante "button" el botónn actual que se esta repetiendo
   const button = questionBTriviaTwoButtons[iteration];
   button.onclick = () => {
       rightAnswersTriviaTwo['question-b-trivia-two'] = answersTriviaTwo['question-b-trivia-two'] === button.textContent;
       questionBTriviaTwo.classList.add('hide');
       questionCTriviaTwo.classList.remove('hide');
   }
}

// Iterar(repetir) los botones de respuestas de la pregunta C de la trivia 2.
for (let iteration = 0; iteration < questionCTriviaTwoButtons.length; iteration++) {
    // se almacenan en  la constante "button" el botónn actual que se esta repetiendo
   const button = questionCTriviaTwoButtons[iteration];
   
   // Se captura el evento onclick del botón.
   button.onclick = () => {
       rightAnswersTriviaTwo['question-c-trivia-two'] = answersTriviaTwo['question-c-trivia-two'] === button.textContent;
       const totalRightAnswers = Object.values(rightAnswersTriviaTwo).filter(rightAnswer => rightAnswer).length;
       const savedNameUser = nameUser.value;
   
       // Comentarios y gifs dependiendo del resultado del usurio.
       if (totalRightAnswers === 0) {
           setResultsTriviaTwo(
               '0/3',
               'Nooo ' + savedNameUser + '! Haz fallado en esta oportunidad. Vuelve a casa, enciende la TV e intenta nuevamente.',
               'https://media0.giphy.com/media/3o6Ztq9bsJps4ljwZ2/giphy.gif?cid=ecf05e47ym8b3fko4z1x9mxvf7q36a5epbo1q4v6u91c10tc&rid=giphy.gif',
               'cry'
           );
       } else if (totalRightAnswers === 1) {
           setResultsTriviaTwo(
               '1/3',
               'Ups ' + savedNameUser + '! Haz fallado en esta ocasión . Pero no te desanimes, intenta nuevamente.',
               'https://media2.giphy.com/media/3o6wrebnKWmvx4ZBio/200w.webp?cid=ecf05e47lmcbncix4mj5pxr2rdiyr1w3u6xrzg5dac0my0q5&rid=200w.webp',
               'sad'
           );
       } else if (totalRightAnswers === 2) {
           setResultsTriviaTwo(
               '2/3',
               'Buen trabajo ' + savedNameUser + ', ¡casi le haz acertado a todas! No te rindas, Sigue intentando.',
               'https://media0.giphy.com/media/pejC6N6W5GLEPtA27w/giphy.gif?cid=ecf05e477nja5qguxlnxuscg6gkcugvlboftoqjjee4ib4az&rid=giphy.gif',
               'dance'
           );
       } else {
           setResultsTriviaTwo(
               '3/3',
               'WOW... Felicidades ' + savedNameUser + '! Le haz acertado a todas las preguntas. Eres genial, ¡sigue así!',
               'https://media0.giphy.com/media/o75ajIFH0QnQC3nCeD/200.webp?cid=ecf05e476tq2v3hycwk9qp4h3xpzummdfmd8i77rnl7puijs&rid=200.webp',
               'winner'
           );
       }
   
       questionCTriviaTwo.classList.add('hide');
       resultsTriviaTwo.classList.remove('hide');
   }
}

for (let iteration = 0; iteration < resultsButton.length; iteration++) {
    const button = resultsButton[iteration];
    button.onclick = () => {
        nameUser.value = '';
        resultsTriviaOne.classList.add('hide');
        resultsTriviaTwo.classList.add('hide');
        welcome.classList.remove('hide');
    }
}