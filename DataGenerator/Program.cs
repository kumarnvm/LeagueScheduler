using LinqToExcel;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataGenerator
{
    class Program
    {
        static void Main(string[] args)
        {
            var excel = new ExcelQueryFactory("HYBA-2013Spring-Schedule.xlsx");
            var js = new StringBuilder();
            var games = excel.Worksheet<Game>("Games").ToList();
            var teams = excel.Worksheet<Team>("Teams").ToList();

            WriteStartOfFile(js);
            WriteTeams(js, teams);
            js.AppendLine();
            WriteLocations(js);
            js.AppendLine();
            WriteGames(js, games);
            js.AppendLine();
            WriteEndOfFile(js);



            Console.WriteLine(js.ToString());
            File.WriteAllText("leagueData.js", js.ToString());

            Console.WriteLine("Done.");
            Console.ReadLine();
        }

        private static void WriteEndOfFile(StringBuilder js)
        {
            js.AppendLine("var data = {");
            js.AppendLine("\tteams: teams,");
            js.AppendLine("\tlocations: locations,");
            js.AppendLine("\tlocationsArray: locationsArray,");
            js.AppendLine("\tgames: games");
            js.AppendLine("};");
            js.AppendLine("return data;");
            js.AppendLine("});");
        }

        private static void WriteStartOfFile(StringBuilder js)
        {
            js.AppendLine("define(['durandal/system'], function (system) {");
        }

        private static void WriteTeams(StringBuilder js, List<Team> teams)
        {
            js.AppendLine("var teams = [");

            foreach (var team in teams)
            {
                js.AppendLine("\t{ name: '" + team.TeamName + "' },");
            }

            js.AppendLine("];");
        }

        private static void WriteLocations(StringBuilder js)
        {
            js.AppendLine("var locations = {};");
            js.AppendLine("locations['Dunloggin'] = 'http://goo.gl/maps/fwuJd';");
            js.AppendLine("locations['Veterans'] = 'http://goo.gl/maps/LXr19';");
            js.AppendLine("locations['Patuxent-Valley-MS'] = 'http://goo.gl/maps/npqSH';");
            js.AppendLine();
            js.AppendLine("var locationsArray = new Array();");
            js.AppendLine("for (key in locations) {");
            js.AppendLine("\tlocationsArray.push({ name: key, locationUrl: locations[key] });");
            js.AppendLine("}");
        }

        private static void WriteGames(StringBuilder js, List<Game> games)
        {
            js.AppendLine("var games = [");

            foreach (var game in games)
            {
                var team1TakesScoreboard = (game.Team1 == game.Scoreboard).ToString().ToLower();
                var team2TakesScoreboard = (game.Team2 == game.Scoreboard).ToString().ToLower();

                var lineFormat = "{{ team1: '{0}', team2: '{1}', time: new Date({5}, {6}, {7}, {8}, 0, 0), team1TakesScoreboard: {3}, team2TakesScoreboard: {4}, location: '{2}', locationUrl: locations['{2}'] }},\n";
                js.AppendFormat(lineFormat, game.Team1, game.Team2, game.Location, team1TakesScoreboard, team2TakesScoreboard, game.Date.Year, game.Date.Month-1, game.Date.Day, game.Time.Hour + 12);
                if (!string.IsNullOrWhiteSpace(game.Location2Team1))
                {
                    var team1TakesScoreboardLoc2 = (game.Location2Team1 == game.Location2Scoreboard).ToString().ToLower();
                    var team2TakesScoreboardLoc2 = (game.Location2Team2 == game.Location2Scoreboard).ToString().ToLower();

                    js.AppendFormat(lineFormat, game.Location2Team1, game.Location2Team2, game.Location2, team1TakesScoreboardLoc2, team2TakesScoreboardLoc2, game.Date.Year, game.Date.Month-1, game.Date.Day, game.Time.Hour + 12);
                }
            }

            js.AppendLine("];");
        }
    }

    class Game
    {
        public DateTime Date { get; set; }
        public DateTime Time { get; set; }
        public string Team1 { get; set; }
        public string Team2 { get; set; }
        public string Location2Team1 { get; set; }
        public string Location2Team2 { get; set; }
        public string Location { get; set; }
        public string Location2 { get; set; }
        public string Scoreboard { get; set; }
        public string Location2Scoreboard { get; set; }
    }

    class Team
    {
        public string TeamName { get; set; }
    }
}
