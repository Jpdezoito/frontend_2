let usuario1 = [
    {
        nome: 'José Paulo',
        sobrenome: 'Siqueira de campos',
        ende() {
            cep = 234587456
            end = 'Rua travessa do cravo'
        }
    } 
]

let usuario2 = [
     {
        nome: 'Ruis',
        sobrenome: 'Siqueira de campos',
        ende() {
            cep = 234587456
            end = 'Rua travessa do cravo'
        }
    } 
]

let usuario = [usuario1 , usuario2]

usuario.forEach(usuario => console.log(usuario))
