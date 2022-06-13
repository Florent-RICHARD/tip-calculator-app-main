let price = document.getElementById("price");
let nbPerso = document.getElementById("nb-perso");

let listBtnPercentage = document.querySelectorAll(".btn-percentage");

let amount = document.getElementById("amount");
let total = document.getElementById("total");

let btnCalcul = document.getElementById("calcul");
let btnReset = document.getElementById("reset");

let inputCustom = document.getElementById("input-custom");

let percentage = 5;

// Recupère le prix
function GetPrice(){
    let valuePrice = price.value;
    return parseInt(valuePrice);
}

// Recupère le nombre de perso
function GetNbPerso(){
    let valueNbPerso = nbPerso.value;
    return parseInt(valueNbPerso);
}

// Calcul le tip par perso
function CalculTip(){
    let price = GetPrice();
    let nbPerso = GetNbPerso();

    if(inputCustom.value !== ""){
        percentage = inputCustom.value;
        console.log(percentage);
    }

    let totalPerPerso = ((price * (parseFloat(percentage) / 100)) / nbPerso);

    amount.innerText = '$' + parseFloat(totalPerPerso);

    return parseFloat(totalPerPerso);
}

// Calcul le prix par perso
function CalculTotal(){
    let price = GetPrice();
    let nbPerso = GetNbPerso();

    let totalPerPerso = (price / nbPerso) + CalculTip();

    total.innerText = '$' + parseFloat(totalPerPerso);

    /*return parseFloat(totalPerPerso);*/
}

// Desac tous les btn
function desacBtn(){
    for (let index = 0; index < listBtnPercentage.length; index++) {
        listBtnPercentage[index].classList.remove("active-btn")
    }
}

listBtnPercentage.forEach(btn => {
    btn.addEventListener("click", () =>{
        percentage = parseInt(btn.id);
        desacBtn();
        btn.classList.add("active-btn")
    })
});

btnCalcul.addEventListener("click", CalculTotal)

// Vérifie si tous les champs sont remplis
btnCalcul.addEventListener("click", () =>{
    if(nbPerso.value == 0 || price.value == 0){
        console.log("erreur nb 0");
        window.alert("Vous devez remplir tous les champs");
    }
})

// Reset les input
btnReset.addEventListener("click", () =>{
    nbPerso.value = 0;
    price.value = 0;
    amount.innerText = "$0.00";
    total.innerText = "$0.00";
})
