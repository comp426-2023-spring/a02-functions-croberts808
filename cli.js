#!/usr/bin/env node
import moment from "moment-timezone"

const help_message = "Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE" + "\n" +
"-h            Show this help message and exit." + "\n" + 
"-n, -s        Latitude: N positive; S negative." + "\n" +
"-e, -w        Longitude: E positive; W negative." + "\n" +
"-z            Time zone: uses tz.guess() from moment-timezone by default." + "\n" +
"-d 0-6        Day to retrieve weather: 0 is today; defaults to 1." + "\n" +
"-j            Echo pretty JSON from open-meteo API and exit." 

//const [,, ...args] = process.argv
//const args = process.argv.slice(2)

if (process.argv.slice(2).includes('-h')) {
    console.log(help_message);
    throw new Error('0')
} else if (process.argv.slice(2).includes('-j')) {
    console.log(`return JSON here`)
    throw new Error('0')
}
const [options, north_south, latitude, east_west, longitude, timezone, timezone_value, days, days_value] = process.argv.slice(2)
const args = [options, north_south, latitude, east_west, longitude, timezone, timezone_value]
console.log(args)

const timezone_values = timezone || moment.tz.guess()

//const latitude = args.n //|| args.s
//const longitude = args.w || args.e
    // Help Message

// Make a request
const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m');
// Get the data from the request
const data = await response.json();

    // -n
if (north_south == '-n') {
    const latitude_value = latitude
} else if (north_south == '-s') {
    const latitude_value = -1 * latitude
}


    // -h
if (options == '-h') {
    console.log(help_message)
}
    // -j
if (options == '-j') {
    console.log(data)
}



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

console.log(`Latitude: ${latitude_value} \nLongitude: ${east_west} \nTimezone: ${timezone_values}`)