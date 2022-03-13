var upgradeTime = 3628800; //42d = 3628800s
var seconds = upgradeTime;
function timer() {
  var days        = Math.floor(seconds/24/60/60);
  var hoursLeft   = Math.floor((seconds) - (days*86400)); // 1d = 86400s
  var hours       = Math.floor(hoursLeft/3600);
  var minutesLeft = Math.floor((hoursLeft) - (hours*3600)); // 1h = 3600s
  var minutes     = Math.floor(minutesLeft/60);
  var remainingSeconds = seconds % 60;
  function pad(n) {
    return (n < 10 ? "0" + n : n);
  }
  
  document.getElementById('countdown').style.color = '#fff';

  document.getElementById('countdown').innerHTML = "<div class='block'><div class='block__time'>" + pad(days) + " <div class='days time'>DAYS</div> </div>" + "<div class='block__time'>" + pad(hours) + " <div class='hours time'>HOURS</div> </div>" + "<div class='block__time'>" + pad(minutes) + "  <div class='minutes time'>MINUTES</div></div> " + "<div class='block__time seconds'>" + pad(remainingSeconds) + " <div class='seconds time'>SECONDS</div></div> </div>";
  if (seconds == 0) {
    clearInterval(countdownTimer);
    document.getElementById('countdown').innerHTML = "Completed";
  } else {
    seconds--;
  }
}
var countdownTimer = setInterval('timer()', 1000);