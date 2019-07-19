
const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
let cardOne = cards[0];
let cardTwo = cards[1];



cardsInPlay.push(cardOne);
cardsInPlay.push(cardTwo);

console.log("The user flipped " + cardsInPlay[0]);
console.log("The user flipped " + cardsInPlay[1]);

if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("You found a match!");
	} else {
		alert("sorry try again");
	}
}