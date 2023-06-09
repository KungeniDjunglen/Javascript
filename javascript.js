let text = "Tjena Tjena, så var det med det. ";

let skrivKnapp = document.getElementById("skriv");
skrivKnapp.addEventListener("click", skriv);
function skriv(){
    let p = document.getElementById("p");
    p.innerHTML += text;
}


let alertKnapp = document.getElementById("alerta");
alertKnapp.addEventListener("click", alerta);
function alerta(){
    alert(text);
}