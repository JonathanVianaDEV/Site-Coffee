var source = new EventSource("bestdeals.html");
source.onmessage = function(event) {
  document.getElementById("result").innerHTML += event.data + "<br>";
};