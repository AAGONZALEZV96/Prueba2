function obtenerDatosDeUsuario() {
    debugger;
    let usuario = document.getElementById("usuario").value;

    let password = document.getElementById("password").value;
    console.log(usuario);
    console.log(password);


    //usuaro sea iun correo.
    if (!(usuario.include('@') && usuario.length >= 5)) {
        
    }
    //password contenga minimo 8 caracteres
    //password debe contener al menos 1 numero
    //password debe al menos 1 mayuscula
    if (document.getElementById('usuario') == null
    || document.getElementById('usuario') == "") {
    alert("El campo no puede estar vacío.");
    document.getElementById('usuario').focus();
    return false;
}
return true;
    
    

};