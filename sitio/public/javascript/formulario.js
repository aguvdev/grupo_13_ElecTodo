const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,16}$/, // Letras, pueden llevar acentos.
	nombreConNum: /^[a-zA-ZÀ-ÿ0-9_.+-\s]{6,16}$/, // Letras, pueden llevar acentos.
	descrip: /^[a-zA-ZÀ-ÿ0-9_.+-\s]{20,500}$/, // Letras, pueden llevar acentos.
	password: /^.{8,16}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const campos = {
	nombreR: false,
	correoR: false,
	passwordR: false,
	correoL: false,
	passwordL: false
}

const validarFormulario = (e) => {
	switch (e.target.id) {
		case "title":
			validarCampo(expresiones.nombreConNum, e.target, 'nombre');
		break;
		case "nameR":
			validarCampo(expresiones.nombre, e.target, 'nombreR');
		break;
		case "emailR":
			validarCampo(expresiones.correo, e.target, 'correoR');
			validarCampo3('emaiRl', 'emailagainR', 'correo2R');
		break;
		case "emailagainR":
			validarCampo3('emailR', 'emailagainR', 'correo2R');
		break;
		case "passwordR":
			validarCampo(expresiones.password, e.target, 'passwordR');
			validarCampo2('passwordR', 'passwordagainR', 'password2R');
		break;
		case "passwordagainR":
			validarCampo2('passwordR', 'passwordagainR', 'password2R');
		break;
		case "emailL":
			validarCampo(expresiones.correo, e.target, 'correoL');
		break;
		case "passwordL":
			validarCampo(expresiones.password, e.target, 'passwordL');
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
		campos['passwordR'] = false;
	} else {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.getElementById(`check-${campo}`).classList.add('fa-check-circle');
		document.getElementById(`check-${campo}`).classList.remove('fa-times-circle');
		document.getElementById(`formulario__input-error-${campo}`).classList.remove('formulario__input-error-activo');
		campos['passwordR'] = true;
	}
}
const validarCampo3 = (espacio1, espacio2, campo) => {
	const input1 = document.getElementById(espacio1);
	const input2 = document.getElementById(espacio2);

	if (input1.value !== input2.value) {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.getElementById(`check-${campo}`).classList.add('fa-times-circle');
		document.getElementById(`check-${campo}`).classList.remove('fa-check-circle');
		document.getElementById(`formulario__input-error-${campo}`).classList.add('formulario__input-error-activo');
		campos['correoR'] = false;
	} else {
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.getElementById(`check-${campo}`).classList.add('fa-check-circle');
		document.getElementById(`check-${campo}`).classList.remove('fa-times-circle');
		document.getElementById(`formulario__input-error-${campo}`).classList.remove('formulario__input-error-activo');
		campos['correoR'] = true;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();
	console.log(campos);

	const terminos = document.getElementById('terminosR');
	console.log(terminos);
	if (campos.nombreR && campos.passwordR && campos.correoR && terminos.checked) {
		formulario.submit();
	} else if (campos.correoL && campos.passwordL) {
		formulario.submit();
	} else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});