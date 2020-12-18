(function($) {
  "use strict";

  $(document).ready(function() {
    $('#Table-pending-req').DataTable({
      "language": {
        "lengthMenu": "Mostrar _MENU_ pedidos por página",
        "zeroRecords": "Nada encontrado",
        "info": "Mostrar página _PAGE_ de _PAGES_",
        "infoEmpty": "Nenhhuma ocorrência",
        "infoFiltered": "(Filtrado _MAX_ pedidos pendentes)",
        "search": "Procurar:",
        "paginate": {
          "next": "Próxima",
          "previous": "Anterior"
        }
      }
    });
  });

  let tabela = document.getElementById("Table-pending-req");
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
  let btnVisualizar = document.getElementById("view-data-req");

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




  let btnEliminar = document.getElementById("req-delete");

  btnEliminar.addEventListener("click", function() {

    let selecionados = tabela.getElementsByClassName("selecionado");
    //Verificar se eestá selecionado
    if (selecionados.length < 1) {
      alert("Selecione pelo menos uma linha");
      return false;
    }

    for (let i = 0; i < selecionados.length; i++) {
      let selecionado = selecionados[i];
      selecionado = selecionado.getElementsByTagName("td");
      for (const ln of selecionados) {

        var x;
        var r = confirm("Deseja mesmo eliminar este pedido?");
        if (r == true) {
          x = "você pressionou OK!";
          ln.remove();
          alert("O pedido " + selecionado[0].innerHTML + " foi eliminado com sucesso")
        }
        else {
          x = "Você pressionou Cancelar!";
        }

      }
    }
  })




})(jQuery);
