function validardatos() {
    /* descomentar un bloque de código, es decir mas de una linea */
    // Descomentar una sola linea de código

    //alert("Hola Mundo")   //se usa para arrojar una alerta
    //prompt("Ingrese su nombre") //se usa para dar un nuevo mensaje de ingreso
    //console.log("Hola Mundo")  //se utiliza para que el susuario no vea las modificaciones
    //document.write("HOLA MUNDO") //Lo que escribamos en pantalla aparece en otra nueva pantalla. Se utiliza en casos como: enviar código HTML en la pantalla por medio del JavaScript
  
    
    let nombres = document.getElementById("name").value  // accede al valor o informción que están esccribiendo en este item
    
    if(nombres=="Paola Reyes"){
        alert("Bienvenido")
    } else{
        alert("No se encuentra inscrito")
    }

    let Email = document.getElementById("email").value 

    if(Email=="notengocorreo@gmail.com") {
        alert("correo no valido. Ingrese nuevamente su correo")
    } else{
        alert("Correo valido, continue su registro por favor.")
    }

    let Edad = document.getElementById("edad").value 

    if(Edad=="0") {
        alert("edad no permitida, ingrese nuevamente")
    } else{
        alert("Continue su registro por favor")
    }

    let Teléfono = document.getElementById("telefono").value 

    if(Teléfono=="0000000000") {
        alert("Número telefónico no permitido. Ingrese nuevamente su teléfono fijo o celular")
    } else{
        alert("Continue su registro por favor")
    }

    let Comentarios = document.getElementById("comment").value 

    if(Comentarios=="xxxxxxxxxx") {
        alert("comentario no valido. Ingresando su comentario nos ayuda a mejorar o solucionar su inconveniente ")
    } else{
        alert("Gracias por sus comentarios. Nos estaremos comunicando lo mas pronto posible a su correo.")
    }

    let queestudias = document.getElementById("check1").value 

    if(queestudias=="check1") {
        alert("Respuesta válida")
    } else{
        alert("Respuesta inválida.")
    }
    // esto es para crear mensajes de bienvenido
       

       
}