#!/usr/bin/env node
import moment from "moment-timezone"
import minimist from "minimist"

const help_message = "Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE" + "\n" +
"-h            Show this help message and exit." + "\n" + 
"-n, -s        Latitude: N positive; S negative." + "\n" +
"-e, -w        Longitude: E positive; W negative." + "\n" +
"-z            Time zone: uses tz.guess() from moment-timezone by default." + "\n" +
"-d 0-6        Day to retrieve weather: 0 is today; defaults to 1." + "\n" +
"-j            Echo pretty JSON from open-meteo API and exit." 

//const [,, ...args] = process.argv
const args = minimist(process.argv.slice(2));

const days = args.d
console.log(days)
const timezone = args.z || moment.tz.guess()

//const latitude = args.n //|| args.s
//const longitude = args.w || args.e
    // Help Message

// Make a request
const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
// Get the data from the request
const data = await response.json();

    /* COMMAND LINE OPTIONS
if (args.includes('-h')) {
    console.log(help_message);
}
if (args.includes('-z')) {
    console.log(timezone);
}
if (args.includes('-j')) {
    console.log(data)
} */


if (days == 0) {
    console.log("today.")
  } else if (days > 1) {
    console.log("in " + days + " days.")
  } else {
    console.log("tomorrow.")
  } 

//console.log(`Latitude: ${latitude_value} \nLongitude: ${east_west} \nTimezone: ${timezone_values}`)