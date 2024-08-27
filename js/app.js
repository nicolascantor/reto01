/*
*funcion inicial para empezar a encriptar
*/
function encrypted() {

    let text = document.getElementById("input-encrypted").value;
    let arr = splitText(text);
    let finalText = '';
    if (text.length > 0) {
        arr = changeEncrypted(arr);
        finalText = convertToText(arr);
        innerFront(finalText);
    } else {
        document.getElementById("alert-warning").style.display = "block";
        const myTimeout = setTimeout(myWarnign, 5000);
    }

}

/*
*funcion inicial para empezar a desencriptar
*/
function desencrypted() {

    let text = document.getElementById("input-encrypted").value;
    let arr = splitText(text);
    let finalText = '';
    if (text.length > 0) {
        arr = changeDesencrypted(arr);
        finalText = convertToText(arr);
        innerFront(finalText);
    } else {
        document.getElementById("alert-warning").style.display = "block";
        const myTimeout = setTimeout(myWarnign, 5000);
    }


}

/*
*pasar la cadena de texto a un array
*/
function splitText(text) {
    let arr = text.split(" ");
    return arr;
}

/*
*evalucion de cada palabra del array para hacer los cambios degun cada regla
*/
function changeEncrypted(arr) {

    let text;
    let newArr = arr;

    for (i = 0; i < arr.length; i++) {

        if (arr[i].includes('e')) {
            text = ruleEncryptedE(arr[i]);
            newArr[i] = text;
        }
        if (arr[i].includes('i')) {
            text = ruleEncryptedI(arr[i]);
            newArr[i] = text;
        }
        if (arr[i].includes('a')) {
            text = ruleEncryptedA(arr[i]);
            newArr[i] = text;
        }
        if (arr[i].includes('o')) {
            text = ruleEncryptedO(arr[i]);
            newArr[i] = text;
        }
        if (arr[i].includes('u')) {
            text = ruleEncryptedU(arr[i]);
            newArr[i] = text;
        }
    }

    return newArr;
}

/*
**reglas de encriptacion 
*/

function ruleEncryptedA(text) {
    let newText = '';
    newText = text.replace("a", "ai")
    return newText;
}

function ruleEncryptedE(text) {
    let newText = '';
    newText = text.replace("e", "enter");
    return newText;
}

function ruleEncryptedI(text) {
    let newText = '';
    newText = text.replace("i", "imes");
    return newText;
}

function ruleEncryptedO(text) {
    let newText = '';
    newText = text.replace("o", "ober")
    return newText;
}

function ruleEncryptedU(text) {
    let newText = '';
    newText = text.replace("u", "ufat")
    return newText;
}

/**
 * evalucion de cada palabra del array para hacer los cambios degun cada regla
 **/

function changeDesencrypted(arr) {

    let text;
    let newArr = arr;

    for (i = 0; i < arr.length; i++) {

        if (arr[i].includes('enter')) {
            text = ruleDesencryptedE(arr[i]);
            newArr[i] = text;
        }
        if (arr[i].includes('imes')) {
            text = ruleDesencryptedI(arr[i]);
            newArr[i] = text;
        }
        if (arr[i].includes('ai')) {
            text = ruleDesencryptedA(arr[i]);
            newArr[i] = text;
        }
        if (arr[i].includes('ober')) {
            text = ruleDesencryptedO(arr[i]);
            newArr[i] = text;
        }
        if (arr[i].includes('ufat')) {
            text = ruleDesencryptedU(arr[i]);
            newArr[i] = text;
        }
    }
    return newArr;
}

/**
**reglas de desencriptacion 
**/

function ruleDesencryptedA(text) {
    let newText = '';
    newText = text.replace("ai", "a")
    return newText;
}

function ruleDesencryptedE(text) {
    let newText = '';
    newText = text.replace("enter", "e");
    return newText;
}

function ruleDesencryptedI(text) {
    let newText = '';
    newText = text.replace("imes", "i");
    return newText;
}

function ruleDesencryptedO(text) {
    let newText = '';
    newText = text.replace("ober", "o")
    return newText;
}

function ruleDesencryptedU(text) {
    let newText = '';
    newText = text.replace("ufat", "u")
    return newText;
}


/*
**convertir el array final en una sola cadena de texto separado por espacios
 */
function convertToText(arr) {
    let text = arr.join(' ');

    return text;
}

/*
**insertar el texto (encriptado o desencriptado) en la caja de respuesta
 */
function innerFront(finalText) {
    document.getElementById("exit-text").innerHTML = finalText;
    document.getElementById("final-text").style.display = 'none';
    document.getElementById("final-encrypted-text").style.display = 'flex';
}


const copiarContenido = async () => {
    let texto = document.getElementById('exit-text').innerHTML;
    try {
        await navigator.clipboard.writeText(texto);
        document.getElementById("alert-copy-text").style.display = "block";
        const myTimeout = setTimeout(myGreeting, 2000);
        console.log('Contenido copiado al clipboard');
    } catch (err) {
        console.error('Falló al copiar: ', err);
    }
}

function myGreeting() {
    document.getElementById("alert-copy-text").style.display = "none";
}

function myWarnign() {
    document.getElementById("alert-warning").style.display = "none";
}