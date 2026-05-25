console.log("Sri Shyam Marketing Website Loaded");
function toggleWhatsAppMenu() {

  const dropdown =
    document.getElementById("whatsappDropdown");

  if (dropdown.style.display === "flex") {

    dropdown.style.display = "none";

  } else {

    dropdown.style.display = "flex";

  }

}
function toggleCatalogue(id) {

  const dropdown =
    document.getElementById(id);

  if (dropdown.style.display === "flex") {

    dropdown.style.display = "none";

  } else {

    dropdown.style.display = "flex";

  }

}