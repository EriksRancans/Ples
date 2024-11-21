const serverUrl = "http://62.66.213.231:14718";

function checkServerStatus() {
  fetch(serverUrl, { method: "GET", mode: "no-cors" }) // Use "no-cors" to bypass CORS issues
    .then(() => {
      // Any response, even if it's not readable, means the server is online
      document.getElementById("status").textContent = "Online";
      document.getElementById("status").className = "online";
    })
    .catch(() => {
      // If fetch fails, treat it as offline
      document.getElementById("status").textContent = "Offline";
      document.getElementById("status").className = "offline";
    });
}

// Check server status on page load and every 10 seconds
checkServerStatus();
setInterval(checkServerStatus, 10000);
