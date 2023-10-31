# Clocky - Simple web clock that adjusts brightness based on solar angle
A single page website that displays the time using all available space in the viewport and adjusts the brightness automatically based on the solar angle (eg. day / night) at your location.

It determines your location at startup and continuously uses dawn and dusk times to adjust the brightness. To further tweak the brightness/opacity see `src/clock.css` or to change which solar angle to use see `src/config.js`

## Why?
I wanted a simple bedroom clock that isn't intrusive at night but bright enough to see during the day. I use it in Kiosk mode (full screen) on a dedicated old phone I had lying around.

Open https://jaymarnz.dev/clocky in your browser. It will ask if you want to allow location. Choosing Allow won't share your location with me or anyone else. Rather it just enables your browser's Geolocation so it can determine the solar angle.

## Hosting yourself
If you want to make changes (such as update the default location so you can use it without Geolocation) or run from your own server or localhost, copy `src/*` to a webserver location and open `index.html` in your browser.

## GeoLocation
To use the browser's GeoLocation then the page must be served from a secure context (eg. localhost or https).

If GeoLocation fails it defaults to the default location in `src/config.js`. Updating the default location in `src/config.js` is only necessary if you host it yourself in an unsecure context. It also isn't needed if you you use https://jaymarnz.dev/clocky

## Kiosk Mode (Android)
In some browsers you can make the page full-screen (eliminates the web address and other headers so it's just the web page). I recommend using it this way.

I wasn't able to do this on my old Android phone running Chrome so I use a free app called Fully Kiosk. There's probably others but this one works well for this:<br>https://play.google.com/store/apps/details?id=de.ozerov.fully&hl=en_US&gl=US

## Kiosk Mode (iOS)
iOS has a kiosk mode built-in. It's called Guided Access and is enabled in Settings -> Accessibility -> Guided Access

## Dependencies
It uses `jquery` and `suncalc` from CloudFlare's CDN
