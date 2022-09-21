function sumar() { //Se define la función, esta debe ser escrita igual que en el onclick del boton 
    var x,y,suma //Las variables que usaremos se definen dentro de la función

    x=parseInt(document.getElementById("n1").value)  //getElementById capta el dato del input tomando como dirección el id 
    y=parseInt(document.getElementById("n2").value) 
    suma=x+y

    document.getElementById('resultado').innerHTML="La suma da un total: " +suma;

}
function restar() { //Se define la función, esta debe ser escrita igual que en el onclick del boton 
    var x,y, resta //resta //Las variables que usaremos se definen dentro de la función

    x=parseInt(document.getElementById("n1").value)  //getElementById capta el dato del input tomando como dirección el id 
    y=parseInt(document.getElementById("n2").value) 
    resta=x-y

    document.getElementById('resultado').innerHTML="La resta da un total: " +resta;
}
function multiplicar() { //Se define la función, esta debe ser escrita igual que en el onclick del boton 
    var x,y,multiplica //multiplica //Las variables que usaremos se definen dentro de la función

    x=parseInt(document.getElementById("n1").value)  //getElementById capta el dato del input tomando como dirección el id 
    y=parseInt(document.getElementById("n2").value) 
    multiplica=x*y

    document.getElementById('resultado').innerHTML="La Multiplicación da un total: " +multiplica;
}
function dividir() { //Se define la función, esta debe ser escrita igual que en el onclick del boton 
    var x,y,divide //divide //Las variables que usaremos se definen dentro de la función

    x=parseInt(document.getElementById("n1").value)  //getElementById capta el dato del input tomando como dirección el id 
    y=parseInt(document.getElementById("n2").value) 
    divide=x/y

    document.getElementById('resultado').innerHTML="La división da un total: " +divide;
}