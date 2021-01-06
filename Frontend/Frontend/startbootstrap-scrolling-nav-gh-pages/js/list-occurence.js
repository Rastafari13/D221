(function($) {
  "use strict";

  setUpDataOcc();

  async function setUpDataOcc() {

    const res = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/occurrencesStatus/Em curso');
    const data = await res.json();

    let occ = data.map(el => Object.values(el));

    $(document).ready(function() {
      $('#Table-occurence').DataTable({
        "language": {
          "lengthMenu": "Mostrar _MENU_ ocorrências por página",
          "zeroRecords": "Nada encontrado",
          "info": "Mostrar página _PAGE_ de _PAGES_",
          "infoEmpty": "Nenhhuma ocorrência",
          "infoFiltered": "(Filtrado _MAX_ Ocorrências)",
          "search": "Procurar:",
          "paginate": {
            "next": "Próxima",
            "previous": "Anterior"
          }
        },
        data: occ,
        "lengthMenu": [
          [-1, 10, 25, 50],
          ["Todas", 10, 25, 50]
        ],
      });

      let tabela = document.getElementById("Table-occurence");
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
      let btnVisualizar = document.getElementById("view-data");

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
        // let dados = "";

        for (let i = 0; i < selecionados.length; i++) {
          let selecionado = selecionados[i];
          selecionado = selecionado.getElementsByTagName("td");
          // dados += "ID: " + selecionado[0].innerHTML + " - Nome: " + selecionado[1].innerHTML + " - Idade: " + selecionado[2].innerHTML + "\n";

          window.location.replace("view-occurence.html");
          localStorage.setItem("idocc", selecionado[0].innerHTML);

        }
      });

    });

  }
})(jQuery);
