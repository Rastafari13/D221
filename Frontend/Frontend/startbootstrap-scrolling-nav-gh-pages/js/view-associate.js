//EDITAR MORADA SÓCIO//
let assoc_adress = document.getElementById("assoc-edit-adress");
assoc_adress.onclick = assoc_adress_edit;

function assoc_adress_edit() {
    document.getElementById("viewas-adress").disabled = false;
}

//EDITAR COTA SÓCIO//
let assoc_cota = document.getElementById("assoc-edit-cota");
assoc_cota.onclick = assoc_cota_edit;

function assoc_cota_edit() {
    document.getElementById("viewas-quota").disabled = false;
}
//EDITAR TELEFONE SÓCIO//
let assoc_phone = document.getElementById("assoc-edit-phone");
assoc_phone.onclick = assoc_phone_edit;

function assoc_phone_edit() {
    document.getElementById("viewas-phone").disabled = false;
}


window.onload =
    async() => {
        let id = localStorage.id;
        const response = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/` + id)
        const partners = await response.json()

        for (const partner of partners) {

            let num = partner.num_partner;
            let name = partner.name;
            let cc = partner.cc;
            let phone = partner.phone_num;
            let adress = partner.adress;
            let donation = partner.donation;
            let date_bith = partner.date_bith;
            let registration_date = partner.registration_date;

            document.getElementById('viewas-name').value = name;
            document.getElementById('viewas-adress').value = adress;
            document.getElementById('viewas-cc').value = cc;
            document.getElementById('viewas-quota').value = donation;
            document.getElementById('viewas-id').value = num;
            document.getElementById('viewas-age').value = date_bith;
            document.getElementById('viewas-phone').value = phone;
            document.getElementById('viewas-date').value = registration_date;
        }
    }



 document.getElementById("assoc-save").onclick = function(e) {
    assoc_edit();
}

function assoc_edit() {
    let a = localStorage.id;
    let data = {};

    data.num_partner = document.getElementById("viewas-id").value;
    data.phone_num = document.getElementById("viewas-phone").value;
    data.donation = document.getElementById("viewas-quota").value;
    data.adress = document.getElementById("viewas-adress").value;
    data.data_bith = document.getElementById("viewas-age").value;
    console.log(data); //debugging para ver os dados que foram enviados
    //chamada fetch para envio dos dados para o servior via POST
    if (data.phone_num.length !== 9 || data.adress.length < 3) {

    }
    else {
        if (data.donation.length === 0) {
            alert("Por favor preencha o valor da cota");
        }
        else {
            fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//partners/` + a, {
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
                // else {

                //   alert("Alterações gravadas com sucesso");
                //  }
                /* }).then(function(result) {
                     console.log(result);
                 }).catch(function(err) {
                     alert("Submission error");
                     console.error(err);*/
            });
            alert("Alterações gravadas com sucesso");
        }
    }
}
