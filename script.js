function update() {
    const time = document.getElementById('time');
    const date = document.getElementById('date');
    const now = new Date();

    const hour = String(now.getHours()).padStart(2, '0');
    const minute = String(now.getMinutes()).padStart(2, '0');
    const second = String(now.getSeconds()).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();

    time.textContent = `${hour}:${minute}:${second}`;
    date.textContent = `${day}/${month}/${year}`;
}

setInterval(update, 1000);
update();