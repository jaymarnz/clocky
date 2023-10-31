// Copyright 2023 jaymarnz, https://github.com/jaymarnz
// See LICENSE for details

let position = config.position || null

$(document).ready(() => {
  navigator.geolocation.getCurrentPosition(
    (pos) => {
      position = pos
      run()
    },
    (err) => {
      showError(err.message + '<br>Default position in use')
      run()
    }
  )
})

function run() {
  updateTime()
  setInterval(updateTime, 1000)
}

function showError(msg) {
  $('.error').each(function () {
    $(this).html(msg)
  })

  $('.error').show()

  setTimeout(() => {
    $('.error').hide()
  }, 5000)
}

function updateTime() {
  const now = new Date()
  let isDaylight = true

  if (position && position.coords) {
    const times = SunCalc.getTimes(now, position.coords.latitude, position.coords.longitude)

    isDaylight =
      (now.getTime() > times[config.daytime.start].getTime())
      && (now.getTime() < times[config.daytime.end].getTime())
  }

  isDaylight ? $('.clock').removeClass('night').addClass('day') : $('.clock').removeClass('day').addClass('night')

  $('.clock').each(function () {
    $(this).html(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`)
  })
}
