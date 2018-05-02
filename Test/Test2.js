//input Data

//for convenience, please ignore me calling people "item";

var france = [ {item: "Niccolo Machiavelli", fact: "Human nature is bad <br> Government should be effective"},
               {item: "Charles VII", fact: 'King of france (New Monarch) <br> gabelle(salt) & talle(land)'},
               {item: "Louis XI", fact: '"Spider King" <br> Raised money through commerce'},
               {item: "Henry VII", fact: 'started French Tudor House <br> Court of Star Chamber, Justices of the Peace'},
               {item: "Henry IV", fact: 'Edict of Nantes <br> "Paris is worth a mass"'}, 
               {item: "Cardinal Richelieu", fact: 'intendant system; france = 32 districts'},
               {item: "Louis XIV", fact: '1st Absolutist <br> Divine Right: One Law, One Religion, One King'},
               {item: "Pragmatic Sanction of Bourges", fact: 'Charles VII(1438) <br> Give French crown power to elect bishops'},
               {item: "Palace of versaille", fact: 'Build by the people for Louis XIV <br> A way to domesticate nobles'},
               {item: "St. Bartholomew's Day Massacre", fact: 'Union between Margaret of Valois and Henry of Navarre <br> Catholic killed Protestants'}, ];
for(i=0; i<france.length; i++){ france[i].trueDeck = "France"; }

var england = [ {item: "Henry VIII", fact: 'Supremacy Act(1534) <br> Create an Anglican Church <br> Six wives'},
                {item: "Elizabeth I", fact: 'Woman ruler; settle English religious confict'}, 
                {item: "James I", fact: 'Scottish king of England <br>King James Bible'},
                {item: "Charles I", fact: 'forced Catholicism on England; backfired'},
                {item: "Cromwell", fact: 'Military leader of English Civil War <br> Protectorate(military style)'}, 
                {item: "Glorious Revolution", fact: 'Brought down Charles II for William of Orange'}, ];
for(i=0; i<england.length; i++){ england[i].trueDeck = "England"; }

var prussia = [ {item: "Frederick William the Great Elector", fact: 'Unite Prussia'},
                {item: "Frederick William I", fact: "'Soldier's King <br> improve military, bureaucracy, forced Junkers into army <br> Don't like to lose his blue boys"},
                {item: "Ivan the Terrible", fact: 'Russian King <br> Ties noble, serfs, and traders to their land'}, ];
for(i=0; i<prussia.length; i++){ prussia[i].trueDeck = "Prussia"; }

var russia = [ {item: "Pragmatic Sanction(1713)", fact: 'BY Charles VI to allow his daughter, Maria Theresa to the throne'},
               {item: "Times of Trouble", fact: 'Cause: heirless death of tsar Theodore <br> Fighting until Michael Romanov was elected upon common consent'}, ];
for(i=0; i<russia.length; i++){ russia[i].trueDeck = "Russia"; }

var italy = [ {item: "Signori", fact: 'One man rule by condotteri <br> Milan: Sforza Family'},
              {item: "Oligarchies", fact: 'elite merchant/noble <br> Florence: Medici Family'}, ];
for(i=0; i<italy.length; i++){ italy[i].trueDeck = "Italy"; }

var spain = [ {item: "Ferdinand & Isabella", fact: 'Unite Spain(New Monarch) <br> Inquisition of Jews by government'}, ];
for(i=0; i<spain.length; i++){ spain[i].trueDeck = "Spain"; }


var politic = [ {item: "Leviathan", fact: 'Thomas Hobbes(1651) <br> King have power to prevent chaos'},
                {item: "Second Treatise of Civil Government", fact: 'John Locke(1690) <br> Life, Liberty, Property, Rebellion'},
                {item: "Mercantilism", fact: 'Economy profit the state <br> france: Colbert <br> England: Cromwell'},
                {item: "Absolutism", fact: 'absolute sovereignty <br> Possible through tax, army, and bureaucracy'}, ];
for(i=0; i<politic.length; i++){ politic[i].trueDeck = "Politic"; }

var war = [ {item: "", fact: ''},
            {item: "", fact: ''},
            ];
for(i=0; i<war.length; i++){ war[i].trueDeck = "War"; }

var religion = [ {item: "", fact: ''},
            {item: "", fact: ''},
            ];
for(i=0; i<religion.length; i++){ religion[i].trueDeck = "Religion"; }


var agriculture = [ {item: "", fact: ''},
            {item: "", fact: ''},
            ];
for(i=0; i<agriculture.length; i++){ agriculture[i].trueDeck = "Agriculture"; }

