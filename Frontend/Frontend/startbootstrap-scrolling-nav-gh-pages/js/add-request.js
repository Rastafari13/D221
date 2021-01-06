let addreq = document.getElementById("request-submit");

addreq.addEventListener("click", function() {

    let data = {};
    let a  = document.getElementById("request-type").value;
    let b = document.getElementById("request-descrition").value;
    data.content = a + b;
    data.name = document.getElementById("request-name").value;
    data.mail = document.getElementById("request-email").value;
    data.phone_number = document.getElementById("request-phone").value;
    data.date = document.getElementById("request-date").value;
    data.adress = document.getElementById("request-adress").value;
    data.verifycation = "null";
    data.typology = "Não urgente";
    data.difficulty_level = "1";

    //data.hour = document.getElementById("request-hour").value;

    if (data.content.length === 0 ||
        data.name.length === 0 ||
        data.mail.length === 0 ||
        data.adress.length === 0 ||
        data.phone_number.length !== 9 ||
        data.typology.length === 0 ||
        data.date.length === 0) {

    }
    else {
        addreq.type = "button";
        fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com///requeststype/", {
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
                    title: "Pedido submetido com sucesso",
                    //text: "",
                    icon: "success",
                    //buttons: false,
                    //timer: 2000
                });
                document.getElementById("add-req").reset();
            }
        });
    }
});
