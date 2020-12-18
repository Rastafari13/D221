   document.getElementById("addas-add").onclick = function(e) {
       save_assoc();
   }

   function save_assoc() {

       let data = {};

       // var d = new Date();
       // let dataFormatada = `${d.getDate().toString().padStart(2, '0')}/${(d.getMonth() + 1).toString().padStart(2, '0')}/${d.getFullYear()}`;


       data.num_partner = "s" + document.getElementById("addas-id").value;
       data.name = document.getElementById("addas-name").value;
       data.registration_date = document.getElementById("addas-date").value;
       data.date_bith = document.getElementById("addas-age").value;
       data.mail = document.getElementById("addas-email").value;
       data.phone_num = document.getElementById("addas-phone").value;
       data.cc = document.getElementById("addas-cc").value;
       data.adress = document.getElementById("addas-adress").value;
       data.donation = document.getElementById("addas-quota").value;
       data.id_station = "1234";
       console.log(data);
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
               /*if (response.status === 409) {
                   alert("Duplicated Email");
               }
               else {*/
                   throw Error(response.statusText);
             //  }
           }
           else {
               document.getElementById("add-associate").reset(); //limpeza dos dados do form
               alert("Sócio adicionado com sucesso");
               window.location.replace("add-associate.html");
           }
       }).then(function(result) {
           console.log(result);
       }).catch(function(err) {
           //alert("Por favor preencha todos os dados de forma correta");
           console.error(err);
       });
 //  }
   }
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
   