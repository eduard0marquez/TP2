function ejercicio1(){
    let edad = prompt('ingresa tu edad');
    if (edad==undefined) {
        alert('Ingresa un valor')
    }
    else if (edad >= 18) {
        alert('Ya puede conducir')
        
    }
    else {
        alert('Introduce una edad valida')
    }
}


function ejercicio2(){
    let calif;
    do {
        let entrada = prompt('ingresa una calificacion');
        if (entrada === null|| entrada=='') {
            alert('No se ingreso ninguna nota')
            break;
        }
        nota = +(entrada);
        if (isNaN(nota)) {
            alert('Introduce un numero Vlido')
        }
        else if (nota < 0 || nota > 10) {
            alert('Numero Erroneo')
        }
        else {
            switch (nota) {
                case 0:
                case 1:
                case 2:
                    alert('Muy deficiente')
                    break;
                case 3:
                case 4:
                    alert('Insuficiente')
                    break;
                case 5:
                case 6:
                    alert('Suficiente')
                    break;
                case 7:
                    alert('Bien')
                    break;
                case 8:
                case 9:
                    alert('Notable')
                    break;
                case 10:
                    alert('Sobresaliente')
                    break;

            }
        }
    }
    while(confirm('Desea Continuar?')){

    }
}

function ejercicio3(){
    let result = '';
    do {

        let palabra = prompt('Ingresa una palabra').trim()
        if (palabra === null) {
            alert('Ingresa una palabra')
            break;
        }
        else if (result === '') {
            result = palabra;
        }
        else {
            result = result + '-' + palabra;
        }
        
    }
    while (confirm('Desea continuar?'))
    
    document.write(result||'No se ingresaron palabras');
    
}


function ejercicio4(){
    let suma = 0;
    do {
        let numero = prompt('Ingrese un numero');
        if (numero === null) {
            break;
        }
        else if (!isNaN(numero) && numero.trim() !== '') {
            suma += +(numero);
        }
        else {
            alert(`${numero} no es un numero valido`)
        }
    }
    while (true);

    document.write('El Total  de  la suma de los números ingresados es : ' + suma);

}

function ejercicio5() {
   
const letras = ["T", "R", "W", "A", "G", "M", "Y", "F", "P", "D", "X", "B", "N", "J", "Z", "S", "Q", "V", "H", "L", "C", "K", "E"];

while (true){
    
    let numeroDNI = prompt("Ingrese el numero de DNI")

    if(numeroDNI === null){
        alert("Introduce un numero valido")
        break;
    }

    if(!isNaN(numeroDNI) && numeroDNI >= 0 && numeroDNI <= 99999999){
        numeroDNI = parseInt(numeroDNI);
        
        let resto = numeroDNI % 23;
        let letra = letras[resto];

        alert(`La letra correspondiente al DNI ${numeroDNI} es ${letra}`)
        break;
    
    } else {
        alert("Ingresa un numero valido")
    }

} 
}

function ejercicio6(){
    let i=0;
    let num='';
    let contador;
    for(i=0;i!=31;i++){
        while(i!=30){    
         i++;
         document.write('<p>');
         for(contador=0;contador!=i;contador++){
            num='';
            num=num.concat(i.toString()); 
            document.write(num);
         }
         document.write('</p>');
         
        }   
    }
}



function ejercicio7(){
    let numero=parseInt(prompt('Ingresa un numero no mayor a 50 para que cuente, (Antes de ejercutar favor de oprimir click derecho e inspeccionar para ver el resultado)'));
    let i;
    let imprimir = '';
    

    for(i=numero;i>=0;i--){
        while(i>=0){    
         document.write('<p>');
         for(contador=0;contador!=i;contador++){
            num='';
             num = num.concat(i.toString()); 
            document.write(num);
            }
            i--;
         document.write('</p>');
         
        }  
       
         }
         
    
}
function ejercicio8(){
    let numero=parseInt(prompt('Ingresa un numero no mayor a 50 para que cuente, (Antes de ejercutar favor de oprimir click derecho e inspeccionar para ver el resultado)'));
    let i;
    let imprimir = '';
   

    for(i=0;i!=(numero+1);i++){
        while(i!=numero){
         i++;
         imprimir=imprimir.concat(i);   
         document.write('<p>'+imprimir+'</p>'); 
        }
        
        }
        }
    

