
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
  <div class="logo">
  <svg enable-background="new 0 0 314.11 131.99" viewBox="0 0 314.11 131.99" xmlns="http://www.w3.org/2000/svg"><g fill="#365072"><path d="m78.67 110.13c-.45 0-.92-.17-1.4-.49l-.18-.17c-.19-.18-.34-.39-.45-.61l-.05-.11c-.11-.31-.17-.6-.17-.86v-1h1.28c.4 0 .61-.21.61-.6s-.22-.6-.61-.6h-7.15c-.53 0-.64.33-.64.6s.11.6.64.6h2.31v2.31c0 .79-.3 1.49-.88 2.09-.57.55-1.22.83-1.93.83-.05 0-.09 0-.14 0-.93 0-1.73-.29-2.39-.86-.62-.59-.94-1.3-.94-2.11v-12.4c0-.75.32-1.45.93-2.08.59-.52 1.34-.81 2.22-.86h.12c1.5 0 2.53.48 3.06 1.44.55.97.82 2.07.82 3.25 0 .39.21.61.59.63.48.11.65-.16.72-.41.18-.66.4-1.51.66-2.53.26-1.05.59-1.99.97-2.81.09-.23.11-.55-.35-.74-.58-.19-.8.08-.9.34l-.09.23-.02.03c-.28.34-.59.56-.93.63-.37.05-.84-.1-1.41-.42-1-.6-2.06-.9-3.14-.9h-.18c-2.04.1-3.79 1.17-5.18 3.19-1.39 2.03-2.09 4.46-2.09 7.23 0 2.83.7 5.26 2.09 7.23.59.92 1.37 1.69 2.32 2.27.95.59 2.01.89 3.16.89 1.11 0 2.09-.4 2.92-1.2.54-.51.93-1.24 1.16-2.2.02-.1.05-.16.1-.17.05-.02.19-.02.52.23 1.12.92 2.46 1.39 4 1.39.14 0 .28-.07.4-.2s.18-.28.18-.43c0-.17-.06-.33-.19-.45-.1-.13-.23-.2-.37-.2z"></path><path d="m87.11 94.03h.18c.53 0 .64-.31.64-.57 0-.41-.22-.63-.64-.63h-5.63c-.42 0-.64.22-.64.63 0 .26.11.57.64.57h.15c.55 0 .9.57.9.92l.09 16.01c-.11.66-.46.98-1.08.98-.53 0-.64.3-.64.55 0 .41.22.63.64.63h5.46c.42 0 .64-.22.64-.63 0-.25-.11-.55-.64-.55-.33 0-.58-.08-.73-.25-.16-.18-.23-.46-.2-.84v-15.91c-.01-.5.26-.91.86-.91z"></path><path d="m107.9 112.4c-.21 0-.56-.27-1.03-1.55-.44-1.09-.66-2.14-.66-3.11v-11.82c0-.4.12-.82.35-1.24.23-.41.56-.61 1.02-.61.4 0 .61-.21.61-.6 0-.41-.21-.63-.61-.63h-4.2c-.42 0-.64.22-.64.63 0 .27.11.6.64.6h.11c.38.05.71.27.98.63.27.38.43.75.46 1.08v11.96l-8.43-12.48c-.73-.98-1.59-1.67-2.58-2.06-.45-.15-.88-.26-1.27-.3-.41-.05-.76-.07-1.06-.07h-.06c-.42 0-.64.22-.64.63 0 .27.11.6.64.6h.03c1.06.04 1.7.62 1.96 1.78.27 1.18.41 2.15.41 2.88v11.9c0 .38-.13.78-.39 1.18s-.6.59-1.04.59c-.42 0-.64.22-.64.63 0 .26.11.57.64.57h4.2c.51 0 .61-.31.61-.57 0-.41-.21-.63-.61-.63s-.75-.18-1.04-.53c-.3-.35-.45-.72-.45-1.1v-11.98l7.55 11.23c.27.44.57.87.88 1.27.31.41.69.78 1.12 1.1.91.81 1.97 1.22 3.15 1.22.53 0 .64-.31.64-.57-.01-.42-.23-.63-.65-.63z"></path><path d="m160.96 95.99-.02-.07-.91-3.51c-.06-.2-.15-.34-.28-.41-.12-.07-.27-.07-.45-.02-.24.1-.38.23-.42.39l-.08.08c-.4.25-1.12.37-2.15.37h-9.49c-.42 0-.64.22-.64.63 0 .26.11.57.64.57h.15c.71 0 .9.54.9.92 0 1.15.02 2.19.06 3.08.04.9.06 1.9.06 2.96v9.87c0 .73-.34 1.09-1.05 1.09-.53 0-.64.3-.64.55 0 .41.22.63.64.63h5.49c.4 0 .61-.22.61-.63 0-.35-.22-.55-.61-.55-.65 0-1.01-.32-1.08-.97v-10.41h3.27.03c.01 0 .08-.02.33.03.33.09.59.24.77.43.2.25.3.49.3.73.01.06.01.09.01.1l-.07.48c-.07.21-.06.38.02.51s.22.2.42.24c.2.06.37.04.5-.03.13-.08.21-.21.25-.39l.05-.13c.03-.03.04-.08.04-.13s0-.08.01-.1c.01-.03.03-.1.05-.19l1.05-4.07c.04-.36-.12-.61-.48-.73-.53-.1-.71.2-.77.47l-.11.45c-.13.35-.55.67-1.27.95-.2.09-.32.11-.39.11-.28.04-.4.05-.45.05h-3.56l-.06-5.29h4.82c.2 0 .59.01.93.11.25.07.25.07.49.17.95.43 1.57 1.05 1.85 1.86l.29 1.12c.11.39.39.54.8.43.09-.02.16-.07.21-.15.15-.23.13-.74-.06-1.56z"></path><path d="m197.55 111.94h-.2c-.3 0-.63-.27-.97-.81-.04-.09-.09-.19-.15-.3l-.01-.02s-.01-.02-.04-.08c-.02-.07-.02-.08-.02-.09l-4.3-15.76c-.26-.83-.64-1.42-1.14-1.73-.15-.1-.29-.18-.43-.24-.15-.07-.32-.1-.53-.1h-3.12c-.4 0-.61.22-.61.63 0 .39.22.6.61.6h1.08.04c.17.03.37.19.59.41.2.27.3.54.3.81 0 .1-.02.2-.06.29l-3.5 12.89c-.01.06-.02.11-.04.2l-.55 2.1s-.07.18-.22.31c-.19.22-.41.42-.67.6-.25.17-.46.26-.64.26h-.38c-.53 0-.64.33-.64.6 0 .26.11.58.64.58h3.97c.53 0 .64-.31.64-.58 0-.39-.23-.6-.64-.6h-.42c-.05-.06-.14-.15-.26-.25-.08-.12-.13-.3-.13-.55l.03-.32.32-1.2c.05-.23.19-.33.45-.34.98-.13 1.88-.2 2.67-.2 1.03 0 1.98.06 2.82.17.19.03.34.15.46.35l.29 1.31c.07.2.09.36.11.48.04.19-.05.54-.64.54h-.35c-.38 0-.58.21-.58.6 0 .37.21.58.58.58h5.64c.53 0 .64-.31.64-.58.01-.35-.22-.56-.64-.56zm-5.52-3.94c-.79-.1-1.71-.15-2.8-.15-.85 0-1.75.05-2.68.16l2.74-10.12z"></path><path d="m216.87 112.4c-.21 0-.56-.27-1.03-1.55-.44-1.09-.67-2.14-.67-3.11v-11.82c0-.4.12-.82.35-1.24.23-.41.56-.61 1.02-.61.4 0 .61-.21.61-.6 0-.41-.21-.63-.61-.63h-4.2c-.42 0-.64.22-.64.63 0 .27.11.6.64.6h.11c.38.05.71.27.98.63.27.38.43.75.47 1.08v11.96l-8.43-12.47c-.72-.98-1.59-1.67-2.58-2.06-.45-.15-.88-.26-1.27-.3-.42-.05-.76-.07-1.06-.07h-.06c-.42 0-.64.22-.64.63 0 .27.11.6.64.6h.03c1.05.04 1.7.62 1.96 1.78.27 1.18.41 2.15.41 2.88v11.9c0 .38-.13.78-.39 1.18s-.6.59-1.04.59c-.42 0-.64.22-.64.63 0 .26.11.57.64.57h4.2c.51 0 .61-.31.61-.57 0-.41-.21-.63-.61-.63s-.75-.18-1.04-.53c-.3-.35-.45-.72-.45-1.1v-11.99l7.54 11.23c.28.45.58.87.88 1.27.32.41.69.78 1.12 1.1.91.81 1.97 1.22 3.15 1.22.53 0 .64-.31.64-.57 0-.42-.22-.63-.64-.63z"></path><path d="m232.43 105.01c-1.09 0-1.64.51-1.64 1.52 0 .53.23.93.68 1.19.15.09.24.22.27.37.07.34-.15.84-.63 1.49-.74.99-1.32 1.62-1.73 1.88 0 0-1.01.68-2.24.68h-.09c-.91-.02-1.66-.31-2.25-.86-.62-.59-.94-1.3-.94-2.11v-12.42c0-.75.32-1.45.93-2.08.59-.52 1.33-.81 2.22-.86h.12c1.5 0 2.53.48 3.06 1.44.55.97.82 2.07.82 3.25 0 .39.21.61.59.63.47.11.65-.16.72-.41.18-.66.41-1.51.66-2.53.26-1.05.59-1.99.97-2.81.09-.23.11-.55-.34-.74-.58-.19-.81.08-.9.34l-.09.23-.02.03c-.28.34-.59.56-.93.63-.37.05-.84-.1-1.41-.42-1-.6-2.06-.9-3.14-.9h-.18c-2.04.1-3.79 1.17-5.18 3.19-1.39 2.03-2.09 4.46-2.09 7.23 0 2.83.7 5.26 2.09 7.23 1.33 2.02 3.08 3.08 5.18 3.16h.18c.81 0 1.67-.25 2.13-.43s.65-.28.69-.3c.06-.03.12-.07.2-.11.65-.41 1.43-1.18 2.3-2.31.45-.62.93-1.55 1.42-2.78.04-.2.09-.39.17-.55l.04-.32c.03-1.04-.53-1.55-1.64-1.55z"></path><path d="m251.29 108.19c-.41-.08-.69.08-.8.46l-.29 1.08c-.28.87-.9 1.49-1.85 1.87-.47.19-1.08.33-1.42.33h-4.76v-11.38h3.27s.1-.02.36.02c.33.09.59.24.77.43.2.25.3.49.3.73.01.22-.06.59-.06.59-.07.21-.06.38.02.51s.22.2.42.24c.2.05.37.04.5-.03.13-.08.21-.21.25-.39 0 0 .09-.34.1-.36.01-.03.03-.1.05-.19l1.05-4.07c.04-.36-.12-.61-.48-.73-.53-.1-.71.2-.77.47l-.12.45c-.13.36-.55.68-1.27.95-.16.07-.29.11-.39.11-.29.05-.41.05-.45.05h-3.56l-.06-5.29h4.82c.2 0 .51.04.93.11.13.04.29.08.49.17.95.43 1.57 1.06 1.85 1.86l.29 1.12c.11.39.39.54.8.43.09-.02.16-.07.21-.15.15-.23.13-.74-.06-1.56v-.02l-.02-.07-.91-3.51c-.06-.2-.15-.34-.28-.41-.12-.07-.27-.07-.45-.02-.24.1-.38.23-.42.39l-.08.08c-.4.25-1.12.37-2.15.37h-9.49c-.42 0-.64.22-.64.63 0 .26.11.57.64.57h.15c.53.08.69.35.79.58.1.26.11.31.11.4s.02 2.1.06 3.01c.04.9.06 1.9.06 2.96v9.87c0 .73-.34 1.09-1.05 1.09-.53 0-.64.3-.64.55 0 .41.22.63.64.63 1.46 0 3 .01 4.57.03 1.52.02 3.07.03 4.6.03h.2c1.08 0 1.8.09 2.15.26.06.05.08.1.08.14.04.16.15.32.43.37.02 0 .03.01.05.01.27 0 .68-.56 1.57-3.88v-.09c.01-.02.03-.04.03-.06l.26-1c.08-.35-.06-.61-.4-.74z"></path><path d="m122.68 96.81h-4.48c-.37 0-.49.21-.52.4-.03.13-.01.23.05.3.07.08.18.12.34.12h.12c.19 0 .39.1.6.28.19.21.27.42.23.61l-1.99 10.35c-.03.14-.13.27-.29.41-.21.11-.39.16-.53.16h-.2c-.29 0-.48.14-.53.41-.03.14-.01.24.05.32.07.08.18.12.34.12l.19-.02h4.31c.65 0 1.29-.19 1.89-.57.6-.37 1.17-.87 1.7-1.46 1.18-1.3 1.95-2.87 2.3-4.67.34-1.79.18-3.38-.5-4.72-.7-1.28-1.74-1.97-3.08-2.04zm1.54 2.71-1.54 8.01c-.11.55-.41 1.02-.9 1.38-.53.38-1.03.58-1.48.58h-1.19l2.28-11.85h1.28c.47 0 .86.19 1.19.57.34.34.46.78.36 1.31z"></path><path d="m138.84 98.91.01-.03-.16-2.33c-.01-.14-.06-.23-.14-.28s-.18-.06-.32-.02c-.17.07-.28.15-.33.26l-.03.01-.03.04c-.3.17-.8.25-1.49.25h-6.36c-.28 0-.45.14-.51.41-.02.12-.01.22.05.29.06.08.17.12.33.12h.1c.19 0 .55.18.47.59-.04.2-.27 1.46-.35 2.05-.09.59-.2 1.23-.34 1.96l-1.26 6.55c-.09.49-.37.72-.85.72-.35 0-.47.2-.5.36-.03.14-.01.25.05.33s.17.12.31.12c1.11 0 2.11.01 3.06.02 1.02.01 2.05.02 3.08.02h.14c.71 0 1.17.06 1.39.16v.02l.04.08c.01.14.1.22.26.25.01 0 .03.01.05.01.14 0 .45-.22 1.54-2.58l.01-.04c.01-.01.02-.02.03-.04l.31-.67c.09-.24.02-.41-.2-.51-.26-.05-.47.05-.6.3l-.33.72c-.3.58-.8.99-1.49 1.24-.13.06-.25.1-.35.11-.2.07-.42.11-.64.11h-3.17l1.45-7.54h2.19.02c.01 0 .06-.01.21.02.21.06.36.15.45.28.1.16.14.32.11.48v.06l-.01.01-.1.31c-.08.15-.09.27-.04.36.04.08.13.14.26.15.26.08.45-.03.55-.28l.05-.09c.02-.02.04-.05.04-.09.01-.04.02-.06.02-.07.01-.02.03-.06.06-.13l1.23-2.71c.1-.32-.07-.45-.24-.5-.27-.06-.47.05-.58.3l-.13.3c-.13.24-.46.45-.97.63-.12.05-.21.07-.28.07-.14.02-.26.04-.31.04h-2.37l.63-3.49h3.23c.13 0 .33.02.61.07.08.05.19.09.3.11.58.28.91.68.99 1.22l.05.74c.01.12.06.21.13.27.09.06.21.07.37.04.25-.05.35-.41.32-1.13v-.02z"></path><path d="m179.13 111.95-.29-.01c-.61 0-1.08-.29-1.43-.89-.35-.61-.69-1.24-1-1.89-.18-.38-.36-.76-.54-1.15-.19-.39-.39-.71-.61-.97l-.03-.03c-.41-.4-.83-.71-1.24-.91.77-.34 1.44-.88 2.01-1.61 1.12-1.29 1.68-2.91 1.68-4.81 0-1.88-.57-3.51-1.68-4.83-1.12-1.35-2.49-2.04-4.07-2.04h-7.47c-.42 0-.64.22-.64.63 0 .26.11.57.64.57h.15c.61.03.9.52.9.92v6.14c0 .67.01 1.69.04 3.02s.04 3.64.05 6.85c-.11.66-.46.98-1.08.98-.53 0-.64.3-.64.55 0 .41.22.63.64.63h5.46c.42 0 .64-.22.64-.63 0-.25-.11-.55-.64-.55-.69 0-1.02-.35-1.02-1.09v-4.26h.46c.23.02.67.09 1.36.23.66.13 1.16.45 1.39.98l.02.04.01.03 1.63 2.96c.13.17.23.31.29.43.31.39.8.8 1.43 1.22.64.43 1.32.64 2.02.64h1.52l.01-.01v.01c.39 0 .47-.31.47-.58-.02-.24-.1-.55-.44-.57zm-5.64-7.28c-.45.44-.98.66-1.57.66h-2.98c0-1.87.01-3.76.04-5.62s.04-3.76.04-5.65h2.86c.62 0 1.16.22 1.6.66.45.42.67.96.67 1.6v6.78c.01.6-.21 1.13-.66 1.57z"></path><path d="m120.92 125.86h24.1v6.13h-24.1z"></path></g><path d="m145.14 125.99h23.85v5.88h-23.85z" fill="#fff"></path><path d="m168.86 126.11v5.63h-23.6v-5.63zm.25-.25h-24.1v6.13h24.1z" fill="#acadaf"></path><path d="m169.11 125.86h24.1v6.13h-24.1z" fill="#c95263"></path><path d="m197.83 18.41c-.75-.17-1.53-.27-2.35-.27h-9.94c-.03.29-.06.6-.06.93v.73 19.5l-1.6.7v-21.8c0-.36 0-.73 0-.73 0-.33.02-.64.06-.93h9.94c.14 0 .26.02.4.03 1.31.47 2.47 1.07 3.55 1.84zm.25 20.52v9.13c.83.99.96 2.07.96 2.07h.64v-13.27h-.64s-.13 1.08-.96 2.07zm-118.25 31.97c.27.83.64 1.55 1.63 2.1-.02-.23-.04-.46-.04-.71 0 0 0-.36 0-.73v-53.16h2.58c1.41 0 2.7.29 3.88.75-.03-.03-.06-.06-.09-.09-1.08-1.08-2.22-1.68-3.53-2.07-.6-.11-1.21-.18-1.86-.18h-2.58v53.15.73c0 .07.01.13.01.21zm72.93-52.71c-.82-.12-1.68-.2-2.65-.2h-4.92v.19 50.12c.53-.03 1.06-.04 1.6-.07v-48.46c0-.06 0-.12 0-.19h4.92c1.95 0 3.58.27 4.95.72-1.14-.96-2.45-1.64-3.9-2.11zm42.17 28.91c-.32-.43-1.35-1.77-2.97-1.5l-8.07 2.43v21.57c.53.03 1.06.08 1.6.14v-20.13l8.07-2.43c.85-.24 1.19.02 1.45.05-.03-.04-.05-.09-.08-.13zm-85.86 8.13 3.68-17.47c-.4-1.28-.78-2.58-1.11-3.88l-4.34 20.6c.56.36 1.15.61 1.77.75zm113.29 14.15v-49.58c0-.36 0-.73 0-.73 0-4.92 4.07-5.4 4.07-5.4v-.71h-3.67c-1 .74-2 2.09-1.99 4.51v.73 51.08c.52.03 1.06.06 1.59.1zm34.04.17v-49.78c0-.35 0-.7 0-.7 0-4.92 4.07-5.4 4.07-5.4v-.71h-3.67c-1 .74-2 2.09-1.99 4.51v.7 51.2c.53.05 1.06.11 1.59.18zm43.3-53.82c-.14-.01-.26-.03-.4-.03h-10.07c-.03.3-.06.61-.06.94v.74 22.09l1.62-.71v-19.77c0-.37 0-.74 0-.74 0-.33.02-.65.06-.94h10.07c.84 0 1.63.1 2.39.27-1.1-.77-2.28-1.38-3.61-1.85zm3.86 22.65v9.26c.84 1 .97 2.1.97 2.1h.64v-13.45h-.64s-.13 1.09-.97 2.09zm-3.2 8.28c-.32-.44-1.37-1.8-3.01-1.52l-8.18 2.46v21.86c.54.03 1.08.08 1.62.14v-20.39l8.18-2.46c.86-.24 1.21.02 1.47.05-.02-.04-.05-.09-.08-.14zm11.28 20.29-2.1 10.56s-2.81-.75-7.28-.75c-2.44 0-6.12 0-8.95 0v.01h-11.23c-1.05.77-2.11.9-2.11.9v.72h14.96v-.01h8.95c4.47 0 7.28.75 7.28.75l2.97-14.94h-.71c0-.01-.61 1.22-1.78 2.76zm-1.73-55.37 2.6 13.07h-.06c.63.95.97 1.62.97 1.62h.71l-2.97-14.94c0-.01-.45.11-1.25.25zm-182.17 55.8c.2.58.34 1.19.55 1.73.45 1.16 1.23 2.78 2.35 3.7-.26-.84-.46-1.7-.66-2.51l-9.57-45.53c-.05-.19-.95-4.53-1.02-4.88-.46-2.41-.7-4.43.33-5.23.78-.78 2.18-1 2.18-1v-.7h-3.66c-.04.04-.09.07-.12.1-1.03.8-1.15 2.82-.69 5.23.07.35.14.71.21 1.07l.68 3.25c.04.19.08.37.13.56h-.01zm78.31-.27-2.07 10.42s-2.78-.74-7.19-.74c-2.41 0-6.04 0-8.83 0v.01h-11.08c-1.03.76-2.08.89-2.08.89v.71h14.76v-.01h8.83c4.41 0 7.19.74 7.19.74l2.93-14.74h-.7c0-.01-.6 1.2-1.76 2.72zm-35.74-36.07c0-5.21-1.56-8.84-3.53-11.37.08.14.17.26.24.41.77 1.57 1.14 3.36 1.3 5.16.24 1.28.39 2.67.39 4.21h.03v29.34h-.03c-.02 8.13-3.85 12.45-7.07 14.65-4.2 2.87-8.93 3.36-11.43 3.37h-12.03c-1.03.76-2.08.89-2.08.89v.71h15.71c2.5-.01 7.23-.5 11.43-3.37 3.22-2.19 7.05-6.52 7.07-14.65h.03v-29.35zm-47.77 45.75c-.33.34-.74.65-1.3.88v.72h13.03v-.72c-.59-.14-1.13-.45-1.63-.88zm-16.58 0h-9.78c-.5.42-1.04.74-1.63.88v.72h13.01s0-.33 0-.72c-.73-.3-1.24-.7-1.6-1.17zm12.01-13.48c-4.55 2.17-10.76.92-12.58.04l-1.3 6.38h-.02c-.11.47-.22 1.01-.27 1.57-.03.86.14 1.65.97 2.19.19.13.4.23.61.32-.02-.88.12-1.76.29-2.49h.02l1.13-5.47c5.36 1.12 9.03.39 11.39-.58-.1-.65-.18-1.3-.24-1.96zm86.38-50.83 2.56 12.9h-.06c.62.94.95 1.6.95 1.6h.7l-2.93-14.74c.01-.01-.43.1-1.22.24zm73.65 51.9s-.61 1.45-1.84 3.17l-1.98 9.98s-2.78-.74-7.19-.74c-2.41 0-5.31 0-8.11 0l-.73.01h-10.35c-1.03.76-2.08.89-2.08.89v.71h14.03l.73-.01h8.11c4.41 0 7.19.74 7.19.74l2.93-14.74h-.71zm-34.04 0s-.6 1.21-1.76 2.73l-2.07 10.42s-2.78-.74-7.18-.74c-2.41 0-6.04 0-8.84 0v.01h-10.36c-1.03.76-2.08.89-2.08.89v.71h14.03v-.01h8.84c4.41 0 7.18.74 7.18.74l2.93-14.74h-.69zm-148.52-38.74h-.06c.62.94.95 1.6.95 1.6h.7l-2.92-14.94s-.45.1-1.24.22zm-77.35 51.9c-2.18 0-4.06-.27-5.73-.74-1.29-.19-2.49-.54-3.64-1 2.54 2.15 6.12 3.56 11.18 3.56 4.98 0 7.56-3.34 9.84-2.41-2.88-4.82-5.34.59-11.65.59zm.18-69.84c-.29-.02-.58-.05-.89-.05-4.93 0-8.7 4.65-8.7 12.39v38.62c0 1.3.11 2.51.31 3.62.33 1.2.74 2.37 1.73 3.11.15.11.3.21.46.31-.44-1.53-.67-3.28-.67-5.22v-38.63c0-7.73 3.76-12.39 8.7-12.39 1.15 0 2.16.18 3.11.42-1.08-1.06-2.54-1.8-4.05-2.18zm12.31 57.22v12.07h-.73c.59.27 1.16.83 1.74 1.82h.81v-16.83h-.81s-.27 1.28-1.01 2.94zm19.44 7.79c.24.34.52.6.81.79-.06-.38-.11-.77-.11-1.22 0 0 0-.35 0-.7v-51.83c0-.35 0-.7 0-.7 0-4.92 4.07-5.4 4.07-5.4v-.71h-3.67c-1 .74-2 2.09-2 4.51v.7 51.83.21c.13.9.38 1.78.9 2.52zm20.64-55.9h-.04c-5.04 0-8.63 3.53-10.6 6.13l-.43 2.26h.7s3.21-6.46 10.43-7.15c-.07-.41-.07-.79-.06-1.24zm2.15 59.98c-1.03.76-2.08.89-2.08.89v.71h14.76v-.71s-1.05-.13-2.08-.89zm-30.69 0c-1.03.76-2.08.89-2.08.89v.71h14.76v-.71s-1.05-.13-2.08-.89zm-11.54-71.95v12.57c.74 1.66 1.01 2.93 1.01 2.93h.81v-16.82h-.81c-.34.58-.68 1-1.01 1.32z" fill="#828386"></path><path d="m149.1 14.93h-6.94l-.03 56.27h6.97c11.92 0 13.77-8.9 14.05-11.63.4-3.87.01-31.84-.11-33.01-.35-3.49-2.4-11.63-13.94-11.63zm12.02 42.77h-.01c0 3.45-1.17 11.46-12.01 11.46h-4.92c0-.06 0-.12 0-.18v-51.82c0-.06 0-.12 0-.19h4.92c10.84 0 12.01 8.02 12.01 11.46h.01zm-123.68-46.65s4.07.48 4.07 5.4v1.45 50.32.82.63c0 4.92-4.07 5.4-4.07 5.4v.71h14.76v-.71s-4.07-.48-4.07-5.4c0 0 0-.35 0-.7v-51.82c0-.35 0-.7 0-.7 0-4.92 4.07-5.4 4.07-5.4v-.71h-14.76zm9.61 1.33c-.65 1.15-.97 2.52-.97 4.06v53.23c0 1.55.33 2.91.97 4.06h-4.46c.64-1.15.97-2.51.97-4.06v-53.23c0-1.55-.33-2.91-.97-4.06zm113.58 1.34c-4.2-2.87-8.93-3.32-11.43-3.33l-.95-.03h-6.49-8.27v.71s4.07.48 4.07 5.4v1.45 50.32.82.63c0 4.92-4.07 5.4-4.07 5.4v.71h8.27 6.49.95c2.5-.01 7.23-.5 11.43-3.37 3.22-2.19 7.05-6.52 7.07-14.65h.03v-29.35h-.03c0-8.17-3.85-12.51-7.07-14.71zm5.06 42.47-.03 1.57c-.02 7.25-3.37 11.05-6.18 12.97-3.77 2.57-8.06 2.97-10.29 2.98l-2.04.04v-.01h-8.51c.64-1.15.97-2.52.97-4.06v-53.22c0-1.55-.33-2.91-.97-4.06h9.05l1.49.03c2.23.01 6.52.41 10.29 2.98 2.82 1.92 6.18 5.75 6.18 13.03v2.04h.03v25.71zm-53.74-38.7h-.37l-1.79 9.37-6.13 29.11 1.1.77c2.01 1.42 4.36 2.17 6.81 2.17 2.64 0 5.16-.88 7.27-2.54l1-.79-6.05-28.74zm-.38 39.39c-2.1 0-4.04-.67-5.63-1.79l5.85-27.8 5.79 27.5c-1.66 1.3-3.74 2.09-6.01 2.09zm15.05 10.81-9.58-45.53h.01c-.05-.19-.09-.37-.13-.56l-.68-3.25c-.07-.36-.14-.72-.21-1.08-.46-2.41-.34-4.43.69-5.23.78-.78 2.18-1 2.18-1v-.7h-3.82-6.57-3.82v.7s1.4.22 2.18 1c1.04.8 1.15 2.83.69 5.23-.01.06-.02.13-.04.19l-.98 4.65c0 .02-.01.03-.01.05l-9.62 45.69h.01c-.76 2.99-2.47 6.62-5 7.21v.72h13.01s0-.33 0-.72c-2.91-1.19-2.42-4.08-1.98-5.94h.02l1.6-7.59c2.11 1.03 4.48 1.62 6.99 1.62 2.66 0 5.17-.65 7.39-1.81l1.64 7.78h.02c.44 1.87.92 4.75-1.98 5.94v.72h13.02v-.72c-2.56-.6-4.3-4.35-5.03-7.37zm-4.02 6.05c.47-1.36.47-3.07 0-5.08l-.22-.96-1.98-9.41-2.39 1.24c-2.01 1.05-4.17 1.58-6.44 1.58-2.12 0-4.17-.48-6.09-1.41l-2.35-1.15-2.01 9.54-.14.57c-.47 2.02-.47 3.73.01 5.08h-4.34c1.34-2.04 2.04-4.42 2.28-5.38l.55-2.18-.1-.01 10.2-48.48c.42-2.18.39-3.96-.07-5.29h4.59c-.46 1.33-.49 3.09-.08 5.27l.21 1.08 10.39 49.37c.25 1.01.95 3.51 2.33 5.62zm-41.21-57.95c7.96 0 12.34 8.83 12.34 8.83h.7l-2.92-14.93s-2.79.65-7.2.65c-2.08 0-3.6 0-6.17 0 0 0-2.37 0-5.26 0-2.57 0-4.1 0-6.17 0-4.41 0-7.2-.65-7.2-.65l-2.92 14.94h.7s4.38-8.83 12.34-8.83h2.58v52.42.82.63c0 4.92-4.07 5.4-4.07 5.4v.71h14.76v-.71s-4.07-.48-4.07-5.4c0 0 0-.36 0-.73v-53.15zm-4.63 53.89c0 1.54.33 2.91.97 4.06h-4.46c.64-1.15.97-2.51.97-4.06v-55.93h-4.63c-3.47 0-6.7 1.36-9.62 4.04l1.12-5.75c1.26.17 3.19.35 5.57.35h17.61c2.38 0 4.32-.18 5.57-.35l1.12 5.75c-2.92-2.68-6.15-4.04-9.61-4.04h-4.63zm-59.83-69.68c-14.05 0-16.89 10.69-16.93 18.72v38.84c.01 8.04 2.82 18.83 16.93 18.83 6.33 0 8.79-5.45 11.68-.55h.81v-16.83h-.81s-2.23 10.88-12.38 10.88c-4.93 0-8.7-4.65-8.7-12.39v-38.62c0-7.73 3.76-12.39 8.7-12.39 10.15 0 12.38 10.88 12.38 10.88h.81v-16.82h-.81c-2.89 4.9-5.35-.55-11.68-.55zm10.19 9.29c-2.04-2.42-5.51-5.1-10.88-5.1-6.48 0-11 6.04-11 14.69v38.62c0 8.65 4.52 14.69 11 14.69 5.38 0 8.85-2.68 10.88-5.1v4.55c-.39-.1-.79-.16-1.2-.16-1.37 0-2.58.56-3.86 1.16-1.5.7-3.06 1.43-5.13 1.43-9.69 0-14.61-5.56-14.63-16.53v-38.83c.06-10.88 4.98-16.41 14.63-16.41 2.07 0 3.62.72 5.12 1.43 1.29.6 2.49 1.17 3.87 1.17.41 0 .81-.05 1.2-.16zm271.15 61.2h-10.07c-.03-.29-.05-.6-.05-.93 0 0 0-.37 0-.74v-22.1l8.18-2.61c4.34-1.54 5.56 2.98 5.56 2.98h.64v-13.44h-.64s0 3.25-4.92 4.44l-8.82 2.44v-24.18c0-.37 0-.74 0-.74 0-.33.02-.65.06-.94h10.07c8.07 0 12.5 8.95 12.5 8.95h.71l-2.97-14.94s-2.81.75-7.28.75c-2.44 0-6.12 0-8.95 0h-4.11-10.84v.72s4.13.49 4.13 5.47v7.28 45.84.19.64c0 3.62-2.18 4.87-3.37 5.28.02.1-.13.91-.13.91h14.33v-.01h8.95c4.47 0 7.28.75 7.28.75l2.97-14.94h-.71c-.01-.02-4.45 8.93-12.52 8.93zm8.61 3.58c-1.27-.19-3.24-.4-5.65-.4h-11.02v.01h-7.67c.61-1.09.98-2.39.98-3.47v-53.95c0-2.05-.31-3.54-.98-4.76h18.7c2.42 0 4.38-.21 5.65-.4l1.11 5.58c-2.95-2.7-6.22-4.07-9.72-4.07h-11.92l-.21 1.83c-.04.37-.07.76-.07 1.18v27.85l10.94-3.32c1.51-.36 2.56-.71 3.44-1.38v3.3c-.48-.22-1-.32-1.58-.32-.57 0-1.21.1-1.96.31l-10.84 3.29v24.22c0 .41.03.8.07 1.17l.21 1.83h11.91c3.5 0 6.77-1.37 9.72-4.07zm-77.87-3.47h-9.21c-.03-.29-.05-.59-.05-.92 0 0 0-.36 0-.73v-51.76c0-.36 0-.73 0-.73 0-4.92 4.07-5.4 4.07-5.4v-.71h-14.76v.71s4.07.48 4.07 5.4v1.45 50.32.82.63c0 4.92-4.07 5.4-4.07 5.4v.71h14.03v-.01h8.84c4.41 0 7.18.74 7.18.74l2.93-14.74h-.7c.01-.01-4.37 8.82-12.33 8.82zm8.5 3.53c-1.26-.19-3.19-.39-5.57-.39h-10.88v.01h-6.84c.64-1.15.97-2.51.97-4.06v-53.23c0-1.55-.33-2.91-.97-4.06h4.46c-.64 1.15-.97 2.51-.97 4.06v53.23c0 .4.02.78.07 1.14l.21 1.81h11.03c3.45 0 6.68-1.35 9.59-4.01zm26.28-3.53h-9.94c-.03-.29-.05-.59-.05-.92 0 0 0-.35 0-.7v-51.82c0-.35 0-.7 0-.7 0-4.92 4.07-5.4 4.07-5.4v-.71h-14.76v.71s4.07.48 4.07 5.4v1.45 50.32.82.63c0 4.92-4.07 5.4-4.07 5.4v.71h14.03l.73-.01h8.11c4.41 0 7.19.74 7.19.74l2.93-14.74h-.7c0-.01-3.65 8.82-11.61 8.82zm7.76 3.53c-1.26-.19-3.2-.39-5.58-.39h-8.11l-.76.01h-8.85c.64-1.15.97-2.51.97-4.06v-53.23c0-1.55-.33-2.91-.97-4.06h4.46c-.64 1.15-.97 2.51-.97 4.06v53.23c0 .41.03.79.07 1.15l.21 1.81h11.76c3.23 0 6.17-1.17 8.75-3.49zm-88.67-57.67c0-.33.02-.64.06-.93h9.94c7.96 0 12.34 8.83 12.34 8.83h.7l-2.93-14.74s-2.78.74-7.19.74c-2.41 0-6.04 0-8.83 0h-4.06-10.7v.71s4.07.48 4.07 5.4v7.19 45.22.18.63c0 4.92-4.07 5.4-4.07 5.4v.71h14.76v-.01h8.83c4.41 0 7.19.74 7.19.74l2.93-14.74h-.7s-4.38 8.83-12.34 8.83h-9.94c-.03-.29-.05-.59-.05-.92 0 0 0-.36 0-.73v-21.8l8.07-2.58c4.28-1.52 5.48 2.94 5.48 2.94h.63v-13.28h-.63s0 3.21-4.85 4.38l-8.7 2.41v-23.85c-.01-.36-.01-.73-.01-.73zm8.75 24.21c1.49-.36 2.52-.7 3.39-1.36v3.24c-.48-.21-.99-.32-1.56-.32-.56 0-1.19.1-1.94.3l-10.7 3.24v23.9c0 .41.02.79.07 1.15l.21 1.81h11.76c3.45 0 6.68-1.35 9.58-4.01l-1.09 5.49c-1.26-.19-3.19-.39-5.57-.39h-10.88v.01h-7.57c.6-1.07.97-2.35.97-3.42v-53.21c0-2.02-.3-3.49-.97-4.7h18.45c2.39 0 4.32-.21 5.58-.4l1.09 5.49c-2.91-2.66-6.13-4.01-9.58-4.01h-11.76l-.21 1.81c-.04.36-.07.75-.07 1.16v27.49z" fill="#365072"></path><path d="m271.55 74.13c-1.26-.19-3.2-.39-5.58-.39h-8.11l-.76.01h-8.85c.64-1.15.97-2.51.97-4.06v-53.23c0-1.55-.33-2.91-.97-4.06h4.46c-.64 1.15-.97 2.51-.97 4.06v53.23c0 .41.03.79.07 1.15l.21 1.81h11.76c3.23 0 6.17-1.17 8.75-3.49zm-34.04 0c-1.26-.19-3.19-.39-5.57-.39h-10.88v.01h-6.84c.64-1.15.97-2.51.97-4.06v-53.23c0-1.55-.33-2.91-.97-4.06h4.46c-.64 1.15-.97 2.51-.97 4.06v53.23c0 .4.02.78.07 1.14l.21 1.81h11.03c3.45 0 6.68-1.35 9.59-4.01zm-36.15 0c-1.26-.19-3.19-.39-5.57-.39h-10.88v.01h-7.57c.6-1.07.97-2.35.97-3.42v-53.23c0-2.02-.3-3.49-.97-4.7h18.45c2.39 0 4.32-.21 5.58-.4l1.09 5.49c-2.91-2.66-6.13-4.01-9.58-4.01h-11.76l-.21 1.81c-.04.36-.07.75-.07 1.16v27.49l10.8-3.27c1.49-.36 2.52-.7 3.39-1.36v3.24c-.48-.21-.99-.32-1.56-.32-.56 0-1.19.1-1.94.3l-10.7 3.24v23.9c0 .41.02.79.07 1.15l.21 1.81h11.76c3.45 0 6.68-1.35 9.58-4.01zm-184.43-.05c-9.69 0-14.61-5.56-14.63-16.53v-38.83c.06-10.89 4.98-16.42 14.63-16.42 2.07 0 3.62.72 5.12 1.43 1.29.6 2.49 1.17 3.87 1.17.41 0 .81-.05 1.2-.16v4.55c-2.04-2.42-5.51-5.1-10.88-5.1-6.48 0-11 6.04-11 14.69v38.62c0 8.65 4.52 14.69 11 14.69 5.38 0 8.85-2.68 10.88-5.1v4.55c-.39-.1-.79-.16-1.2-.16-1.37 0-2.58.56-3.86 1.16-1.5.71-3.06 1.44-5.13 1.44zm289.95-.01c-1.27-.19-3.24-.4-5.65-.4h-11.02v.01h-7.67c.61-1.09.98-2.39.98-3.47v-53.95c0-2.05-.31-3.54-.98-4.76h18.7c2.42 0 4.38-.21 5.65-.4l1.11 5.58c-2.95-2.7-6.22-4.07-9.72-4.07h-11.92l-.21 1.83c-.04.37-.07.76-.07 1.18v27.85l10.94-3.32c1.51-.36 2.56-.71 3.44-1.38v3.3c-.48-.22-1-.32-1.58-.32-.57 0-1.21.1-1.96.31l-10.84 3.29v24.22c0 .41.03.8.07 1.17l.21 1.83h11.91c3.5 0 6.77-1.37 9.72-4.07zm-168.24-.33c.64-1.15.97-2.52.97-4.06v-53.22c0-1.55-.33-2.91-.97-4.06h9.05l1.49.03c2.23.01 6.52.41 10.29 2.98 2.82 1.92 6.18 5.75 6.18 13.03v2.04h.03v25.71l-.03 1.57c-.02 7.25-3.37 11.05-6.18 12.97-3.77 2.57-8.06 2.97-10.29 2.98l-2.04.01v.03h-8.5zm3.49-2.53h6.97c11.92 0 13.77-8.9 14.05-11.63.4-3.87.01-31.84-.11-33.01-.35-3.5-2.4-11.63-13.94-11.63h-6.94zm-19.53 2.53c.47-1.36.47-3.07 0-5.08l-.22-.96-1.98-9.41-2.39 1.24c-2.01 1.05-4.17 1.58-6.44 1.58-2.12 0-4.17-.48-6.09-1.41l-2.35-1.15-2.01 9.54-.14.57c-.47 2.02-.47 3.73.01 5.08h-4.34c1.34-2.04 2.04-4.42 2.28-5.38l.55-2.18-.1-.01 10.2-48.48c.42-2.18.39-3.96-.07-5.29h4.59c-.46 1.33-.49 3.09-.08 5.27l.21 1.08 10.39 49.37c.25 1.01.95 3.51 2.33 5.62zm-11.02-56.24-1.79 9.37-6.13 29.11 1.1.77c2.01 1.42 4.36 2.17 6.81 2.17 2.64 0 5.16-.88 7.27-2.54l1-.79-6.05-28.74-1.84-9.37zm-38.31 56.23c.64-1.15.97-2.51.97-4.06v-55.92h-4.63c-3.47 0-6.7 1.36-9.62 4.04l1.12-5.75c1.26.17 3.19.35 5.57.35h17.61c2.38 0 4.32-.18 5.57-.35l1.12 5.75c-2.92-2.68-6.15-4.04-9.61-4.04h-4.63v55.93c0 1.54.33 2.91.97 4.06h-4.44zm-30.69 0c.64-1.15.97-2.51.97-4.06v-53.23c0-1.55-.33-2.91-.97-4.06h4.46c-.65 1.15-.97 2.52-.97 4.06v53.23c0 1.55.33 2.91.97 4.06z" fill="#fff"></path></svg>
  </div>
  <div class="animated-text box1">
  <div>
    <span class="text1">Citadelle Gin,</span>
  </div>  
