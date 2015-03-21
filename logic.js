module.exports = {};

function calculateMove(game_state) {
  try {

    if(gameDecision.wantToBet()) {
      return gameDecision.getBetAmount();
    } else if(gameDecision.canWeKeepCards()) {
      // keep the cards if we can check
      // TODO: return current bet!!!
      return gameDecision.getCheckAmount();
    } else {

      //FOLD THE CARDS;
      return 0;
    }

    var bet = 110;
    var me = game_state["players"][game_state["in_action"]];
    var cards = me["hole_cards"];
    var first = cards[0];
    var second = cards[1];

    bet = get_minimum_raise(game_state) + bet;

    if(isNaN(parseInt(bet))){
      bet = 1100;
    }
    console.log("DO BET: "+bet);
    return bet;
  } catch(e) {
    dumpError(e);
    return 0;
  }
}; module.exports.calculateMove = calculateMove;

function get_minimum_raise(game_state){
  return parseInt(game_state["current_buy_in"] - game_state["players"][game_state["in_action"]][game_state["bet"]] + game_state["minimum_raise"]);
}

function dumpError(err) {
  if (typeof err === 'object') {
    if (err.message) {
      console.log('\nMessage: ' + err.message)
    }
    if (err.stack) {
      console.log('\nStacktrace:')
      console.log('====================')
      console.log(err.stack);
    }
  } else {
    console.log('dumpError :: argument is not an object');
  }
}