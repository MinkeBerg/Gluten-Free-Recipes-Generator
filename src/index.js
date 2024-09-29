function displayRecipie(response) {
  console.log("recipie generated");
  new Typewriter("#recipie", {
    strings: response.data.value,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateRecipie(event) {
  event.preventDefault();

  let instructionInput = document.querySelector("#user-instruction");
  let apiKey = "39f42bod6b341c40f416ecb0tf021fa4";
  let prompt = `Generatie a glutenfree recipie about ${instructionInput.value}`;
  let context =
    "User instructions are: You are a glutenfree recipie expert and love to write easy, simple, modern glutenfree recipies. Your mission is to generate easy, simple, delicious glutenfree recipies in basic HTML. Make sure to follow the user instructions";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=&{prompt}&context=&{context}&key=&{key}=${apiKey}`;

  console.log("generating recipie");
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);
  axios.get(apiUrl).then(displayRecipie);
}

let recipieFormElement = document.querySelector("#recipie-generator-form");

recipieFormElement.addEventListener("submit", generateRecipie);
