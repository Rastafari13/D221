/*(function($) {
  "use strict";
  // Start of use strict
  $(document).ready(function() {
$(".select2").select2();
})
})(jQuery);*/
/*let addocc = document.getElementById("addoc-add");

addocc.addEventListener("click", function() {

 let data1 = {};

 let descrition = document.getElementById("addoc-descrition").value;
 let type = document.getElementById("addoc-firetype").value;
 let content = type + "/n" + descrition;

 data1.content = content;
 data1.phone_number = document.getElementById("addoc-phone").value;
 data1.date = document.getElementById("addoc-hour").value;
 data1.adress = document.getElementById("addoc-adress").value;


 //data.donation = document.getElementById("addas-quota").value;
 //data.id_station = "1234";
 //console.log(data.registration_date);
 /*if (data.name.length === 0 ||
  data.registration_date.length === 0 ||
  data.date_bith.length === 0 ||
  data.mail.length === 0 ||
  data.phone_num.length !== 9 ||
  data.cc.length !== 8 ||
  data.adress === 0 ||
  data.donation.length === 0
 ) {

 }
 else {*/


/*addocc.type = "button";
 fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//requests/", {
  headers: { 'Content-Type': 'application/json' },
  method: 'POST',
  body: JSON.stringify(data1)
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
   // localStorage.setItem("idreq1", result.insertid_request);
   //document.getElementById("add-occo").reset();
  }
 });

 let data = {};
 let id = localStorage.idreq3;
 //alert(id);
 data.id_request = id;
 data.typology = "Urgente";
 data.difficulty_level = document.getElementById("addoc-level").value;

 fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//requeststype/", {
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
   document.getElementById("add-occo").reset();
  }
 });
 // }
});*/


let addocc = document.getElementById("addoc-add");

addocc.addEventListener("click", function() {

 let data = {};

 let descrition = document.getElementById("addoc-descrition").value;
 let type = document.getElementById("addoc-firetype").value;
 let content = type + " " + descrition;

 data.content = content;
 data.phone_number = document.getElementById("addoc-phone").value;
 data.date = document.getElementById("addoc-hour").value;
 data.adress = document.getElementById("addoc-adress").value;
 data.typology = "Urgente";
 data.difficulty_level = document.getElementById("addoc-level").value;
 data.verifycation = "null";

 if (data.difficulty_level.length === 0 ||
  data.adress.length === 0 ||
  data.phone_number.length !== 9 ||
  type.length === 0 ||
  data.date.length === 0) {

 }
 else {
  addocc.type = "button";
  fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//requeststype/", {
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
     title: "Ocorrência adicionada com sucesso",
     //text: "",
     icon: "success",
     //buttons: false,
     //timer: 2000
    });
    document.getElementById("add-occo").reset();
   }
  });
 }
});