function ejercicio9() {

let limite = 500;

for (let i = 1; i <= limite; i++) {
    //escribir el numero
    document.write(i)

    // identificar si es multiplo de 
    if(i % 4 === 0){
        document.write(" es multiplo de 4")
    } 
    if (i % 9 === 0){
        document.write(" es multiplo de 9")
    }

    // salto de linea despues de cada numero
    document.write("<br>")

    // Agregar linea cada 5 numeros
    if(i % 5 === 0 ){
        document.write("<hr>")
    }

} 
    
}
function ejercicio10() {
     let filas = parseInt(prompt("ingrese numero de filas"))
let columnas = parseInt(prompt("ingrese numero de columnas"))


if(isNaN(filas) || filas <= 0 || isNaN(columnas) || columnas <= 0 ){
    alert("Ingrese un numero valido")
} else {
    
    let total = filas * columnas;

    document.write('<table border="1" style="border-collapse; text-align:center;">')

    for (let indiceFila = 0; indiceFila < filas; indiceFila++) {
        document.write('<tr>');

        for (let indiceColumnas = 0; indiceColumnas < columnas; indiceColumnas++) {
        document.write('<td>' + total + '</td>');
        total--;
        
        } 

        document.write('</tr>')

    }
    document.write('</table>')
} 
}
function ejercicio11() {
    let nombre1 = prompt('Ingresa El nombre de la primer persona');
    let nombre2 = prompt('Ingresa El nombre de la segunda persona');
    let nombre3= prompt('Ingresa El nombre de la tercer persona');
    let edad1 = parseInt(prompt(`¿ Cuantos años tiene  ${nombre1} ?`));
    let edad2 = parseInt(prompt(`¿ Cuantos años tiene ${nombre2} ?`));
    let edad3 = parseInt(prompt(`¿ Cuantos años tiene ${nombre3} ?`));
    let mayor = Math.max(edad1, edad2, edad3);
    if(edad1==edad2||edad1==edad3||edad2==edad3){
     alert('Al menos dos personas tienen la misma edad, por favor ingresa personas con edades diferentes')
    }
    else if (mayor==edad1) {
        alert(`${nombre1} Es el mayor de los tres`)
    }
    else if (mayor==edad2) {
        alert(`${nombre2} Es el mayor de los tres`)
    }
    else {
        alert(`${nombre3} Es el mayor de los tres`)
    }
      
}

