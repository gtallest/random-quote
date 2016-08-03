$(document).ready(function(){

//Change Quote when New quote button is clicked
$('#new-quote').on('click', function(e){
e.preventDefault();
hideQuote();
setTimeout(changeColor,300);
setTimeout(changeText,800);
setTimeout(showQuote,1000);

});

//Function for Random Integer to determine random quote and color
function getRandomInt(min, max) {
return Math.floor(Math.random() * (max - min)) + min;
}

//Function to change all colors on page
function changeColor() {
var colorArray = ["#333","#ff3030","#00f","#11ee88","#FF2EA2","#19A4AB","#FFE000"];
var randomColor = colorArray[getRandomInt(0, colorArray.length)];
$('body').animate({backgroundColor:randomColor},1000);
$('#big-quote').animate({color:randomColor},1000);
$('#quote-text').animate({color:randomColor},1000);
$('#quotee').animate({color:randomColor},1000);
$('#social-buttons a').animate({backgroundColor:randomColor},1000);
$('#project-description').animate({color:randomColor},100);
$('#project-description').animate({borderRightColor:randomColor},100);
$('#project-description').animate({borderBottomColor:randomColor},100);
$('#info-button').animate({color:randomColor},100);
$('#new-quote a').animate({backgroundColor:randomColor},1000);
}


var hideQuote = function() {
$("#quote").animate({opacity:0}, 500);
};
var showQuote = function() {
$("#quote").animate({opacity:1}, 500);
};

//Function to change quote text
var changeText = function() {

//Quotes array
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
"author":"Confucius Confuciusson"
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
},
{
  "quote":"Why are we still here? Just to suffer? Every night, I can feel my leg... And my arm... even my fingers... The body I've lost... the comrades I've lost... won't stop hurting... It's like they're all still there. You feel it, too, don't you? I'm gonna make them give back our past!",
  "author":"Benedict \"Kazuhira\" Miller"
},
{
  "quote":"I won't scatter your sorrow to the heartless sea. I will always be with you.",
  "author":"Punished \"Venom\" Snake"
},
{
  "quote":"Who did this?",
  "author":"James Franco"
}
];

//Gets new random quote with random integer
var randomQuote = quotes[getRandomInt(0, quotes.length)];

//Replace quote text and author on page and for twitter/tumblr share buttons
$("#quote-text").text(randomQuote.quote);
 $("#quotee").text(randomQuote.author);
$("#tweet-button").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" + "\"" + randomQuote.quote.replace(/\s/g,"%20") + "\" " + randomQuote.author.replace(/\s/g, "%20"));
$("#tumblr-button").attr("href", "https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=" + randomQuote.author.replace(/\s/g, "%20") + "&content=" + randomQuote.quote.replace(/\s/g, "%20"));
};

//Logic for the info button and project description.
//Keep track of initialTop and currentTop for responsive design.
//$('#project-description').css('top') will vary depending on screen size.
var initialTop = $('#project-description').css('top').split("p")[0];
var currentTop = $('#project-description').css('top').split("p")[0];
$('#info-button').on('click',function(){
  if(currentTop <= -365){
    $('#project-description').css('top','0');
    currentTop = 0;
    $('#info-button').css({/*'background':currentColor,'color':'white',*/'transform':'rotate(90deg)'});
  }
  else {
    $('#project-description').css('top',initialTop + 'px');
    currentTop = initialTop;
    $('#info-button').css({/*'background':'white','color':currentColor,*/'transform':'rotate(0deg)'});
    $('#info-button:hover').css('background','#7f52d2;')
  }
});

});
