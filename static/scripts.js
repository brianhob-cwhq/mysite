/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let month = today.getMonth() + 1
    let day = today.getDate()
    let year = today.getFullYear()
    console.log(month, day, year)
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    document.getElementById('date').innerHTML =  month + "/" + day + "/" + year;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}



