{"filter":false,"title":"generate1.js","tooltip":"/Frontend/Frontend/startbootstrap-scrolling-nav-gh-pages/js/generate1.js","undoManager":{"mark":81,"position":81,"stack":[[{"start":{"row":0,"column":0},"end":{"row":26,"column":67},"action":"insert","lines":["const faker = require('faker')","const fs = require('fs')","","function generateUsers() {","","  let users = []","","  for (let id=1; id <= 100; id++) {","","    let firstName = faker.name.firstName()","    let lastName = faker.name.lastName()","    let email = faker.internet.email()","","    users.push({","      \"id\": id,","      \"first_name\": firstName,","      \"last_name\": lastName,","      \"email\": email","    })","  }","","  return { \"data\": users }","}","","let dataObj = generateUsers();","","fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\\t'));"],"id":1}],[{"start":{"row":5,"column":16},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":2},{"start":{"row":6,"column":0},"end":{"row":6,"column":2},"action":"insert","lines":["  "]},{"start":{"row":6,"column":2},"end":{"row":7,"column":0},"action":"insert","lines":["",""]},{"start":{"row":7,"column":0},"end":{"row":7,"column":2},"action":"insert","lines":["  "]},{"start":{"row":7,"column":2},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":8,"column":2},"end":{"row":23,"column":5},"action":"insert","lines":["    const response = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/`)","    const partners = await response.json()","    let i = 1","    for (const partner of partners) {","        strHtml += `","                <tr>","                    <td>${partner.num_partner}</td>","                    <td>${partner.name}</td>","                    <td>${partner.cc}</td>","                    <td>${partner.phone_num}</td>","                    <td>${partner.adress}</td>","                    <td>${partner.donation}</td>","                </tr>","            `","        i++","    }"],"id":3}],[{"start":{"row":7,"column":2},"end":{"row":7,"column":41},"action":"insert","lines":["const renderParticipants = async() => {"],"id":4}],[{"start":{"row":23,"column":5},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"insert","lines":["    "]},{"start":{"row":24,"column":4},"end":{"row":24,"column":5},"action":"insert","lines":["}"]},{"start":{"row":24,"column":0},"end":{"row":24,"column":4},"action":"remove","lines":["    "]},{"start":{"row":24,"column":0},"end":{"row":24,"column":2},"action":"insert","lines":["  "]}],[{"start":{"row":7,"column":1},"end":{"row":7,"column":7},"action":"remove","lines":[" const"],"id":6}],[{"start":{"row":10,"column":0},"end":{"row":10,"column":13},"action":"remove","lines":["    let i = 1"],"id":7}],[{"start":{"row":22,"column":8},"end":{"row":22,"column":11},"action":"remove","lines":["i++"],"id":9}],[{"start":{"row":26,"column":0},"end":{"row":26,"column":35},"action":"remove","lines":["  for (let id=1; id <= 100; id++) {"],"id":10}],[{"start":{"row":12,"column":0},"end":{"row":12,"column":20},"action":"remove","lines":["        strHtml += `"],"id":11}],[{"start":{"row":21,"column":12},"end":{"row":21,"column":13},"action":"remove","lines":["`"],"id":12}],[{"start":{"row":27,"column":0},"end":{"row":27,"column":4},"action":"insert","lines":["    "],"id":13}],[{"start":{"row":27,"column":4},"end":{"row":27,"column":5},"action":"insert","lines":["l"],"id":14},{"start":{"row":27,"column":5},"end":{"row":27,"column":6},"action":"insert","lines":["e"]},{"start":{"row":27,"column":6},"end":{"row":27,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":27,"column":7},"end":{"row":27,"column":8},"action":"insert","lines":[" "],"id":15},{"start":{"row":27,"column":8},"end":{"row":27,"column":9},"action":"insert","lines":["n"]},{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"insert","lines":["u"]},{"start":{"row":27,"column":10},"end":{"row":27,"column":11},"action":"insert","lines":["m"]}],[{"start":{"row":27,"column":11},"end":{"row":27,"column":12},"action":"insert","lines":[" "],"id":16},{"start":{"row":27,"column":12},"end":{"row":27,"column":13},"action":"insert","lines":["="]}],[{"start":{"row":27,"column":13},"end":{"row":27,"column":14},"action":"insert","lines":[" "],"id":17},{"start":{"row":27,"column":14},"end":{"row":27,"column":15},"action":"insert","lines":["p"]},{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"insert","lines":["a"]},{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"insert","lines":["r"]},{"start":{"row":27,"column":17},"end":{"row":27,"column":18},"action":"insert","lines":["t"]},{"start":{"row":27,"column":18},"end":{"row":27,"column":19},"action":"insert","lines":["e"]},{"start":{"row":27,"column":19},"end":{"row":27,"column":20},"action":"insert","lines":["r"]}],[{"start":{"row":27,"column":20},"end":{"row":27,"column":21},"action":"insert","lines":["."],"id":18},{"start":{"row":27,"column":21},"end":{"row":27,"column":22},"action":"insert","lines":["n"]},{"start":{"row":27,"column":22},"end":{"row":27,"column":23},"action":"insert","lines":["u"]},{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":["m"]}],[{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"insert","lines":["_"],"id":19},{"start":{"row":27,"column":25},"end":{"row":27,"column":26},"action":"insert","lines":["p"]},{"start":{"row":27,"column":26},"end":{"row":27,"column":27},"action":"insert","lines":["a"]},{"start":{"row":27,"column":27},"end":{"row":27,"column":28},"action":"insert","lines":["r"]},{"start":{"row":27,"column":28},"end":{"row":27,"column":29},"action":"insert","lines":["t"]},{"start":{"row":27,"column":29},"end":{"row":27,"column":30},"action":"insert","lines":["n"]},{"start":{"row":27,"column":30},"end":{"row":27,"column":31},"action":"insert","lines":["e"]},{"start":{"row":27,"column":31},"end":{"row":27,"column":32},"action":"insert","lines":["r"]}],[{"start":{"row":27,"column":32},"end":{"row":27,"column":34},"action":"insert","lines":["()"],"id":20}],[{"start":{"row":28,"column":8},"end":{"row":28,"column":17},"action":"remove","lines":["firstName"],"id":21}],[{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["n"],"id":22},{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"insert","lines":["a"]},{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"insert","lines":["m"]},{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"insert","lines":["e"]}],[{"start":{"row":29,"column":8},"end":{"row":29,"column":16},"action":"remove","lines":["lastName"],"id":23}],[{"start":{"row":29,"column":8},"end":{"row":29,"column":9},"action":"insert","lines":["c"],"id":24},{"start":{"row":29,"column":9},"end":{"row":29,"column":10},"action":"insert","lines":["c"]}],[{"start":{"row":30,"column":8},"end":{"row":30,"column":13},"action":"remove","lines":["email"],"id":25}],[{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":["p"],"id":26},{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":["h"]},{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["o"]},{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["n"]},{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["e"]}],[{"start":{"row":28,"column":15},"end":{"row":28,"column":35},"action":"remove","lines":["faker.name.firstName"],"id":27}],[{"start":{"row":28,"column":15},"end":{"row":28,"column":27},"action":"insert","lines":["partner.name"],"id":28}],[{"start":{"row":29,"column":13},"end":{"row":29,"column":32},"action":"remove","lines":["faker.name.lastName"],"id":29}],[{"start":{"row":29,"column":13},"end":{"row":29,"column":23},"action":"insert","lines":["partner.cc"],"id":30}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":36},"action":"remove","lines":["faker.internet.email"],"id":31}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":30},"action":"insert","lines":["partner.adress"],"id":32}],[{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"remove","lines":["e"],"id":33},{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"remove","lines":["n"]},{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"remove","lines":["o"]},{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"remove","lines":["h"]},{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"remove","lines":["p"]}],[{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":["a"],"id":34},{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":["d"]},{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["r"]},{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["e"]},{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["s"]},{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"insert","lines":["s"]}],[{"start":{"row":29,"column":25},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":35},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"insert","lines":["    "]},{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["l"]},{"start":{"row":30,"column":5},"end":{"row":30,"column":6},"action":"insert","lines":["e"]},{"start":{"row":30,"column":6},"end":{"row":30,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":30,"column":7},"end":{"row":30,"column":8},"action":"insert","lines":[" "],"id":36},{"start":{"row":30,"column":8},"end":{"row":30,"column":9},"action":"insert","lines":["p"]},{"start":{"row":30,"column":9},"end":{"row":30,"column":10},"action":"insert","lines":["h"]},{"start":{"row":30,"column":10},"end":{"row":30,"column":11},"action":"insert","lines":["o"]},{"start":{"row":30,"column":11},"end":{"row":30,"column":12},"action":"insert","lines":["n"]},{"start":{"row":30,"column":12},"end":{"row":30,"column":13},"action":"insert","lines":["e"]}],[{"start":{"row":30,"column":13},"end":{"row":30,"column":14},"action":"insert","lines":[" "],"id":37},{"start":{"row":30,"column":14},"end":{"row":30,"column":15},"action":"insert","lines":["="]}],[{"start":{"row":30,"column":15},"end":{"row":30,"column":16},"action":"insert","lines":[" "],"id":38}],[{"start":{"row":30,"column":16},"end":{"row":30,"column":33},"action":"insert","lines":["partner.phone_num"],"id":39}],[{"start":{"row":30,"column":33},"end":{"row":30,"column":35},"action":"insert","lines":["()"],"id":40}],[{"start":{"row":32,"column":0},"end":{"row":32,"column":4},"action":"insert","lines":["    "],"id":41}],[{"start":{"row":32,"column":4},"end":{"row":32,"column":5},"action":"insert","lines":["l"],"id":42},{"start":{"row":32,"column":5},"end":{"row":32,"column":6},"action":"insert","lines":["e"]},{"start":{"row":32,"column":6},"end":{"row":32,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":32,"column":7},"end":{"row":32,"column":8},"action":"insert","lines":[" "],"id":43},{"start":{"row":32,"column":8},"end":{"row":32,"column":9},"action":"insert","lines":["d"]},{"start":{"row":32,"column":9},"end":{"row":32,"column":10},"action":"insert","lines":["o"]},{"start":{"row":32,"column":10},"end":{"row":32,"column":11},"action":"insert","lines":["n"]},{"start":{"row":32,"column":11},"end":{"row":32,"column":12},"action":"insert","lines":["a"]}],[{"start":{"row":32,"column":12},"end":{"row":32,"column":13},"action":"insert","lines":["t"],"id":44},{"start":{"row":32,"column":13},"end":{"row":32,"column":14},"action":"insert","lines":["i"]},{"start":{"row":32,"column":14},"end":{"row":32,"column":15},"action":"insert","lines":["o"]},{"start":{"row":32,"column":15},"end":{"row":32,"column":16},"action":"insert","lines":["n"]}],[{"start":{"row":32,"column":16},"end":{"row":32,"column":17},"action":"insert","lines":[" "],"id":45},{"start":{"row":32,"column":17},"end":{"row":32,"column":18},"action":"insert","lines":["="]}],[{"start":{"row":32,"column":18},"end":{"row":32,"column":19},"action":"insert","lines":[" "],"id":46},{"start":{"row":32,"column":19},"end":{"row":32,"column":20},"action":"insert","lines":["p"]},{"start":{"row":32,"column":20},"end":{"row":32,"column":21},"action":"insert","lines":["a"]},{"start":{"row":32,"column":21},"end":{"row":32,"column":22},"action":"insert","lines":["r"]},{"start":{"row":32,"column":22},"end":{"row":32,"column":23},"action":"insert","lines":["t"]},{"start":{"row":32,"column":23},"end":{"row":32,"column":24},"action":"insert","lines":["e"]},{"start":{"row":32,"column":24},"end":{"row":32,"column":25},"action":"insert","lines":["r"]}],[{"start":{"row":32,"column":24},"end":{"row":32,"column":25},"action":"remove","lines":["r"],"id":47},{"start":{"row":32,"column":23},"end":{"row":32,"column":24},"action":"remove","lines":["e"]}],[{"start":{"row":32,"column":19},"end":{"row":32,"column":23},"action":"remove","lines":["part"],"id":48},{"start":{"row":32,"column":19},"end":{"row":32,"column":26},"action":"insert","lines":["partner"]}],[{"start":{"row":32,"column":26},"end":{"row":32,"column":27},"action":"insert","lines":["."],"id":49},{"start":{"row":32,"column":27},"end":{"row":32,"column":28},"action":"insert","lines":["d"]},{"start":{"row":32,"column":28},"end":{"row":32,"column":29},"action":"insert","lines":["o"]},{"start":{"row":32,"column":29},"end":{"row":32,"column":30},"action":"insert","lines":["n"]},{"start":{"row":32,"column":30},"end":{"row":32,"column":31},"action":"insert","lines":["a"]},{"start":{"row":32,"column":31},"end":{"row":32,"column":32},"action":"insert","lines":["t"]},{"start":{"row":32,"column":32},"end":{"row":32,"column":33},"action":"insert","lines":["i"]},{"start":{"row":32,"column":33},"end":{"row":32,"column":34},"action":"insert","lines":["o"]},{"start":{"row":32,"column":34},"end":{"row":32,"column":35},"action":"insert","lines":["n"]}],[{"start":{"row":32,"column":35},"end":{"row":32,"column":37},"action":"insert","lines":["()"],"id":50}],[{"start":{"row":32,"column":37},"end":{"row":33,"column":0},"action":"insert","lines":["",""],"id":51},{"start":{"row":33,"column":0},"end":{"row":33,"column":4},"action":"insert","lines":["    "]},{"start":{"row":33,"column":4},"end":{"row":34,"column":0},"action":"insert","lines":["",""]},{"start":{"row":34,"column":0},"end":{"row":34,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":36,"column":13},"end":{"row":36,"column":14},"action":"remove","lines":["d"],"id":52},{"start":{"row":36,"column":12},"end":{"row":36,"column":13},"action":"remove","lines":["i"]}],[{"start":{"row":36,"column":12},"end":{"row":36,"column":13},"action":"insert","lines":["n"],"id":53},{"start":{"row":36,"column":13},"end":{"row":36,"column":14},"action":"insert","lines":["u"]},{"start":{"row":36,"column":14},"end":{"row":36,"column":15},"action":"insert","lines":["m"]}],[{"start":{"row":36,"column":8},"end":{"row":36,"column":9},"action":"remove","lines":["d"],"id":54},{"start":{"row":36,"column":7},"end":{"row":36,"column":8},"action":"remove","lines":["i"]}],[{"start":{"row":36,"column":7},"end":{"row":36,"column":18},"action":"insert","lines":["num_partner"],"id":55}],[{"start":{"row":37,"column":7},"end":{"row":37,"column":17},"action":"remove","lines":["first_name"],"id":56}],[{"start":{"row":37,"column":7},"end":{"row":37,"column":8},"action":"insert","lines":["n"],"id":57},{"start":{"row":37,"column":8},"end":{"row":37,"column":9},"action":"insert","lines":["a"]},{"start":{"row":37,"column":9},"end":{"row":37,"column":10},"action":"insert","lines":["m"]},{"start":{"row":37,"column":10},"end":{"row":37,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":37,"column":22},"end":{"row":37,"column":23},"action":"remove","lines":["e"],"id":58},{"start":{"row":37,"column":21},"end":{"row":37,"column":22},"action":"remove","lines":["m"]},{"start":{"row":37,"column":20},"end":{"row":37,"column":21},"action":"remove","lines":["a"]},{"start":{"row":37,"column":19},"end":{"row":37,"column":20},"action":"remove","lines":["N"]},{"start":{"row":37,"column":18},"end":{"row":37,"column":19},"action":"remove","lines":["t"]},{"start":{"row":37,"column":17},"end":{"row":37,"column":18},"action":"remove","lines":["s"]},{"start":{"row":37,"column":16},"end":{"row":37,"column":17},"action":"remove","lines":["r"]},{"start":{"row":37,"column":15},"end":{"row":37,"column":16},"action":"remove","lines":["i"]},{"start":{"row":37,"column":14},"end":{"row":37,"column":15},"action":"remove","lines":["f"]}],[{"start":{"row":37,"column":14},"end":{"row":37,"column":15},"action":"insert","lines":["n"],"id":59},{"start":{"row":37,"column":15},"end":{"row":37,"column":16},"action":"insert","lines":["a"]},{"start":{"row":37,"column":16},"end":{"row":37,"column":17},"action":"insert","lines":["m"]},{"start":{"row":37,"column":17},"end":{"row":37,"column":18},"action":"insert","lines":["e"]}],[{"start":{"row":38,"column":7},"end":{"row":38,"column":16},"action":"remove","lines":["last_name"],"id":60}],[{"start":{"row":38,"column":7},"end":{"row":38,"column":8},"action":"insert","lines":["c"],"id":61},{"start":{"row":38,"column":8},"end":{"row":38,"column":9},"action":"insert","lines":["c"]}],[{"start":{"row":38,"column":12},"end":{"row":38,"column":20},"action":"remove","lines":["lastName"],"id":62}],[{"start":{"row":38,"column":12},"end":{"row":38,"column":13},"action":"insert","lines":["c"],"id":63},{"start":{"row":38,"column":13},"end":{"row":38,"column":14},"action":"insert","lines":["c"]}],[{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"remove","lines":["l"],"id":64},{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"remove","lines":["i"]},{"start":{"row":39,"column":9},"end":{"row":39,"column":10},"action":"remove","lines":["a"]},{"start":{"row":39,"column":8},"end":{"row":39,"column":9},"action":"remove","lines":["m"]},{"start":{"row":39,"column":7},"end":{"row":39,"column":8},"action":"remove","lines":["e"]}],[{"start":{"row":39,"column":7},"end":{"row":39,"column":8},"action":"insert","lines":["p"],"id":65},{"start":{"row":39,"column":8},"end":{"row":39,"column":9},"action":"insert","lines":["h"]},{"start":{"row":39,"column":9},"end":{"row":39,"column":10},"action":"insert","lines":["o"]},{"start":{"row":39,"column":10},"end":{"row":39,"column":11},"action":"insert","lines":["n"]},{"start":{"row":39,"column":11},"end":{"row":39,"column":12},"action":"insert","lines":["e"]},{"start":{"row":39,"column":12},"end":{"row":39,"column":13},"action":"insert","lines":["_"]},{"start":{"row":39,"column":13},"end":{"row":39,"column":14},"action":"insert","lines":["n"]},{"start":{"row":39,"column":14},"end":{"row":39,"column":15},"action":"insert","lines":["u"]},{"start":{"row":39,"column":15},"end":{"row":39,"column":16},"action":"insert","lines":["m"]}],[{"start":{"row":39,"column":23},"end":{"row":39,"column":24},"action":"remove","lines":["l"],"id":66},{"start":{"row":39,"column":22},"end":{"row":39,"column":23},"action":"remove","lines":["i"]},{"start":{"row":39,"column":21},"end":{"row":39,"column":22},"action":"remove","lines":["a"]},{"start":{"row":39,"column":20},"end":{"row":39,"column":21},"action":"remove","lines":["m"]},{"start":{"row":39,"column":19},"end":{"row":39,"column":20},"action":"remove","lines":["e"]}],[{"start":{"row":39,"column":19},"end":{"row":39,"column":20},"action":"insert","lines":["p"],"id":67},{"start":{"row":39,"column":20},"end":{"row":39,"column":21},"action":"insert","lines":["h"]},{"start":{"row":39,"column":21},"end":{"row":39,"column":22},"action":"insert","lines":["o"]},{"start":{"row":39,"column":22},"end":{"row":39,"column":23},"action":"insert","lines":["n"]},{"start":{"row":39,"column":23},"end":{"row":39,"column":24},"action":"insert","lines":["e"]},{"start":{"row":39,"column":24},"end":{"row":39,"column":25},"action":"insert","lines":[","]}],[{"start":{"row":39,"column":25},"end":{"row":40,"column":0},"action":"insert","lines":["",""],"id":68},{"start":{"row":40,"column":0},"end":{"row":40,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":40,"column":6},"end":{"row":40,"column":8},"action":"insert","lines":["\"\""],"id":69}],[{"start":{"row":40,"column":7},"end":{"row":40,"column":8},"action":"insert","lines":["a"],"id":70},{"start":{"row":40,"column":8},"end":{"row":40,"column":9},"action":"insert","lines":["d"]},{"start":{"row":40,"column":9},"end":{"row":40,"column":10},"action":"insert","lines":["r"]},{"start":{"row":40,"column":10},"end":{"row":40,"column":11},"action":"insert","lines":["e"]},{"start":{"row":40,"column":11},"end":{"row":40,"column":12},"action":"insert","lines":["s"]},{"start":{"row":40,"column":12},"end":{"row":40,"column":13},"action":"insert","lines":["s"]}],[{"start":{"row":40,"column":14},"end":{"row":40,"column":15},"action":"insert","lines":[":"],"id":71}],[{"start":{"row":40,"column":15},"end":{"row":40,"column":16},"action":"insert","lines":[" "],"id":72},{"start":{"row":40,"column":16},"end":{"row":40,"column":17},"action":"insert","lines":["a"]},{"start":{"row":40,"column":17},"end":{"row":40,"column":18},"action":"insert","lines":["d"]},{"start":{"row":40,"column":18},"end":{"row":40,"column":19},"action":"insert","lines":["r"]},{"start":{"row":40,"column":19},"end":{"row":40,"column":20},"action":"insert","lines":["e"]},{"start":{"row":40,"column":20},"end":{"row":40,"column":21},"action":"insert","lines":["s"]},{"start":{"row":40,"column":21},"end":{"row":40,"column":22},"action":"insert","lines":["s"]}],[{"start":{"row":40,"column":22},"end":{"row":40,"column":23},"action":"insert","lines":[","],"id":73}],[{"start":{"row":40,"column":23},"end":{"row":41,"column":0},"action":"insert","lines":["",""],"id":74},{"start":{"row":41,"column":0},"end":{"row":41,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":41,"column":6},"end":{"row":41,"column":8},"action":"insert","lines":["\"\""],"id":75}],[{"start":{"row":41,"column":7},"end":{"row":41,"column":8},"action":"insert","lines":["d"],"id":76},{"start":{"row":41,"column":8},"end":{"row":41,"column":9},"action":"insert","lines":["o"]},{"start":{"row":41,"column":9},"end":{"row":41,"column":10},"action":"insert","lines":["n"]},{"start":{"row":41,"column":10},"end":{"row":41,"column":11},"action":"insert","lines":["a"]},{"start":{"row":41,"column":11},"end":{"row":41,"column":12},"action":"insert","lines":["t"]},{"start":{"row":41,"column":12},"end":{"row":41,"column":13},"action":"insert","lines":["i"]},{"start":{"row":41,"column":13},"end":{"row":41,"column":14},"action":"insert","lines":["o"]},{"start":{"row":41,"column":14},"end":{"row":41,"column":15},"action":"insert","lines":["n"]}],[{"start":{"row":41,"column":16},"end":{"row":41,"column":17},"action":"insert","lines":[":"],"id":77},{"start":{"row":41,"column":17},"end":{"row":41,"column":18},"action":"insert","lines":["d"]},{"start":{"row":41,"column":18},"end":{"row":41,"column":19},"action":"insert","lines":["o"]},{"start":{"row":41,"column":19},"end":{"row":41,"column":20},"action":"insert","lines":["n"]},{"start":{"row":41,"column":20},"end":{"row":41,"column":21},"action":"insert","lines":["a"]},{"start":{"row":41,"column":21},"end":{"row":41,"column":22},"action":"insert","lines":["t"]},{"start":{"row":41,"column":22},"end":{"row":41,"column":23},"action":"insert","lines":["i"]},{"start":{"row":41,"column":23},"end":{"row":41,"column":24},"action":"insert","lines":["o"]},{"start":{"row":41,"column":24},"end":{"row":41,"column":25},"action":"insert","lines":["n"]}],[{"start":{"row":13,"column":0},"end":{"row":24,"column":3},"action":"remove","lines":["                <tr>","                    <td>${partner.num_partner}</td>","                    <td>${partner.name}</td>","                    <td>${partner.cc}</td>","                    <td>${partner.phone_num}</td>","                    <td>${partner.adress}</td>","                    <td>${partner.donation}</td>","                </tr>","            ","        ","    }","  }"],"id":78},{"start":{"row":12,"column":0},"end":{"row":13,"column":0},"action":"remove","lines":["",""]},{"start":{"row":11,"column":37},"end":{"row":12,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":33,"column":1},"end":{"row":34,"column":0},"action":"insert","lines":["",""],"id":79},{"start":{"row":34,"column":0},"end":{"row":34,"column":1},"action":"insert","lines":["}"]}],[{"start":{"row":0,"column":0},"end":{"row":0,"column":30},"action":"remove","lines":["const faker = require('faker')"],"id":80},{"start":{"row":0,"column":0},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":26,"column":23},"end":{"row":27,"column":0},"action":"insert","lines":["",""],"id":81},{"start":{"row":27,"column":0},"end":{"row":27,"column":6},"action":"insert","lines":["      "]}],[{"start":{"row":27,"column":6},"end":{"row":27,"column":25},"action":"insert","lines":["\"num_partner\": num,"],"id":82}],[{"start":{"row":22,"column":0},"end":{"row":22,"column":25},"action":"remove","lines":["      \"num_partner\": num,"],"id":83},{"start":{"row":21,"column":16},"end":{"row":22,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":74,"scrollleft":0,"selection":{"start":{"row":21,"column":16},"end":{"row":21,"column":16},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":3,"state":"start","mode":"ace/mode/javascript"}},"timestamp":1607898802594,"hash":"caad39270f815a7975d8d3fed1a6e7c6db0301fc"}