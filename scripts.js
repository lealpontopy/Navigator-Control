var sauda = document.getElementById("sauda")
let pegaHora = new Date
let hora = pegaHora.getHours()

if (hora > 6 && hora  < 12){
    sauda.innerHTML = "Bom Dia <span>Davi</span>"
}
else if (hora > 12 && hora < 19){
    sauda.innerHTML = "Bom Tarde <span>Davi</span>"
}
else if (hora > 19 && hora < 23){
    sauda.innerHTML = "Boa Noite <span>Davi!</span>"
}
