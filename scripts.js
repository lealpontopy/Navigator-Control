var sauda = document.getElementById("sauda")
let pegaHora = new Date
let hora = pegaHora.getHours()

if (hora > 6 && hora  < 12){
    sauda.innerHTML = "Bom Dia <span>Davi</span> ☀️"
}
else if (hora > 12 && hora < 19){
    sauda.innerHTML = "Boa Tarde <span>Davi</span> ☁️"
}
else if (hora > 19 && hora < 23){
    sauda.innerHTML = "Boa Noite <span>Davi!</span> 🌜"
}

function adicionaLista(){
    let lista = document.getElementById("lista-tarefa")
    let add_Input = document.getElementById("add-item-input").value
    alert(add_Input)
    lista.innerHTML = `<li class="list-group-item">${add_Input}</li>`
 
}