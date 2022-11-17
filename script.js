class validator {
    constructor() {
        this.validations = [

        ]


    }
    // iniciar a validação detodos os campos // start validating all fields
    validate(form) {
        // getall inputs

        let inputs = form.getElementsByTagname('input')

        // transformar html colection em um array
        let inputsArray = [...inputs]

    }
}

let form = document.getElementById("register-form")
let submit = document.getElementById("btn-submit")
let validators = new validator()

//shot event for validation // disparo de evento paravalidação

submit.addEventListener('click', (e) => {
    e.preventDefault()
    validator.validate(form)



})