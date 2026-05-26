/* =========================================================
   CATALOGUE DROPDOWN
========================================================= */

function toggleCatalogue(id){

  const dropdown =
  document.getElementById(id);

  if(dropdown.style.display === "flex"){

    dropdown.style.display = "none";

  }

  else{

    dropdown.style.display = "flex";
  }
}

/* =========================================================
   WHATSAPP DROPDOWN
========================================================= */

function toggleWhatsAppMenu(){

  const whatsappMenu =
  document.getElementById(
  "whatsappDropdown"
  );

  if(whatsappMenu.style.display === "flex"){

    whatsappMenu.style.display = "none";
  }

  else{

    whatsappMenu.style.display = "flex";
  }
}

/* =========================================================
   CLOSE DROPDOWN WHEN CLICKING OUTSIDE
========================================================= */

window.onclick = function(event){

  if(
    !event.target.matches('.catalogue-main-btn') &&
    !event.target.matches('.sub-btn')
  ){

    const dropdowns =
    document.getElementsByClassName(
    "catalogue-dropdown");

    for(let i = 0;
        i < dropdowns.length;
        i++){

      dropdowns[i].style.display =
      "none";
    }

    const subDropdowns =
    document.getElementsByClassName(
    "sub-dropdown");

    for(let i = 0;
        i < subDropdowns.length;
        i++){

      subDropdowns[i].style.display =
      "none";
    }
  }

  if(
    !event.target.matches(
    '.whatsapp-main-btn')
  ){

    const whatsapp =
    document.getElementById(
    "whatsappDropdown"
    );

    if(whatsapp){

      whatsapp.style.display =
      "none";
    }
  }
};

/* =========================================================
   SMOOTH SCROLL
========================================================= */

document.querySelectorAll(
'a[href^="#"]'
).forEach(anchor => {

  anchor.addEventListener(
  'click',
  function(e){

    e.preventDefault();

    document.querySelector(
    this.getAttribute('href')
    ).scrollIntoView({

      behavior:'smooth'
    });
  });
});