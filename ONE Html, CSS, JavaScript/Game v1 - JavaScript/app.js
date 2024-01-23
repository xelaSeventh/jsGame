// Variables.
let numeroSecreto = Math.floor(Math.random()*10) + 1;
let numeroUsuario = 0;
let contadorIntentos = 1;
let maximosIntentos = 3;

while(numeroSecreto != numeroUsuario) {

    let numeroUsuario = parseInt(prompt('Indica un número entre 1 y 10, por favor:'));
    console.log(numeroUsuario);

    // Condicional.
    if (numeroUsuario == numeroSecreto) {
        
        alert(`¡Acertaste! El número secreto es: ${numeroUsuario}. Lo lograste en ${contadorIntentos} ${contadorIntentos == 1 ? 'intento' : 'intentos'}.`);

    } else {

        // Condicional Anidado.
        if(numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }

        // Incremento del contador.
        contadorIntentos++
        
        // Condicionador de intentos máximos.
        if (contadorIntentos > maximosIntentos) {
            alert(`Haz llegado al número máximo de intentos: ${maximosIntentos}`);
            break;
        }
    }
}
