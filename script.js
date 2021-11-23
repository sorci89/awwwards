
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

/* 
Flóra loading stripe + counter 
*/
function loading() {
    
    loadingStripe = document.createElement("div");
    loadingStripe.classList.add("fl");
    document.getElementById("root").appendChild(loadingStripe);

    loadingText = document.createElement("div");
    loadingText.classList.add("loading");
    document.getElementById("root").appendChild(loadingText);
    loadingText.innerHTML = "Loading";
   

/*     let i = 0;
    let txt = "Loading"; 
    let speed = 50; 

    function typeWriter() {
      if (i < txt.length) {
        document.querySelector("loadingText").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
    }
    typeWriter();
    setTimeout(() => loadingText.remove(), 4000);
 */    loadingCounter = document.createElement("div");
    loadingCounter.classList.add("counter");
    document.getElementById("root").appendChild(loadingCounter);
        for (let i=0; i < 101; i+=3) {
            loadingCounter.innerHTML = `${i}%`
            setTimeout('', 100);
}
}


function loadEvent() {
    stripesRunningAcrossTheScreen ();
    loadLandingPage();
    loading();
}

window.addEventListener("load", loadEvent);