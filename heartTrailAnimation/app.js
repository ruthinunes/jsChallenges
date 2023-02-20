const bodyElement = document.querySelector('body');

bodyElement.addEventListener('mousemove', function (e) {
    const xPosition = e.offsetX;
    const yPosition = e.offsetY;
    const size = Math.random() * 100;
    const spanElement = document.createElement('span');
    spanElement.style.left = xPosition + "px";
    spanElement.style.top = yPosition + "px";
    spanElement.style.width = size + "px"
    spanElement.style.height = size + "px"
    bodyElement.appendChild(spanElement);
    setTimeout(() => {
        spanElement.remove();
    }, 3000);
});