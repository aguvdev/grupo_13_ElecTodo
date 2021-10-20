const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ]{1,16}$/, // Letras, pueden llevar acentos.
	password: /^.{8,16}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const campos = {
	name: false,
	email: false,
	password: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "name":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "email":
			validarCampo(expresiones.correo, e.target, 'correo');
			validarCampo2('email', 'emailagain', 'correo2');
		break;
		case "emailagain":
			validarCampo2('email', 'emailagain', 'correo2');
		break;
		case "password":
			validarCampo(expresiones.password, e.target, 'password');
			validarCampo2('password', 'passwordagain', 'password2');
		break;
		case "passwordagain":
			validarCampo2('password', 'passwordagain', 'password2');
		break;
	}
};

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.getElementById(`check-${campo}`).classList.add('fa-check-circle');
		document.getElementById(`check-${campo}`).classList.remove('fa-times-circle');
		document.getElementById(`formulario__input-error-${campo}`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.getElementById(`check-${campo}`).classList.add('fa-times-circle');
		document.getElementById(`check-${campo}`).classList.remove('fa-check-circle');
		document.getElementById(`formulario__input-error-${campo}`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
};

const validarCampo2 = (espacio1, espacio2, campo) => {
	const input1 = document.getElementById(espacio1);
	const input2 = document.getElementById(espacio2);

	if (input1.value !== input2.value) {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.getElementById(`check-${campo}`).classList.add('fa-times-circle');
		document.getElementById(`check-${campo}`).classList.remove('fa-check-circle');
		document.getElementById(`formulario__input-error-${campo}`).classList.add('formulario__input-error-activo');
		campos['password'] = false;
	} else {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.getElementById(`check-${campo}`).classList.add('fa-check-circle');
		document.getElementById(`check-${campo}`).classList.remove('fa-times-circle');
		document.getElementById(`formulario__input-error-${campo}`).classList.remove('formulario__input-error-activo');
		campos['password'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});