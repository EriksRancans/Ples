const serverUrl = "http://62.66.213.231:14718";

console.log(`Using server URL: ${serverUrl}`); // Debugging: Check the replaced server URLs

function checkServerStatus() {
  fetch(serverUrl, { method: "GET", mode: "no-cors" })
    .then(() => {
      document.getElementById("status").textContent = "Online";
      document.getElementById("status").className = "online";
    })
    .catch(() => {
      document.getElementById("status").textContent = "Offline";
      document.getElementById("status").className = "offline";
    });
}

// Check server status initially and every 10 seconds
checkServerStatus();
setInterval(checkServerStatus, 10000);
