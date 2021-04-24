const Modal = {
    open() {
        document
            .querySelector('.modal-overlay')
            .classList
            .add('active')
    },

    close() {
        document
            .querySelector('.modal-overlay')
            .classList
            .remove('active')

    }
}
const Modal01 = {
    open() {
        document
            .querySelector('.modal-overlay02')
            .classList
            .add('active')

    },

    close() {
        document
            .querySelector('.modal-overlay02')
            .classList
            .remove('active')

    }
}


class Validator {

    constructor() {
        this.validations = [
            'data-required',
            'data-min-length',
            'data-max-length',
            'data-email-validate',
            'data-only-letters',
            'data-equal',
            'data-password-validate',
        ]
    };

    // iniciar a validação de todos os campos
    validate(form) {

        // resgata todas as validações
        let currentValidations = document.querySelectorAll('form .mensagemCadastro');

        if (currentValidations.length > 0) {
            this.cleanValidations(currentValidations);
        }

        // pegar os inputs
        let inputs = form.getElementsByTagName('input');
        // HTMLcolection -> array
        let inputsArray = [...inputs];
        // loop nos inputs e validação mediante ao que for encontrado
        inputsArray.forEach(function (input) {

            // loop em todas as validações existentes
            for (let i = 0; this.validations.length > i; i++) {
                // verifica se a validação atual existe no input
                if (input.getAttribute(this.validations[i]) != null) {

                    // data-min-length -> minlength
                    let method = this.validations[i].replace('data-', '').replace('-', '');

                    // valor do input
                    let value = input.getAttribute(this.validations[i]);

                    // invocar o método
                    this[method](input, value);
                }
            }
        }, this);
    }
    // verifica se o input tem um número mínimo de caracteres
    minlength(input, minValue) {
        let inputLength = input.value.length;

        let errorMessage = `o campo precisa ter pelo menos ${minValue} caracteres`;

        if (inputLength < minValue) {
            this.printMessage(input, errorMessage);
        }
    }

    //verifica se um input passou do limite de caracteres
    maxlength(input, maxValue) {
        let inputLength = input.value.length;

        let errorMessage = `O campo precisa ter menos que ${maxValue} caracteres`;

        if (inputLength > maxValue) {
            this.printMessage(input, errorMessage);
        }
    }

    // valida se o campo tem apenas letras
    onlyletters(input) {

        let re = /^[A-Za-z]+$/;

        let inputValue = input.value;

        let errorMessage = `Este campo não aceita números nem caracteres especiais`;

        if (!re.test(inputValue)) {
            this.printMessage(input, errorMessage);
        }
    }
    // valida emails
    emailvalidate(input) {
        let re = /\S+@\S+\.\S+/;

        let email = input.value;

        let errorMessage = `Insira um e-mail no padrão example@email.com`;

        if (!re.test(email)) {
            this.printMessage(input, errorMessage);
        }
    }



    required(input) {
        let inputValue = input.value;

        if (inputValue === '') {
            let errorMessage = `Este campo é obrigatório`;

            this.printMessage(input, errorMessage);
        }
    }

    equal(input, inputName) {

        let inputToCompare = document.getElementsByName(inputName)[0];

        let errorMessage = `Este campo precisa estar igual ao ${inputName}`;

        if (input.value != inputToCompare.value) {
            this.printMessage(input, errorMessage);
        }
    }

    // valida campo de senha
    passwordvalidate(input) {

        // explodir string em um array
        let charArr = input.value.split("");

        let uppercases = 0;
        let numbers = 0;

        for (let i = 0; charArr.length > i; i++) {
            if (charArr[i] === charArr[i].toUpperCase() && isNaN(parseInt(charArr[i]))){
                uppercases++;

            } else if (!isNaN(parseInt(charArr[i]))) {
                numbers++;
            }

        }
            if (uppercases === 0 || numbers === 0) {
                let errorMessage = `A senha precisa de um caractere maiúsculo e um número`;

                console.log(uppercases)
                console.log(numbers)

                this.printMessage(input, errorMessage);
            }
       
    }
    // método para imprimir mensagens de erro na tela
    printMessage(input, msg) {

        // quantidade de erros
        let errorsQty = input.parentNode.querySelector('.mensagemCadastro');

        if (errorsQty === null) {
            let template = document.querySelector('.mensagemCadastro').cloneNode(true);

            template.textContent = msg;
            template.style.color = 'red';
            let inputParent = input.parentNode;

            template.classList.remove('template');

            inputParent.insertBefore(template, input.nextElementSibling);
        }
    }

    // limpa as validações da tela
    cleanValidations(validations) {
        validations.forEach(el => el.remove());
    }
}

const firstName = document.getElementById('fname').value;
const lastName = document.getElementById('lname').value;
const typeSexo = document.getElementById('tsexo').value;
const dateAge = document.getElementById('age').value;
const email = document.getElementById('email').value;
const password = document.getElementById('pwd').value;
const validatePassword = document.getElementById('vpwd').value;
const mensagemCadastro = document.querySelector('.mensagemCadastro')
const form = document.getElementById('cadastro')
const submit = document.getElementById('personCadastro')

let validator = new Validator();

submit.addEventListener('click', function (e) {

    e.preventDefault();

    validator.validate(form);
});

const formCadastro = {
    firstName01: firstName,
    lastName01: lastName,
    typeSexo01: typeSexo,
    dateAge01: dateAge,
    email01: email,
    password01: password,
    validatePassword01: validatePassword
};
localStorage.setItem("dev.cadastro:cadastramento", JSON.stringify(formCadastro));



function acesso() {

    const loginStorage = JSON.parse(localStorage.getItem("dev.cadastro:cadastramento"));
    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;
    const msgAcesso = document.querySelector('#mensagemLogin')

    if (login === loginStorage.email01 && password === loginStorage.password01) {
        console.log("ACESSO AUTORIZADO!")
        msgAcesso.innerText = 'ACESSO AUTORIZADO!'
        msgAcesso.style.color = 'green'
    }
    else {
        console.log("Login ou senha invalido!")
        msgAcesso.innerText = 'Login ou senha invalido!'
        msgAcesso.style.color = 'red'
    }

};