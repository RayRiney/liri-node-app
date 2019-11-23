require("dotenv").config();
var request = require("request");
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");
var fs = require("fs");
var moment = rerquire("moment");

var command = process.argv[2];

if (command === "concert-this") {


    var artist = process.argv[3];


    request("https://rest.bandsintown.com/artists/" + artist + "/events?app_id = codingbootcamp", function(error, response, body) {

                if (!error && response.statusCode === 200) {

                    console.log("------------------------"; console.log("Venue:" + JSON.parse(body[0].venue.name); console.log("location:" + JSON.parse(body[0].venue.city + "" + JSON.parse(body)[0].venue.region); console.log("Date: + moment(JSON.parse(body)[0].datetime).format("
                                mm / dd / yy)); console.log("-----------------------");


                        }
                    });

            } else if (command === "spotify-this-song") {
                var song = process.argv[3];

                if (song === undefined) {
                    song = "The Sign";
                }



                spotify.search({
                    type: "track",
                    query: song
                }, function(err, data) {
                    if (err) {
                        return console.log("Error occured: " + err);

                    }


                    console.log("------------------------")
                    console.log("")

                })