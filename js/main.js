
  function mostrar() {

    var removeButton = document.getElementById("dota");
    removeButton.remove();


    const newDiv = document.createElement("div");
    newDiv.id = "myNewDiv";
    
    document.getElementById('myNewDiv').innerHTML =+ '<p>No hay Dota ps CTM</p>';



    var container = document.getElementById("footer");
    container.appendChild(newDiv);



   /*  var element = document.getElementById("dota");
    
    element.innerHTML = "<p>dota</p>"; */
  }


