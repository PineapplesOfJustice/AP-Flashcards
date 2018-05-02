//for convenience, please ignore me calling people "item";

var politic = [ {item: "Niccolo Machiavelli", fact: "Human nature is bad <br> Government should be effective"},
               {item: "Charles VII", fact: 'King of France (New Monarch) <br> gabelle(salt) & talle(land)'},
               {item: "Louis XI", fact: '"Spider King" <br> Raised money through commerce'},
               {item: "Henry VII", fact: 'started French Tudor House <br> Court of Star Chamber, Justices of the Peace'},
               {item: "Ferdinand & Isabella", fact: 'Unite Spain(New Monarch) <br> Inquisition of Jews by government'},
               {item: "Henry VIII", fact: 'Supremacy Act(1534) <br> Create an Anglican Church <br> Six wives'},
               {item: "Elizabeth I", fact: 'Woman ruler; settle English religious confict'}, 
               {item: "Henry IV", fact: 'Edict of Nantes <br> "Paris is worth a mass"'}, 
               {item: "Cardinal Richelieu", fact: 'intendant system; France = 32 districts'},
               {item: "Louis XIV", fact: '1st Absolutist <br> Divine Right: One Law, One Religion, One King'},
               {item: "James I", fact: 'Scottish king of England <br>King James Bible'},
               {item: "Charles I", fact: 'forced Catholicism on England; backfired'},
               {item: "Cromwell", fact: 'Military leader of English Civil War <br> Protectorate(military style)'},
               {item: "Frederick William the Great Elector", fact: 'Unite Prussia'},
               {item: "", fact: ''},
               {item: "", fact: ''},
               {item: "", fact: ''},
               {item: "", fact: ''},
               {item: "Pragmatic Sanction of Bourges", fact: 'Charles VII(1438) <br> Give French crown power to elect bishops'},
               {item: "St. Bartholomew's Day Massacre", fact: 'Union between Margaret of Valois and Henry of Navarre <br> Catholic killed Protestants'},
               {item: "Leviathan", fact: 'Thomas Hobbes(1651) <br> King have power to prevent chaos'},
               {item: "Mercantilism", fact: 'Economy profit the state <br> France: Colbert <br> England: Cromwell'},
               {item: "Palace of versaille", fact: 'Build by the people for Louis XIV <br> A way to domesticate nobles'},
               {item: "Glorious Revolution", fact: 'Brought down Charles II for William of Orange'},
               {item: "Pragmatic Sanction(1713)", fact: 'BY Charles VI to allow his daughter, Maria Theresa to the throne'},
               {item: "", fact: ''},
               {item: "Signori", fact: 'One man rule by condotteri <br> Milan: Sforza Family'},
               {item: "Oligarchies", fact: 'elite merchant/noble <br> Florence: Medici Family'},
               {item: "Absolutism", fact: 'absolute sovereignty <br> Possible through tax, army, bureaucracy, and citizen obedience'},
               {item: "Second Treatise of Civil Government", fact: 'John Locke(1690) <br> Life, Liberty, Property, Rebellion'},
               {item: "", fact: ''},
               {item: "", fact: ''},
               {item: "", fact: ''},
               {item: "", fact: ''},
               {item: "", fact: ''},
               {item: "", fact: ''},
               {item: "", fact: ''},
               {item: "", fact: ''},
               {item: "", fact: ''},
             ];
for(i=0; i<politic.length; i++){ politic[i].flag = false; }
var flagged = [];


/////////////////////
var deck = "politic";
if(deck == "politic"){ var cardDeck = clone(politic); /*create object only, no array.*/ }
/////////////////////
for(i=0; i<cardDeck.length; i++){ cardDeck[i].no = i; }
//var cardDeck = politic;  
console.log(cardDeck.length);  // how come Object assign allow us to get the object, but not the length?

var maxCard = cardDeck.length;
var amountOfCard = maxCard;
var flagDeterminer = 1;
var currentFCard = Math.floor(Math.random()*flagged.length);

var flipStatus = "question";          
var faceStatus ="front";

var shuffleStatus = "organized";
if(shuffleStatus == "organized"){ var currentCard = 0; }
else{ var currentCard = Math.floor(Math.random()*amountOfCard); }

