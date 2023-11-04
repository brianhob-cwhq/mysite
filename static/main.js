function showTime(){
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth() + 1 // january is 0
  var day = now.getDate()

  if (month < 10) month = "0" + month
  if (day < 10) day = "0" + day

  var fullDate = `${month}/${day}/${year}`
  $("#date").text(fullDate)

  var hour = now.getHours()
  var minute = now.getMinutes()
  var seconds = now.getSeconds()
  var isPm = hour >= 12
  var lastPart = isPm ? "PM" : "AM"
  if (isPm) hour -= 12

  if (hour < 10) hour = "0" + hour
  if (minute < 10) minute = "0" + minute
  if (seconds < 10) seconds = "0" + seconds

  var fullTime = `${hour}:${minute}:${seconds} ${lastPart}`
  $("#clock").text(fullTime)
}

showTime()
setInterval(showTime, 1000)

try {
  var notes = localStorage.getItem("notes")
} catch (err){
  var notes = ""
}
$("#note-area").val(notes)

$("#save-btn").click(function(){
  var notes = $("#note-area").val()
  localStorage.setItem("notes", notes)
})