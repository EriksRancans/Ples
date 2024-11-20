// Replace with the IP or domain of your Plex server
const serverUrl = "REPLACE_WITH_IP";

// Function to check server status
function checkServerStatus() {
  fetch(serverUrl, { method: "GET", mode: "no-cors" })
    .then(() => {
      // If the server responds, set status to online
      document.getElementById("status").textContent = "Online";
      document.getElementById("status").className = "online";
    })
    .catch(() => {
      // If the request fails, set status to offline
      document.getElementById("status").textContent = "Offline";
      document.getElementById("status").className = "offline";
    });
}

// Initial check when the page loads
checkServerStatus();

// Optional: Automatically refresh the status every 30 seconds
setInterval(checkServerStatus, 10000);
