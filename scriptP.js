const Modal = {
    open(){
        document
        .querySelector ('.modal-overlay')
        .classList
        .add('active')
    },

    close(){
        document
        .querySelector('.modal-overlay')
        .classList
        .remove('active')

    }
}
const Modal01 = {
    open(){
        document
        .querySelector('.modal-overlay02')
        .classList
        .add('active')

    },

    close(){
        document
        .querySelector('.modal-overlay02')
        .classList
        .remove('active')

    }
}
function enviarCadastro() {
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let typeSexo = document.getElementById('tsexo').value;
    let dateAge = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('pwd').value;
    let validatePassword = document.getElementById('vpwd').value;

    let formCadastro = {
        firstName01: firstName,
        lastName01: lastName,
        typeSexo01: typeSexo,
        dateAge01: dateAge,
        email01: email,
        password01: password,
        validatePassword01: validatePassword
        
    };
    localStorage.setItem("dev.cadastro:cadastramento",JSON.stringify(formCadastro));
    return
}

function acesso() {
    
    let loginStorage = JSON.parse(localStorage.getItem("dev.cadastro:cadastramento"));
    let login = document.getElementById('login').value;
    let password = document.getElementById('password').value;

    if (login === loginStorage.email01 && password === loginStorage.password01) {
        console.log("ACESSO AUTORIZADO!")
    }
    else{
        console.log("Login ou senha invalido!")
    }
    
}