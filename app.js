
let minutes = 0
let seconds = 0


// ========== Counter and DAte of Checkin =============

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

function setTodaysDate() {
    // Construct USC Date Format for activity field
    let today = new Date()

    var strDate = 'D M, H:M'
        .replace('M', today.toLocaleString("de-de", { month: "long" }))
        .replace('D', today.getDate())
        .replace("H",today.getHours())
        .replace("M",today.getMinutes());


    let datetime = document.getElementById("datetime")
    datetime.innerHTML = strDate 
}

// =========== Activity Changes ===================== 

var activity_lentpark = {
    "activity" : "Schwimmen",
    "location-tag" : "Lentpark",
    "tag" : "Schwimmen",
    "src" : "img/activity_img/activity_img_lentpark.jpg"
}

var activity_stuntwerk = {
    "activity" : "Boudlern",
    "location-tag" : "Stuntwerk",
    "tag" :"Bouldern",
    "src" : "img/activity_img/activity_img_bouldern.jpg"
}

var activity_justfit = {
    "activity" : "Freies Training",
    "location-tag" : "Just Fit 01 Classic Köln Riehl",
    "tag" : "Fitness", 
    "src" : "img/activity_img/activity_img_justfit.jpg"
}

function displayActivity(activity_obj) {
    document.getElementById("activity").innerHTML = activity_obj['activity']
    document.getElementById("location-tag").innerHTML = "<img src='img/tag.png' id='location-icon'>" + activity_obj['location-tag']
    
    document.getElementById("tag").innerHTML = " <img src='img/label.png' id='tag-icon'>" + activity_obj['tag']

    document.getElementById("location-img").src = activity_obj['src']
}

// ============= Profile Changes ====== 

function displayConfigView() {
    console.log("Displaying Config View")
    document.getElementById("checkin-view").style.display = "none";
    document.getElementById("config-view").style.display = "block";

}

function displayCheckInView() {
    console.log("Displaying CheckinView")
    document.getElementById("checkin-view").style.display = "block";
    document.getElementById("config-view").style.display = "none";

}

function setProfileName(){
    let name = document.getElementById("name-field").value
    console.log("Updating Profile with name",name)
    document.getElementById("name").innerHTML = name
}

function updateProfilPicture(){
    const profileImg = document.getElementById("profile-img").files[0];

    const profileImgURL = URL.createObjectURL(profileImg);
    console.log("Updating Profile picture with",profileImgURL)

    document.getElementById("profil-picture").setAttribute('src', profileImgURL);
}

function updateProfile(){
    setProfileName()
    updateProfilPicture()
}


// Setup
console.log("UrbanSportScanner ready")
setTodaysDate()

// Set Timer to refresh checkin-counter
var cancel = setInterval(CheckInCounter,1000)

displayActivity(activity_stuntwerk)

