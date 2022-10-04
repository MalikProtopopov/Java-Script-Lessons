
let sumGoals;
let getStatistics = function (players) {
let totalGoals = 0;
    for (let i = 0; i < players.length; i++) { 
      totalGoals += players[i].goals 
    }
    
    for (let i = 0; i < players.length; i++) {
      players[i].coefficient = players[i].goals * 2 + players[i].passes;
      players[i].percent = Math.round(players[i].goals*100/totalGoals);
      };
    return players;

}
