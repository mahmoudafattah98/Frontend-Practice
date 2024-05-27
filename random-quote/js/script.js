let quoteText = document.querySelector("#quotetext")
let quoteSource = document.querySelector("#quotesource")
let quoteButton = document.querySelector("#quotebutton")

// const quotes = {
//     quoteNum: 1,
//     quote1: "Be yourself; everyone else is already taken.",
//     quote2: "So many books, so little time.",
//     quote3: "A room without books is like a body without a soul.",
//     quote4: "You only live once, but if you do it right, once is enough.",



//     auth1: "Oscar Wilde",
//     auth2: "Frank Zappa",
//     auth3: "Marcus Tullius Cicero",
//     auth4: "Mae West"
// }

const quotes2 = {
    data: [{ id: 101, description: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { id: 102, description: "So many books, so little time.", author: "Frank Zappa" },
    { id: 103, description: "A room without books is like a body without a soul.", author: "Marcus Tullius Cicero" },
    { id: 104, description: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { id: 105, description: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { id: 106, description: "In three words I can sum up everything I've learned about life: it goes on.", author: "Robert Frost" },
    { id: 107, description: "If you tell the truth, you don't have to remember anything.", author: "Mark Twain" }

    ]
}

function newQuote2() {
    let rand = Math.floor(Math.random() * quotes2.data.length)
    quoteText.innerHTML = quotes2.data[rand].description
    quoteSource.innerHTML = quotes2.data[rand].author
}


// function newQuote() {
//     if (quotes.quoteNum == 1) {
//         quoteText.innerHTML = quotes.quote1;
//         quoteSource.innerHTML = quotes.auth1;
//         quotes.quoteNum = 2
//     }
//     else if (quotes.quoteNum == 2) {
//         quoteText.innerHTML = quotes.quote2;
//         quoteSource.innerHTML = quotes.auth2;
//         quotes.quoteNum = 3
//     }
//     else if (quotes.quoteNum == 3) {
//         quoteText.innerHTML = quotes.quote3;
//         quoteSource.innerHTML = quotes.auth3;
//         quotes.quoteNum = 4
//     }
//     else if (quotes.quoteNum == 4) {
//         quoteText.innerHTML = quotes.quote4;
//         quoteSource.innerHTML = quotes.auth4;
//         quotes.quoteNum = 1
//     }

// }