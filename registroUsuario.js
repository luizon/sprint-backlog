function registrar() {
	var nombre = document.getElementById("nombre").value;
	if(nombre.length == 0) {
		alert("El campo del nombre no debe estar vacío")
		return;
	}
	var edad = document.getElementById("edad").value;
	if(edad.length == 0) {
		alert("El campo de edad no debe estar vacío")
		return;
	}
	var peso = document.getElementById("peso").value;
	if(peso.length == 0) {
		alert("El campo de peso no debe estar vacío")
		return;
	}
	var estatura = document.getElementById("estatura").value;
	if(estatura.length == 0) {
		alert("El campo de estatura no debe estar vacío")
		return;
	}
	/*
	var sexo = document.getElementById("sexo").value;
	if(sexo == "-") {
		alert("Debes escoger un sexo")
		return;
	}
	var tipoUsuario = document.getElementById("tipoUsuario").value;
	if(tipoUsuario == "-") {
		alert("Debes escoger un tipo de usuario")
		return;
	}
	/**/
	var correo = document.getElementById("correo").value;
	if(!validarCorreo(correo)) {
		alert("Debes escribir un correo válido")
		return;
	}
	alert("¡Usuario registrado con éxito!");
}

function validarCorreo(email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function redireccionar(){
	window.location.href = "index.html";
} 