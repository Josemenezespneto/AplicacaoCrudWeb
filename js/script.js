var selectedRow = null;

//show alerts
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div,main);

    setTimeout(() => document.querySelector(".alert").remove(), 3000);

}

//limpar campos
function clearFields(){
    document.querySelector("#nome").value = "";
    document.querySelector("#cpf").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#datanasc").value = "";
    document.querySelector("#senha").value = "";
}

document.querySelector("#lista-aluno").addEventListener("click", (e) =>{
    target= e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Aluno removido com sucesso!", "danger");
    }
});
 