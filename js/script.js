var linhaSelecionada = null;

// Alertas
function alerta(mensagem, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(mensagem));

    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => div.remove(), 3000);
}

// Deletar
document.querySelector("#form-aluno").addEventListener("click", (e) => {
    const target = e.target;

    if (target.contains("delete")) {
        const linha = target.parentElement.parentElement;
        linha.remove();
        alerta("Aluno excluído com sucesso!", "danger");
    }
});
