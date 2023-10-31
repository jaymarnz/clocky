# Clocky - A night-aware clock
A simple single page website that displays the time using all available space in the viewport and adjusts the brightness automatically based on the solar angle (eg. day / night)

It determines your location at startup and continuously uses dawn and dusk times to adjust the brightness. To further tweak the brightness/opacity see `src/clock.css`

## Installation
Copy `src/*` to a webserver location and open `index.html` in your browser.

## GeoLocation
If you are going to depend on GeoLocation then the page must be served via https. If GeoLocation fails it defaults to a hardcoded location in `src/config.js`

## Dependencies
None in the package file, although it uses `jquery` and `suncalc` from CloudFlare's CDN
