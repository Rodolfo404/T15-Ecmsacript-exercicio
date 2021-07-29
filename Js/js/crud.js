var categorias = [];


function salvar()
{
    let id = parseInt(document.getElementById("id").value);
    let nome = document.getElementById("nome").value;
    let descricao = document.getElementById("descricao").value;
    lista = {"id":id,"nome":nome,"descricao":descricao};
    categorias.push(lista);
    localStorage.setItem("categorias", JSON.stringify(categorias));
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
    let cadastroJson = localStorage.getItem("categorias");
    if(cadastroJson != null){
        categorias = JSON.parse(cadastroJson);
    }
}


function carregaTabela()
{
    
    let tabela = document.getElementById("listaC");
    let corpo =  tabela.getElementsByTagName("tbody")[0];
    corpo.innerHTML = "";
    categorias.forEach(c => {
        corpo.innerHTML += `<tr><td>${c["id"]}</td><td>${c["nome"]}</td><td>${c["descricao"]}<td></tr>`;
    });
}                

window.onload = function()
{
    conversao();
    carregaTabela();
}