
function appendOperation(operation){
    document.getElementById('resultArea').innerHTML += operation;
}

function calculateResult(){
    let container = document.getElementById('resultArea');
    let ergebnis = eval(container.innerHTML);
    container.innerHTML = ergebnis
}

function deleteLast(){
    let container = document.getElementById('resultArea');
    if(container.innerHTML.endsWith(' ')) {
        container.innerHTML = container.innerHTML.slice(0, -3)
    }
    else {
    container.innerHTML = container.innerHTML.slice(0, -1);
}}

function deleteAll(){
    let container = document.getElementById('resultArea');
    container.innerHTML = " "
}

function vorzeichen(){
    let container = document.getElementById('resultArea');   
    let value = parseFloat(container.textContent);
    if(value > 0){
        container.textContent = "-" + value
        console.log("vorzeichen geändert!")
    }
    else if(value < 0){
        container.textContent = container.textContent.slice(1)
        console.log('vorzeichen geändert!')
    }
}

function prozent(){
    let container = document.getElementById('resultArea');
    container.textContent = container.textContent / 100
}