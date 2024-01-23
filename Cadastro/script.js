const cadastroPessoa = document.getElementById('cadastroPessoa')

function montarJson() {
    const montarJson = '{' 
    +' "nome": ' + JSON.stringify(cadastroPessoa.nome.value) + ', ' 
    +' "sobrenome": ' + JSON.stringify(cadastroPessoa.sobreNome.value) + ', ' 
    +  ' "idade": ' + JSON.stringify(cadastroPessoa.idade.value) + ', ' 
    + ' "comidafavorita": ' + JSON.stringify(cadastroPessoa.comidaFavorita.value) + ', '
    + ' "possuilactose": ' + JSON.stringify(cadastroPessoa.lactose.value) + '}' 
}

let contador = 0

function objetoJson(){
    // como criar uma variavel
    const objeto = {
        nome: cadastroPessoa.nome.value,
        sobrenome: cadastroPessoa.sobreNome.value,
    }
    console.log(objeto)

    localStorage.setItem('pessoa', objeto)

    const objetoJson = JSON.stringify(objeto)
    contador++
    localStorage.setItem('pessoa' + contador, objetoJson )
}

function pegarDados() {
    const pessoa = localStorage.getItem('pessoa')

    console.log(pessoa)
}