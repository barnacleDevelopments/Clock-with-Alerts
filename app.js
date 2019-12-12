const timeBox = document.querySelector("#time");
const optionListOne = document.querySelector("#gaming")
const optionListTwo = document.querySelector("#lunch")
const optionListThree = document.querySelector("#cat")
const img = document.querySelector("#img")

function getDate() {
    let d = new Date();
    return d
}

function setTime() {
    const Time = {
        sec: Number(getDate().getSeconds()),
        min: Number(getDate().getMinutes()),
        hour: Number(getDate().getHours()),
        convertHours: function(digit) {
            return digit >= 12 ? this.hour - 12 : this.hour
        },
        buildDigit: function(timeType) {
            let digit = timeType
            if(digit >= 10) {
                return `${digit}`
            } else {
                return `0${digit}`
            }
        },
        buildClock: function(){
            let clock = ``,
                colon = ` : `
            return clock.concat(Time.buildDigit(this.convertHours(this.hour)), colon, Time.buildDigit(this.min), colon, Time.buildDigit(this.sec), this.ampm())
        },
        ampm: function() {
            return this.hour <= 12 ? ` pm` : ` am`
        }
    }

    let currentTime = document.createTextNode(Time.buildClock())
        timeBox.replaceChild(currentTime, timeBox.firstChild) 

    let listValues = checkValueOfListItems()

    if(listValues.listOne === Time.hour) {
        img.src = "./img/gaming.jpg"
    } else if(listValues.listTwo === Time.hour) {
        img.src = "./img/lunch.jpg"
    } else if(listValues.listThree === Time.hour) {
        img.src = "./img/cat.jpg"
    } else {
        img.src = "./cat.jpg"
    }
}

function checkValueOfListItems() {
    return {
        listOne: Number(optionListOne.value),
        listTwo: Number(optionListTwo.value),
        listThree: Number(optionListThree.value)
    }
}

window.addEventListener("load", () => {
    setInterval(setTime, 1000)
});