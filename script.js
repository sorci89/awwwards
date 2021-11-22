function loadEvent() {
  const rootElement = document.getElementById("root");
  rootElement.insertAdjacentHTML("beforeend", `
  <div class="bence">
    <div class="bottle-container">
      <img class=" bottle" src="gin-bottles/gin-1.jpg" alt="gin1" >
      <img class=" bottle" src="gin-bottles/gin-2.jpg" alt="gin2" >
      <img class=" bottle" src="gin-bottles/gin-3.jpg" alt="gin3" >
      <img class=" bottle bottle4" src="gin-bottles/gin-4.jpg" alt="gin4" >
    </div>
    <div class="text-container">
      <div class="logo"><img src="gin-bottles/logo.jpg" alt="logo" ></div>
      <div class="animated-text"><span class="text1">Citadelle Gin,</span><br><span class="text2">LE gin de france</span></div>
      <div class="question-text">Avez-vous l’âge légal afin de consommer de l’alcool dans votre pays ?</div>
      <div class="buttons">GOMBOK...................................HELYE</div>
    </div>
  </div>

  </div>`);

					

  
   
}

window.addEventListener("load", loadEvent);
