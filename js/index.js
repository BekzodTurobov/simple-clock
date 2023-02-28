setInterval(setClock, 1000);

const seconds = document.querySelector("[data-seconds]");
const minutes = document.querySelector("[data-minutes]");
const hours = document.querySelector("[data-hours]");

function setClock() {
	const currentTime = new Date();
	const setSeconds = currentTime.getSeconds() / 60;
	const setMinutes = (setSeconds + currentTime.getMinutes()) / 60;
	const setHours = (setMinutes + currentTime.getHours()) / 12;

	setRatio(seconds, setSeconds);
	setRatio(minutes, setMinutes);
	setRatio(hours, setHours);
}

function setRatio(el, rotateRatio) {
	const setRotation = el.style.setProperty("--rotation", rotateRatio * 360);
}

setClock();

// digital clock js
let dayName = document.querySelector(".days");
let monthName = document.querySelector(".month");
let yearName = document.querySelector(".year");
let dateName = document.querySelector(".date");
let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

setInterval(() => {
	let week = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thusday",
		"Friday",
		"Saturday",
	];

	let months = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	let date = new Date();
	let day = date.getDay();
	let month = date.getMonth();
	let year = date.getFullYear();
	let dateNum = date.getDate();
	let hr = date.getHours();
	let mn = date.getMinutes();
	let sc = date.getSeconds();

	hour.innerHTML = addZero(hr);
	minute.innerHTML = addZero(mn);
	second.innerHTML = addZero(sc);

	dateName.innerHTML = dateNum;
	yearName.innerHTML = year;
	dayName.innerHTML = week[day];
	monthName.innerHTML = months[month];

	function addZero(num) {
		if (num >= 0 && num <= 9) {
			return "0" + num;
		} else {
			return num;
		}
	}
});
