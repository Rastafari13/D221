//EDITAR PASSWORD CENTR//
let viewcen_ps = document.getElementById("viewcen-edit-ps");
viewcen_ps.addEventListener("click", function() {
    document.getElementById("viewcen-ps").disabled = false;
});


//EDITAR MORADA CENTR//
let viewcen_adress = document.getElementById("viewcen-edit-adress");
viewcen_adress.addEventListener("click", function() {
    document.getElementById("viewcen-adress").disabled = false;
});

//EDITAR TELEFONE CENTR//
let viewcen_phone = document.getElementById("viewcen-edit-phone");
viewcen_phone.addEventListener("click", function() {
    document.getElementById("viewcen-phone").disabled = false;
});

//EDITAR ORDENADO CENTR//
let viewcen_salary = document.getElementById("viewcen-edit-salary");
viewcen_salary.addEventListener("click", function() {
    document.getElementById("viewcen-salary").disabled = false;
});

//EDITAR EMAIL CENTR //
let viewcen_email = document.getElementById("viewcen-edit-email");
viewcen_email.addEventListener("click", function() {
    document.getElementById("viewcen-email").disabled = false;
});

window.onload =
    async() => {
        let id = localStorage.idcent;
        const response = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/centralists/` + id)
        const centralist = await response.json()

        for (const cent of centralist) {
            let id = cent.id_centralist;
            let name = cent.name;
            let cc = cent.cc;
            let phone = cent.phone_num;
            let entryData = cent.entry_date;
            let adress = cent.adress;
            let functio = "Centralista";
            let birth = cent.date_birth;
            let salary = cent.pay_per_hour;
            

            let id_login = cent.id_login;
            localStorage.setItem("idlogin", id_login);
            const response1 = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/login/` + id_login)
            const login = await response1.json()
            for (const log of login) {
                let ps = log.password;
                let email = log.email;
                document.getElementById("viewcen-ps").value = ps;
                document.getElementById("viewcen-email").value = email;
            }


            let age = `${birth.substr(0,10 )}`;
            let date = `${entryData.substr(0,10 )}`;

            document.getElementById("view-id-cen").value = id;
            document.getElementById("viewcen-name").value = name;
            document.getElementById("viewcen-cc").value = cc;
            document.getElementById("viewcen-phone").value = phone;
            document.getElementById("viewcen-adress").value = adress;
            document.getElementById("viewcen-function").value = functio;
            document.getElementById("viewcen-age").value = age;
            document.getElementById("viewcen-salary").value = salary;
            document.getElementById("viewcen-entry").value = date;
        }
    }


 document.getElementById("cen-save").onclick = function(e) {
    cenedit();
}




async function cenedit() {
    let id = localStorage.idcent;
    let data = {};
    let data1 = {};


    let idlogin = localStorage.idlogin;

    data.id_centralist = document.getElementById("view-id-cen").value;
    data.adress = document.getElementById("viewcen-adress").value;
    data.phone_num = document.getElementById("viewcen-phone").value;
    data.pay_per_hour = document.getElementById("viewcen-salary").value;
    
    data1.email = document.getElementById("viewcen-email").value;
    data1.password = document.getElementById("viewcen-ps").value;
    data1.id_login = idlogin;


    if (data.phone_num.length !== 9 || data.adress.length < 3) {}
    else {
        let save = document.getElementById("cen-save");
        save.type = "button";
        if (data.pay_per_hour.length === 0) {
            swal({
                title: "Por favor preencha o valor do salario",
                icon: "info",
            });
        }
        else {
            save.type = "button";
            fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/centralists/` + id, {
                headers: { 'Content-Type': 'application/json' },
                method: 'PUT',
                body: JSON.stringify(data)
            }).then(function(response) {
                if (!response.ok) {
                    console.log(response.status); //=> number 100â€“599
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
                    fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/login/` + idlogin, {
                        headers: { 'Content-Type': 'application/json' },
                        method: 'PUT',
                        body: JSON.stringify(data1)
                    }).then(function(response) {
                        if (!response.ok) {
                            console.log(response.status); //=> number 100â€“599
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
                                    title: "Alterações gravadas com sucesso",
                                    icon: "success",
                                })
                                .then(() => {
                                    window.location.replace("view-centralist.html");
                                });
                        };
                    }).then(function(result) {
                        console.log(result);
                    }).catch(function(err) {
                        console.error(err);
                    });
                    /*  swal({
                        title: "Alterações gravadas com sucesso",
                        icon: "success",
                    })
                    .then(() => {
                    window.location.replace("view-opperation.html");
                });*/
                };
            }).then(function(result) {
                console.log(result);
            }).catch(function(err) {
                console.error(err);
            });

        }
    }
}
