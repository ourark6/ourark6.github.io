let daynames = [];
let months = [];

let d = new Date();
let dayName = daynames[d.getDay()];
let monthName = months[d.getMonth()];
let fulldate = dayName + "," + monthName + " " + d.getDate() + "," + d.getFullYear();

document.getElementById("currentdate").textContent = fulldate;