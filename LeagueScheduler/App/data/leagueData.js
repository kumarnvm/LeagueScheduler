define(['durandal/system'],
    function (system) {
        var teams = [
                { id: 1, name: "Michelotti-Red" },
                { id: 2, name: "Michelotti-Blue" },
                { id: 3, name: "Swartz-Purple" },
                { id: 4, name: "Swartz-White" },
                { id: 5, name: "Kirkland" },
                { id: 6, name: "Roberts" },
                { id: 7, name: "Wolfrey" },
                { id: 8, name: "Collins" }
        ];

        var locations = {};
        locations["Dunloggin"] = "http://goo.gl/maps/fwuJd";
        locations["Veterans"] = "http://goo.gl/maps/LXr19";

        var locationsArray = new Array();
        for (key in locations) {
            locationsArray.push({ name: key, locationUrl: locations[key] });
        }

        var games = [
            { id: 1, team1: "Michelotti-Red", team2: "Wolfrey", time: new Date(2013, 4, 19, 18, 0, 0), location: "Dunloggin" },
            { id: 2, team1: "Michelotti-Blue", team2: "Wolfrey", time: new Date(2013, 4, 19, 18, 0, 0), location: "Dunloggin" },
            { id: 3, team1: "Swartz-Purple", team2: "Wolfrey", time: new Date(2013, 4, 19, 18, 0, 0), location: "Dunloggin" },
            { id: 4, team1: "Swartz-White", team2: "Wolfrey", time: new Date(2013, 4, 19, 18, 0, 0), location: "Dunloggin" },
            { id: 5, team1: "Kirkland", team2: "Wolfrey", time: new Date(2013, 4, 19, 18, 0, 0), location: "Dunloggin" },
            { id: 6, team1: "Roberts", team2: "Wolfrey", time: new Date(2013, 4, 19, 18, 0, 0), location: "Dunloggin" },
            { id: 7, team1: "Wolfrey", team2: "Wolfrey", time: new Date(2013, 4, 26, 18, 0, 0), location: "Dunloggin" },
            { id: 8, team1: "Collins", team2: "Wolfrey", time: new Date(2013, 4, 26, 18, 0, 0), location: "Dunloggin" },
            { id: 9, team1: "Michelotti-Red", team2: "Orlosky", time: new Date(2013, 4, 26, 18, 0, 0), location: "Dunloggin" },
            { id: 10, team1: "Michelotti-Blue", team2: "Orlosky", time: new Date(2013, 4, 26, 18, 0, 0), location: "Dunloggin" },
            { id: 11, team1: "Swartz-Purple", team2: "Michelotti-Red", time: new Date(2013, 4, 26, 18, 0, 0), location: "Dunloggin" },
            { id: 12, team1: "Swartz-White", team2: "Orlosky", time: new Date(2013, 4, 26, 18, 0, 0), location: "Dunloggin" },
            { id: 13, team1: "Kirkland", team2: "Michelotti-Red", time: new Date(2013, 4, 26, 18, 0, 0), location: "Dunloggin" },
            { id: 14, team1: "Roberts", team2: "Orlosky", time: new Date(2013, 4, 26, 18, 0, 0), location: "Dunloggin" },
            { id: 15, team1: "Wolfrey", team2: "Orlosky", time: new Date(2013, 4, 26, 18, 0, 0), location: "Dunloggin" },
            { id: 16, team1: "Collins", team2: "Orlosky", time: new Date(2013, 4, 26, 18, 0, 0), location: "Dunloggin" }
        ];

        var data = {
            teams: teams,
            locations: locations,
            locationsArray: locationsArray,
            games: games
        };

        return data;
    });
