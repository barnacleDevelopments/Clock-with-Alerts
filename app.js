const timeBox = document.querySelector("#time");
      
const firstSelector = document.querySelector("#gaming")
const secondSelector = document.querySelector("#lunch")
const thirdSelector = document.querySelector("#cat")

const imgBox = document.querySelector("#img-box")

console.log(imgBox)

function getDropDownValues() {
    let firstSelectedOption = firstSelector.options[firstSelector.selectedIndex].value,
        secondSelectedOption = secondSelector.options[secondSelector.selectedIndex].value,
        thirdSelectedOption = thirdSelector.options[thirdSelector.selectedIndex].value

}

function changeImage() {

}

window.addEventListener("load", () => {
    setInterval(setTime, 1000)
})

function getDate() {
    return new Date();
}

function convertToTwelveHour(time) {
    if(time > 12) {
        return time - 12
    }
}

function setTime() {
    const Time = {
        sec: getDate().getSeconds(),
        min: getDate().getMinutes(),
        hour: convertToTwelveHour(getDate().getHours()),
        ampm: function() {
            return this.hour <= 12 ? "pm" : "am"
        }
    }
    let am = document.createTextNode("am")
    let pm = document.createTextNode("pm")
    let currentTime = document.createTextNode(`${Time.hour} : ${Time.min} : ${Time.sec} ${Time.ampm()}`)
        timeBox.replaceChild(currentTime, timeBox.firstChild)
}

