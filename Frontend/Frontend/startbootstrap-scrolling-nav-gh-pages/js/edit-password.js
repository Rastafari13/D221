  let view1 = document.getElementById("login-ps-show1");
  let view2 = document.getElementById("login-ps-show2");
  

view2.onclick = viewButton2;
function viewButton2() {
    let view2 = document.getElementById("login-ps2");
    if (view2.type === "password") {
        view2.type = "text";
        document.getElementById("login-ps2").focus();
    }
    else {
        view2.type = "password";
        document.getElementById("login-ps2").focus();
    }
}

view1.onclick = viewButton1;
function viewButton1() {
    let view2 = document.getElementById("login-ps1");
    if (view2.type === "password") {
        view2.type = "text";
        document.getElementById("login-ps1").focus();
    }
    else {
        view2.type = "password";
        document.getElementById("login-ps1").focus();
    }
}