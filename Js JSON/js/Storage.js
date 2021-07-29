var usuarios = [];

function salvar()
{
    let id = parseInt(document.getElementById("id").value);
    let nome = document.getElementById("nome").value;
    let usuario = {"id":id, "nome":nome};
    usuarios.push(usuario);
    localStorage.setItem("usuarios", JSON.stringify(usuarios));

}

function exibir()
{
    let usuariosJson = localStorage.getItem("usuarios");
    console.log(usuariosJson);
    let usuariosConvertidos = JSON.parse(usuariosJson)
    console.log(usuariosConvertidos[0].nome)
}

window.onload = function()
{
    exibir();    
};