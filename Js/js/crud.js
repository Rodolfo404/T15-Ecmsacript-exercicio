var categorias = [{"id":1, "nome":"Chapéu", "descricao":"Para a cabeça"},
                {"id":2, "nome":"quarto", "descricao":"coisas para o quarto"}
                ];


function Salvar()
{
    let id = parseInt(document.getElementById("id").value);
    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value;
    lista = {"id":id,"nome":nome,"descricao":descricao};
    categorias.push(lista);
    CarregaTabela();
}



function CarregaTabela()
{
    let tabela = document.getElementById("lista");
    let corpo =  tabela.getElementsByTagName("tbody")[0];
    corpo.innerHTML = "";
    categorias.forEach(c => {
        corpo.innerHTML += `<tr><td>${c["id"]}</td><td>${c["nome"]}</td><td>${c["descricao"]}<td></tr>`;
    });
}                

window.onload = function()
{
    CarregaTabela();
}