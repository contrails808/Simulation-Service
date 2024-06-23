const circle = document.querySelector('.circle');
let mouseX = 0, mouseY = 0;
let circleX = 0, circleY = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

function animate() {
    const speed = 0.1;
    circleX += (mouseX - circleX) * speed;
    circleY += (mouseY - circleY) * speed;

    circle.style.left = (circleX - circle.offsetWidth / 2) + 'px';
    circle.style.top = (circleY - circle.offsetHeight / 2) + 'px';

    requestAnimationFrame(animate);
}

animate();