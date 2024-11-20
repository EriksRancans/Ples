const serverUrl = "REPLACE_WITH_IP"; // This should be replaced by the GitHub Action

console.log(`Using server URL: ${serverUrl}`); // Debugging: Check the replaced server URL

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
