# Clocky - Simple web clock that adjusts brightness based on solar angle
A single page website that displays the time using all available space in the viewport and adjusts the brightness automatically based on the solar angle (eg. day / night) at your location.

It determines your location at startup and continuously uses dawn and dusk times to adjust the brightness. To further tweak the brightness/opacity see `src/clock.css` or to change which solar angle to use see `src/config.js`

## Why?
I wanted a simple bedroom clock that isn't intrusive at night but bright enough to see during the day. I use it in Kiosk mode (full screen) on a dedicated old phone I had lying around. 

## Installation
Copy `src/*` to a webserver location and open `index.html` in your browser.

## GeoLocation
If you are going to use GeoLocation then the page must be served from a secure location (eg. localhost or https). If GeoLocation fails it defaults to a hardcoded location in `src/config.js`

## Kiosk Mode (Android)
In some browsers you can make the page full-screen (eliminates the web address and other headers so it's just the web page). I recommend using it this way.

I wasn't able to do this on my old Android tablet running Chrome so I use a free app called Fully Kiosk. There's probably others but this one works well for this:<br>https://play.google.com/store/apps/details?id=de.ozerov.fully&hl=en_US&gl=US

## Kiosk Mode (iOS)
iOS has a kiosk mode built-in. It's called Guided Access and is enabled in Settings -> Accessibility -> Guided Access

## Dependencies
It uses `jquery` and `suncalc` from CloudFlare's CDN
