function push(data) {
    fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers:{
          "Content-Type":"application/json; charset=UTF-8"}
          })
      .then(response => response.json())
      .then(json => console.log(json))
}
function consultapost(){
    var c =document.querySelector("#buscarid")
    var i = c.value
    let datos={
      userName: "pepito",
      userCode: 115184222,
      identifyCardNumber: 122445218,
      email: i+"@ufps.edu.co",
      password: "brayan123",
      admin: true}

    console.log(i);
      fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers:{
          "Content-Type":"application/json; charset=UTF-8"}
          })
      .then(response => response.json())
      .then(json => console.log(json))
  }