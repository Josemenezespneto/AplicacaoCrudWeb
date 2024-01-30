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

//criar
document.querySelector("#form-aluno").addEventListener("submit", (e) =>{
    e.preventDefault();

    //get valores

    const nome = document.querySelector("#nome").value;
    const cpf = document.querySelector("#cpf").value;
    const email = document.querySelector("#email").value;
    const datanasc = document.querySelector("#datanasc").value;
    const senha = document.querySelector("#senha").value;

    //validacao
    if (nome.trim() == "" || cpf.trim() == ""  || email.trim() == "" || datanasc.trim() == "" || senha.trim() == "" ){
        showAlert("Por favor preencha todos os campos", "danger" );
    }
    else{
        if(selectedRow == null){
            const list = document.querySelector("#lista-aluno");
            const row = document.createElement("tr");

            row.innerHTML = `
                <td>${nome}</td>
                <td>${cpf}</td>
                <td>${email}</td>
                <td>${datanasc}</td>
                <td>
                <a href="#" class="btn btn-warning btn-sm edit">Editar</a>
                <a href="#" class="btn btn-danger btn-sm delete">Apagar</a>
            `;
            list.appendChild(row);
            selectedRow = null;
            showAlert("Aluno cadastrado com sucesso", "success");
        }
    }
}); 

document.querySelector("#lista-aluno").addEventListener("click", (e) =>{
    target= e.target;
    if (target.classList.contains("delete")) {
        target.parentElement.parentElement.remove();
        showAlert("Aluno removido com sucesso!", "danger");
    }
});
 