const endDate = new Date("25 March 2027  09:30:00").getTime();
const startDate = new Date().getTime();

let x = setInterval(function updateTimer() {
    const now = new Date().getTime();

    const distanceCovered = now - startDate;
    const distancePending = endDate - now;
    const oneDayInMillis = (24*60*60*1000);
    const oneHourInMillis = (60*60*1000);
    const oneMinInMillis = (60*1000);
    const oneSecInMillis = (1000);
    
//U SHOULD ADD TIME CONSTRAINTS HER EE
    const days = Math.floor(distancePending / (24 * 60 * 60 * 1000));
    const hrs = Math.floor((distancePending % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
    const mins = Math.floor((distancePending % (60 * 60 * 1000)) / (60 * 1000));
    const secs = Math.floor((distancePending % (60 * 1000)) / 1000);

    document.getElementById("DAys").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;


    const totalDistance = endDate - startDate;
    const percentageDistance = (distanceCovered/totalDistance)*100;
    document.getElementById("progress-bar").style.width = percentageDistance + "%";

    if(distancePending <= 0 ){
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED!";
        document.getElementById("progress-bar").style.width = "100%";
    }

}, 1000);

