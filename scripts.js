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

// Função para carregar as tarefas do LocalStorage
function carregarTarefas() {
    let lista = document.getElementById("lista-tarefa");
    let tarefas = localStorage.getItem("tarefas"); // Pega as tarefas salvas no LocalStorage

    if (tarefas) {
        lista.innerHTML = tarefas; // Coloca as tarefas dentro do <ol>
    }
}

// Função para adicionar tarefa
function adicionaLista() {
    let input = document.getElementById("add-item-input");
    let lista = document.getElementById("lista-tarefa");

    if (input.value.trim() !== "") {
        // Cria a nova <li>
        let novaTarefa = `<li class="list-group-item">${input.value} <button id="delete-button" type="button" class="btn float-right btn-danger">Delete</button>  <button id="delete-button" type="button" class="btn float-right btn-success">Feita</button> </li>`;

        // Adiciona a nova tarefa à lista existente
        lista.innerHTML += novaTarefa;

        // Armazena as tarefas no LocalStorage
        localStorage.setItem("tarefas", lista.innerHTML);

        input.value = ""; // Limpa o campo de input
    }
}

// Carrega as tarefas quando a página for carregada
window.onload = carregarTarefas;



function limpaLista(){
    localStorage.clear();
    window.location.reload()

}