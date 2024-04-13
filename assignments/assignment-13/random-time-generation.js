var randomSeconds = Math.floor(Math.random() * 86400 + 1);

var hours = Math.floor(randomSeconds / 3600);
console.log(hours);
var hoursInSeconds = hours * 3600;
var minutes = Math.floor((randomSeconds - hoursInSeconds) / 60);
var minutesInSeconds = minutes * 60;
var seconds = randomSeconds - hoursInSeconds - minutesInSeconds;

if (hours >= 6 && hours < 12){
    console.log("Good morning!");
} else if (hours >= 12 && hours < 17){
    console.log("Good afternoon!");
} else {
    console.log("Good evening!")
}




