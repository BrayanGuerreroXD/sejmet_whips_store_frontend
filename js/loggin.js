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
  //console.log(correo + " -> "+ pass);
  fetch("http://localhost:8080/users/findByEmail/"+correo)
    .then(response => response.json())
    .then(json => contra(json, pass));
}

function contra(json, contraceña) {
 //console.log(json);

  if (json.password === contraceña) {
    localStorage.setItem("email",json.email);
    localStorage.setItem("password",json.password);
    //console.log(json.password+ " -> " + contraceña);
    //console.log("esta funcionando");
    window.location.href = "../html/catalog.html";
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
    //console.log(password.value + " -> "+ passwordV.value + "valido");
  }
 else{
  passwordV.setAttribute("class","form-control is-invalid");
  
}
}
function valiadaremail() {
  
  let emailform=document.getElementById("email");
  console.log(emailform.value);
  fetch("http://localhost:8080/users/findByEmail/"+emailform.value)
  .then(response => response.json())
  .then(json =>email(json,emailform));

}

function email(json,emailform) {
  console.log(json);
  if (json!=null) {
    emailform.setAttribute("class", "form-control is-valid" )
}else emailformsetAttribute("class", "form-control is-valid"  )

}


function consultapost(){
  let nameform=document.getElementById("nombreRegister").value;
  let typeIdform=document.getElementById("typeDNI").innerText;
  let dniform=document.getElementById("DNI").value;
  let emailform=document.getElementById("email").value;
  let passform=document.getElementById("password2").value;
  let addressform=document.getElementById("address").value;

  let datos={
    role: {
        "id": 2,
        "roleName": "Client"
    },
    userName: nameform,
    typeIdentityCard: typeIdform,
    identityCardNumber: dniform,
    email: emailform,
    password: passform,
    address: addressform
  }

//console.log(JSON.stringify(datos));

    fetch("http://localhost:8080/users/", {
          method: 'POST',
          body: JSON.stringify(datos),
          headers:{
        "Content-Type":"application/json; charset=UTF-8"}
        })
    .then(response => response.json())
    .then(json => console.log(json))
}