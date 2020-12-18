(function($) {
  "use strict";

  setUpDataAssoc();

  async function setUpDataAssoc() {

    const res = await fetch('https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/');
    const data = await res.json();

    let assoc = data.map(el => Object.values(el));


    $(document).ready(function() {

      $('#Table-associate').DataTable({
        "language": {
          "lengthMenu": "Mostrar _MENU_ associados por página",
          "zeroRecords": "Nada encontrado",
          "info": "Mostrar página _PAGE_ de _PAGES_",
          "infoEmpty": "Nenhhum associado",
          "infoFiltered": "(Filtrado _MAX_ sócios)",
          "search": "Procurar:",
          "paginate": {
            "next": "Próxima",
            "previous": "Anterior"
          }
        },
        data: assoc,
        "lengthMenu": [[-1, 10, 25, 50], ["Todos", 10, 25, 50]],
      });

      //-------------------------------------------------------------------------------//
      let tabela = document.getElementById("Table-associate");
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
      let btnVisualizar = document.getElementById("view-data-assoc");

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

          window.location.replace("view-associate.html");
          localStorage.setItem("id", selecionado[0].innerHTML);

         // dados += "ID: " + selecionado[0].innerHTML + " - Nome: " + selecionado[1].innerHTML + " - Idade: " + selecionado[2].innerHTML + "\n";
        }
      });


      let btnEliminar = document.getElementById("assoc-delete");

      btnEliminar.addEventListener("click", function() {

        let selecionados = tabela.getElementsByClassName("selecionado");
        //Verificar se está selecionado
        if (selecionados.length < 1) {
          alert("Selecione pelo menos uma linha");
          return false;
        }

        for (let i = 0; i < selecionados.length; i++) {
          let selecionado = selecionados[i];
          selecionado = selecionado.getElementsByTagName("td");
          for (const ln of selecionados) {
            var x;
            var r = confirm("Deseja mesmo remover este associado?");
            if (r == true) {
              x = "você pressionou OK!";

              $(document).ready(function() {
                setUpDataTable1();
                
              })
              async function setUpDataTable1() {
                let a = selecionado[0].innerHTML;
                await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/` + a, { method: "DELETE" })
              }

              ln.remove();
              alert("O associado " + selecionado[0].innerHTML + " foi removido com sucesso")
            }

            else {
              x = "Você pressionou Cancelar!";
            }
          }
        }
      })
    });
  }
})(jQuery);
