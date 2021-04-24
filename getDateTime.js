function getCurrentDate() {
    var today = new Date();
    let currentDate = today.getFullYear() + "/" + (today.getMonth() + 1) + "/" + today.getDay();
    return currentDate;
}

function getCurrentTime() {
    let today = new Date();
    let currentTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    return currentTime;
}

function getCurrentDateTime() {
    let currentDateTime = getCurrentDate() + " " +getCurrentTime()
    return currentDateTime;
}

console.log(getCurrentDateTime());
console.log(getCurrentDate());
console.log(getCurrentTime());