var art = [ {item: "", fact: ''},
            {item: "", fact: ''},
            ];
for(i=0; i<art.length; i++){ art[i].trueDeck = "Art"; }

var flagged = [];
var allDeck = [france, england, prussia, russia, italy, spain, politic, war, religion, agriculture, art, "flagged", "everything"];
for(i=0; i<allDeck.length-2; i++){
for(n=0; n<allDeck[i].length; n++){ allDeck[i][n].flag = false; allDeck[i][n].no = n; allDeck[i][n].deck = i; }
}

//this code can be altered to make multiple button   
document.getElementById("buttonSpace").innerHTML = "<button onclick='nextDeck()' class='normalButton' id='deckButton[0]'>Deck: " + allDeck[0][0].trueDeck; + "</button>";  
document.getElementById("buttonSpace").innerHTML += "<button onclick='faceFlipper()' class='normalButton' id='faceButton'>Side: Front</button>";
document.getElementById("buttonSpace").innerHTML += "<button onclick='flagCard()' class='normalButton' id='flagButton'>Flag</button>";
document.getElementById("buttonSpace").innerHTML += "<button onclick='shuffleDeck()' class='normalButton' id='shuffleButton'>Shuffle: False</button>";
document.getElementById("buttonSpace").innerHTML += "<button onclick='newCard()' class='normalButton' id='nextButton'>Next</button>";    
//for(i=1; i<allDeck.length; i++){ document.getElementById("buttonSpace").innerHTML = "<button onclick='nextDeck()' class='deckButton' id='deckButton[" + i + "']>" + allDeck[" + 0 + "].deck; + "</button>"; }

var deckWasSwitched = false;

/////////////////////
cardDeck = clone(allDeck[0]); /*create object only, no array.*/ 
/////////////////////
for(i=0; i<cardDeck.length; i++){ cardDeck[i].no = i; }
//var cardDeck = france;  
console.log(cardDeck.length);  // how come Object assign allow us to get the object, but not the length?

var maxCard = cardDeck.length;
var amountOfCard = maxCard;
var flagDeterminer = 1;
var currentFCard = 0;

var flipStatus = "question";          
var faceStatus ="front";

var shuffleStatus = false;
if(shuffleStatus == false){ var currentCard = 0; }
else{ var currentCard = Math.floor(Math.random()*amountOfCard); }

var n = 0;
var i = 0;
document.getElementById("flash-card").innerHTML = cardDeck[currentCard].item;

function nextDeck(){
  n = allDeck.shift();
  allDeck[allDeck.length] = n;
  if(allDeck[0] == "everything"){ document.getElementById("deckButton[0]").innerHTML = "Deck: Everything"; 
                                  n = allDeck[1];
                                  for(i=2; i<allDeck.length; i++){ 
                                    if(allDeck[i] != "flagged"){ n = n.concat(allDeck[i]); } 
                                    else if(flagged.length != 0){ n = n.concat(flagged); }
                                  }
                                 cardDeck = clone(n);
                                }
  else if(allDeck[0] == "flagged" && flagged.length != 0){ document.getElementById("deckButton[0]").innerHTML = "Deck: Flagged"; 
                                  n = flagged;
                                  cardDeck = clone(n);
                                }
  else if(allDeck[0] == "flagged" && flagged.length == 0){ nextDeck(); }
  else{ document.getElementById("deckButton[0]").innerHTML = "Deck: " + allDeck[0][0].trueDeck; cardDeck = clone(allDeck[0]); }
  deckWasSwitched = true;
  newCard();     
}

function flipCard(){  
  if(flipStatus == "question"){ document.getElementById("flash-card").innerHTML = cardDeck[currentCard].fact; flipStatus = "answer"; }
  else{ document.getElementById("flash-card").innerHTML = cardDeck[currentCard].item; flipStatus = "question"; }
}

