/* --- FUNCTION FOR THE CLOCK --- */

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML =  h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
    getDate()
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function getDate(){
    var today = new Date()
    var month = today.getMonth() + 1
    var day = today.getDate()
    var year = today.getFullYear()
    document.getElementById('date').innerHTML =  month + "/" + day + "/" + year;
}