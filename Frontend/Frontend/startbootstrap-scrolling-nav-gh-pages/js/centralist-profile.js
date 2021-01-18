let filtroTeclas = function(event) {
  return ((event.charCode >= 48 && event.charCode <= 57) || (event.keyCode == 45 || event.charCode == 46))
}

//EDITAR PALAVRA PASSE CENTRALISTA//
let cent_ps = document.getElementById("cent-edit-ps");
cent_ps.addEventListener("click", function() {
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
                        document.getElementById("pc-password").value = result.value.ps;
                    });
            };
        }).then(function(result) {
            console.log(result);
        }).catch(function(err) {
            console.error(err);
        });
    });
});

//EDITAR MORADA CENTRALISTA//
let cent_adress = document.getElementById("cent-edit-adress");
cent_adress.addEventListener("click", function() {
    document.getElementById("pc-adress").disabled = false;
});

//EDITAR TELEFONE CENTRALISTA//
let cent_phone = document.getElementById("cent-edit-phone");
cent_phone.addEventListener("click", function() {
    document.getElementById("pc-phone").disabled = false;
});

//EDITAR EMAIL CENTRALISTA//
let cent_email = document.getElementById("cent-edit-email");
cent_email.addEventListener("click", function() {
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

                localStorage.setItem("email", email);
            }

            let age = `${birth.substr(0,10 )}`;
            let date = `${entryData.substr(0,10 )}`;

            document.getElementById("span-id").value = id;
            document.getElementById("cent-prof-title").value = name;
            document.getElementById("pc-cc").value = cc;
            document.getElementById("pc-phone").value = phone;
            document.getElementById("pc-adress").value = adress;
            document.getElementById("pc-job").value = functio;
            document.getElementById("pc-date").value = age;
            document.getElementById("pc-ordenado").value = salary;
            document.getElementById("pc-entrydate").value = date;

            localStorage.setItem("phone", phone);
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

    let phone = localStorage.phone;
    let email = localStorage.email;

    data.id_centralist = document.getElementById("span-id").value;
    data.adress = document.getElementById("pc-adress").value;
    data.phone_num = document.getElementById("pc-phone").value;
    data.pay_per_hour = document.getElementById("pc-ordenado").value;

    data1.email = document.getElementById("pc-email").value;
    data1.password = document.getElementById("pc-password").value;
    data1.id_login = idlogin;


    if (data.phone_num.length !== 9 ||
        data.adress.length < 5 ||
        data1.email.length < 10 ||
        data1.email.indexOf('@') === -1 ||
        data1.password.length < 6) {

    }
    else {
        let save = document.getElementById("pc-save");
        save.type = "button";



        save.type = "button";

        if (data1.email !== email) {

            fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/loginEmail/` + data1.email)
                .then(response => {
                    if (!response.ok) {
                        console.log(response.status); //=> number 100â€“599
                        console.log(response.statusText); //=> String
                        console.log(response.headers); //=> Headers
                        console.log(response.url);


                        if (data.phone_num === phone) {


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
                                };
                            })
                        }

                        else {
                            fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/centralistsPhone/` + data.phone_num)
                                .then(response => {
                                    if (!response.ok) {
                                        console.log(response.status); //=> number 100â€“599
                                        console.log(response.statusText); //=> String
                                        console.log(response.headers); //=> Headers
                                        console.log(response.url);


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
        if (data.phone_num === phone) {


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
                };
            })
        }

        else {
            fetch(`https://23c6902811494393ad2cea6ff8f72d75.vfs.cloud9.us-east-1.amazonaws.com/centralistsPhone/` + data.phone_num)
                .then(response => {
                    if (!response.ok) {
                        console.log(response.status); //=> number 100â€“599
                        console.log(response.statusText); //=> String
                        console.log(response.headers); //=> Headers
                        console.log(response.url);


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
