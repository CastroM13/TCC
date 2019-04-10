function login(){
    var rm = document.getElementById("rm")
    var pwd = document.getElementById("pwd")
    if(rm.value == "" && pwd.value == ""){
        document.getElementById("err").innerHTML = "Preencha os campos!" 
    }else{
    if(rm.value == "160182" && pwd.value == "5398"){
        window.location.href = "main.html";
        return false;
    } else{
        document.getElementById("err").innerHTML = "Login Inválido"
    }
}
}

function open(){
    alert("Fui clicado!")
}