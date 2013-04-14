define(['services/logger', 'data/leagueData'], function (logger, leagueData) {
    var vm = {
        title: 'Full League Schedule',
        activate: activate,

        games: ko.observableArray()
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