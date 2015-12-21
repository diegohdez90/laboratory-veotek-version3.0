var verify_code = function () {
    var code = document.getElementById("clave").value;

    if(code=="221802"){
        alert("Acceso concedido");
        return true;    
    }
    else{
        return false;
    }
}