{"filter":false,"title":"list-pending-req.js","tooltip":"/Frontend/Frontend/startbootstrap-scrolling-nav-gh-pages/js/list-pending-req.js","undoManager":{"mark":44,"position":44,"stack":[[{"start":{"row":35,"column":11},"end":{"row":36,"column":0},"action":"insert","lines":["",""],"id":117},{"start":{"row":36,"column":0},"end":{"row":36,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":36,"column":8},"end":{"row":40,"column":11},"action":"insert","lines":["        \"columnDefs\": [{","          \"targets\": [5],","          \"visible\": false,","          \"searchable\": false","        }],"],"id":118}],[{"start":{"row":37,"column":22},"end":{"row":37,"column":23},"action":"remove","lines":["5"],"id":119}],[{"start":{"row":37,"column":22},"end":{"row":37,"column":23},"action":"insert","lines":["3"],"id":120}],[{"start":{"row":36,"column":8},"end":{"row":36,"column":16},"action":"remove","lines":["        "],"id":121}],[{"start":{"row":32,"column":23},"end":{"row":32,"column":24},"action":"insert","lines":[","],"id":122}],[{"start":{"row":32,"column":24},"end":{"row":32,"column":25},"action":"insert","lines":[" "],"id":123},{"start":{"row":32,"column":25},"end":{"row":32,"column":26},"action":"insert","lines":["3"]}],[{"start":{"row":36,"column":0},"end":{"row":39,"column":29},"action":"remove","lines":["        \"columnDefs\": [{","          \"targets\": [3],","          \"visible\": false,","          \"searchable\": false"],"id":124}],[{"start":{"row":36,"column":0},"end":{"row":37,"column":11},"action":"remove","lines":["","        }],"],"id":125}],[{"start":{"row":92,"column":9},"end":{"row":93,"column":0},"action":"insert","lines":["",""],"id":126},{"start":{"row":93,"column":0},"end":{"row":93,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":92,"column":9},"end":{"row":93,"column":0},"action":"insert","lines":["",""],"id":127},{"start":{"row":93,"column":0},"end":{"row":93,"column":6},"action":"insert","lines":["      "]},{"start":{"row":93,"column":6},"end":{"row":94,"column":0},"action":"insert","lines":["",""]},{"start":{"row":94,"column":0},"end":{"row":94,"column":6},"action":"insert","lines":["      "]},{"start":{"row":94,"column":6},"end":{"row":95,"column":0},"action":"insert","lines":["",""]},{"start":{"row":95,"column":0},"end":{"row":95,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":95,"column":6},"end":{"row":148,"column":25},"action":"insert","lines":["let btnEliminar = document.getElementById(\"assoc-delete\");","","      btnEliminar.addEventListener(\"click\", function() {","","        let selecionados = tabela.getElementsByClassName(\"selecionado\");","        //Verificar se está selecionado","        if (selecionados.length < 1) {","          swal({","            title: \"Selecione uma linha!\",","            icon: \"info\",","          });","          return false;","        }","","        for (let i = 0; i < selecionados.length; i++) {","          let selecionado = selecionados[i];","          selecionado = selecionado.getElementsByTagName(\"td\");","          for (const ln of selecionados) {","","            swal({","                title: \"Pretende eliminar o sócio \" + selecionado[0].innerHTML + \" ?\",","                icon: \"warning\", //warning ","                buttons: [\"Sim\", \"Não\"],","                // dangerMode: true, partners","              })","              .then((willDelete) => {","                if (willDelete) {}","                else {","                  $(document).ready(function() {","                    setUpDataTable1();","                  })","                  async function setUpDataTable1() {","                    let a = selecionado[0].innerHTML;","                    await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/` + a, { method: \"DELETE\" })","                      .then(function(response) {","                        if (!response.ok) {","                          console.log(response.status); //=> number 100â€“599","                          console.log(response.statusText); //=> String","                          console.log(response.headers); //=> Headers","                          console.log(response.url); //=> String","                          swal({","                            title: \"Erro, por favor tente novamente\",","                            icon: \"error\",","                          });","                          throw Error(response.statusText);","                        }","                        else {","                          swal({","                            title: \"O associado \" + selecionado[0].innerHTML + \" foi removido com sucesso!\",","                            icon: \"success\",","                          });","                          ln.remove();","                        }","                      });"],"id":128}],[{"start":{"row":148,"column":25},"end":{"row":149,"column":0},"action":"insert","lines":["",""],"id":129},{"start":{"row":149,"column":0},"end":{"row":149,"column":22},"action":"insert","lines":["                      "]}],[{"start":{"row":149,"column":22},"end":{"row":149,"column":23},"action":"insert","lines":["}"],"id":130},{"start":{"row":149,"column":0},"end":{"row":149,"column":22},"action":"remove","lines":["                      "]},{"start":{"row":149,"column":0},"end":{"row":149,"column":18},"action":"insert","lines":["                  "]}],[{"start":{"row":149,"column":19},"end":{"row":150,"column":0},"action":"insert","lines":["",""],"id":131},{"start":{"row":150,"column":0},"end":{"row":150,"column":18},"action":"insert","lines":["                  "]},{"start":{"row":150,"column":18},"end":{"row":150,"column":19},"action":"insert","lines":["}"]},{"start":{"row":150,"column":0},"end":{"row":150,"column":18},"action":"remove","lines":["                  "]},{"start":{"row":150,"column":0},"end":{"row":150,"column":16},"action":"insert","lines":["                "]}],[{"start":{"row":147,"column":0},"end":{"row":157,"column":0},"action":"remove","lines":["                        }","                      });","                  }","                }","      ","","    });","","  };","})(jQuery);",""],"id":132}],[{"start":{"row":147,"column":0},"end":{"row":158,"column":0},"action":"insert","lines":["                        }","                      });","                  }","                }","              });","          }","        }","      });","    });","  }","})(jQuery);",""],"id":133}],[{"start":{"row":93,"column":0},"end":{"row":93,"column":6},"action":"remove","lines":["      "],"id":134},{"start":{"row":94,"column":0},"end":{"row":94,"column":6},"action":"remove","lines":["      "]}],[{"start":{"row":95,"column":49},"end":{"row":95,"column":61},"action":"remove","lines":["assoc-delete"],"id":135}],[{"start":{"row":95,"column":49},"end":{"row":95,"column":62},"action":"insert","lines":["view-data-req"],"id":136}],[{"start":{"row":115,"column":48},"end":{"row":115,"column":49},"action":"remove","lines":["o"],"id":137},{"start":{"row":115,"column":47},"end":{"row":115,"column":48},"action":"remove","lines":["i"]},{"start":{"row":115,"column":46},"end":{"row":115,"column":47},"action":"remove","lines":["c"]},{"start":{"row":115,"column":45},"end":{"row":115,"column":46},"action":"remove","lines":["ó"]},{"start":{"row":115,"column":44},"end":{"row":115,"column":45},"action":"remove","lines":["s"]},{"start":{"row":115,"column":43},"end":{"row":115,"column":44},"action":"remove","lines":[" "]},{"start":{"row":115,"column":42},"end":{"row":115,"column":43},"action":"remove","lines":["o"]}],[{"start":{"row":115,"column":42},"end":{"row":115,"column":43},"action":"insert","lines":["e"],"id":138},{"start":{"row":115,"column":43},"end":{"row":115,"column":44},"action":"insert","lines":["s"]},{"start":{"row":115,"column":44},"end":{"row":115,"column":45},"action":"insert","lines":["t"]},{"start":{"row":115,"column":45},"end":{"row":115,"column":46},"action":"insert","lines":["e"]}],[{"start":{"row":115,"column":46},"end":{"row":115,"column":47},"action":"insert","lines":[" "],"id":139},{"start":{"row":115,"column":47},"end":{"row":115,"column":48},"action":"insert","lines":["p"]},{"start":{"row":115,"column":48},"end":{"row":115,"column":49},"action":"insert","lines":["e"]},{"start":{"row":115,"column":49},"end":{"row":115,"column":50},"action":"insert","lines":["d"]},{"start":{"row":115,"column":50},"end":{"row":115,"column":51},"action":"insert","lines":["i"]},{"start":{"row":115,"column":51},"end":{"row":115,"column":52},"action":"insert","lines":["d"]},{"start":{"row":115,"column":52},"end":{"row":115,"column":53},"action":"insert","lines":["o"]}],[{"start":{"row":128,"column":117},"end":{"row":128,"column":118},"action":"remove","lines":["s"],"id":140},{"start":{"row":128,"column":116},"end":{"row":128,"column":117},"action":"remove","lines":["r"]},{"start":{"row":128,"column":115},"end":{"row":128,"column":116},"action":"remove","lines":["e"]},{"start":{"row":128,"column":114},"end":{"row":128,"column":115},"action":"remove","lines":["n"]},{"start":{"row":128,"column":113},"end":{"row":128,"column":114},"action":"remove","lines":["t"]},{"start":{"row":128,"column":112},"end":{"row":128,"column":113},"action":"remove","lines":["r"]},{"start":{"row":128,"column":111},"end":{"row":128,"column":112},"action":"remove","lines":["a"]},{"start":{"row":128,"column":110},"end":{"row":128,"column":111},"action":"remove","lines":["p"]},{"start":{"row":128,"column":109},"end":{"row":128,"column":110},"action":"remove","lines":["/"]}],[{"start":{"row":128,"column":109},"end":{"row":128,"column":110},"action":"insert","lines":["r"],"id":141},{"start":{"row":128,"column":110},"end":{"row":128,"column":111},"action":"insert","lines":["e"]},{"start":{"row":128,"column":111},"end":{"row":128,"column":112},"action":"insert","lines":["q"]},{"start":{"row":128,"column":112},"end":{"row":128,"column":113},"action":"insert","lines":["u"]},{"start":{"row":128,"column":113},"end":{"row":128,"column":114},"action":"insert","lines":["e"]},{"start":{"row":128,"column":114},"end":{"row":128,"column":115},"action":"insert","lines":["s"]},{"start":{"row":128,"column":115},"end":{"row":128,"column":116},"action":"insert","lines":["t"]},{"start":{"row":128,"column":116},"end":{"row":128,"column":117},"action":"insert","lines":["s"]}],[{"start":{"row":143,"column":46},"end":{"row":143,"column":47},"action":"remove","lines":["o"],"id":142},{"start":{"row":143,"column":45},"end":{"row":143,"column":46},"action":"remove","lines":["d"]},{"start":{"row":143,"column":44},"end":{"row":143,"column":45},"action":"remove","lines":["a"]},{"start":{"row":143,"column":43},"end":{"row":143,"column":44},"action":"remove","lines":["i"]},{"start":{"row":143,"column":42},"end":{"row":143,"column":43},"action":"remove","lines":["c"]},{"start":{"row":143,"column":41},"end":{"row":143,"column":42},"action":"remove","lines":["o"]},{"start":{"row":143,"column":40},"end":{"row":143,"column":41},"action":"remove","lines":["s"]},{"start":{"row":143,"column":39},"end":{"row":143,"column":40},"action":"remove","lines":["s"]},{"start":{"row":143,"column":38},"end":{"row":143,"column":39},"action":"remove","lines":["a"]}],[{"start":{"row":143,"column":38},"end":{"row":143,"column":39},"action":"insert","lines":["p"],"id":143},{"start":{"row":143,"column":39},"end":{"row":143,"column":40},"action":"insert","lines":["e"]},{"start":{"row":143,"column":40},"end":{"row":143,"column":41},"action":"insert","lines":["d"]},{"start":{"row":143,"column":41},"end":{"row":143,"column":42},"action":"insert","lines":["i"]},{"start":{"row":143,"column":42},"end":{"row":143,"column":43},"action":"insert","lines":["d"]},{"start":{"row":143,"column":43},"end":{"row":143,"column":44},"action":"insert","lines":["o"]}],[{"start":{"row":143,"column":89},"end":{"row":143,"column":90},"action":"remove","lines":["o"],"id":144},{"start":{"row":143,"column":88},"end":{"row":143,"column":89},"action":"remove","lines":["d"]},{"start":{"row":143,"column":87},"end":{"row":143,"column":88},"action":"remove","lines":["i"]},{"start":{"row":143,"column":86},"end":{"row":143,"column":87},"action":"remove","lines":["v"]},{"start":{"row":143,"column":85},"end":{"row":143,"column":86},"action":"remove","lines":["o"]},{"start":{"row":143,"column":84},"end":{"row":143,"column":85},"action":"remove","lines":["m"]},{"start":{"row":143,"column":83},"end":{"row":143,"column":84},"action":"remove","lines":["e"]},{"start":{"row":143,"column":82},"end":{"row":143,"column":83},"action":"remove","lines":["r"]}],[{"start":{"row":143,"column":82},"end":{"row":143,"column":83},"action":"insert","lines":["e"],"id":145},{"start":{"row":143,"column":83},"end":{"row":143,"column":84},"action":"insert","lines":["l"]},{"start":{"row":143,"column":84},"end":{"row":143,"column":85},"action":"insert","lines":["i"]},{"start":{"row":143,"column":85},"end":{"row":143,"column":86},"action":"insert","lines":["m"]},{"start":{"row":143,"column":86},"end":{"row":143,"column":87},"action":"insert","lines":["i"]},{"start":{"row":143,"column":87},"end":{"row":143,"column":88},"action":"insert","lines":["n"]},{"start":{"row":143,"column":88},"end":{"row":143,"column":89},"action":"insert","lines":["a"]},{"start":{"row":143,"column":89},"end":{"row":143,"column":90},"action":"insert","lines":["d"]},{"start":{"row":143,"column":90},"end":{"row":143,"column":91},"action":"insert","lines":["o"]}],[{"start":{"row":88,"column":48},"end":{"row":88,"column":49},"action":"remove","lines":["e"],"id":146},{"start":{"row":88,"column":47},"end":{"row":88,"column":48},"action":"remove","lines":["c"]},{"start":{"row":88,"column":46},"end":{"row":88,"column":47},"action":"remove","lines":["n"]},{"start":{"row":88,"column":45},"end":{"row":88,"column":46},"action":"remove","lines":["e"]},{"start":{"row":88,"column":44},"end":{"row":88,"column":45},"action":"remove","lines":["r"]},{"start":{"row":88,"column":43},"end":{"row":88,"column":44},"action":"remove","lines":["u"]},{"start":{"row":88,"column":42},"end":{"row":88,"column":43},"action":"remove","lines":["c"]},{"start":{"row":88,"column":41},"end":{"row":88,"column":42},"action":"remove","lines":["c"]}],[{"start":{"row":88,"column":40},"end":{"row":88,"column":41},"action":"remove","lines":["o"],"id":147}],[{"start":{"row":88,"column":40},"end":{"row":88,"column":41},"action":"insert","lines":["r"],"id":148},{"start":{"row":88,"column":41},"end":{"row":88,"column":42},"action":"insert","lines":["e"]},{"start":{"row":88,"column":42},"end":{"row":88,"column":43},"action":"insert","lines":["q"]},{"start":{"row":88,"column":43},"end":{"row":88,"column":44},"action":"insert","lines":["u"]},{"start":{"row":88,"column":44},"end":{"row":88,"column":45},"action":"insert","lines":["e"]},{"start":{"row":88,"column":45},"end":{"row":88,"column":46},"action":"insert","lines":["s"]},{"start":{"row":88,"column":46},"end":{"row":88,"column":47},"action":"insert","lines":["t"]}],[{"start":{"row":69,"column":51},"end":{"row":69,"column":59},"action":"remove","lines":["view-dat"],"id":149}],[{"start":{"row":69,"column":51},"end":{"row":69,"column":52},"action":"remove","lines":["a"],"id":150}],[{"start":{"row":69,"column":51},"end":{"row":69,"column":64},"action":"insert","lines":["view-data-req"],"id":151}],[{"start":{"row":95,"column":49},"end":{"row":95,"column":62},"action":"remove","lines":["view-data-req"],"id":152}],[{"start":{"row":95,"column":49},"end":{"row":95,"column":50},"action":"insert","lines":["r"],"id":153},{"start":{"row":95,"column":50},"end":{"row":95,"column":51},"action":"insert","lines":["e"]},{"start":{"row":95,"column":51},"end":{"row":95,"column":52},"action":"insert","lines":["q"]},{"start":{"row":95,"column":52},"end":{"row":95,"column":53},"action":"insert","lines":["-"]},{"start":{"row":95,"column":53},"end":{"row":95,"column":54},"action":"insert","lines":["d"]},{"start":{"row":95,"column":54},"end":{"row":95,"column":55},"action":"insert","lines":["e"]}],[{"start":{"row":95,"column":55},"end":{"row":95,"column":56},"action":"insert","lines":["l"],"id":154},{"start":{"row":95,"column":56},"end":{"row":95,"column":57},"action":"insert","lines":["e"]},{"start":{"row":95,"column":57},"end":{"row":95,"column":58},"action":"insert","lines":["t"]},{"start":{"row":95,"column":58},"end":{"row":95,"column":59},"action":"insert","lines":["e"]}],[{"start":{"row":89,"column":36},"end":{"row":89,"column":37},"action":"remove","lines":["c"],"id":155},{"start":{"row":89,"column":35},"end":{"row":89,"column":36},"action":"remove","lines":["c"]},{"start":{"row":89,"column":34},"end":{"row":89,"column":35},"action":"remove","lines":["o"]}],[{"start":{"row":89,"column":34},"end":{"row":89,"column":35},"action":"insert","lines":["r"],"id":156},{"start":{"row":89,"column":35},"end":{"row":89,"column":36},"action":"insert","lines":["e"]},{"start":{"row":89,"column":36},"end":{"row":89,"column":37},"action":"insert","lines":["q"]}],[{"start":{"row":39,"column":44},"end":{"row":39,"column":59},"action":"remove","lines":["Table-occurence"],"id":157}],[{"start":{"row":39,"column":44},"end":{"row":39,"column":62},"action":"insert","lines":["#Table-pending-req"],"id":158}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":15},"action":"remove","lines":["    let a = \"\";"],"id":159},{"start":{"row":5,"column":33},"end":{"row":6,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":38,"column":44},"end":{"row":38,"column":45},"action":"remove","lines":["#"],"id":160}],[{"start":{"row":88,"column":37},"end":{"row":88,"column":38},"action":"insert","lines":["s"],"id":161}]]},"ace":{"folds":[],"scrolltop":2594.5,"scrollleft":0,"selection":{"start":{"row":79,"column":9},"end":{"row":79,"column":9},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1609528980778,"hash":"baf5f0001bcc467ba31ff085b44b22124fac9563"}