// START HEROKU SETUP
var express = require("express");
var app = express();
app.get('/', function(req, res){ res.send('And the bot keeps runnin, runnin and runnin runnin and'); });
app.listen(process.env.PORT || 5000);
// END HEROKU SETUP

var TwitterPackage = require('twitter');

var keys = require("./keys");

var Twitter = new TwitterPackage(keys);

var cenaArray = [
    "Your time is up!",
    "My time is now!",
    "You can't see me!",
    "It's the franchise, boy I'm shinin' now",
    "In case you forgot or fell off, I'm still hot - knock your shell off",
    "My money stack fat plus I can't turn turn the swell off",
    "The franchise, doin' big bidness, I live this",
    "It's automatic I win this - oh you hear those horns? - You finished",
    "A soldier, and I stay under you fightin'",
    "Plus I'm stormin' on you chumps like I'm thunder and lightning",
    "Ain't no way you breakin' me kid, I'm harder than nails",
    "Plus I keep it on lock, like I'm part of the jail",
    "I'm slaughterin' stale, competition, I got the whole block wishin'",
    "They could run with my division but they gone fishin'",
    "With no bait, kid your boy hold weight",
    "I got my whole soul straight, I brush your mouth like Colgate",
    "In any weather I'm never better your boy's so hot",
    "You'll never catch me in the next man's sweater",
    "If they hate, let em hate, I drop ya whole clan",
    "Lay yo' ass down for the three second tan.",
    "It's gonna be what it's gonna be",
    "Five pounds of courage buddy, bass tint pants with a gold T",
    "Uh - it's a war dance and victory step",
    "A raw stance is a gift, when you insist it's my rep",
    "And talk about the bread you make but don't know the recipe for dough though",
    "Aimin' guns in all your photos, that's a no-no",
    "When this pop, you'll liplock, your big talk's a blatant no-show",
    "See what happens when the ice age melt",
    "You see monetary status is not what matters, but it helps",
    "I rock a timepiece by Benny if any",
    "The same reason y'all could love me is the same reason y'all condemn me",
    "The Champ is here!"
]

Twitter.stream('statuses/filter', {track: '#cenafy'}, function(stream) {

    stream.on('data', function(tweet) {

        console.log(tweet.text);

        var randomIndex = Math.round(Math.random() * cenaArray.length);

        var reply = "@" + tweet.user.screen_name + ", \"" + cenaArray[randomIndex] + "\" -@JohnCena";

        Twitter.post('statuses/update', {status: reply}, function(error, tweetReply, response) {
            if (error) {
                console.log(error);
            }

            console.log(tweetReply.text);
        });
    });

    stream.on('error', function(error) {

        console.log(error);

    });
});
