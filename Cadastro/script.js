const login = document.getElementById('login')

// function montarJson() {
//     const montarJson = '{' 
//     +' "nome": ' + JSON.stringify(cadastroPessoa.nome.value) + ', ' 
//     +' "sobrenome": ' + JSON.stringify(cadastroPessoa.sobreNome.value) + ', ' 
//     +  ' "idade": ' + JSON.stringify(cadastroPessoa.idade.value) + ', ' 
//     + ' "comidafavorita": ' + JSON.stringify(cadastroPessoa.comidaFavorita.value) + ', '
//     + ' "possuilactose": ' + JSON.stringify(cadastroPessoa.lactose.value) + '}' 
// }

let contador = 0

function objetoJson(){
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    // como criar uma variavel
    let objeto = {
        usuario: login.email.value,
        senha: login.senha.value,
    }

    console.log(objeto)

    let objetoJson = JSON.stringify(objeto)
    contador++
    console.log('dados:' + objeto)
    localStorage.setItem('pessoa' + contador, objetoJson )

    pegarDados();
}


function pegarDados() {
    let pessoa = localStorage.getItem('pessoa' + contador);
    console.log(pessoa);
}