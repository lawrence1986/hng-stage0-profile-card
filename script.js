function updateTime() {
  const timeSpan = document.getElementById("current-time");
  timeSpan.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000); // optional continuous update
