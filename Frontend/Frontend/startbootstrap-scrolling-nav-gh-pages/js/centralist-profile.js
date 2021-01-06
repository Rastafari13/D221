//EDITAR PALAVRA PASSE CENTRALISTA//
let cent_ps = document.getElementById("cent-edit-ps");
cent_ps.addEventListener ("click", function () {
    document.getElementById("pc-password").disabled = false;
});

//EDITAR MORADA CENTRALISTA//
let cent_adress = document.getElementById("cent-edit-adress");
cent_adress.addEventListener("click", function (){
     document.getElementById("pc-adress").disabled = false;
});

//EDITAR TELEFONE CENTRALISTA//
let cent_phone = document.getElementById("cent-edit-phone");
cent_phone.addEventListener("click", function(){
    document.getElementById("pc-phone").disabled = false;
});

//EDITAR EMAIL CENTRALISTA//
let cent_email = document.getElementById("cent-edit-email");
cent_email.addEventListener("click",function(){
     document.getElementById("pc-email").disabled = false;
});


window.onload =
    async() => {
        let id = "4";
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
                document.getElementById("pc-password").value = ps;
                document.getElementById("pc-email").value = email;
            }


            let age = `${birth.substr(0,10 )}`;
          //  let date = `${entryData.substr(0,10 )}`;

            document.getElementById("span-id").value = id;
            document.getElementById("cent-prof-title").value = name;
            document.getElementById("pc-cc").value = cc;
            document.getElementById("pc-phone").value = phone;
            document.getElementById("pc-adress").value = adress;
            document.getElementById("pc-job").value = functio;
            document.getElementById("pc-date").value = age;
           // document.getElementById("viewcen-salary").value = salary;
           // document.getElementById("viewcen-entry").value = date;
        }
    }


 document.getElementById("pc-save").onclick = function(e) {
    cenedit();
}




async function cenedit() {
    let id = "4";
    let data = {};
    let data1 = {};


    let idlogin = localStorage.idlogin;

    data.id_centralist = document.getElementById("span-id").value;
    data.adress = document.getElementById("pc-adress").value;
    data.phone_num = document.getElementById("pc-phone").value;
   // data.pay_per_hour = document.getElementById("").value;
   data.pay_per_hour="10";
    
    data1.email = document.getElementById("pc-email").value;
    data1.password = document.getElementById("pc-password").value;
    data1.id_login = idlogin;


    if (data.phone_num.length !== 9 || data.adress.length < 3) {}
    else {
        let save = document.getElementById("pc-save");
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
                                    window.location.replace("centralist-profile.html");
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


