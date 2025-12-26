canvas = document.getElementById("gamecanvas");
c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

c.fillStyle = "red";
c.fillRect(0, 0, canvas.width, canvas.height);
c.stroke();
