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