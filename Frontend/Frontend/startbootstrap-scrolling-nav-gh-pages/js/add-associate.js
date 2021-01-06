 let addassoc = document.getElementById("addas-add");

 addassoc.addEventListener("click", function() {

  let data = {};

  // var d = new Date();
  // let dataFormatada = `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;
  data.name = document.getElementById("addas-name").value;
  data.registration_date = document.getElementById("addas-date").value;
  data.date_bith = document.getElementById("addas-age").value;
  data.mail = document.getElementById("addas-email").value;
  data.phone_num = document.getElementById("addas-phone").value;
  data.cc = document.getElementById("addas-cc").value;
  data.adress = document.getElementById("addas-adress").value;
  data.donation = document.getElementById("addas-quota").value;
  data.id_station = "1234";
  console.log(data.registration_date);
  if (data.name.length === 0 ||
   data.registration_date.length !== 10 ||
   data.date_bith.length !== 10 ||
   data.mail.length === 0 ||
   data.mail.indexOf('@') === -1 ||
   //data.mail.indexOf(".") === -1 ||
   //data.mail.type
   data.phone_num.length !== 9 ||
   data.cc.length !== 8 ||
   data.adress.length < 5 ||
   data.donation.length === 0
  ) {
  }
  else {
   addassoc.type = "button";
   fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/", {
    headers: { 'Content-Type': 'application/json' },
    method: 'POST',
    body: JSON.stringify(data)
   }).then(function(response) {

    if (!response.ok) {
     console.log(response.status); //=> number 100–599
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
     swal({
      title: "Sócio adicionando com sucesso",
     //text: "",
      icon: "success",
      //buttons: false,
      //timer: 2000
     });
     document.getElementById("add-associate").reset();
    }
   });
  }
 });

 // }
 /*     const new_associate = document.getElementById("add-associate")

      new_associate.addEventListener("submit", async(event) => {
              event.preventDefault()
              const txtName = document.getElementById("addas-name").value;
              const txtAdress = document.getElementById("addas-adress").value;
              const txtCC = document.getElementById("addas-cc").value;
              const txtCota = document.getElementById("addas-quota").value;
              const txtID = document.getElementById("addas-id").value;
              const txtAge = document.getElementById("addas-age").value;
              const txtPhone = document.getElementById("addas-phone").value;
              const txtDate = document.getElementById("addas-date").value;
              const txtEmail = document.getElementById("addas-email").value;
              const txtA = 1234;
              const txtData = new Date();

                  // Verifica flag isNew para saber se se trata de uma adição ou de um atualização dos dados de um orador

                  // Adiciona Orador
                  let response = await fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/partners/", {
                      /* headers: {
                           "Content-Type": "application/x-www-form-urlencoded"
                       },*/
 /*      method: "POST",
                             body: `namePartner=${txtName}
                             &adressPartner=${txtAdress}
                             &registrationDate=${txtData}
                             &ccPartner=${txtCC}
                             &donationPartner=${txtCota}
                             &idPartner=${txtID}
                             &dateBirth=${txtAge}
                             &registrationDate=${txtDate}
                             &phoneNum=${txtPhone}
                             &email=${txtEmail}
                             &idStation=${txtA}&active=1`
                         })
                         alert("SUCESSO");
                     });
             });
 }*/
 