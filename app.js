

// Mostrar resultados en Javascripta
console.log('Conectado a app.js');
alert("esto es un mensaje en una ventana!");

// vaya y escriba en el documento
document.write("la informacion se muestra dentro de la pagina web html, con document.write");
//
document.write("<h3>mi segundo parrafo con document.write</h3>");


// Declaramos un Variable
var time= new Date();
//Muestra la variable
alert(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());

//Podemos realizar sumas con javascript
var num1=3;
var num2=4;
alert(num1+num2)


//otras maneras de crear los scripts es directamente en el codigo html

//en el Head y en el body

// en el head:
//var time = new Date();
//console.log(time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds());


// en el body
//let d = new Date();
//document.body.innerHTML = "<h1>Time right now is:  " + d.getHours() + ":" + //d.getMinutes() + ":" + d.getSeconds()


//diferencias entre let, var, y const 
//https://cybmeta.com/var-let-y-const-en-javascript


//ejemplo para validar un correo https://www.hostinger.co/tutoriales/insertar-javascript-en-html/  otro ejemplo https://developer.mozilla.org/es/docs/Learn/Getting_started_with_the_web/JavaScript_basics