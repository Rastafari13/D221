{"filter":false,"title":"123.js","tooltip":"/Frontend/Frontend/startbootstrap-scrolling-nav-gh-pages/js/123.js","undoManager":{"mark":26,"position":26,"stack":[[{"start":{"row":0,"column":104},"end":{"row":0,"column":105},"action":"insert","lines":[")"],"id":13,"ignore":true}],[{"start":{"row":0,"column":105},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":14,"ignore":true}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":105},"action":"remove","lines":["fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/` + \"s2006\")"],"id":15}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":1},"action":"insert","lines":[" document.getElementById(\"opp-save\").onclick = function(e) {","    oppedit;","}"],"id":16}],[{"start":{"row":3,"column":0},"end":{"row":4,"column":0},"action":"insert","lines":["",""],"id":17},{"start":{"row":4,"column":0},"end":{"row":5,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":5,"column":0},"end":{"row":42,"column":1},"action":"insert","lines":["function oppedit() {","    alert(\"Sucesso\")","    let id = localStorage.idopp;","    let data = {};","","","    data.adress = document.getElementById(\"viewop-adress\").value;","    data.phone_number = document.getElementById(\"viewop-phone\").value;","    data.pay_per_hour = document.getElementById(\"viewop-salary\").value;","    data.id_operational = document.getElementById(\"view-id-opp\").value;","    data.speciality = document.getElementById(\"viewop-function\").value;","    data.operational_type = data.operational_type.value;","    data.name = document.getElementById(\"viewop-name\").value;","    console.log(data);","","    /* if (data.phone_number.length !== 9 || data.adress.length < 3) {","","     }","     else {","         if (data.pay_per_hour.length === 0) {","             alert(\"Por favor preencha o valor do salário\");","         }","        // else {*/","","    fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//operationals/` + id, {","        headers: { 'Content-Type': 'application/json' },","        method: 'PUT',","        body: JSON.stringify(data)","    }).then(function(response) {","        if (!response.ok) {","            console.log(response.status); //=> number 100â€“599","            console.log(response.statusText); //=> String","            console.log(response.headers); //=> Headers","            console.log(response.url); //=> String","        }","    });","    alert(\"Alterações gravadas com sucesso\");","}"],"id":18}],[{"start":{"row":0,"column":0},"end":{"row":2,"column":1},"action":"remove","lines":[" document.getElementById(\"opp-save\").onclick = function(e) {","    oppedit;","}"],"id":19,"ignore":true}],[{"start":{"row":0,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["let viewop_phone = document.getElementById(\"viewop-edit-phone\");","viewop_phone.onclick = viewop_phone_edit;","","function viewop_phone_edit() {","    document.getElementById(\"viewop-phone\").disabled = false;","}"],"id":20,"ignore":true}],[{"start":{"row":0,"column":50},"end":{"row":0,"column":61},"action":"remove","lines":["-edit-phone"],"id":21,"ignore":true}],[{"start":{"row":0,"column":46},"end":{"row":0,"column":50},"action":"remove","lines":["ewop"],"id":22,"ignore":true}],[{"start":{"row":0,"column":44},"end":{"row":0,"column":46},"action":"remove","lines":["vi"],"id":23,"ignore":true}],[{"start":{"row":0,"column":44},"end":{"row":0,"column":46},"action":"insert","lines":["op"],"id":24,"ignore":true}],[{"start":{"row":0,"column":46},"end":{"row":0,"column":48},"action":"insert","lines":["p-"],"id":25,"ignore":true}],[{"start":{"row":0,"column":48},"end":{"row":0,"column":52},"action":"insert","lines":["fone"],"id":26,"ignore":true}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":61},"action":"remove","lines":["document.getElementById(\"viewop-phone\").disabled = false;"],"id":27,"ignore":true},{"start":{"row":4,"column":4},"end":{"row":4,"column":5},"action":"insert","lines":["a"]}],[{"start":{"row":4,"column":5},"end":{"row":4,"column":7},"action":"insert","lines":["le"],"id":28,"ignore":true}],[{"start":{"row":4,"column":7},"end":{"row":5,"column":4},"action":"insert","lines":["t","    "],"id":29,"ignore":true}],[{"start":{"row":4,"column":8},"end":{"row":5,"column":4},"action":"remove","lines":["","    "],"id":30,"ignore":true}],[{"start":{"row":4,"column":8},"end":{"row":4,"column":10},"action":"insert","lines":["()"],"id":31,"ignore":true}],[{"start":{"row":4,"column":7},"end":{"row":4,"column":10},"action":"remove","lines":["t()"],"id":32,"ignore":true}],[{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"remove","lines":["e"],"id":33,"ignore":true}],[{"start":{"row":4,"column":6},"end":{"row":4,"column":7},"action":"insert","lines":["e"],"id":34,"ignore":true}],[{"start":{"row":4,"column":4},"end":{"row":4,"column":7},"action":"remove","lines":["ale"],"id":35,"ignore":true},{"start":{"row":4,"column":4},"end":{"row":4,"column":11},"action":"insert","lines":["alert()"]}],[{"start":{"row":4,"column":10},"end":{"row":4,"column":12},"action":"insert","lines":["\"\""],"id":36,"ignore":true}],[{"start":{"row":4,"column":11},"end":{"row":4,"column":12},"action":"insert","lines":["B"],"id":37,"ignore":true}],[{"start":{"row":4,"column":12},"end":{"row":4,"column":16},"action":"insert","lines":["urro"],"id":38,"ignore":true}],[{"start":{"row":4,"column":16},"end":{"row":4,"column":17},"action":"insert","lines":["s"],"id":39,"ignore":true}]]},"ace":{"folds":[],"scrolltop":0.5,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":0,"column":0},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1608291746916,"hash":"c0d4214e5c27d62876151988c8c5d10720a73b86"}