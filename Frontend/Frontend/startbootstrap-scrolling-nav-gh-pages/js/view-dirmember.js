//EDITAR PASSWORD DIRETOR//
let dir_ps = document.getElementById("viewdir-edit-ps");
dir_ps.addEventListener("click", function() {
    document.getElementById("viewdir-ps").disabled = false;
});


//EDITAR EMAIL DIRETOR//
let dir_email = document.getElementById("viewdir-edit-email");
dir_email.addEventListener("click", function() {
    document.getElementById("viewdir-email").disabled = false;
});


//EDITAR MORADA DIRETOR//
let dir_adress = document.getElementById("viewdir-edit-adress");
dir_adress.addEventListener("click", function() {
    document.getElementById("viewdir-adress").disabled = false;
});

//EDITAR TELEFONE DIRETOR//
let dir_phone = document.getElementById("viewdir-edit-phone");
dir_phone.addEventListener("click", function() {
    document.getElementById("viewdir-phone").disabled = false;
});



window.onload =
    async() => {
        let id = localStorage.iddir;
        const response = await fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/managements/" + id);
        const dirs = await response.json();

        for (const dir of dirs) {
            let name = dir.name;
            let num = dir.id_management;
            let cc = dir.cc;
            let date_birth = dir.date_birth;
            let phone = dir.phone_number;
            let adress = dir.adress;


            let id_login = dir.id_login;
            localStorage.setItem("idlogin", id_login);
            const response1 = await fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/login/` + id_login)
            const login = await response1.json()
            for (const log of login) {
                let ps = log.password;
                let email = log.email;
                document.getElementById("viewdir-ps").value = ps;
                document.getElementById("viewdir-email").value = email;
            }

            let age = `${date_birth.substr(0,10 )}`;

            document.getElementById("viewdir-name").value = name;
            document.getElementById("viewdir-cc").value = cc;
            document.getElementById("viewdir-id").value = num;
            document.getElementById("viewdir-phone").value = phone;
            document.getElementById("viewdir-adress").value = adress;
            document.getElementById("viewdir-age").value = age;
        }
    };

document.getElementById("dir-save").onclick = function(e) {
    dir_edit();
};

async function dir_edit() {
    let id = localStorage.iddir;
    let data = {};
    let data1 = {};

    let idlogin = localStorage.idlogin;

    data.id_management = document.getElementById("viewdir-id").value;
    data.adress = document.getElementById("viewdir-adress").value;
    data.phone_number = document.getElementById("viewdir-phone").value;


    data1.email = document.getElementById("viewdir-email").value;
    data1.password = document.getElementById("viewdir-ps").value;
    data1.id_login = idlogin;

    let save = document.getElementById("dir-save");
    save.type = "button";
    fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//managements/" + id, {
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
            fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//login/` + idlogin, {
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
                            window.location.replace("view-dirmember.html");
                        });
                };
            }).then(function(result) {
                console.log(result);
            }).catch(function(err) {
                console.error(err);
            });
            /* swal({
                     title: "Alterações gravadas com sucesso",
                     icon: "success",
                 })
                 .then(() => {
                     window.location.replace("view-dirmember.html");
                 });*/
        };
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        console.error(err);
    });

};