function ejercicio12() {
    let numero = (Math.random()*100);//Se declara la variable numero que es igual a un numero aleatorio por 100 ya que por default solo da un numero entre 0 y 1(el 1 excluido)
    alert(numero);//Se manda un mensaje con el numero obtenido
}
function ejercicio13() {
    let palabra = prompt('Ingresa una palabra');//Se declara una variable de la cual su valor es igual a lo que ingrese el usuario
    if (palabra == '') {//Se ingresa una condicion para validar si el usuario no  ingreso nada 
        alert('Ingresa una palabra valida')//En caso que el campo este vacio manda un mensaje para que se ingrese una palabra valida
    }
    else{
        alert('Tu palabra en mayusculas es : ' + palabra.toUpperCase()); //En caso que se ingrese una palabra, se imprime el mensaje con la palabra convertida en mayusculas
        }
}
function ejercicio14() {
    let palabra=prompt("Ingresa una Palabra");//Se solicita el ingreso de una palabra
    let index=0;//Se crea la variable index y se asigna el valor 0
    let guion='-'; //Se crea la variable guion para que se agregue despues de cada letra
    let letras="";//Inicio la variable con valor 'vacio'
    while(palabra.length!=index){ //Se declara un ciclo el cual se estara repitiendo hasta que la letra a comparar sea igual a '' es decir el final de la palabra
        letras = letras+palabra.charAt(index) + guion;//Se da el valor a la variable letra del valor de letra mas la letra extraida del indice correspondiente mas el guion
        index = index + 1;// Se suma uno al indice para que se recorra la letra a comparar 
    }
    alert(letras) //Se imprime en pantalla el valor de la bariale con los guiones agregados en el ciclo anterior

}
function ejercicio15() {
    
    let palabra=prompt("Ingresa una Palabra");//Se solicita el ingreso de una palabra
    let index=0;//Se crea la variable index y se asigna el valor 0
    let letraCompara=palabra.charAt(index); //Se extrae el caracter equivalente al indice 0 (La primer letra)
    let conteo=0;//Inicio la variable con valor 'vacio'
    while(letraCompara!=''){ //Se declara un ciclo el cual se estara repitiendo hasta que la letra a comparar sea igual a '' es decir el final de la palabra
        index=index+1;//Se crea el contador para que aumente 1 cada que entra en el ciclo
        if(letraCompara=='a'|| letraCompara=='e'|| letraCompara=='i'|| letraCompara=='o'|| letraCompara=='u' ){ //Se crea la condicion de cuando la letra equivalente al indice sea igual a 'a','e,'i','o,'u' 
            conteo = conteo+1;//En caso de ser verdadera la condicion la variable letra toma el valor de si misma mas la letra correspondiente al indice del momento
        }
        letraCompara=palabra.charAt(index);//La letra que a comprarar toma el nuevo valor del indice para que avance un caracter a la derecha      
    }
    alert(`El total de vocales en la palabra ' ${palabra} ' es : ${conteo}`); //Se imprime en pantalla el valor de todas las letras que coinsidieron con la condicion anterior

}
function ejercicio16() {
    let palabra = prompt('Ingresa una palabra');
    let index = palabra.length;
    let palabraReves = '';
    if (palabra == '') {
        alert('Ingresa una palabra valida')
    }
    else {
        while (index != 0) {
            index=index-1;
            palabraReves = palabraReves + palabra.charAt(index);
        }
        alert(`La palabra ' ${palabra} ' al revés se escribe : ${palabraReves}`)
    }
}
function ejercicio17() {
    let palabra=prompt("Ingresa una Palabra");//Se solicita el ingreso de una palabra
    let index=0;//Se crea la variable index y se asigna el valor 0
    let letraCompara=palabra.charAt(index); //Se extrae el caracter equivalente al indice 0 (La primer letra)
    let letra="";//Inicio la variable con valor 'vacio'
    while(letraCompara!=''){ //Se declara un ciclo el cual se estara repitiendo hasta que la letra a comparar sea igual a '' es decir el final de la palabra
        index=index+1;//Se crea el contador para que aumente 1 cada que entra en el ciclo
        if(letraCompara=='a'|| letraCompara=='e'|| letraCompara=='i'|| letraCompara=='o'|| letraCompara=='u' ){ //Se crea la condicion de cuando la letra equivalente al indice sea igual a 'a','e,'i','o,'u' 
            letra=letraCompara;//En caso de ser verdadera la condicion la variable letra toma el valor de si misma mas la letra correspondiente al indice del momento
            break //se rompe el ciclo para que ya encontrada la primer vocal ya no se haga otro comparativo
        }
        letraCompara=palabra.charAt(index);//La letra que a comprarar toma el nuevo valor del indice para que avance un caracter a la derecha      
    }
    alert(`La primer vocal de la palabra ' ${palabra} ' es la : ${letra} y se encuentra en la posición : ${index}`); //Se imprime en pantalla el valor de todas las letras que coinsidieron con la condicion anterior
}



