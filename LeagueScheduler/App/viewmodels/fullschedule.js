define(['services/logger', 'data/leagueData'], function (logger, leagueData) {
    var vm = {
        title: 'Full League Schedule',
        activate: activate,

        games: ko.observableArray(),

        scoreboardAlert: function () {
            var scoreboardCoach = (this.team1TakesScoreboard ? this.team1 : this.team2);
            logger.log(scoreboardCoach + ' takes scoreboard and scorebook home.', null, 'locationSchedule', true);
        }
    };

    return vm;

    //#region Internal Methods
    function activate() {
        //logger.log('Details View Activated', null, 'details', true);

        vm.games(leagueData.games);
        return true;
    }
    //#endregion
});