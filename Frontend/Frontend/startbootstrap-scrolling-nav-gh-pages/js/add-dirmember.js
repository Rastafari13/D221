let filtroTeclas = function(event) {
  return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
}

let adddir = document.getElementById("adddir-add");

adddir.addEventListener("click", function() {

    let data = {};
    data.email = document.getElementById("adddir-email").value;
    data.password = document.getElementById("adddir-ps").value;
    data.profile = "Diretor";

    data.name = document.getElementById("adddir-name").value;
    data.date_birth = document.getElementById("adddir-birth").value;
    data.adress = document.getElementById("adddir-adress").value;
    data.cc = document.getElementById("adddir-cc").value;
    data.phone_number = document.getElementById("adddir-phone").value;


    if (data.email.length < 10 ||
        data.email.indexOf('@') === -1 ||
        data.password.length < 6 ||
        //data.mail.indexOf(".") === -1 ||
        //data.mail.type
        data.name.length < 2 ||
        data.date_birth.length !== 10 ||
        data.adress.length < 5 ||
        data.cc.length !== 8 ||
        data.phone_number.length !== 9
    ) {

    }
    else {
        adddir.type = "button";
        console.log(JSON.stringify(data));

        let today = new Date().toISOString().slice(0, 10);

        if (today < data.date_birth) {

            swal({
                title: "Data de Nascimento inválida",
                //text: "",
                icon: "error",
                //buttons: false,
                //timer: 2000
            });
        }
        else {

            fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/loginEmail/` + data.email)
                .then(response => {
                    if (!response.ok) {
                        console.log(response.status); //=> number 100â€“599
                        console.log(response.statusText); //=> String
                        console.log(response.headers); //=> Headers
                        console.log(response.url);

                        fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/managementsCc/` + data.cc)
                            .then(response => {
                                if (!response.ok) {
                                    console.log(response.status); //=> number 100â€“599
                                    console.log(response.statusText); //=> String
                                    console.log(response.headers); //=> Headers
                                    console.log(response.url);

                                    fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/managementsPhone/` + data.phone_number)
                                        .then(response => {
                                            if (!response.ok) {
                                                console.log(response.status); //=> number 100â€“599
                                                console.log(response.statusText); //=> String
                                                console.log(response.headers); //=> Headers
                                                console.log(response.url);

                                                fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/managements/", {
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
                                                                title: "Dados duplicados",
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
                                                                title: "Diretor adicionando com sucesso",
                                                                icon: "success",
                                                            })
                                                            .then(() => {
                                                                window.location.replace("add-dirmember.html");
                                                            });
                                                    }
                                                });
                                            }
                                            else {
                                                swal({
                                                    title: "Já existe um diretor com esse telefone",
                                                    icon: "error",
                                                });
                                            }
                                        }).then(function(result) {
                                            console.log(result);
                                        }).catch(function(err) {
                                            console.error(err);
                                        });
                                }
                                else {
                                    swal({
                                        title: "Este cartão de cidadado já se encontra registado",
                                        icon: "error",
                                    });
                                }
                            }).then(function(result) {
                                console.log(result);
                            }).catch(function(err) {
                                console.error(err);
                            });
                    }
                    else {
                        swal({
                            title: "Este email já se encontra registado",
                            icon: "error",
                        });
                    }
                }).then(function(result) {
                    console.log(result);
                }).catch(function(err) {
                    console.error(err);
                });
        }
    }

});
