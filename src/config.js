// Copyright 2023 jaymarnz, https://github.com/jaymarnz
// See LICENSE for details

const config = {
  // default position if html5 geolocation isn't available
  position: {
    coords: {
      latitude: 40.748627,
      longitude: -73.985643
    }
  },
  // sun's position to use for daytime:
  //    'sunrise', 'sunset'             at the horizon
  //    'dawn', 'dusk'                  6 degrees below the horizon
  //    'nauticalDawn', 'nauticalDusk'  12 degrees below the horizon
  //
  //  see https://github.com/mourner/suncalc for details
  daytime: {
    start: 'dawn',
    end: 'dusk'
  }
}
