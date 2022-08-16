
let minutes = 0
let seconds = 0


function CheckInCounter(){
    seconds += 1
    if (seconds == 60){
        minutes += 1
        seconds = 0
    }

    let timestring =  "Eingecheckt: " + pad2(minutes) + ":" + pad2(seconds) + " minutes ago"
    
    var counter = document.getElementById("checkin-counter")
    counter.innerHTML = timestring

}

function pad2(number) {
    return (number < 10 ? '0' : '') + number
}


console.log("UrbanSportScanner ready")
var cancel = setInterval(CheckInCounter,1000)