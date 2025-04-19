const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const gradientLine = document.querySelector(".glow > span");

const socket = new WebSocket('mock-backend-production-c36c.up.railway.app');


socket.addEventListener("open", () => {
  console.log(" WebSocket connection established");
});

socket.addEventListener("message", (event) => {
  const message = event.data;

  if (message === "start-animation") {
    gradientLine.classList.add("active");
  }

  if (message === "stop-animation") {
    gradientLine.classList.remove("active");
  }
});

startBtn.addEventListener("click", () => {
  socket.send("start-animation");
});

stopBtn.addEventListener("click", () => {
  socket.send("stop-animation");
});
