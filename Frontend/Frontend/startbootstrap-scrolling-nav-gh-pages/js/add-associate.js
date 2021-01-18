let filtroTeclas = function(event) {
  return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
}

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
  if (data.name.length < 2 ||
   data.registration_date.length !== 10 ||
   data.date_bith.length !== 10 ||
   data.mail.length < 10 ||
   data.mail.indexOf('@') === -1 ||
   //data.mail.indexOf(".") === -1 ||
   //data.mail.type
   data.phone_num.length !== 9 ||
   data.cc.length !== 8 ||
   data.adress.length < 5 ||
   data.donation.length === 0
  ) {}
  else {
   addassoc.type = "button";
   let today = new Date().toISOString().slice(0, 10);

   if (today < data.date_bith) {

    swal({
     title: "Data de Nascimento inválida",
     //text: "",
     icon: "error",
     //buttons: false,
     //timer: 2000
    });
   }
   else {
    if (today < data.registration_date) {

     swal({
      title: "Data de Registo inválida",
      //text: "",
      icon: "error",
      //buttons: false,
      //timer: 2000
     });
    }
    else {
     if (data.date_bith > data.registration_date) {

      swal({
       title: "Data de Registo anterior ao nascimento",
       //text: "",
       icon: "error",
       //buttons: false,
       //timer: 2000
      });
     }
     else {

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
        if (response.status === 409) {
         swal({
          title: "Já existe um sócio com este cartão de cidadão",
          icon: "error",
         });
        }
        else {
         swal({
          title: "Erro, por favor tente novamente",
          icon: "error",
         });
        }
        throw Error(response.statusText);
       }
       else {
        swal({
          title: "Sócio adicionado com sucesso",
          icon: "success",
         })
         .then(() => {
          window.location.replace("add-associate.html");
         });
       }
      });
     }
    }
   }
  }
 });
 