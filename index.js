const spinner = document.getElementById("js-spinner");
const newQuoteButton = document.querySelector('#js-new-quote');
newQuoteButton.addEventListener('click', getQuote);

const endpoint = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';



async function getQuote() {

     // remove the "hidden" class on the spinner
  spinner.classList.remove('hidden');
     // disable the quote button
  newQuoteButton.disabled = true;


  try {
    const response = await fetch(endpoint)
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    //console.log(json.quotes[0].text);
    displayQuote(json.quotes[0].text);
  } catch (err) {
    console.log(err)
    alert('Failed to fetch new quote');
  }finally {
    // enable the quote button
    newQuoteButton.disabled = false;
    // add the "hidden" class back again
    spinner.classList.add('hidden');
  }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
  }




