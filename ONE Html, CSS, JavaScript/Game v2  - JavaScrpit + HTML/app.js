let secretNumber = 0;
let attempts = 0;
let savedNumbersList = [];
let maximumNumber = 10;

function asignElementText(element, text) {
    let htmlElement = document.querySelector(element);
    htmlElement.innerHTML = text;
    return;
}

function initializeAttempt() {

    let userNumber = parseInt(document.getElementById('userValue').value);

    if (userNumber === secretNumber) {
        asignElementText('p', `Acertaste el número en ${attempts} ${(attempts == 1) ? 'intento' : 'intentos'}.`);
        document.getElementById('restart').removeAttribute('disabled');
    } else {
        if (userNumber > secretNumber) {
            asignElementText('p', `El número secreto es menor. Haz realizado ${attempts} ${(attempts == 1) ? 'intento' : 'intentos'}.`); 
        } else {
            asignElementText('p', `El número secreto es mayor. Haz realizado ${attempts} ${(attempts == 1) ? 'intento' : 'intentos'}.`);
        }
        attempts++;
        resetInput();
    }
    return;
}

function resetInput() {
    document.querySelector('#userValue').value = '';
}

function generateSecretNumber() {
    let generatedNumber = Math.floor(Math.random()*maximumNumber) + 1;
    
    if (savedNumbersList.length == maximumNumber) {
        asignElementText('p', 'Ya se sortearon todos los números posibles.')
    } else {
        if (savedNumbersList.includes(generatedNumber)) {
            return generateSecretNumber();
        } else {
            savedNumbersList.push(generatedNumber);
            return generatedNumber;
        }
}
}

function initialConditions() {
    asignElementText('h1', 'Juego del número secreto!');
    asignElementText('p', `Elige un número del 1 al ${maximumNumber}`);
    secretNumber = generateSecretNumber();
    attempts = 1;
}

function restartGame() {
    resetInput();
    initialConditions();
    document.querySelector('#restart').setAttribute('disabled', 'true');
}

initialConditions();