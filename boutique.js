
let jus = {
    orange : 2000,
    avocat : 2500,
    ananas : 2000,
    citronnade : 2000
};

let pain = {
    croissant : 3000,
    brios : 1000 ,
    mofo_kida : 1000 ,
    madeleine : 800
};

let biscuit = {
    frego : 600 ,
    miam : 600,
    potata : 3000 ,
    goutie : 1500
};


let cahier = {
    champion : 2000,
    triumph : 2000 ,
    caligraphe : 1800
};

let total = 0;

function ajouter(){

let select = document.getElementById("produit");
let choix = select.value;

let prix = 0;

if(choix === "Jus"){
    prix = jus.orange;
}
else if(choix === "Pain"){
    prix = pain.croissant;
}
else if(choix === "Biscuit"){
    prix = biscuit.frego;
}
else if(choix === "Cahier"){
    prix = cahier.champion;
}

total = total + prix;

document.getElementById("total").textContent = total;

}

function actualiser(){
    let span = document.getElementById("total");
    span.textContent = "0";
}