function newCard(){
  document.getElementById("flagButton").innerHTML = "Flag";
  document.getElementById("flagButton").setAttribute("style", "color:white; background-color: lightcoral;");
  
  if(deckWasSwitched == true){ deckWasSwitched = false; }
  else{ cardDeck.splice(currentCard, 1); }
  currentCard = 0;  
  amountOfCard = cardDeck.length;    
  if(amountOfCard != 0){
    
    if(allDeck[0] != "flagged" && flagged.length != 0){
      if(Math.random() < 0.2){ currentFCard = Math.floor(Math.random()*flagged.length); currentCard = amountOfCard; cardDeck[currentCard] = flagged[currentFCard]; console.log(currentCard); }  
      else if(shuffleStatus == false){}
      else{ currentCard = Math.floor(Math.random()*amountOfCard); }
    }
    else if(shuffleStatus == false){}
    else{ currentCard = Math.floor(Math.random()*amountOfCard); }
  }
  else{
    /////////////////////
    if(allDeck[0] == "everything" || allDeck[0] == "flagged"){ cardDeck = clone(n); }
    else{ cardDeck = clone(allDeck[0]); }
    /////////////////////
    maxCard = cardDeck.length;
    amountOfCard = maxCard;
    if(shuffleStatus == false){}
    else{ currentCard = Math.floor(Math.random()*amountOfCard); }
  }  
  if(cardDeck[currentCard].flag == true){ 
    document.getElementById("flagButton").innerHTML = "Unflag";
    document.getElementById("flagButton").setAttribute("style", "color:lightcoral; background-color: white;");
    for(i=0; i<flagged.length; i++){
      if(cardDeck[currentCard].no == flagged[i].no && cardDeck[currentCard].deck == flagged[i].deck){ currentFCard = i; }
    }
  }
  if(faceStatus == "front"){ document.getElementById("flash-card").innerHTML = cardDeck[currentCard].item; flipStatus = "question"; }
  else{ document.getElementById("flash-card").innerHTML = cardDeck[currentCard].fact; flipStatus = "answer"; }
}

function shuffleDeck(){
  if(shuffleStatus == false){ shuffleStatus = true; document.getElementById("shuffleButton").innerHTML = "Shuffle: True"; }
  else{ shuffleStatus = false; document.getElementById("shuffleButton").innerHTML = "Shuffle: False"; }
}

function flagCard(){
  if(cardDeck[currentCard].flag == false){
    cardDeck[currentCard].flag = true;
    /////////////////////  
    if(allDeck[0] == "everything"){ allDeck[cardDeck[currentCard].deck+1][cardDeck[currentCard].no].flag = true; }
    else if(allDeck[0] == "flagged"){ allDeck[cardDeck[currentCard].deck+2][cardDeck[currentCard].no].flag = true; }
    else{ allDeck[cardDeck[currentCard].deck][cardDeck[currentCard].no].flag = true; }
    /////////////////////
    currentFCard = flagged.length;
    flagged[flagged.length] = clone(cardDeck[currentCard]);  
    document.getElementById("flagButton").innerHTML = "Unflag";
    document.getElementById("flagButton").setAttribute("style", "color:lightcoral; background-color: white;");
  }
  /*else if(flagged[currentFCard].flag == true){  
    for(i=0; i<cardDeck.length; i++){
      if(flagged[currentFCard].no == cardDeck[i].no){ cardDeck[i].flag = false; }
    }
    /////////////////////  
    if(deck == "france"){ france[flagged[currentFCard].no].flag = false; }
    /////////////////////  
    flagged.splice(currentFCard, 1); 
    document.getElementById("flagButton").innerHTML = "Flag";
    document.getElementById("flagButton").setAttribute("style", "color:white; background-color: lightcoral;");
  }*/
  else if(cardDeck[currentCard].flag == true){  
    cardDeck[currentCard].flag = false;
    /////////////////////  
    if(allDeck[0] == "everything"){ allDeck[cardDeck[currentCard].deck+1][cardDeck[currentCard].no].flag = false; }
    else if(allDeck[0] == "flagged"){ allDeck[cardDeck[currentCard].deck+2][cardDeck[currentCard].no].flag = false; }
    else{ allDeck[cardDeck[currentCard].deck][cardDeck[currentCard].no].flag = false; }
    /////////////////////  
    flagged.splice(currentFCard, 1); 
    document.getElementById("flagButton").innerHTML = "Flag";
    document.getElementById("flagButton").setAttribute("style", "color:white; background-color: lightcoral;");
    if(allDeck[0] == "flagged" && flagged.length == 0){ nextDeck(); }  
  }
}

function faceFlipper(){
  if(faceStatus == "front"){ faceStatus = "back"; document.getElementById("faceButton").innerHTML = "Side: Back"; }
  else{ faceStatus = "front"; document.getElementById("faceButton").innerHTML = "Side: Front"; }  
}

document.addEventListener('keypress',keyboardControl)
function keyboardControl(event) {       
  var s = event.keyCode;
  if(s == 122){ flagCard(); } // letter z  
  else if(s == 120){ flipCard(); } // letter x
  else if(s == 99){ newCard(); } // letter c
  else if(s == 32){ nextDeck(); } // space
}
// thanks StackFlow

function clone(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}