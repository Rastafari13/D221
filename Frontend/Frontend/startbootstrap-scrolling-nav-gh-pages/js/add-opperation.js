let addop = document.getElementById("addop-add");

addop.addEventListener("click", function() {

    let data = {};
    data.email = document.getElementById("addop-email").value;
    data.password = document.getElementById("addop-ps").value;
    data.profile = "Operacional";

    data.name = document.getElementById("addop-name").value;
    data.birth_date = document.getElementById("addop-birth").value;
    data.adress = document.getElementById("addop-adress").value;
    data.entry_date = document.getElementById("adopp-entry-date").value;
    data.cc = document.getElementById("addop-cc").value;
    data.phone_number = document.getElementById("addop-phone").value;
    data.pay_per_hour = document.getElementById("addop-salary").value;
    data.operational_type = "Profissional";
    data.speciality = document.getElementById("addop-function").value;

    if (data.email.length === 0 ||
        data.password.length < 6 ||
        data.profile.length === 0 ||
        data.name.length === 0 ||
        data.birth_date.length === 0 ||
        data.adress.length === 0 ||
        data.entry_date.length === 0 ||
        data.cc.length !== 8 ||
        data.phone_number.length !== 9 ||
        data.pay_per_hour.length === 0 ||
        data.operational_type.length === 0 ||
        data.speciality.length === 0) {

    }
    else {
        addop.type = "button";
        if (data.speciality === "Bombeiro") {
            console.log(JSON.stringify(data));
            fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/operationals/", {
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
                        title: "Operacional adicionando com sucesso",
                        icon: "success",
                    });
                    document.getElementById("add-opperation").reset();
                }
            });
        }
        else {
            data.profile = "Centralista";
            fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/centralists/", {
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
                        title: "Centralista adicionando com sucesso",
                        icon: "success",
                    });
                    document.getElementById("add-opperation").reset();
                }
            });

        }
    }

});



/*if (response.status === 409) {
                alert("Duplicated Email");
            }
            else {
            throw Error(response.statusText);
            //  }
        }
        else {
            document.getElementById("add-opperation").reset(); //limpeza dos dados do form
            alert("Sócio adicionado com sucesso");

        }
    }).then(function(result) {
        console.log(result);
    }).catch(function(err) {
        //alert("Por favor preencha todos os dados de forma correta");
        console.error(err);
    });*/
