
// Zsolt --- Átszaladó csíkok-----------------
function stripesRunningAcrossTheScreen (){
    const stripeBox = document.createElement("div");
    stripeBox.setAttribute("id", "stripebox");
    let yellow = Math.floor(Math.random() * 8) + 1;
    for (let i = 1; i < 9; i++) {
        if (i === yellow) {
            const stripe = document.createElement("div");
            stripe.className = `yellow poz${i}`;
            stripeBox.insertAdjacentElement('beforeend', stripe);
        } else {
            const stripe = document.createElement("div");
            stripe.className = `basicblue poz${i}`; 
            stripeBox.insertAdjacentElement('beforeend', stripe);
        }
    }
    document.getElementById('root').insertAdjacentElement('beforeend', stripeBox);
}

//Bence -------Landing page-----------
function loadLandingPage(){
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
  `); 
}




function loadEvent() {
    stripesRunningAcrossTheScreen ();
    loadLandingPage();
}

window.addEventListener("load", loadEvent);