
function getHours() {
    const hours = new Date().getHours();
    const mins = new Date().getMinutes();
    const secs = new Date().getSeconds();

    document.querySelector('.hour').textContent = hours;
    document.querySelector('.mins').textContent = mins;
    document.querySelector('.secs').textContent = secs;
}

getHours();
setInterval(getHours, 1000);