var i = 0;
document.getElementById("flash-card").innerHTML = cardDeck[currentCard].item;

function flipCard(){  
  if(flipStatus == "question"){ document.getElementById("flash-card").innerHTML = cardDeck[currentCard].fact; flipStatus = "answer"; }
  else{ document.getElementById("flash-card").innerHTML = cardDeck[currentCard].item; flipStatus = "question"; }
}

function newCard(){
  document.getElementById("flagButton").innerHTML = "Flag";
  document.getElementById("flagButton").setAttribute("style", "color:white; background-color: lightcoral;");
    
  cardDeck.splice(currentCard, 1);
  currentCard = 0;  
  amountOfCard = cardDeck.length;    
  if(amountOfCard != 0){
    
    if(deck != "flagged" && flagged.length != 0){
      if(Math.random() < 0.2){ currentFCard = Math.floor(Math.random()*flagged.length); currentCard = amountOfCard; cardDeck[currentCard] = flagged[currentFCard]; console.log(currentCard); }  
      else if(shuffleStatus == "organized"){}
      else{ currentCard = Math.floor(Math.random()*amountOfCard); }
    }
    else if(shuffleStatus == "organized"){}
    else{ currentCard = Math.floor(Math.random()*amountOfCard); }
  }
  else{
    /////////////////////
    if(deck == "politic"){ cardDeck = clone(politic); }
    /////////////////////
    for(i=0; i<cardDeck.length; i++){ cardDeck[i].no = i; }
    maxCard = cardDeck.length;
    amountOfCard = maxCard;
    if(shuffleStatus == "organized"){}
    else{ currentCard = Math.floor(Math.random()*amountOfCard); }
  }  
  if(cardDeck[currentCard].flag == true){ 
    document.getElementById("flagButton").innerHTML = "Unflag";
    document.getElementById("flagButton").setAttribute("style", "color:lightcoral; background-color: white;");
  }
  if(faceStatus == "front"){ document.getElementById("flash-card").innerHTML = cardDeck[currentCard].item; flipStatus = "question"; }
  else{ document.getElementById("flash-card").innerHTML = cardDeck[currentCard].fact; flipStatus = "answer"; }
}

function shuffleDeck(){
  if(shuffleStatus == "organized"){ shuffleStatus = "shuffled"; document.getElementById("shuffleButton").innerHTML = "Organize"; }
  else{ shuffleStatus = "organized"; document.getElementById("shuffleButton").innerHTML = "Shuffle"; }
}

function flagCard(){
  if(cardDeck[currentCard].flag == false){
    cardDeck[currentCard].flag = true;
    /////////////////////  
    if(deck == "politic"){ politic[cardDeck[currentCard].no].flag = true; }
    /////////////////////
    currentFCard = flagged.length;
    flagged[flagged.length] = cardDeck[currentCard];  
    document.getElementById("flagButton").innerHTML = "Unflag";
    document.getElementById("flagButton").setAttribute("style", "color:lightcoral; background-color: white;");
  }
  /*else if(flagged[currentFCard].flag == true){  
    for(i=0; i<cardDeck.length; i++){
      if(flagged[currentFCard].no == cardDeck[i].no){ cardDeck[i].flag = false; }
    }
    /////////////////////  
    if(deck == "politic"){ politic[flagged[currentFCard].no].flag = false; }
    /////////////////////  
    flagged.splice(currentFCard, 1); 
    document.getElementById("flagButton").innerHTML = "Flag";
    document.getElementById("flagButton").setAttribute("style", "color:white; background-color: lightcoral;");
  }*/
  else if(cardDeck[currentCard].flag == true){  
    cardDeck[currentCard].flag = false;
    /////////////////////  
    if(deck == "politic"){ politic[cardDeck[currentCard].no].flag = false; }
    /////////////////////  
    flagged.splice(currentFCard, 1); 
    document.getElementById("flagButton").innerHTML = "Flag";
    document.getElementById("flagButton").setAttribute("style", "color:white; background-color: lightcoral;");
  }
}

function faceFlipper(){
  if(faceStatus == "front"){ faceStatus = "back"; document.getElementById("faceButton").innerHTML = "Side: Back"; }
  else{ faceStatus = "front"; document.getElementById("faceButton").innerHTML = "Side: Front"; }  
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