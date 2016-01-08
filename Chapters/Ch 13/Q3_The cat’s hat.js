var cat = document.querySelector("#cat");
var hat = document.querySelector("#hat");
var angle = 0,
    lastTime = null;

function animate(time) {
    if (lastTime != null)
        angle += (time - lastTime) * 0.001;
    lastTime = time;
    cat.style.top = 20 + (Math.sin(angle) * 20) + "px";
    cat.style.left = 250 + (Math.cos(angle) * 250) + "px";
    hat.style.left = 250 - (Math.cos(angle) * 250) + "px";
    hat.style.top = 20 - (Math.sin(angle) * 20) + "px";
    requestAnimationFrame(animate);
}
requestAnimationFrame(animate);