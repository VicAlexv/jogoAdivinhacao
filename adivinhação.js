let aleatorio = Math.floor(Math.random()*99)



function alerta(){
    let numero = document.getElementById("num").value;
    numero = parseInt(numero)

if (aleatorio === numero){
let certo = ("boyaah")
        document.getElementById("tentativa").innerHTML =(certo)
        document.getElementById( "tentativa" ).style.background = "#00FF00"}


else if (aleatorio > numero){
    let menor = ("menor")
    document.getElementById("tentativa").innerHTML =(menor)
    document.getElementById( "tentativa" ).style.background = '#FF0000'}
else{
    let maior = ("maior")
    document.getElementById("tentativa").innerHTML =(maior)
    document.getElementById( "tentativa" ).style.background = '#0000FF'}}






