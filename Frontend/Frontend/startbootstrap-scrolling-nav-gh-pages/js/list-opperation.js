(function($) {
  "use strict";

  setUpDataOp();

  async function setUpDataOp() {

    const res = await fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//operationals/");
    const data = await res.json();


    let opp = data.map(el => Object.values(el));


    $(document).ready(function() {
      $('#Table-opperation').DataTable({
        "language": {
          "lengthMenu": "Mostrar _MENU_ operacionais por página",
          "zeroRecords": "Nada encontrado",
          "info": "Mostrar página _PAGE_ de _PAGES_",
          "infoEmpty": "Nenhhum operacional",
          "infoFiltered": "(Filtrado de _MAX_ operacionais)",
          "search": "Procurar:",
          "paginate": {
            "next": "Próxima",
            "previous": "Anterior"
          }
        },
        data: opp,
        "lengthMenu": [
          [-1, 10, 25, 50],
          ["Todos", 10, 25, 50]
        ],
      });

      //-------------------------------------------------------------------------------//
      let tabela = document.getElementById("Table-opperation");
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
      let btnVisualizar = document.getElementById("view-data-opp");

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

        //let dados = "";

        for (let i = 0; i < selecionados.length; i++) {
          let selecionado = selecionados[i];
          selecionado = selecionado.getElementsByTagName("td");
          // dados += "ID: " + selecionado[0].innerHTML + " - Nome: " + selecionado[1].innerHTML + " - Idade: " + selecionado[2].innerHTML + "\n";

          window.location.replace("view-opperation.html")
          localStorage.setItem("idopp", selecionado[0].innerHTML);
        }
      });

      let btnEliminar = document.getElementById("opp-delete");

      btnEliminar.addEventListener("click", function() {

        let selecionados = tabela.getElementsByClassName("selecionado");
        //Verificar se está selecionado
        if (selecionados.length < 1) {
          swal({
            title: "Selecione uma linha!",
            icon: "info",
          });
          return false;
        }

        for (let i = 0; i < selecionados.length; i++) {
          let selecionado = selecionados[i];
          selecionado = selecionado.getElementsByTagName("td");
          for (const ln of selecionados) {

            swal({
                title: "Pretende eliminar o operacional " + selecionado[0].innerHTML + " ?",
                icon: "warning", //warning 
                buttons: ["Sim", "Não"],
                dangerMode: true,
              })
              .then((willDelete) => {
                if (willDelete) {}
                else {
                  $(document).ready(function() {
                    setUpDataTable1();
                  })
                  async function setUpDataTable1() {
                    let a = selecionado[0].innerHTML;
                    const response = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/operationals/` + a)
                    const opperation = await response.json()
                    for (const opp of opperation) {
                      let id_login = opp.id_login;
                      localStorage.setItem("idlogin", id_login);
                    }
                    await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//operationals/` + a, { method: "DELETE" })
                      .then(function(response) {
                        if (!response.ok) {
                          console.log(response.status); //=> number 100â€“599
                          console.log(response.statusText); //=> String
                          console.log(response.headers); //=> Headers
                          console.log(response.url); //=> String
                          swal({
                            title: "Erro, por favor tente novamente",
                            icon: "error",
                          });
                          throw Error(response.statusText);
                        }
                        else {
                          let idlogin = localStorage.idlogin;
                          fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/login/` + idlogin, { method: "DELETE" })
                            .then(function(response) {
                              if (!response.ok) {
                                console.log(response.status); //=> number 100â€“599
                                console.log(response.statusText); //=> String
                                console.log(response.headers); //=> Headers
                                console.log(response.url); //=> String
                                swal({
                                  title: "Erro, por favor tente novamente",
                                  icon: "error",
                                });
                                throw Error(response.statusText);
                              }

                              else {
                                swal("O operacional " + selecionado[0].innerHTML + " removido com sucesso!", {
                                  icon: "success",
                                });
                                ln.remove();

                              }
                            });
                        }
                      });
                  }
                }
              });
          }
        }
      });
    });
  }
})(jQuery);
