//These functions here will make up the difference that Date.now()
//makes up with going back to 1970 and then add the hours past until
//gametime this year and then compare that to Date.now(). Users will
//not be able to add a pick if Date.now() >= gameTime . Cron job will
//run every 2 hours and scan every pick to see if Date.now() is 3.5
//hours past gameTime. If so it will run check on those games to see if
//winner != null. If winner != null it will run a check against users
//pick to see if user.teamPicked === winner. If so, update winCount and
//update the didWin category to true on the pick. Else update loseCount and update
//didWin category to false on the pick

const hoursbetween1970AndThisYear = 8760 * 50;
const startDate = 251 * 24 + hoursbetween1970AndThisYear;
const startTime = 13;
const gameTime = (startDate + startTime) * 3600000;
console.log(Date.now());

const nflGames = [
  {
    game: "ATL vs NE",
    homeTeam: "ATL",
    awayTeam: "NE",
    startDate: 251,
    startTime: 1300,
    isCompleted: false,
    homeTeamScore: 22,
    awayTeamScore: 14,
    winner: null,
  },
  {
    game: "GB vs MIN",
    homeTeam: "GB",
    awayTeam: "MIN",
    startDate: 40,
    startTime: 2030,
    isCompleted: false,
    homeTeamScore: 0,
    awayTeamScore: 0,
    winner: null,
  },
];

if (nflGames[0].homeTeamScore > nflGames[0].awayTeamScore) {
  nflGames[0].winner = nflGames[0].homeTeam;
} else {
  nflGames[0].winner = nflGames[0].awayTeam;
}
console.log(nflGames[0]);
