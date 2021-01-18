(function($) {
  "use strict";

  setUpDataReq();

  async function setUpDataReq() {

    const res = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/requestsTrat/Aprovado');
    const data = await res.json();

    let req = data.map(el => Object.values(el));

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
        data: req,
        "lengthMenu": [
          [-1, 10, 25, 50],
          ["Todos", 10, 25, 50]
        ],
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
          swal({
            title: "Selecione uma linha!",
            icon: "info",
          });
          return false;
        }

        let dados = "";

        for (let i = 0; i < selecionados.length; i++) {
          let selecionado = selecionados[i];
          selecionado = selecionado.getElementsByTagName("td");
        }
        window.location.replace("view-request.html")
      });
    })
  }
})(jQuery);
