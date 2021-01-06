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

        adddir.type = "button";
        console.log(JSON.stringify(data));
        fetch("https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com//managements/", {
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
                    title: "Diretor adicionando com sucesso",
                    icon: "success",
                });
                document.getElementById("add-dir").reset();
            }
        });
    
});