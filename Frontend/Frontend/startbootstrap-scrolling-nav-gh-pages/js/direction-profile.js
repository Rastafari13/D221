let filtroTeclas = function(event) {
  return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
}

//EDITAR PALAVRA PASSE DIRETOR//
let dir_ps = document.getElementById("dir-edit-ps");
dir_ps.addEventListener("click", function() {
    Swal.fire({
        title: 'Alterar a palavra-passe ',
        html: `<input type="password" id="ps" class="swal2-input" maxlength="45" placeholder="Password">
               <input type="password" id="password" class="swal2-input" maxlength="45" placeholder="Confirmar Password">`,
        confirmButtonText: 'Confirmar',
        cancelButtonText: "Cancelar",
        showCancelButton: true,
        focusConfirm: false,
        preConfirm: () => {
            const ps = Swal.getPopup().querySelector('#ps').value
            const password = Swal.getPopup().querySelector('#password').value
            if (!ps || !password) {
                Swal.showValidationMessage(`Preencha ambos os campos`)
            }
            else {
                if (ps.length < 6) {
                    Swal.showValidationMessage(`Password não tem caracteres suficientes`)
                }
                else {
                    if (ps === password) {
                        return { ps: ps, password: password }

                    }
                    else {
                        Swal.showValidationMessage(`As palavras passes não correspondem `)
                    }
                }
            }
        }
    }).then((result) => {


        let idlogin = localStorage.idlogin;
        let data = {};
        data.password = result.value.ps;
        data.id_login = idlogin;

        fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/updatePassword/` + idlogin, {
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
                swal({
                        title: "Palavra Passe alterada com sucesso!",
                        icon: "success",
                    })
                    .then(() => {
                        document.getElementById("pd-password").value = result.value.ps;
                    });
            };
        }).then(function(result) {
            console.log(result);
        }).catch(function(err) {
            console.error(err);
        });
    });

});

//EDITAR MORADA DIRETOR//
let dir_adress = document.getElementById("dir-edit-adress");
dir_adress.addEventListener("click", function() {
    document.getElementById("pd-adress").disabled = false;
});

//EDITAR TELEFONE DIRETOR//
let dir_phone = document.getElementById("dir-edit-phone");
dir_phone.addEventListener("click", function() {
    document.getElementById("pd-phone").disabled = false;
});
//EDITAR EMAIL DIRETOR//
let dir_email = document.getElementById("dir-edit-email");
dir_email.addEventListener("click", function() {
    document.getElementById("pd-email").disabled = false;
});

window.onload =
    async() => {
        let id = "1";
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

                localStorage.setItem("email", email);

                document.getElementById("pd-password").value = ps;
                document.getElementById("pd-email").value = email;
            }

            let age = `${date_birth.substr(0,10 )}`;

            document.getElementById("title-dir-prof").value = name;
            document.getElementById("pd-cc").value = cc;
            document.getElementById("span-id").value = num;
            document.getElementById("pd-phone").value = phone;
            document.getElementById("pd-adress").value = adress;
            document.getElementById("pd-date").value = age;
            
            localStorage.setItem("phone", phone);
        }
    };

document.getElementById("pd-save").onclick = function(e) {
    dir_edit();
};

async function dir_edit() {
    let id = "1";
    let data = {};
    let data1 = {};

    let idlogin = localStorage.idlogin;

    let phone = localStorage.phone;

    let email = localStorage.email;

    data.id_management = document.getElementById("span-id").value;
    data.adress = document.getElementById("pd-adress").value;
    data.phone_number = document.getElementById("pd-phone").value;


    data1.email = document.getElementById("pd-email").value;
    data1.password = document.getElementById("pd-password").value;
    data1.id_login = idlogin;

    if (data.phone_number.length !== 9 ||
        data.adress.length < 5 ||
        data1.email.length < 10 ||
        data1.email.indexOf('@') === -1 ||
        data1.password.length < 6) {

    }
    else {
        let save = document.getElementById("pd-save");
        save.type = "button";

        if (data1.email !== email) {

            fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/loginEmail/` + data1.email)
                .then(response => {
                    if (!response.ok) {
                        console.log(response.status); //=> number 100â€“599
                        console.log(response.statusText); //=> String
                        console.log(response.headers); //=> Headers
                        console.log(response.url);


                        if (data.phone_number === phone) {


                            fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/managements/` + id, {
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
                                                    window.location.replace("direction-profile.html");
                                                });
                                        };
                                    }).then(function(result) {
                                        console.log(result);
                                    }).catch(function(err) {
                                        console.error(err);
                                    });
                                };
                            })
                        }

                        else {
                            fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/managementsPhone/` + data.phone_number)
                                .then(response => {
                                    if (!response.ok) {
                                        console.log(response.status); //=> number 100â€“599
                                        console.log(response.statusText); //=> String
                                        console.log(response.headers); //=> Headers
                                        console.log(response.url);


                                        fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/managements/` + id, {
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
                                                                window.location.replace("direction-profile.html");
                                                            });
                                                    };
                                                }).then(function(result) {
                                                    console.log(result);
                                                }).catch(function(err) {
                                                    console.error(err);
                                                });
                                            };
                                        }).then(function(result) {
                                            console.log(result);
                                        }).catch(function(err) {
                                            console.error(err);
                                        });
                                    }

                                    else {
                                        swal({
                                            title: "O Telefone já se encontra registado",
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

                    else {
                        swal({
                            title: "O Email já se encontra registado",
                            icon: "error",
                        });
                    }

                }).then(function(result) {
                    console.log(result);
                }).catch(function(err) {
                    console.error(err);
                });
        }
        else
        if (data.phone_number === phone) {


            fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/managements/` + id, {
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
                                    window.location.replace("direction-profile.html");
                                });
                        };
                    }).then(function(result) {
                        console.log(result);
                    }).catch(function(err) {
                        console.error(err);
                    });
                };
            })
        }

        else {
            fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/managementsPhone/` + data.phone_number)
                .then(response => {
                    if (!response.ok) {
                        console.log(response.status); //=> number 100â€“599
                        console.log(response.statusText); //=> String
                        console.log(response.headers); //=> Headers
                        console.log(response.url);


                        fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/managements/` + id, {
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
                                                window.location.replace("direction-profile.html");
                                            });
                                    };
                                }).then(function(result) {
                                    console.log(result);
                                }).catch(function(err) {
                                    console.error(err);
                                });
                            };
                        }).then(function(result) {
                            console.log(result);
                        }).catch(function(err) {
                            console.error(err);
                        });
                    }

                    else {
                        swal({
                            title: "O Telefone já se encontra registado",
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
}
