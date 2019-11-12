// Cara yang SALAH

// class Stopwatch {
//   constructor(duration) {
//     this.timeStart = new Date(35400).toLocaleTimeString();
//     this.timeStop = new Date(354100).toLocaleTimeString();
//     this.duration = this.timeStop - this.timeStart;
//   }

//   start() {
//     console.log("this stopwatch start at " + this.timeStart);
//   }
//   stop() {
//     console.log("this stopwatch stop at " + this.timeStop);
//   }
// }

// const stopwatch = new Stopwatch();

// Cara yang BENAR
class Stopwatch {
  constructor() {
    this.timeStart = null;
    this.timeStop = null;
    this.result = null;
  }

  start() {
    this.timeStart = Date.now();
    // document.getElementById("timeStart").innerText = this.timeStart
    // console.log("this stopwatch start at " + this.timeStart.toLocaleTimeString());
  }
  stop() {
    this.timeStop = Date.now();
    // console.log("this stopwatch stop at " + this.timeStop.toLocaleTimeString());
  }
  duration() {
    this.result = this.timeStop - this.timeStart
    // console.log(this.result);
  }
}

const stopwatch = new Stopwatch();
// console.log(stopwatch.duration);

// stopwatch.start(); // this stopwatch start at 10:52:03 AM
// stopwatch.stop(); // this stopwatch stop at 10:52:20 AM
// stopwatch.duration; // 17.111

// function mulai(){
//   document.addEventListener("DOMContentLoaded", event => {
//       let container = document.getElementById("timeStart");
//       container.value = `${stopwatch.timeStart.getHours()}:${stopwatch.timeStart.getMinutes()}:${stopwatch.timeStart.getSeconds()}`;
//   })
// }

function mulai() {
  let txtStart = document.getElementById("timeStart")
  stopwatch.start()
  txtStart.value  = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
}

// ARROW FUNCTION
// const mulai = () => {
//   let txtStart = document.getElementById("timeStart");
//   stopwatch.start();
//   txtStart.value = `${stopwatch.timeStart.getHours()}:${stopwatch.timeStart.getMinutes()}:${stopwatch.timeStart.getSeconds()}`;
// }

function stop() {
  let txtStop = document.getElementById("timeStop")
  stopwatch.stop()
  txtStop.value  = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
  // console.log(typeof txtStop.value)
}

function duration() {
  event.preventDefault()
  let txtDuration = document.getElementById("duration")
  stopwatch.duration()
  txtDuration.value  = `${stopwatch.result/ 1000} s`
}

