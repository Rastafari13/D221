//EDITAR MORADA OPERACIONAL//
let viewop_adress = document.getElementById("viewop-edit-adress");
viewop_adress.onclick = viewop_adress_edit;

function viewop_adress_edit() {
    document.getElementById("viewop-adress").disabled = false;
}

//EDITAR TELEFONE OPERACIONAL//
let viewop_phone = document.getElementById("viewop-edit-phone");
viewop_phone.onclick = viewop_phone_edit;

function viewop_phone_edit() {
    document.getElementById("viewop-phone").disabled = false;
}

//EDITAR ORDENADO OPERACIONAL//
let viewop_salary = document.getElementById("viewop-edit-salary");
viewop_salary.onclick = viewop_salary_edit;

function viewop_salary_edit() {
    document.getElementById("viewop-salary").disabled = false;
}


window.onload =
    async() => {
        let id = localStorage.idopp;
        const response = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com///operationals/` + id)
        const opperation = await response.json()

        for (const opp of opperation) {
            let id = opp.id_operational;
            let name = opp.name;
            let cc = opp.cc;
            let phone = opp.phone_number;
            let entryData = opp.entry_date;
            let adress = opp.adress;
            let functio = opp.speciality;
            let ps = opp.ps; //standby
            let birth = opp.birth_date;
            let salary = opp.pay_per_hour;

            document.getElementById("view-id-opp").value = id;
            document.getElementById("viewop-name").value = name;
            document.getElementById("viewop-cc").value = cc;
            document.getElementById("viewop-phone").value = phone;
            document.getElementById("viewop-adress").value = adress;
            document.getElementById("viewop-function").value = functio;
            document.getElementById("viewop-ps").value = ps; //standby
            document.getElementById("viewop-age").value = birth;
            document.getElementById("viewop-salary").value = salary;
            document.getElementById("viewop-entry").value = entryData;
        }
    }


 document.getElementById("opp-save").onclick = function(e) {
    oppedit;
}

let v = document.getElementById("opp-save");
viewop_salary.onclick = viewop;

function viewop() {
    alert("Sucesso")
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
//}
//}
