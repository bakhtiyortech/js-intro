var randomSeconds = Math.floor(Math.random() * 86400 + 1);

var hours = Math.floor(randomSeconds / 3600);
// console.log(hours);
var hoursInSeconds = hours * 3600;
var minutes = Math.floor((randomSeconds - hoursInSeconds) / 60);
var minutesInSeconds = minutes * 60;
var seconds = randomSeconds - hoursInSeconds - minutesInSeconds;

var time = `${hours}:${minutes}:${seconds}`;
// console.log(time);

if (hours >= 6 && hours < 12){
    console.log(time + " " + "Good morning!");
} else if (hours >= 12 && hours < 17){
    console.log(time + " " + "Good afternoon!");
} else {
    console.log(time + " " + "Good evening!");
}
if (hours === 24 && minutes === 0 && seconds === 0){
    console.log(time + " " + "The new day starting!");
}




