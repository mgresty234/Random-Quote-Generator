// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes
// Array of objects
var quotes = [
    {
        name: "Kenneth Branagh",
        quote: "Lighten up, just enjoy life, smile more, laugh more, and don't get so worked up about things."
    },
    {
        name: "Norman Cousins", 
        quote: "Death is not the greatest loss in life. The greatest loss is what dies inside us while we live."
    },
    {
        name: "Yoko Ono", 
        quote: "Smile in the mirror. Do that every morning and you'll start to see a big difference in your life."
    },
    {
        name: "Carol Burnett", 
        quote: "Only I can change my life. No one can do it for me."
    },
    {
        name: "Charles R. Swindoll", 
        quote: "Life is 10% what happens to you and 90% how you react to it."
    }
];
// Global variable
let newQuote;
// Create the getRandomQuuote function and name it getRandomQuote
function getRandomQuote (array) {
    // Generates random quote
    let generate = Math.floor(Math.random() * array.length);
    // This generates new html with the name and quote
    newQuote = `<p class="quote"> ${quotes[generate].quote} </p>
    <p class="source"> ${quotes[generate].name}</p>`;
    return newQuote;
}


// Create the printQuote funtion and name it printQuote
function printQuote () {
    getRandomQuote(quotes);
    // This destroys the existing html and adds new html with the newQuote
    document.getElementById('quote-box').innerHTML = newQuote;
};


// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
