var produtos = [];


function salvar()
{
    let id = parseInt(document.getElementById("id").value);
    let nome = document.getElementById("nome").value;
    let valor = parseInt(document.getElementById("valor").value);
    lista = {"id":id,"nome":nome,"valor":valor};
    produtos.push(lista);
    localStorage.setItem("produtos", JSON.stringify(produtos));
    sucess();
    // window.open("lista.html", "_blank") || window.location.replace("lista.html");
    }

     // window.location = "lista.html"; 


function sucess()
{
    var x = document.getElementById("sucesso");
    if(x.innerHTML === "") {
        x.innerHTML = "Cadastrado com sucesso";
    }else{
            x.innerHTML === "";
        }
        
}


function conversao()
{
    let cadastroJson = localStorage.getItem("produtos");
    if(cadastroJson != null){
        produtos = JSON.parse(cadastroJson);
    }
}


function carregaTabela()
{
    
    let tabela = document.getElementById("listaC");
    let corpo =  tabela.getElementsByTagName("tbody")[0];
    corpo.innerHTML = "";
    produtos.forEach(c => {
        corpo.innerHTML += `<tr><td>${c["id"]}</td><td>${c["nome"]}</td><td>${c["valor"]}<td></tr>`;
    });
}                

window.onload = function()
{
    conversao();
    carregaTabela();
}