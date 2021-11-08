const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textarea = document.querySelectorAll('#formulario textarea');
const inputImag = document.getElementById('productImagen');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,16}$/, // Letras, pueden llevar acentos.
	nombreConNum: /^[a-zA-ZÀ-ÿ0-9\s]{6,100}$/, // Letras, pueden llevar acentos.
	descrip: /^.{20,500}$/, // Letras, pueden llevar acentos.
	password: /^.{8,16}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};

const campos = {
	nombreR: false,
	correoR: false,
	passwordR: false,
	correoL: false,
	passwordL: false,
	titulo: false,
	descripcion: false,
	productImagen: false
}

const validarFormulario = (e) => {
	switch (e.target.id) {
		case "descrption":
			validarCampoTxtarea(expresiones.descrip, e.target);
		break;
		case "title":
			validarCampo(expresiones.nombreConNum, e.target, 'titulo');
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
		case "productImagen":
			if (e.target.files.length <= 5 && e.target.files.length > 0) {
				document.getElementById('selec-5-img').classList.remove('selec-5-img__incorrecto');
				document.getElementById('selec-5-img2').classList.remove('selec-5-img-none');
				campos['productImagen'] = true;
			} else if (e.target.files.length >= 0) {
				document.getElementById('selec-5-img').classList.add('selec-5-img__incorrecto');
				document.getElementById('selec-5-img2').classList.add('selec-5-img-none');
				campos['productImagen'] = false;
			}
			console.log(e.target.files.length);
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

const validarCampoTxtarea = (e) => {
	switch (e.target.id) {
		case "description":
			if (expresiones.descrip.test(e.target.value)) {
				document.getElementById('grupo__descrip').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('grupo__descrip').classList.add('formulario__grupo-correcto');
				document.getElementById('check-descrip').classList.remove('formulario__grupo-incorrecto');
				document.getElementById('check-descrip').classList.add('formulario__grupo-correcto');
				document.getElementById('check-descrip').classList.add('fa-check-circle');
				document.getElementById('check-descrip').classList.remove('fa-times-circle');
				document.getElementById('text-decrip').classList.remove('formulario__input-error-activo');
				campos['descripcion'] = true;
			} else {
				document.getElementById('grupo__descrip').classList.add('formulario__grupo-incorrecto');
				document.getElementById('grupo__descrip').classList.remove('formulario__grupo-correcto');
				document.getElementById('check-descrip').classList.add('formulario__grupo-incorrecto');
				document.getElementById('check-descrip').classList.remove('formulario__grupo-correcto');
				document.getElementById('check-descrip').classList.remove('fa-check-circle');
				document.getElementById('check-descrip').classList.add('fa-times-circle');
				document.getElementById('text-decrip').classList.add('formulario__input-error-activo');
				campos['descripcion'] = false;
			}
		break;
	}
}

textarea.forEach((txtarea) => {
	txtarea.addEventListener('keyup', validarCampoTxtarea)
	txtarea.addEventListener('blur', validarCampoTxtarea)
})

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
	input.addEventListener('mouseout', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	console.log(campos.productImagen);

	if (campos.productImagen) {
		console.log('Es correcto');
	} else {
		console.log('no es correcto')
	}


	const terminos = document.getElementById('terminosR');
	if (campos.nombreR && campos.passwordR && campos.correoR && terminos.checked) {
		formulario.submit();
	} else if (campos.correoL && campos.passwordL) {
		formulario.submit();
	} else if (/* campos.productImagen &&  */campos.titulo && campos.descripcion) {
		formulario.submit();
	} else	{
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
	}
});