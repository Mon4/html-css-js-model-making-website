function czas() {
    var today = new Date();

    hour = today.getHours();
    if (hour < 10) {
        hour = "0" + hour
    }
    minute = today.getMinutes();
    if (minute < 10) {
        minute = "0" + minute;
    }
    second = today.getSeconds()
    if (second < 10) {
        second = "0" + second;
    }
    var time = hour + ":" + minute + ":" + second;
    document.getElementById("zegar").innerHTML = time;
}