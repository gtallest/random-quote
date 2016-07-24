$(document).ready(function(){

$('#new-quote').on('click', function(e){
e.preventDefault();
hideQuote();
setTimeout(changeColor,300);
setTimeout(changeText,800);
setTimeout(showQuote,1000);






});

function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

function changeColor() {

var colorArray = ["#333","#ff3030","#00f","#11ee88","#FF2EA2","#19A4AB","#FFE000"];
var randomColor = colorArray[getRandomInt(0, colorArray.length)];
$('body').animate({backgroundColor:randomColor},1000);
$('#big-quote').animate({color:randomColor},1000);
$('#quote-text').animate({color:randomColor},1000);
$('#quotee').animate({color:randomColor},1000);
$('#social-buttons a').animate({backgroundColor:randomColor},1000);
$('#new-quote a').animate({backgroundColor:randomColor},1000);
}
var hideQuote = function() {
$("#quote").animate({opacity:0}, 500);
};
var showQuote = function() {
$("#quote").animate({opacity:1}, 500);
};

var changeText = function() {

var quotes = [
{
  "quote":"Your a wizard 'arry.",
  "author":"Hagrid"
},
{
  "quote":"Yeah? Well, you know that's just like, uh, your opinion, man.",
  "author":"The Dude"
},
  {
  "quote":"The quick brown fox jumped over the lazy dog?",
  "author":"Confucius"
  },
  {
    "quote":"I am the dragon, Dracul! I am the Prince of Darkness... I am and will be, forever, a thorn in His side! That... is my vengeance!",
    "author":"Gabriel Belmont"
  },
  {
"quote": "You call- you nicknamed me Pistol, and I just called you.. Jobin. Means nothing. I don- I'm drunk. I'm gonna call a cab.",
"author": "Peter Klaven"
},
  {
    "quote":"Ahh Kos... or some say Kosm.",
    "author":"Micolash, Host of the Nightmare"
  },
  {
    "quote":"But, use this, to summon one another as spirits, cross the gaps between the worlds, and engage in jolly co-operation!",
    "author":"Solaire of Astora"
  }
];
var randomQuote = quotes[getRandomInt(0, quotes.length)];

$("#quote-text").text(randomQuote.quote);
 $("#quotee").text(randomQuote.author);
$("#tweet-button").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + "\"" + randomQuote.quote.replace(/\s/g,"%20") + "\" " + randomQuote.author.replace(/\s/g, "%20"));
$("#tumblr-button").attr("href", "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + randomQuote.author.replace(/\s/g, "%20") + "&content=" + randomQuote.quote.replace(/\s/g, "%20"));
};

});
