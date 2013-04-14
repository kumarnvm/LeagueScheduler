define(['services/logger', 'data/leagueData'], function (logger, leagueData) {
    var vm = {
        activate: activate,
        title: 'Teams',

        // data
        teams: ko.observableArray()
    };

    return vm;

    //#region Internal Methods
    function activate() {
        //logger.log('Teams View Activated', null, 'teams', true);
        vm.teams(leagueData.teams);
        return true;
    }
    //#endregion
});