define(['durandal/system'], function (system) {
    var teams = [
        { name: 'Collins' },
        { name: 'Cook' },
        { name: 'DeLuca' },
        { name: 'Jackson' },
        { name: 'Michelotti-Blue' },
        { name: 'Michelotti-Red' },
        { name: 'Morgan' },
        { name: 'Myers' },
        { name: 'Orlosky' },
        { name: 'Roberts' },
        { name: 'Swartz-Blue' },
        { name: 'Swartz-Gray' },
        { name: 'Wimberly' },
        { name: 'Wolfrey' },
        { name: 'Vipond' },
    ];

    var locations = {};
    locations['Dunloggin'] = 'http://goo.gl/maps/fwuJd';
    locations['Veterans'] = 'http://goo.gl/maps/LXr19';
    locations['Patuxent-Valley-MS'] = 'http://goo.gl/maps/npqSH';
    locations['Centennial-HS'] = 'http://goo.gl/maps/vV2Y5';
    locations['Long-Reach-HS'] = 'http://goo.gl/maps/M4fQe';

    var locationsArray = new Array();
    for (key in locations) {
        locationsArray.push({ name: key, locationUrl: locations[key] });
    }

    var games = [
    { team1: 'Michelotti-Red', team2: 'Jackson', time: new Date(2013, 3, 19, 18, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Michelotti-Blue', team2: 'Morgan', time: new Date(2013, 3, 19, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Swartz-Gray', team2: 'Cook', time: new Date(2013, 3, 19, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Roberts', team2: 'Collins', time: new Date(2013, 3, 19, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Swartz-Blue', team2: 'Wolfrey', time: new Date(2013, 3, 19, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Myers', team2: 'DeLuca', time: new Date(2013, 3, 19, 21, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: true, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Wimberly', team2: 'Orlosky', time: new Date(2013, 3, 19, 21, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: true, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'DeLuca', team2: 'Michelotti-Blue', time: new Date(2013, 3, 26, 18, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Myers', team2: 'Michelotti-Red', time: new Date(2013, 3, 26, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Orlosky', team2: 'Jackson', time: new Date(2013, 3, 26, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Swartz-Gray', team2: 'Roberts', time: new Date(2013, 3, 26, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Collins', team2: 'Wolfrey', time: new Date(2013, 3, 26, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Swartz-Blue', team2: 'Cook', time: new Date(2013, 3, 26, 21, 0, 0), team1TakesScoreboard: true, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Wimberly', team2: 'Morgan', time: new Date(2013, 3, 26, 21, 0, 0), team1TakesScoreboard: true, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Swartz-Blue', team2: 'Wimberly', time: new Date(2013, 4, 3, 18, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Patuxent-Valley-MS', locationUrl: locations['Patuxent-Valley-MS'] },
    { team1: 'Swartz-Gray', team2: 'Jackson', time: new Date(2013, 4, 3, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Patuxent-Valley-MS', locationUrl: locations['Patuxent-Valley-MS'] },
    { team1: 'Morgan', team2: 'Myers', time: new Date(2013, 4, 3, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Michelotti-Blue', team2: 'Vipond', time: new Date(2013, 4, 3, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Patuxent-Valley-MS', locationUrl: locations['Patuxent-Valley-MS'] },
    { team1: 'DeLuca', team2: 'Wolfrey', time: new Date(2013, 4, 3, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Michelotti-Red', team2: 'Roberts', time: new Date(2013, 4, 3, 21, 0, 0), team1TakesScoreboard: true, team2TakesScoreboard: false, location: 'Patuxent-Valley-MS', locationUrl: locations['Patuxent-Valley-MS'] },
    { team1: 'Collins', team2: 'Orlosky', time: new Date(2013, 4, 3, 21, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: true, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Wimberly', team2: 'Jackson', time: new Date(2013, 4, 10, 18, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Michelotti-Red', team2: 'Vipond', time: new Date(2013, 4, 10, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Orlosky', team2: 'Morgan', time: new Date(2013, 4, 10, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Centennial-HS', locationUrl: locations['Centennial-HS'] },
    { team1: 'Michelotti-Blue', team2: 'Swartz-Blue', time: new Date(2013, 4, 10, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Myers', team2: 'Wolfrey', time: new Date(2013, 4, 10, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Centennial-HS', locationUrl: locations['Centennial-HS'] },
    { team1: 'Swartz-Gray', team2: 'Roberts', time: new Date(2013, 4, 10, 21, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'DeLuca', team2: 'Collins', time: new Date(2013, 4, 10, 21, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: true, location: 'Centennial-HS', locationUrl: locations['Centennial-HS'] },
    { team1: 'Roberts', team2: 'Morgan', time: new Date(2013, 4, 17, 18, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Michelotti-Blue', team2: 'Jackson', time: new Date(2013, 4, 17, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Collins', team2: 'Wimberly', time: new Date(2013, 4, 17, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Vipond', team2: 'Swartz-Blue', time: new Date(2013, 4, 17, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'DeLuca', team2: 'Myers', time: new Date(2013, 4, 17, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Michelotti-Red', team2: 'Swartz-Gray', time: new Date(2013, 4, 17, 21, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Wolfrey', team2: 'Orlosky', time: new Date(2013, 4, 17, 21, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: true, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Michelotti-Red', team2: 'Wimberly', time: new Date(2013, 4, 24, 18, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Michelotti-Blue', team2: 'Roberts', time: new Date(2013, 4, 24, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Myers', team2: 'Orlosky', time: new Date(2013, 4, 24, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Long-Reach-HS', locationUrl: locations['Long-Reach-HS'] },
    { team1: 'Swartz-Gray', team2: 'Vipond', time: new Date(2013, 4, 24, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Collins', team2: 'Wolfrey', time: new Date(2013, 4, 24, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Long-Reach-HS', locationUrl: locations['Long-Reach-HS'] },
    { team1: 'Swartz-Blue', team2: 'Jackson', time: new Date(2013, 4, 24, 21, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'DeLuca', team2: 'Morgan', time: new Date(2013, 4, 24, 21, 0, 0), team1TakesScoreboard: true, team2TakesScoreboard: false, location: 'Long-Reach-HS', locationUrl: locations['Long-Reach-HS'] },
    { team1: 'Michelotti-Blue', team2: 'Swartz-Gray', time: new Date(2013, 4, 31, 18, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Centennial-HS', locationUrl: locations['Centennial-HS'] },
    { team1: 'Michelotti-Red', team2: 'Swartz-Blue', time: new Date(2013, 4, 31, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Centennial-HS', locationUrl: locations['Centennial-HS'] },
    { team1: 'Orlosky', team2: 'DeLuca', time: new Date(2013, 4, 31, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Long-Reach-HS', locationUrl: locations['Long-Reach-HS'] },
    { team1: 'Jackson', team2: 'Roberts', time: new Date(2013, 4, 31, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Centennial-HS', locationUrl: locations['Centennial-HS'] },
    { team1: 'Myers', team2: 'Collins', time: new Date(2013, 4, 31, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Long-Reach-HS', locationUrl: locations['Long-Reach-HS'] },
    { team1: 'Morgan', team2: 'Vipond', time: new Date(2013, 4, 31, 21, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Centennial-HS', locationUrl: locations['Centennial-HS'] },
    { team1: 'Wimberly', team2: 'Wolfrey', time: new Date(2013, 4, 31, 21, 0, 0), team1TakesScoreboard: true, team2TakesScoreboard: false, location: 'Long-Reach-HS', locationUrl: locations['Long-Reach-HS'] },
    { team1: 'Swartz-Gray', team2: 'Morgan', time: new Date(2013, 5, 7, 18, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Roberts', team2: 'Swartz-Blue', time: new Date(2013, 5, 7, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Orlosky', team2: 'Wimberly', time: new Date(2013, 5, 7, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Vipond', team2: 'Jackson', time: new Date(2013, 5, 7, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Myers', team2: 'Wolfrey', time: new Date(2013, 5, 7, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Michelotti-Red', team2: 'Michelotti-Blue', time: new Date(2013, 5, 7, 21, 0, 0), team1TakesScoreboard: true, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'DeLuca', team2: 'Collins', time: new Date(2013, 5, 7, 21, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: true, location: 'Veterans', locationUrl: locations['Veterans'] },
    ];

    var data = {
        teams: teams,
        locations: locations,
        locationsArray: locationsArray,
        games: games
    };
    return data;
});
