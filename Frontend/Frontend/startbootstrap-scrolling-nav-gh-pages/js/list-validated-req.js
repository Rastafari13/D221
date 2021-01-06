(function($) {
    "use strict";

    $(document).ready(function() {
      $('#Table-validated-req').DataTable({
        "language": {
          "lengthMenu": "Mostrar _MENU_ pedidos por página",
          "zeroRecords": "Nada encontrado",
          "info": "Mostrar página _PAGE_ de _PAGES_",
          "infoEmpty": "Nenhhum pedido",
          "infoFiltered": "(Filtrado _MAX_ pedidos validados)",
          "search": "Procurar:",
          "paginate": {
            "next": "Próxima",
            "previous": "Anterior"
          }
        },
        "lengthMenu": [
         [-1, 25, 50],["Todos",25, 50]],
      });
    });
    
    let tabela = document.getElementById("Table-validated-req");
    let linhas = tabela.getElementsByTagName("tr");

    for (let i = 0; i < linhas.length; i++) {
      var linha = linhas[i];
      linha.addEventListener("click", function() {
        //Adicionar ao atual
        selLinha(this, false); //Selecione apenas um
        //selLinha(this, true); //Selecione quantos quiser
      });
    }

    /**
    Caso passe true, você pode selecionar multiplas linhas.
    Caso passe false, você só pode selecionar uma linha por vez.
    **/
    function selLinha(linha, multiplos) {
      if (!multiplos) {
        let linhas = linha.parentElement.getElementsByTagName("tr");
        for (let i = 0; i < linhas.length; i++) {
          var linha_ = linhas[i];
          linha_.classList.remove("selecionado");
        }
      }
      linha.classList.toggle("selecionado");
    }
    /**
    Exemplo de como capturar os dados
    **/
    let btnVisualizar = document.getElementById("view-req-validated");

    btnVisualizar.addEventListener("click", function() {
      let selecionados = tabela.getElementsByClassName("selecionado");
      //Verificar se eestá selecionado
      if (selecionados.length < 1) {
        alert("Selecione pelo menos uma linha");
        return false;
      }

      let dados = "";

      for (let i = 0; i < selecionados.length; i++) {
        let selecionado = selecionados[i];
        selecionado = selecionado.getElementsByTagName("td");
        dados += "ID: " + selecionado[0].innerHTML + " - Nome: " + selecionado[1].innerHTML + " - Idade: " + selecionado[2].innerHTML + "\n";
      }
      window.location.replace("view-request.html")
    });
    
})(jQuery); 