const quoteBox = document.getElementById("quote-box");
const button = document.getElementById("button");
const BASE_URL = "https://programming-quotes-api.herokuapp.com";

async function fetchRandomQuote() {
  try {
    const response = await fetch(`${BASE_URL}/quotes/random/lang/en`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

function quoteComponent(quote, author) {
  quoteBox.innerHTML = `
    <q class="quote">${quote}</q>
    <br /><br />
    <em class="author"> - ${author}</em>
    `;
}

button.addEventListener("click", async function () {
  try {
    const quote = await fetchRandomQuote();
    quoteComponent(quote.en, quote.author);
  } catch (error) {
    console.log(error);
  }
});
