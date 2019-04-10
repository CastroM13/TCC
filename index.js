function login(){
    var rm = document.getElementById("rm")
    var pwd = document.getElementById("pwd")
    if(rm.value == 1 && pwd.value == 2){
        window.location.href = "band.html";
        return false;
    } else{
        document.getElementById("err").innerHTML = "Login Inválido"
    }
}

function clicado(){
    alert("Fui clicado!")
}