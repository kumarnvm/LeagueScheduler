define(['durandal/system'], function (system) {
    var teams = [
        { name: 'Collins' },
        { name: 'DeLuca' },
        { name: 'Jackson' },
        { name: 'Kirkland' },
        { name: 'Michelotti-Blue' },
        { name: 'Michelotti-Red' },
        { name: 'Morgan' },
        { name: 'Myers' },
        { name: 'Orlosky' },
        { name: 'Roberts' },
        { name: 'Swartz-Purple' },
        { name: 'Swartz-White' },
        { name: 'Wimberly' },
        { name: 'Wolfrey' },
    ];

    var locations = {};
    locations['Dunloggin'] = 'http://goo.gl/maps/fwuJd';
    locations['Veterans'] = 'http://goo.gl/maps/LXr19';

    var locationsArray = new Array();
    for (key in locations) {
        locationsArray.push({ name: key, locationUrl: locations[key] });
    }

    var games = [
    { team1: 'Michelotti-Red', team2: 'Jackson', time: new Date(2013, 4, 19, 18, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Michelotti-Blue', team2: 'Morgan', time: new Date(2013, 4, 19, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Swartz-Purple', team2: 'Kirkland', time: new Date(2013, 4, 19, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Roberts', team2: 'Collins', time: new Date(2013, 4, 19, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Swartz-White', team2: 'Wolfrey', time: new Date(2013, 4, 19, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Myers', team2: 'DeLuca', time: new Date(2013, 4, 19, 21, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: true, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Wimberly', team2: 'Orlosky', time: new Date(2013, 4, 19, 21, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: true, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'DeLuca', team2: 'Michelotti-Red', time: new Date(2013, 4, 26, 18, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Myers', team2: 'Michelotti-Blue', time: new Date(2013, 4, 26, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Orlosky', team2: 'Jackson', time: new Date(2013, 4, 26, 19, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Swartz-Purple', team2: 'Roberts', time: new Date(2013, 4, 26, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Collins', team2: 'Wolfrey', time: new Date(2013, 4, 26, 20, 0, 0), team1TakesScoreboard: false, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    { team1: 'Swartz-White', team2: 'Kirkland', time: new Date(2013, 4, 26, 21, 0, 0), team1TakesScoreboard: true, team2TakesScoreboard: false, location: 'Dunloggin', locationUrl: locations['Dunloggin'] },
    { team1: 'Wimberly', team2: 'Morgan', time: new Date(2013, 4, 26, 21, 0, 0), team1TakesScoreboard: true, team2TakesScoreboard: false, location: 'Veterans', locationUrl: locations['Veterans'] },
    ];

    var data = {
        teams: teams,
        locations: locations,
        locationsArray: locationsArray,
        games: games
    };
    return data;
});
