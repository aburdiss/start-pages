function addTime() {
  let time = new Date()
    .toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      second: '2-digit'
    })
    .toLowerCase();
  document.getElementById('time').innerHTML = time;
}

addTime();
setInterval(addTime, 1000);
