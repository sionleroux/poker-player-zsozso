var stateProvider = require("./stateProvider");
var logger = require("./../logger/logger");
module.exports = (function(){
	//TODO:

	this.getBetAmount = function() {
		var bet = 500;
		//get bet amount
		//calculation and some calculation logic goes here
		return bet;
	};

	this.getCheckAmount = function() {
		//TODO:
		//return stateProvider.getCheckAmount()
		return 10;
	};

  //check my card are good enought to keep or raise
  //preflop tactic
  this.cardRankGood = function(){
    var my_cards = stateProvider.getMyCards();
    var flop_cards = stateProvider.getFlopCards();
    logger(my_cards);
    logger(flop_cards);
    console.log("cards", my_cards);
    console.log("cards", flop_cards);
    if(isCardsGoodBySuit(my_cards[0]) || isCardsGoodByRank(my_cards[1])){
      logger("my cards GOOD");
      return true;
    }
    logger("my cards BAD");
    return false;
  };



	return this;
})();


function isCardsGoodBySuit(card1, card2) {
  if (card1 == card2) {
    return true;
  }
  return false;
}

function isCardsGoodByRank(card1, card2) {
  if (card1 == card2) {
    return true;
  }
  return false;
}