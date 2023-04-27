let btnsaludoIngles = document.getElementById("saludoIngles");
btnsaludoIngles.addEventListener("click",saludarIngles);

let btnsaludoEspañol = document.getElementById("saludoEspañol");
btnsaludoIngles.addEventListener("click",saludarEspaniol);

async function saludarIngles(){
    let promesa = fetch('/api/saludoIngles');
    let respuesta= await promesa;

    let html="";
    html = await respuesta.json();
    document.querySelector("#saludo").innerHTML = html;
}