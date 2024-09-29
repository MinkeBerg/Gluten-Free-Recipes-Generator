function generateRecipie(event) {
  event.preventDefault();

  let recipieElement = document.querySelector("#recipie");

  new Typewriter("#recipie", {
    strings: ["here will come the recipie"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let recipieFormElement = document.querySelector("#recipie-generator-form");

recipieFormElement.addEventListener("submit", generateRecipie);
