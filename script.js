const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const gradientLine = document.querySelector(".glow > span");

// Step 1: Create a WebSocket connection
const socket = new WebSocket("ws://localhost:5050"); // Or your backend WebSocket URL

// Step 2: Log when connected
socket.addEventListener("open", () => {
  console.log("✅ WebSocket connection established");
});

// Step 3: Receive messages from server
socket.addEventListener("message", (event) => {
  const message = event.data;

  if (message === "start-animation") {
    gradientLine.classList.add("active");
  }

  if (message === "stop-animation") {
    gradientLine.classList.remove("active");
  }
});

// Step 4: Send messages to server
startBtn.addEventListener("click", () => {
  socket.send("start-animation");
});

stopBtn.addEventListener("click", () => {
  socket.send("stop-animation");
});
