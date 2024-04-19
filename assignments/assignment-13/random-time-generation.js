var randomSeconds = Math.floor(Math.random() * (86400 + 1));

var hours = Math.floor(randomSeconds / 3600);
// console.log(hours);
var hoursInSeconds = hours * 3600;
var minutes = Math.floor((randomSeconds - hoursInSeconds) / 60);
var minutesInSeconds = minutes * 60;
var seconds = randomSeconds - hoursInSeconds - minutesInSeconds;

var formattedHours = `${hours}`;
var formattedMinutes = `${minutes}`;
var formattedSeconds = `${seconds}`;

if (hours < 10) {
    formattedHours = `0${hours}`;
}
if (minutes < 10) {
    formattedMinutes = `0${minutes}`;
}
if (seconds < 10) {
    formattedSeconds = `0${seconds}`;
}

var time = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;;
// console.log(time);

if (hours < 12){
    console.log(time + " " + "Good morning!");
} else if (hours < 17){
    console.log(time + " " + "Good afternoon!");
} else {
    console.log(time + " " + "Good evening!");
}
if (hours === 24 && minutes === 0 && seconds === 0){
    console.log(time + " " + "The new day starting!");
}