</div>
<div class="animated-text box2">
  <div>  
    <span class="text2">LE gin de france</span>
  </div>  
</div>
<div class="question-text">Avez-vous l’âge légal afin de consommer de l’alcool dans votre pays ?</div>
<div class="buttonDiv">
  <button type="button" id="buttonOui" class="button">
     <span class="buttonSpan buttonSpanOui">Oui</span>
  </button>
  <button type="button" id="buttonNon" class="button">
      <span class="buttonSpan buttonSpanNon">Non</span>
  </button></div>
</div>
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
    loadingText.innerHTML = "Loading...";
    setTimeout(() => loadingText.remove(), 4000);
    
    loadingCounter = document.createElement("div");
    loadingCounter.classList.add("counter");
    document.getElementById("root").appendChild(loadingCounter);
    // Számláló BY ZSOLT----------------------------
    var num = 1;                  
    function myLoop() {         
      setTimeout(function() {   
        loadingCounter.innerHTML = `${num}%`;   
        num++;                    
        if (num < 101) {           
          myLoop();             
        }                       
      }, 34)
    }
    myLoop(); 
    //---------------------------------------------

    setTimeout(() => loadingCounter.remove(), 4000);
}





function loadEvent() {
    stripesRunningAcrossTheScreen ();
    loadLandingPage();
    loading();
}

window.addEventListener("load", loadEvent);