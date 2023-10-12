const form = document.getElementById('form');
const username = document.getElementById('usuario');
const age = document.getElementById('edad');
const email = document.getElementById('correo electrónico');
const password = document.getElementById('contraseña');
const password2 = document.getElementById('contraseña2');


// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}
// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '' || input.value.length == 0) {
            showError(input, `El campo ${getFieldName(input)} es obligatorio`)
        } else {
            showSuccess(input);
        }
    });

}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check age
function checkAge(input){
    console.log("la longitud es:" + input.value);
    if (input.value >= 0 && input.value < 1000 && input.value.length>0){
        showSuccess(input);
    } else {
        showError(input, `El campo ${getFieldName(input)} debe estar entre 0 y 1000`)
    }
}
// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, `El campo ${getFieldName(input)} no es válido`);
    }
}

// Check password validity
function checkPasswordVal(input) {
    const re = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[~!@#$%^&*()_+\-=\{\}\|\[\]\\:";'<>?,./])[^]{8,}$/i;
    if (re.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, `El campo ${getFieldName(input)} debe contener mayus, min, números y algún símbolo y una longitud mínima de 8 caracteres`)
    }
}

// Check passwords match
function checkPasswordMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Las contraseñas no coinciden');
    } else {
        showSuccess(input2);
    }
}


// Event listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();
    
    checkAge(age);
    checkRequired([username, age, email, password, password2]);
    checkEmail(email);
    checkPasswordMatch(password, password2);
    checkPasswordVal(password);



});