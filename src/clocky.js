// Copyright 2023 jaymarnz, https://github.com/jaymarnz
// See LICENSE for details

$(document).ready(() => {
  navigator.geolocation.getCurrentPosition(
    (position) => run(position.coords),
    (err) => {
      showError(err.message + '<br>Default position in use')
      run(config.position)
    }
  )
})

function showError(msg) {
  $('.error').each(function () {
    $(this).html(msg)
  })

  $('.error').show()

  setTimeout(() => {
    $('.error').hide()
  }, 5000)
}

function run(position) {
  updateTime(position)
  setInterval(() => updateTime(position), 1000)
}

function updateTime(position) {
  const now = new Date()
  let isDaylight = true

  if (position.latitude && position.longitude) {
    const times = SunCalc.getTimes(now, position.latitude, position.longitude)

    isDaylight =
      (now.getTime() > times[config.daytime.start].getTime())
      && (now.getTime() < times[config.daytime.end].getTime())
  }

  if (isDaylight) {
    $('.clock').removeClass('night').addClass('day')
  } else {
    $('.clock').removeClass('day').addClass('night')
  }

  $('.clock').each(function () {
    $(this).html(`${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`)
  })
}
