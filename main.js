// Set Inverval and callback animate.
var intervalId = setInterval(animate, 1000)

// command to stop the clock 'clearInterval(intervalId)'

function animate () {
  var currentTime = new Date
  var hours = currentTime.getHours()
  var mins = currentTime.getMinutes()
  var secs = currentTime.getSeconds()
  if (hours > 12) { hours = hours - 12 }
  if (hours < 10) { hours = '0' + hours }
  if (mins < 10) { mins = '0' + mins }
  if (secs < 10) { secs = '0' + secs }

  var containerClock = document.getElementById('container1')
  console.log(hours + mins + secs)
  containerClock.style.backgroundColor = "#" + hours + mins + secs
  containerClock.innerHTML = '<p>' + hours + ':' + mins + ':' + secs + '</p>'
}

var intervalId = setInterval(animate2, 1000)

// command to stop the clock 'clearInterval(intervalId)'

function animate2 () {
  var currentTime = new Date
  var hours = currentTime.getHours()
  var mins = currentTime.getMinutes()
  var secs = currentTime.getSeconds()
  if (hours > 12) { hours = hours - 12 }
  if (hours < 10) { hours = '0' + hours }
  if (mins < 10) { mins = '0' + mins }
  if (secs < 10) { secs = '0' + secs }

  var containerClock = document.getElementById('container2')
  console.log(hours + mins + secs)
  containerClock.style.backgroundColor = "#" + hours + mins + secs
  containerClock.innerHTML = '<p>' + "#" + hours + mins + secs + '</p>'
}
