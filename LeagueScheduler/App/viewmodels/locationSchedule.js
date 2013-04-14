define(['services/logger', 'data/leagueData'], function (logger, leagueData) {
    var linq = require(['services/JSLINQ']);

    var vm = {
        activate: activate,
        title: 'Location Schedule',

        games: ko.observableArray()
    };

    return vm;

    //#region Internal Methods
    function activate(data) {
        //logger.log('Team Schedule View Activated', null, 'teamSchedule', true);
        logger.log('incoming location: ' + data.name);
        logger.log(leagueData);
        vm.title = 'Location Schedule for ' + data.name;


        //var test = JSLINQ(games).Where(function (item) { return item.team1 == "Michelotti-Red"; });

        //var filtered2 = linq(games).Where(function (item) { return item.team1 == data.name; });
        var filtered = ko.utils.arrayFilter(leagueData.games, function (item) { return item.location == data.name; });
        //var filtered = ko.utils.arrayMap(filtered, function (item) {
        //    var opponentName = (item.team1 == data.name ? item.team2 : item.team1);
        //    return { opponent: opponentName, time: item.time, location: item.location, locationUrl: locations[item.location] };
        //});

        vm.games(filtered);

        return true;
    }
    //#endregion
});