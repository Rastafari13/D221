const fs = require('fs')

  $(document).ready(function() {

function generateUsers() {

  let users = []

  renderParticipants = async() => {
    const response = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/`)
    const partners = await response.json()

    for (const partner of partners) {


      let num = partner.num_partner
      let name = partner.name
      let cc = partner.cc
      let phone = partner.phone_num
      let adress = partner.adress
      let donation = partner.donation


      users.push({
        "name": name,
        "cc": cc,
        "phone_num": phone,
        "adress": adress,
        "num_partner": num,
        "donation": donation
      })
    }

    return { "data": users }
  }
}

let dataObj = generateUsers();

fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));
});
