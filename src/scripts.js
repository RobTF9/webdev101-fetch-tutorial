const quoteBox = document.getElementById("random-quote-box");
const button = document.getElementById("button");
const quoteList = document.getElementById("quote-list");

const BASE_URL = "https://programming-quotes-api.herokuapp.com";

const spinner = `<div id="spinner"></div>`;

function quoteComponent(quote, author) {
  return `
    <q class="quote">${quote}</q>
    <br /><br />
    <em class="author"> - ${author}</em>
    `;
}

async function getFromApi(url) {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}

button.addEventListener("click", async function () {
  try {
    quoteBox.innerHTML = spinner;
    const quote = await getFromApi(`${BASE_URL}/quotes/random/lang/en`);
    quoteBox.innerHTML = quoteComponent(quote.en, quote.author);
  } catch (error) {
    console.log(error);
  }
});

async function loadQuotesIntoList() {
  try {
    quoteList.innerHTML = spinner;
    const quotes = await getFromApi(`${BASE_URL}/quotes`);

    let html = ``;

    quotes.forEach((quote) => {
      html += `<li>${quoteComponent(quote.en, quote.author)}</li>`;
    });

    quoteList.innerHTML = html;
  } catch (error) {
    console.log(error);
  }
}
loadQuotesIntoList();
