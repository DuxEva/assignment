"use strict";

const currentDate = new Date();

const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();
const seconds = currentDate.getSeconds();

console.log(hours, minutes, seconds);

console.log(`Today is ${day}/${month}/${year}`);

function Watch() {
  const now = new Date();
  this.hours = now.getHours();
  this.minutes = now.getMinutes();
  this.seconds = now.getSeconds();
}

const time = new Watch();

console.log(`Clock Time: ${time.hours}:${time.minutes}:${time.seconds}`);

function timeStr(hr, min, sec, ampm) {
  return `${String(hr).padStart(2, "0")}:${String(min).padStart(
    2,
    "0"
  )}:${String(sec).padStart(2, "0")} ${ampm && ampm}`;
}

Watch.prototype.getFormattedTime = function () {
  const hours = this.hours;
  const minutes = this.minutes;
  const seconds = this.seconds;
  const ampm = hours >= 12 ? "PM" : "AM";
  return timeStr(hours, minutes, seconds, ampm);
};

// Method to get 12-hour time with AM/PM
Watch.prototype.get12HourTime = function () {
  let hours = this.hours;
  const minutes = this.minutes;
  const seconds = this.seconds;
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours > 12 ? hours % 12 : hours;
  return timeStr(hours, minutes, seconds, ampm);
};

const myClock = new Watch();

console.log(myClock.getFormattedTime());
console.log(myClock.get12HourTime());

// console.log(myClock);

// ALARM CLOCK IMPLEMENTATION

let is24HourFormat = true;

function updateClock() {
  const clock = new Watch();
  const display = is24HourFormat
    ? clock.getFormattedTime()
    : clock.get12HourTime();
  document.getElementById("clock").innerText = display;
  checkAlarm(clock);
}

function toggleFormat() {
  is24HourFormat = !is24HourFormat;
  updateClock();
}
let  alarmTime = {};

function setAlarm() {
  const alarmInput = document.getElementById("alarmTime").value;
  if (alarmInput) {
    const [hours, minutes] = alarmInput.split(":");
    alarmTime = {
      hours: parseInt(hours, 10),
      minutes: parseInt(minutes, 10),
    };
    alert(`Alarm set for ${hours}:${minutes}`);
  }
}

function checkAlarm(clock) {
  if (
    alarmTime &&
    clock.hours === alarmTime.hours &&
    clock.minutes === alarmTime.minutes
  ) {
    alert("Alarm alert it's time now!!!");
    alarmTime = {};
  }
}

setInterval(updateClock, 1000);
updateClock();
