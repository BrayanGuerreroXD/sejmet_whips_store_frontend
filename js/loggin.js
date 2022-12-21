let correo="";
let pass="";
 window.onload = function () {
  if(localStorage.length>0){
    correo =localStorage.getItem("email");
    pass = localStorage.getItem("password");
    consulta();
  }
  

}

function consulta() {
  if (correo.length==0 && pass.length==0) {
    let email = document.getElementById('usuario');
    let contraceña = document.getElementById('password');
    correo = email.value;
    pass = contraceña.value;
  }  
  console.log(correo + " -> "+ pass);
  fetch("http://localhost:8080/users/findByEmail/"+correo)
    .then(response => response.json())
    .then(json => contra(json, pass));
}

function contra(json, contraceña) {
 console.log(json);

  if (json.password === contraceña) {
    localStorage.setItem("email",json.email);
    localStorage.setItem("password",json.password);
    //console.log(json.password+ " -> " + contraceña);
    //console.log("esta funcionando");
    //window.location.href = "catalog.html";
  }else{
    //console.log("no funciona");
    ///console.log(json.password + " -> " + contraceña);
}
}

function select(string) {
  let menu =document.getElementById("typeDNI");
  menu.innerText=string;

}
function validar() {
  let password =document.getElementById("password2");
  let passwordV =document.getElementById("passwordvalidate");

  if (password.value==passwordV.value) {
    passwordV.setAttribute("class","form-control is-valid");
    console.log(password.value + " -> "+ passwordV.value + "valido");
  }
 else{
  passwordV.setAttribute("class","form-control is-invalid");
  
}
}
