define(['services/logger', 'data/leagueData'], function (logger, leagueData) {
    var vm = {
        activate: activate,
        //title: 'Teams',

        // data
        locations: ko.observableArray()
    };

    return vm;

    //#region Internal Methods
    function activate() {
        //logger.log('Locations View Activated', null, 'locations', true);
        vm.locations(leagueData.locationsArray);
        return true;
    }
    //#endregion
});