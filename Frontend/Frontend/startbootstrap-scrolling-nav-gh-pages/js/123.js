let viewop_phone = document.getElementById("opp-fone");
viewop_phone.onclick = viewop_phone_edit;

function viewop_phone_edit() {
    alert("Burros")
}


function oppedit() {
    alert("Sucesso")
    let id = localStorage.idopp;
    let data = {};


    data.adress = document.getElementById("viewop-adress").value;
    data.phone_number = document.getElementById("viewop-phone").value;
    data.pay_per_hour = document.getElementById("viewop-salary").value;
    data.id_operational = document.getElementById("view-id-opp").value;
    data.speciality = document.getElementById("viewop-function").value;
    data.operational_type = data.operational_type.value;
    data.name = document.getElementById("viewop-name").value;
    console.log(data);

    /* if (data.phone_number.length !== 9 || data.adress.length < 3) {

     }
     else {
         if (data.pay_per_hour.length === 0) {
             alert("Por favor preencha o valor do salário");
         }
        // else {*/

    fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//operationals/` + id, {
        headers: { 'Content-Type': 'application/json' },
        method: 'PUT',
        body: JSON.stringify(data)
    }).then(function(response) {
        if (!response.ok) {
            console.log(response.status); //=> number 100â€“599
            console.log(response.statusText); //=> String
            console.log(response.headers); //=> Headers
            console.log(response.url); //=> String
        }
    });
    alert("Alterações gravadas com sucesso");
}