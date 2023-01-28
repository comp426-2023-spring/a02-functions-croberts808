#!/usr/bin/env node

const mini = (process.argv.slice(2))

const help_message = "Usage: galosh.js [options] -[n|s] LATITUDE -[e|w] LONGITUDE -z TIME_ZONE" + "\n" +
"-h            Show this help message and exit." + "\n" + 
"-n, -s        Latitude: N positive; S negative." + "\n" +
"-e, -w        Longitude: E positive; W negative." + "\n" +
"-z            Time zone: uses tz.guess() from moment-timezone by default." + "\n" +
"-d 0-6        Day to retrieve weather: 0 is today; defaults to 1." + "\n" +
"-j            Echo pretty JSON from open-meteo API and exit." 

if (mini == '-h') {
    console.log(help_message)
}
//console.log(help_message)