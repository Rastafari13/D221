{"filter":false,"title":"list-dirmember.js","tooltip":"/Frontend/Frontend/startbootstrap-scrolling-nav-gh-pages/js/list-dirmember.js","undoManager":{"mark":73,"position":73,"stack":[[{"start":{"row":114,"column":50},"end":{"row":114,"column":51},"action":"remove","lines":["n"],"id":2}],[{"start":{"row":114,"column":50},"end":{"row":114,"column":51},"action":"insert","lines":["m"],"id":3}],[{"start":{"row":125,"column":24},"end":{"row":141,"column":0},"action":"remove","lines":["async function setUpDataTable1() {","                          let a = selecionado[0].innerHTML;","                          await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//managements/` + a, { method: \"DELETE\" })","                        }","                        swal(\"O elemento da direção \" + selecionado[0].innerHTML + \" removido com sucesso!\", {","                          icon: \"success\",","                        });","                        ln.remove();","                      }","                  });","                    }","                  }","              });","          });","        }","      })(jQuery);",""],"id":4}],[{"start":{"row":125,"column":24},"end":{"row":179,"column":0},"action":"insert","lines":["async function setUpDataTable1() {","                    let a = selecionado[0].innerHTML;","                    const response = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/operationals/` + a)","                    const opperation = await response.json()","                      alert(a);","                    for (const opp of opperation) {","                      let id_login = opp.id_login;","                      localStorage.setItem(\"idlogin\", id_login);","                    }","                    await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//operationals/` + a, { method: \"DELETE\" })","                      .then(function(response) {","                        if (!response.ok) {","                          console.log(response.status); //=> number 100â€“599","                          console.log(response.statusText); //=> String","                          console.log(response.headers); //=> Headers","                          console.log(response.url); //=> String","                          swal({","                            title: \"Erro, por favor tente novamente\",","                            icon: \"error\",","                          });","                          throw Error(response.statusText);","                        }","                        else {","                              let idlogin = localStorage.idlogin;","                          fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/login/` + idlogin, { method: \"DELETE\" })","                            .then(function(response) {","                              if (!response.ok) {","                                console.log(response.status); //=> number 100â€“599","                                console.log(response.statusText); //=> String","                                console.log(response.headers); //=> Headers","                                console.log(response.url); //=> String","                                swal({","                                  title: \"Erro, por favor tente novamente\",","                                  icon: \"error\",","                                });","                                throw Error(response.statusText);","                              }","                            })","                          swal(\"O operacional \" + selecionado[0].innerHTML + \" removido com sucesso!\", {","                            icon: \"success\",","                          });","                          ln.remove();","","                        };","                      });","                  }","                }","              })","          };","        };","      })","    })","  }","})(jQuery);",""],"id":5}],[{"start":{"row":129,"column":0},"end":{"row":129,"column":31},"action":"remove","lines":["                      alert(a);"],"id":6},{"start":{"row":128,"column":60},"end":{"row":129,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":128,"column":60},"end":{"row":128,"column":61},"action":"insert","lines":[";"],"id":7}],[{"start":{"row":124,"column":26},"end":{"row":124,"column":27},"action":"insert","lines":[";"],"id":8}],[{"start":{"row":1,"column":2},"end":{"row":1,"column":4},"action":"remove","lines":["  "],"id":9},{"start":{"row":3,"column":0},"end":{"row":3,"column":2},"action":"remove","lines":["  "]},{"start":{"row":5,"column":2},"end":{"row":5,"column":4},"action":"remove","lines":["  "]},{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"remove","lines":[" "]},{"start":{"row":7,"column":4},"end":{"row":7,"column":5},"action":"remove","lines":[" "]},{"start":{"row":8,"column":4},"end":{"row":8,"column":6},"action":"remove","lines":["  "]},{"start":{"row":10,"column":0},"end":{"row":10,"column":2},"action":"remove","lines":["  "]},{"start":{"row":12,"column":0},"end":{"row":12,"column":2},"action":"remove","lines":["  "]},{"start":{"row":14,"column":6},"end":{"row":14,"column":10},"action":"remove","lines":["    "]},{"start":{"row":15,"column":0},"end":{"row":15,"column":3},"action":"remove","lines":["   "]},{"start":{"row":15,"column":8},"end":{"row":15,"column":9},"action":"remove","lines":[" "]},{"start":{"row":16,"column":0},"end":{"row":16,"column":4},"action":"remove","lines":["    "]},{"start":{"row":17,"column":0},"end":{"row":17,"column":1},"action":"remove","lines":[" "]},{"start":{"row":17,"column":10},"end":{"row":17,"column":13},"action":"remove","lines":["   "]},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"remove","lines":["    "]},{"start":{"row":19,"column":10},"end":{"row":19,"column":14},"action":"remove","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":2},"action":"remove","lines":["  "]},{"start":{"row":20,"column":10},"end":{"row":20,"column":12},"action":"remove","lines":["  "]},{"start":{"row":21,"column":10},"end":{"row":21,"column":14},"action":"remove","lines":["    "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":1},"action":"remove","lines":[" "]},{"start":{"row":22,"column":10},"end":{"row":22,"column":13},"action":"remove","lines":["   "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":3},"action":"remove","lines":["   "]},{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"remove","lines":[" "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"remove","lines":["    "]},{"start":{"row":25,"column":0},"end":{"row":25,"column":2},"action":"remove","lines":["  "]},{"start":{"row":25,"column":10},"end":{"row":25,"column":12},"action":"remove","lines":["  "]},{"start":{"row":26,"column":0},"end":{"row":26,"column":4},"action":"remove","lines":["    "]},{"start":{"row":27,"column":0},"end":{"row":27,"column":1},"action":"remove","lines":[" "]},{"start":{"row":27,"column":8},"end":{"row":27,"column":11},"action":"remove","lines":["   "]},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "]},{"start":{"row":29,"column":10},"end":{"row":29,"column":14},"action":"remove","lines":["    "]},{"start":{"row":30,"column":0},"end":{"row":30,"column":2},"action":"remove","lines":["  "]},{"start":{"row":30,"column":10},"end":{"row":30,"column":12},"action":"remove","lines":["  "]},{"start":{"row":31,"column":8},"end":{"row":31,"column":12},"action":"remove","lines":["    "]},{"start":{"row":32,"column":0},"end":{"row":32,"column":1},"action":"remove","lines":[" "]},{"start":{"row":32,"column":8},"end":{"row":32,"column":11},"action":"remove","lines":["   "]},{"start":{"row":33,"column":0},"end":{"row":33,"column":3},"action":"remove","lines":["   "]},{"start":{"row":33,"column":10},"end":{"row":33,"column":11},"action":"remove","lines":[" "]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"remove","lines":["    "]},{"start":{"row":35,"column":0},"end":{"row":35,"column":2},"action":"remove","lines":["  "]},{"start":{"row":35,"column":10},"end":{"row":35,"column":12},"action":"remove","lines":["  "]},{"start":{"row":36,"column":0},"end":{"row":36,"column":4},"action":"remove","lines":["    "]},{"start":{"row":37,"column":6},"end":{"row":37,"column":10},"action":"remove","lines":["    "]},{"start":{"row":39,"column":0},"end":{"row":39,"column":4},"action":"remove","lines":["    "]},{"start":{"row":40,"column":6},"end":{"row":40,"column":10},"action":"remove","lines":["    "]},{"start":{"row":41,"column":0},"end":{"row":41,"column":2},"action":"remove","lines":["  "]},{"start":{"row":41,"column":6},"end":{"row":41,"column":8},"action":"remove","lines":["  "]},{"start":{"row":43,"column":6},"end":{"row":43,"column":10},"action":"remove","lines":["    "]},{"start":{"row":44,"column":0},"end":{"row":44,"column":1},"action":"remove","lines":[" "]},{"start":{"row":44,"column":8},"end":{"row":44,"column":11},"action":"remove","lines":["   "]},{"start":{"row":45,"column":0},"end":{"row":45,"column":3},"action":"remove","lines":["   "]},{"start":{"row":45,"column":8},"end":{"row":45,"column":9},"action":"remove","lines":[" "]},{"start":{"row":46,"column":10},"end":{"row":46,"column":14},"action":"remove","lines":["    "]},{"start":{"row":47,"column":0},"end":{"row":47,"column":2},"action":"remove","lines":["  "]},{"start":{"row":47,"column":10},"end":{"row":47,"column":12},"action":"remove","lines":["  "]},{"start":{"row":48,"column":0},"end":{"row":48,"column":4},"action":"remove","lines":["    "]},{"start":{"row":49,"column":8},"end":{"row":49,"column":12},"action":"remove","lines":["    "]},{"start":{"row":50,"column":0},"end":{"row":50,"column":3},"action":"remove","lines":["   "]},{"start":{"row":50,"column":6},"end":{"row":50,"column":7},"action":"remove","lines":[" "]},{"start":{"row":52,"column":0},"end":{"row":52,"column":4},"action":"remove","lines":["    "]},{"start":{"row":53,"column":0},"end":{"row":53,"column":1},"action":"remove","lines":[" "]},{"start":{"row":53,"column":6},"end":{"row":53,"column":9},"action":"remove","lines":["   "]},{"start":{"row":54,"column":0},"end":{"row":54,"column":4},"action":"remove","lines":["    "]},{"start":{"row":55,"column":6},"end":{"row":55,"column":10},"action":"remove","lines":["    "]},{"start":{"row":56,"column":0},"end":{"row":56,"column":2},"action":"remove","lines":["  "]},{"start":{"row":56,"column":6},"end":{"row":56,"column":8},"action":"remove","lines":["  "]},{"start":{"row":57,"column":8},"end":{"row":57,"column":12},"action":"remove","lines":["    "]},{"start":{"row":58,"column":0},"end":{"row":58,"column":1},"action":"remove","lines":[" "]},{"start":{"row":58,"column":10},"end":{"row":58,"column":13},"action":"remove","lines":["   "]},{"start":{"row":59,"column":0},"end":{"row":59,"column":3},"action":"remove","lines":["   "]},{"start":{"row":59,"column":10},"end":{"row":59,"column":11},"action":"remove","lines":[" "]},{"start":{"row":60,"column":12},"end":{"row":60,"column":16},"action":"remove","lines":["    "]},{"start":{"row":61,"column":0},"end":{"row":61,"column":2},"action":"remove","lines":["  "]},{"start":{"row":61,"column":12},"end":{"row":61,"column":14},"action":"remove","lines":["  "]},{"start":{"row":62,"column":0},"end":{"row":62,"column":4},"action":"remove","lines":["    "]},{"start":{"row":63,"column":8},"end":{"row":63,"column":12},"action":"remove","lines":["    "]},{"start":{"row":64,"column":0},"end":{"row":64,"column":4},"action":"remove","lines":["    "]},{"start":{"row":65,"column":6},"end":{"row":65,"column":10},"action":"remove","lines":["    "]},{"start":{"row":67,"column":0},"end":{"row":67,"column":1},"action":"remove","lines":[" "]},{"start":{"row":67,"column":6},"end":{"row":67,"column":9},"action":"remove","lines":["   "]},{"start":{"row":68,"column":0},"end":{"row":68,"column":4},"action":"remove","lines":["    "]},{"start":{"row":69,"column":6},"end":{"row":69,"column":10},"action":"remove","lines":["    "]},{"start":{"row":70,"column":0},"end":{"row":70,"column":3},"action":"remove","lines":["   "]},{"start":{"row":70,"column":6},"end":{"row":70,"column":7},"action":"remove","lines":[" "]},{"start":{"row":72,"column":6},"end":{"row":72,"column":10},"action":"remove","lines":["    "]},{"start":{"row":73,"column":0},"end":{"row":73,"column":2},"action":"remove","lines":["  "]},{"start":{"row":73,"column":8},"end":{"row":73,"column":10},"action":"remove","lines":["  "]},{"start":{"row":74,"column":0},"end":{"row":74,"column":4},"action":"remove","lines":["    "]},{"start":{"row":75,"column":8},"end":{"row":75,"column":12},"action":"remove","lines":["    "]},{"start":{"row":76,"column":0},"end":{"row":76,"column":3},"action":"remove","lines":["   "]},{"start":{"row":76,"column":10},"end":{"row":76,"column":11},"action":"remove","lines":[" "]},{"start":{"row":77,"column":0},"end":{"row":77,"column":4},"action":"remove","lines":["    "]},{"start":{"row":78,"column":0},"end":{"row":78,"column":1},"action":"remove","lines":[" "]},{"start":{"row":78,"column":12},"end":{"row":78,"column":15},"action":"remove","lines":["   "]},{"start":{"row":79,"column":0},"end":{"row":79,"column":4},"action":"remove","lines":["    "]},{"start":{"row":80,"column":10},"end":{"row":80,"column":14},"action":"remove","lines":["    "]},{"start":{"row":81,"column":0},"end":{"row":81,"column":2},"action":"remove","lines":["  "]},{"start":{"row":81,"column":8},"end":{"row":81,"column":10},"action":"remove","lines":["  "]},{"start":{"row":83,"column":0},"end":{"row":83,"column":4},"action":"remove","lines":["    "]},{"start":{"row":84,"column":10},"end":{"row":84,"column":14},"action":"remove","lines":["    "]},{"start":{"row":85,"column":0},"end":{"row":85,"column":4},"action":"remove","lines":["    "]},{"start":{"row":87,"column":10},"end":{"row":87,"column":14},"action":"remove","lines":["    "]},{"start":{"row":88,"column":0},"end":{"row":88,"column":4},"action":"remove","lines":["    "]},{"start":{"row":90,"column":0},"end":{"row":90,"column":4},"action":"remove","lines":["    "]},{"start":{"row":91,"column":0},"end":{"row":91,"column":1},"action":"remove","lines":[" "]},{"start":{"row":91,"column":8},"end":{"row":91,"column":11},"action":"remove","lines":["   "]},{"start":{"row":92,"column":0},"end":{"row":92,"column":3},"action":"remove","lines":["   "]},{"start":{"row":92,"column":6},"end":{"row":92,"column":7},"action":"remove","lines":[" "]},{"start":{"row":95,"column":0},"end":{"row":95,"column":4},"action":"remove","lines":["    "]},{"start":{"row":97,"column":0},"end":{"row":97,"column":2},"action":"remove","lines":["  "]},{"start":{"row":97,"column":6},"end":{"row":97,"column":8},"action":"remove","lines":["  "]},{"start":{"row":99,"column":0},"end":{"row":99,"column":4},"action":"remove","lines":["    "]},{"start":{"row":100,"column":0},"end":{"row":100,"column":1},"action":"remove","lines":[" "]},{"start":{"row":100,"column":8},"end":{"row":100,"column":11},"action":"remove","lines":["   "]},{"start":{"row":101,"column":0},"end":{"row":101,"column":3},"action":"remove","lines":["   "]},{"start":{"row":101,"column":8},"end":{"row":101,"column":9},"action":"remove","lines":[" "]},{"start":{"row":102,"column":10},"end":{"row":102,"column":14},"action":"remove","lines":["    "]},{"start":{"row":103,"column":0},"end":{"row":103,"column":2},"action":"remove","lines":["  "]},{"start":{"row":103,"column":12},"end":{"row":103,"column":14},"action":"remove","lines":["  "]},{"start":{"row":104,"column":12},"end":{"row":104,"column":16},"action":"remove","lines":["    "]},{"start":{"row":105,"column":0},"end":{"row":105,"column":1},"action":"remove","lines":[" "]},{"start":{"row":105,"column":10},"end":{"row":105,"column":13},"action":"remove","lines":["   "]},{"start":{"row":106,"column":0},"end":{"row":106,"column":4},"action":"remove","lines":["    "]},{"start":{"row":107,"column":8},"end":{"row":107,"column":12},"action":"remove","lines":["    "]},{"start":{"row":109,"column":0},"end":{"row":109,"column":2},"action":"remove","lines":["  "]},{"start":{"row":109,"column":8},"end":{"row":109,"column":10},"action":"remove","lines":["  "]},{"start":{"row":110,"column":10},"end":{"row":110,"column":14},"action":"remove","lines":["    "]},{"start":{"row":111,"column":0},"end":{"row":111,"column":1},"action":"remove","lines":[" "]},{"start":{"row":111,"column":10},"end":{"row":111,"column":13},"action":"remove","lines":["   "]},{"start":{"row":112,"column":0},"end":{"row":112,"column":3},"action":"remove","lines":["   "]},{"start":{"row":112,"column":10},"end":{"row":112,"column":11},"action":"remove","lines":[" "]},{"start":{"row":113,"column":12},"end":{"row":113,"column":16},"action":"remove","lines":["    "]},{"start":{"row":114,"column":0},"end":{"row":114,"column":4},"action":"remove","lines":["    "]},{"start":{"row":115,"column":0},"end":{"row":115,"column":4},"action":"remove","lines":["    "]},{"start":{"row":116,"column":16},"end":{"row":116,"column":20},"action":"remove","lines":["    "]},{"start":{"row":117,"column":0},"end":{"row":117,"column":4},"action":"remove","lines":["    "]},{"start":{"row":118,"column":14},"end":{"row":118,"column":18},"action":"remove","lines":["    "]},{"start":{"row":119,"column":0},"end":{"row":119,"column":1},"action":"remove","lines":[" "]},{"start":{"row":119,"column":14},"end":{"row":119,"column":17},"action":"remove","lines":["   "]},{"start":{"row":120,"column":16},"end":{"row":120,"column":22},"action":"remove","lines":["      "]},{"start":{"row":121,"column":0},"end":{"row":121,"column":4},"action":"remove","lines":["    "]},{"start":{"row":121,"column":16},"end":{"row":121,"column":18},"action":"remove","lines":["  "]},{"start":{"row":122,"column":0},"end":{"row":122,"column":6},"action":"remove","lines":["      "]},{"start":{"row":123,"column":0},"end":{"row":123,"column":5},"action":"remove","lines":["     "]},{"start":{"row":123,"column":20},"end":{"row":123,"column":21},"action":"remove","lines":[" "]},{"start":{"row":124,"column":18},"end":{"row":124,"column":24},"action":"remove","lines":["      "]},{"start":{"row":125,"column":0},"end":{"row":125,"column":6},"action":"remove","lines":["      "]},{"start":{"row":147,"column":0},"end":{"row":147,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":124,"column":21},"end":{"row":125,"column":0},"action":"insert","lines":["",""],"id":10},{"start":{"row":125,"column":0},"end":{"row":125,"column":18},"action":"insert","lines":["                  "]}],[{"start":{"row":128,"column":137},"end":{"row":128,"column":138},"action":"remove","lines":["s"],"id":11},{"start":{"row":128,"column":136},"end":{"row":128,"column":137},"action":"remove","lines":["l"]},{"start":{"row":128,"column":135},"end":{"row":128,"column":136},"action":"remove","lines":["a"]},{"start":{"row":128,"column":134},"end":{"row":128,"column":135},"action":"remove","lines":["n"]},{"start":{"row":128,"column":133},"end":{"row":128,"column":134},"action":"remove","lines":["o"]},{"start":{"row":128,"column":132},"end":{"row":128,"column":133},"action":"remove","lines":["i"]},{"start":{"row":128,"column":131},"end":{"row":128,"column":132},"action":"remove","lines":["t"]},{"start":{"row":128,"column":130},"end":{"row":128,"column":131},"action":"remove","lines":["a"]},{"start":{"row":128,"column":129},"end":{"row":128,"column":130},"action":"remove","lines":["r"]},{"start":{"row":128,"column":128},"end":{"row":128,"column":129},"action":"remove","lines":["e"]},{"start":{"row":128,"column":127},"end":{"row":128,"column":128},"action":"remove","lines":["p"]},{"start":{"row":128,"column":126},"end":{"row":128,"column":127},"action":"remove","lines":["o"]}],[{"start":{"row":128,"column":126},"end":{"row":128,"column":127},"action":"insert","lines":["m"],"id":12},{"start":{"row":128,"column":127},"end":{"row":128,"column":128},"action":"insert","lines":["a"]},{"start":{"row":128,"column":128},"end":{"row":128,"column":129},"action":"insert","lines":["n"]},{"start":{"row":128,"column":129},"end":{"row":128,"column":130},"action":"insert","lines":["a"]}],[{"start":{"row":128,"column":129},"end":{"row":128,"column":130},"action":"remove","lines":["a"],"id":13},{"start":{"row":128,"column":128},"end":{"row":128,"column":129},"action":"remove","lines":["n"]},{"start":{"row":128,"column":127},"end":{"row":128,"column":128},"action":"remove","lines":["a"]},{"start":{"row":128,"column":126},"end":{"row":128,"column":127},"action":"remove","lines":["m"]}],[{"start":{"row":128,"column":126},"end":{"row":128,"column":137},"action":"insert","lines":["managements"],"id":14}],[{"start":{"row":134,"column":109},"end":{"row":134,"column":122},"action":"remove","lines":["/operationals"],"id":15}],[{"start":{"row":134,"column":109},"end":{"row":134,"column":120},"action":"insert","lines":["managements"],"id":16}],[{"start":{"row":163,"column":44},"end":{"row":163,"column":45},"action":"remove","lines":["l"],"id":17},{"start":{"row":163,"column":43},"end":{"row":163,"column":44},"action":"remove","lines":["a"]},{"start":{"row":163,"column":42},"end":{"row":163,"column":43},"action":"remove","lines":["n"]},{"start":{"row":163,"column":41},"end":{"row":163,"column":42},"action":"remove","lines":["o"]},{"start":{"row":163,"column":40},"end":{"row":163,"column":41},"action":"remove","lines":["i"]},{"start":{"row":163,"column":39},"end":{"row":163,"column":40},"action":"remove","lines":["c"]},{"start":{"row":163,"column":38},"end":{"row":163,"column":39},"action":"remove","lines":["a"]},{"start":{"row":163,"column":37},"end":{"row":163,"column":38},"action":"remove","lines":["r"]},{"start":{"row":163,"column":36},"end":{"row":163,"column":37},"action":"remove","lines":["e"]},{"start":{"row":163,"column":35},"end":{"row":163,"column":36},"action":"remove","lines":["p"]},{"start":{"row":163,"column":34},"end":{"row":163,"column":35},"action":"remove","lines":["o"]}],[{"start":{"row":163,"column":34},"end":{"row":163,"column":35},"action":"insert","lines":["M"],"id":18},{"start":{"row":163,"column":35},"end":{"row":163,"column":36},"action":"insert","lines":["e"]}],[{"start":{"row":163,"column":35},"end":{"row":163,"column":36},"action":"remove","lines":["e"],"id":19},{"start":{"row":163,"column":34},"end":{"row":163,"column":35},"action":"remove","lines":["M"]}],[{"start":{"row":163,"column":34},"end":{"row":163,"column":35},"action":"insert","lines":["M"],"id":20},{"start":{"row":163,"column":35},"end":{"row":163,"column":36},"action":"insert","lines":["E"]}],[{"start":{"row":163,"column":35},"end":{"row":163,"column":36},"action":"remove","lines":["E"],"id":21},{"start":{"row":163,"column":34},"end":{"row":163,"column":35},"action":"remove","lines":["M"]}],[{"start":{"row":163,"column":34},"end":{"row":163,"column":35},"action":"insert","lines":["m"],"id":22},{"start":{"row":163,"column":35},"end":{"row":163,"column":36},"action":"insert","lines":["e"]},{"start":{"row":163,"column":36},"end":{"row":163,"column":37},"action":"insert","lines":["n"]},{"start":{"row":163,"column":37},"end":{"row":163,"column":38},"action":"insert","lines":["b"]},{"start":{"row":163,"column":38},"end":{"row":163,"column":39},"action":"insert","lines":["r"]},{"start":{"row":163,"column":39},"end":{"row":163,"column":40},"action":"insert","lines":["o"]}],[{"start":{"row":163,"column":40},"end":{"row":163,"column":41},"action":"insert","lines":[" "],"id":23}],[{"start":{"row":163,"column":40},"end":{"row":163,"column":41},"action":"remove","lines":[" "],"id":24},{"start":{"row":163,"column":39},"end":{"row":163,"column":40},"action":"remove","lines":["o"]},{"start":{"row":163,"column":38},"end":{"row":163,"column":39},"action":"remove","lines":["r"]},{"start":{"row":163,"column":37},"end":{"row":163,"column":38},"action":"remove","lines":["b"]},{"start":{"row":163,"column":36},"end":{"row":163,"column":37},"action":"remove","lines":["n"]},{"start":{"row":163,"column":35},"end":{"row":163,"column":36},"action":"remove","lines":["e"]},{"start":{"row":163,"column":34},"end":{"row":163,"column":35},"action":"remove","lines":["m"]}],[{"start":{"row":163,"column":34},"end":{"row":163,"column":35},"action":"insert","lines":["d"],"id":25},{"start":{"row":163,"column":35},"end":{"row":163,"column":36},"action":"insert","lines":["i"]},{"start":{"row":163,"column":36},"end":{"row":163,"column":37},"action":"insert","lines":["r"]},{"start":{"row":163,"column":37},"end":{"row":163,"column":38},"action":"insert","lines":["e"]},{"start":{"row":163,"column":38},"end":{"row":163,"column":39},"action":"insert","lines":["t"]},{"start":{"row":163,"column":39},"end":{"row":163,"column":40},"action":"insert","lines":["o"]},{"start":{"row":163,"column":40},"end":{"row":163,"column":41},"action":"insert","lines":["r"]}],[{"start":{"row":125,"column":0},"end":{"row":125,"column":18},"action":"remove","lines":["                  "],"id":26}],[{"start":{"row":114,"column":44},"end":{"row":114,"column":61},"action":"remove","lines":["membro da direção"],"id":27}],[{"start":{"row":114,"column":44},"end":{"row":114,"column":45},"action":"insert","lines":["d"],"id":28},{"start":{"row":114,"column":45},"end":{"row":114,"column":46},"action":"insert","lines":["i"]},{"start":{"row":114,"column":46},"end":{"row":114,"column":47},"action":"insert","lines":["r"]},{"start":{"row":114,"column":47},"end":{"row":114,"column":48},"action":"insert","lines":["e"]},{"start":{"row":114,"column":48},"end":{"row":114,"column":49},"action":"insert","lines":["o"]},{"start":{"row":114,"column":49},"end":{"row":114,"column":50},"action":"insert","lines":["t"]}],[{"start":{"row":114,"column":49},"end":{"row":114,"column":50},"action":"remove","lines":["t"],"id":29},{"start":{"row":114,"column":48},"end":{"row":114,"column":49},"action":"remove","lines":["o"]}],[{"start":{"row":114,"column":48},"end":{"row":114,"column":49},"action":"insert","lines":["t"],"id":30},{"start":{"row":114,"column":49},"end":{"row":114,"column":50},"action":"insert","lines":["o"]},{"start":{"row":114,"column":50},"end":{"row":114,"column":51},"action":"insert","lines":["r"]}],[{"start":{"row":114,"column":51},"end":{"row":114,"column":52},"action":"insert","lines":[" "],"id":31}],[{"start":{"row":117,"column":16},"end":{"row":117,"column":17},"action":"insert","lines":["/"],"id":32},{"start":{"row":117,"column":17},"end":{"row":117,"column":18},"action":"insert","lines":["/"]}],[{"start":{"row":162,"column":30},"end":{"row":162,"column":31},"action":"insert","lines":["e"],"id":33},{"start":{"row":162,"column":31},"end":{"row":162,"column":32},"action":"insert","lines":["l"]},{"start":{"row":162,"column":32},"end":{"row":162,"column":33},"action":"insert","lines":["s"]},{"start":{"row":162,"column":33},"end":{"row":162,"column":34},"action":"insert","lines":["e"]}],[{"start":{"row":162,"column":34},"end":{"row":162,"column":35},"action":"insert","lines":["{"],"id":34}],[{"start":{"row":162,"column":29},"end":{"row":162,"column":30},"action":"remove","lines":[")"],"id":35}],[{"start":{"row":162,"column":33},"end":{"row":163,"column":0},"action":"insert","lines":["",""],"id":36},{"start":{"row":163,"column":0},"end":{"row":163,"column":28},"action":"insert","lines":["                            "]}],[{"start":{"row":162,"column":28},"end":{"row":162,"column":29},"action":"remove","lines":["}"],"id":37}],[{"start":{"row":162,"column":32},"end":{"row":163,"column":28},"action":"remove","lines":["","                            "],"id":38}],[{"start":{"row":171,"column":17},"end":{"row":171,"column":18},"action":"insert","lines":[")"],"id":40}],[{"start":{"row":171,"column":17},"end":{"row":171,"column":18},"action":"remove","lines":[")"],"id":41}],[{"start":{"row":171,"column":17},"end":{"row":171,"column":18},"action":"insert","lines":[")"],"id":42}],[{"start":{"row":172,"column":15},"end":{"row":172,"column":16},"action":"remove","lines":[")"],"id":43}],[{"start":{"row":174,"column":9},"end":{"row":174,"column":10},"action":"insert","lines":[")"],"id":44}],[{"start":{"row":175,"column":7},"end":{"row":175,"column":8},"action":"remove","lines":[")"],"id":45}],[{"start":{"row":175,"column":7},"end":{"row":175,"column":8},"action":"insert","lines":[")"],"id":46}],[{"start":{"row":175,"column":7},"end":{"row":175,"column":8},"action":"remove","lines":[")"],"id":47}],[{"start":{"row":176,"column":5},"end":{"row":176,"column":6},"action":"remove","lines":[")"],"id":48}],[{"start":{"row":177,"column":3},"end":{"row":177,"column":4},"action":"insert","lines":[")"],"id":49}],[{"start":{"row":177,"column":4},"end":{"row":178,"column":0},"action":"insert","lines":["",""],"id":50},{"start":{"row":178,"column":0},"end":{"row":178,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":178,"column":2},"end":{"row":178,"column":3},"action":"insert","lines":["="],"id":51}],[{"start":{"row":178,"column":2},"end":{"row":178,"column":3},"action":"remove","lines":["="],"id":52}],[{"start":{"row":178,"column":2},"end":{"row":178,"column":3},"action":"insert","lines":["}"],"id":53},{"start":{"row":178,"column":0},"end":{"row":178,"column":2},"action":"remove","lines":["  "]},{"start":{"row":178,"column":0},"end":{"row":178,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":178,"column":5},"end":{"row":178,"column":6},"action":"insert","lines":[")"],"id":54}],[{"start":{"row":178,"column":5},"end":{"row":178,"column":6},"action":"remove","lines":[")"],"id":55}],[{"start":{"row":178,"column":5},"end":{"row":179,"column":0},"action":"insert","lines":["",""],"id":56},{"start":{"row":179,"column":0},"end":{"row":179,"column":4},"action":"insert","lines":["    "]},{"start":{"row":179,"column":4},"end":{"row":179,"column":5},"action":"insert","lines":["}"]},{"start":{"row":179,"column":0},"end":{"row":179,"column":4},"action":"remove","lines":["    "]},{"start":{"row":179,"column":0},"end":{"row":179,"column":2},"action":"insert","lines":["  "]},{"start":{"row":179,"column":3},"end":{"row":179,"column":4},"action":"insert","lines":[")"]}],[{"start":{"row":179,"column":3},"end":{"row":179,"column":4},"action":"remove","lines":[")"],"id":57},{"start":{"row":179,"column":2},"end":{"row":179,"column":3},"action":"remove","lines":["}"]},{"start":{"row":179,"column":0},"end":{"row":179,"column":2},"action":"remove","lines":["  "]},{"start":{"row":178,"column":5},"end":{"row":179,"column":0},"action":"remove","lines":["",""]},{"start":{"row":178,"column":4},"end":{"row":178,"column":5},"action":"remove","lines":["}"]},{"start":{"row":178,"column":2},"end":{"row":178,"column":4},"action":"remove","lines":["  "]}],[{"start":{"row":178,"column":0},"end":{"row":178,"column":2},"action":"remove","lines":["  "],"id":58},{"start":{"row":177,"column":4},"end":{"row":178,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":177,"column":4},"end":{"row":178,"column":0},"action":"insert","lines":["",""],"id":59},{"start":{"row":178,"column":0},"end":{"row":178,"column":2},"action":"insert","lines":["  "]},{"start":{"row":178,"column":2},"end":{"row":178,"column":3},"action":"insert","lines":["}"]},{"start":{"row":178,"column":0},"end":{"row":178,"column":2},"action":"remove","lines":["  "]},{"start":{"row":178,"column":0},"end":{"row":178,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":178,"column":5},"end":{"row":178,"column":6},"action":"insert","lines":[")"],"id":60}],[{"start":{"row":178,"column":6},"end":{"row":179,"column":0},"action":"insert","lines":["",""],"id":61},{"start":{"row":179,"column":0},"end":{"row":179,"column":4},"action":"insert","lines":["    "]},{"start":{"row":179,"column":4},"end":{"row":179,"column":5},"action":"insert","lines":["}"]},{"start":{"row":179,"column":0},"end":{"row":179,"column":4},"action":"remove","lines":["    "]},{"start":{"row":179,"column":0},"end":{"row":179,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":162,"column":28},"end":{"row":162,"column":30},"action":"insert","lines":["  "],"id":62},{"start":{"row":162,"column":34},"end":{"row":162,"column":35},"action":"insert","lines":[" "]},{"start":{"row":163,"column":0},"end":{"row":163,"column":6},"action":"insert","lines":["      "]},{"start":{"row":164,"column":28},"end":{"row":164,"column":34},"action":"insert","lines":["      "]},{"start":{"row":165,"column":0},"end":{"row":165,"column":5},"action":"insert","lines":["     "]},{"start":{"row":165,"column":31},"end":{"row":165,"column":32},"action":"insert","lines":[" "]},{"start":{"row":166,"column":0},"end":{"row":166,"column":6},"action":"insert","lines":["      "]},{"start":{"row":168,"column":24},"end":{"row":168,"column":30},"action":"insert","lines":["      "]},{"start":{"row":169,"column":0},"end":{"row":169,"column":6},"action":"insert","lines":["      "]},{"start":{"row":170,"column":0},"end":{"row":170,"column":1},"action":"insert","lines":[" "]},{"start":{"row":170,"column":19},"end":{"row":170,"column":24},"action":"insert","lines":["     "]},{"start":{"row":171,"column":0},"end":{"row":171,"column":6},"action":"insert","lines":["      "]},{"start":{"row":172,"column":14},"end":{"row":172,"column":18},"action":"insert","lines":["    "]},{"start":{"row":173,"column":0},"end":{"row":173,"column":5},"action":"insert","lines":["     "]},{"start":{"row":173,"column":15},"end":{"row":173,"column":16},"action":"insert","lines":[" "]},{"start":{"row":174,"column":0},"end":{"row":174,"column":4},"action":"insert","lines":["    "]},{"start":{"row":174,"column":12},"end":{"row":174,"column":14},"action":"insert","lines":["  "]},{"start":{"row":175,"column":0},"end":{"row":175,"column":3},"action":"insert","lines":["   "]},{"start":{"row":175,"column":9},"end":{"row":175,"column":10},"action":"insert","lines":[" "]},{"start":{"row":176,"column":0},"end":{"row":176,"column":4},"action":"insert","lines":["    "]},{"start":{"row":177,"column":0},"end":{"row":177,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":178,"column":6},"end":{"row":178,"column":7},"action":"insert","lines":[";"],"id":63}],[{"start":{"row":177,"column":8},"end":{"row":177,"column":9},"action":"insert","lines":[";"],"id":64}],[{"start":{"row":173,"column":17},"end":{"row":173,"column":18},"action":"remove","lines":[";"],"id":65}],[{"start":{"row":171,"column":24},"end":{"row":171,"column":25},"action":"insert","lines":[";"],"id":66}],[{"start":{"row":168,"column":31},"end":{"row":168,"column":32},"action":"remove","lines":[";"],"id":67}],[{"start":{"row":163,"column":81},"end":{"row":163,"column":82},"action":"insert","lines":["f"],"id":69},{"start":{"row":163,"column":82},"end":{"row":163,"column":83},"action":"insert","lines":["o"]},{"start":{"row":163,"column":83},"end":{"row":163,"column":84},"action":"insert","lines":["i"]}],[{"start":{"row":163,"column":84},"end":{"row":163,"column":85},"action":"insert","lines":[" "],"id":70}],[{"start":{"row":163,"column":37},"end":{"row":163,"column":38},"action":"insert","lines":["{"],"id":71}],[{"start":{"row":163,"column":110},"end":{"row":163,"column":111},"action":"remove","lines":["{"],"id":72}],[{"start":{"row":163,"column":38},"end":{"row":164,"column":0},"action":"insert","lines":["",""],"id":73},{"start":{"row":164,"column":0},"end":{"row":164,"column":34},"action":"insert","lines":["                                  "]}],[{"start":{"row":164,"column":34},"end":{"row":164,"column":35},"action":"insert","lines":["t"],"id":74},{"start":{"row":164,"column":35},"end":{"row":164,"column":36},"action":"insert","lines":["i"]},{"start":{"row":164,"column":36},"end":{"row":164,"column":37},"action":"insert","lines":["t"]},{"start":{"row":164,"column":37},"end":{"row":164,"column":38},"action":"insert","lines":["l"]},{"start":{"row":164,"column":38},"end":{"row":164,"column":39},"action":"insert","lines":["e"]}],[{"start":{"row":164,"column":39},"end":{"row":164,"column":40},"action":"insert","lines":[":"],"id":75}],[{"start":{"row":164,"column":40},"end":{"row":164,"column":41},"action":"insert","lines":[" "],"id":76}],[{"start":{"row":164,"column":40},"end":{"row":164,"column":41},"action":"remove","lines":[" "],"id":77}]]},"ace":{"folds":[],"scrolltop":1149.5,"scrollleft":0,"selection":{"start":{"row":80,"column":23},"end":{"row":80,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1609426804264,"hash":"d9b856b4ffecef072f6250145ec446a8960386c4"}