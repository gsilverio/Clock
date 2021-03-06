const HOURDHAND = document.querySelector("#hour")
const MINUTEHAND = document.querySelector("#minute")
const SECONDHAND = document.querySelector("#second")

var date = new Date()
let hour = date.getHours()
let minutes = date.getMinutes()
let seconds = date.getSeconds()

let hourPosition = (hour*360/12)+(minutes*(360/60)/12)
let minutesPosition = (minutes*360/60)+(seconds*(360/60)/60)
let secondPosition = seconds*(360/60)

function runTheClock(){
	hourPosition = hourPosition + (3/360)
	minutesPosition = minutesPosition+(6/60)
	secondPosition = secondPosition+6

	HOURDHAND.style.transform = "rotate(" + hourPosition + "deg)"
	MINUTEHAND.style.transform = "rotate(" + minutesPosition + "deg)"
	SECONDHAND.style.transform = "rotate(" + secondPosition + "deg)"
}

var interval = setInterval(runTheClock,1000)