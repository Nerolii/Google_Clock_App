const quotes = [
  {
    quote: "A lion doesn't concern himself with the opinions of a sheep.",
    author: "Anonymous",
  },
  {
    quote: "Act as if it were impossible to fail.",
    author: "Dorothea Brande",
  },
  {
    quote: "Weakness of attitude becomes weakness of character.",
    author: "Albert Einstein",
  },
  {
    quote: "It is a bad plan that admits of no modification.",
    author: "Publilius Syrus",
  },
  {
    quote: "Try not to become a man of success but rather try to become a man of value.",
    author: "Albert Einstein",
  },
  {
    quote: "Pride sullies the noblest character.",
    author: "Claudianus",
  },
  {
    quote: "Man as an individual is a genius. But men in the mass form the headless monster, a great, brutish idiot that goes where prodded.",
    author: "Charlie Chaplin",
  },
  {
    quote: "Respect a man, he will do the more.",
    author: "James Howell",
  },
  {
    quote: "I respect faith, but doubt is what gets you an education.",
    author: "Wilson Mizner",
  },
  {
    quote: "Only actions give life strength, only moderation gives it a charm.",
    author: "Jean Paul Richter",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = ` -${todaysQuote.author}`;