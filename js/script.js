/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

  /*
PLEASE READ
I've comleted the extra credit activities:
-Achivement: property added to two arrays in the Quotes array. Along with adding the
new field in HTML and CSS.
The random background colors is in the external js script: colorChange.js.
The auto refresh quotes is located in the external js file: quoteChnage.js
  */

// myQuote is declared here and used in the getRandomQuotefunction
let myQuote;
//Below is an Array of 5 quotes, each quote contains at least a quote and cource objects.
const quotes = [
  {
    quote:`Difficulties break some men but make others.
            No axe is sharp enough to cut the soul of a sinner who keeps on trying,
            one armed with the hope that he will rise even in the end.`,
    source:`Nelson Mandela`,
    citation:`Leter to Winnie Mandela`,
    year:`1975`,
    achievement:`First Black Presidnt of South Africa`
  },
  {
    quote:`Knowing where you came from is no less important than knowing where you are going`,
    source:`Neil deGrasse Tyson`,
    citation:`Natural History Magazine`,
    year:`September 2003`
  },
  {
    quote:`Treatment without prevention is simply unsustainable`,
    source:`Bill Gates`
  },
  {
    quote:`Stumbling is not falling`,
    source:`Malcom X`
  },
  {
    quote:`A man who dares to waste one hour of time has not discovered the value of life`,
    source:`Charles Darwin`,
    citation:`The Life and Letters of Charles Darwin`,
    year:`1897`,
    achievement:`Independently concieved the theory of natural selection`
  }
];
// Tested: console.log(quotes); works well

/*The getRandomQuote function below. Firstly creates a random number. The
random number is then used to select an array from the quotes array above with
the matching index value. I.E if the random number was 3 it would selcted the
array at index value 3. The array is stored in the myQuote and returned when the
function is called.
*/

function getRandomQuote (array) {
  let randomNumberMaker = Math.floor(Math.random() * array.length);
  myQuote = array[randomNumberMaker];
  return myQuote
}
// tested console.log( getRandomQuote(quotes) ); All quotes log to console in random order

/* The printQuote function calls the getRandomQuote function and stores it in the variable quoteList.
  The htmlMessage is a series of string literials, variables and .notication used to build up an html message that is
  returned as one whole message. In the p class elements  the quotelist varaible is called and the . notication
  is used to retrive the .quote and source objects. Next 2 if conditions are used to test if a quote
  as either a citation or object. If so a span element is added, the quotelist variable is called
  and .notication is used to call the citation and year objects which is then passed back to the
  HTMLmessage. Lasttly the full HTML is returned when the action is called.*/

function printQuote(){
  let quoteList = getRandomQuote(quotes);
  let htmlMessage = `<p class="quote">${quoteList.quote}</p>
                      <p class="source">${quoteList.source}`;
  if(quoteList.citation){
      htmlMessage += `<span class="citation">${quoteList.citation}</span>`
  }
  if(quoteList.year){
      htmlMessage += `<span class="year">${quoteList.year}</span>`
  }
  if(quoteList.achievement){
      htmlMessage += `<span class="achievement">${quoteList.achievement}</span>`
  }
  htmlMessage += `</p>`
  return document.getElementById('quote-box').innerHTML = htmlMessage;
}
//Tested console.log( printQuote() ); quotes are logging to console randomly and conditional statements are working
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
