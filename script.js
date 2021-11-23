
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





function loadEvent() {
    stripesRunningAcrossTheScreen ();
}

window.addEventListener("load", loadEvent);