console.log("Olá, mundo!");
let form = document.getElementById("contact-form");
form.addEventListener("submit", enviarFormulario);
function enviarFormulario(event) {
    event.preventDefault();
    let nome = document.getElementById("input-nome").value;
    console.log(nome);
    alert("Seu Contato foi enviado com sucesso!");

}
