let finalDate = null
let TimerId = null

document.getElementById("countdown-button").addEventListener('click',
    function() {
        initTimer()
    }
)
    
function initTimer() {
    clearInterval(TimerId)

    finalDate = document.getElementById("final-date-input").value

    if(finalDate == "") return
    finalDate = new Date(finalDate)

    document.getElementById("message").style.display = "none"
    Timer()
    TimerId = setInterval(Timer, 1000)
}

function Timer() {
    const currentTime = new Date().getTime()

    let interval = ( finalDate.getTime() - currentTime ) / 1000
    interval = Math.floor(interval)

    if(interval <= 0) {
    document.getElementById("message").style.display = "block"
    clearInterval(TimerId)
    clearTimer()
    return
    }

    let days = Math.floor(interval / (60 * 60 * 24))
    let hours = Math.floor((interval % (60 * 60 * 24)) / (60 * 60))
    let minutes = Math.floor((interval % (60 * 60)) / 60)
    let seconds = Math.floor(interval % 60)

    setHtmlBySelector("#days", days)
    setHtmlBySelector("#hours", hours)
    setHtmlBySelector("#minutes", minutes)
    setHtmlBySelector("#seconds", seconds)
}

function setHtmlBySelector(selector, v) {
    document.querySelector(selector).innerHTML = v
}

function clearTimer() {
    setHtmlBySelector("#days", "-")
    setHtmlBySelector("#hours", "-")
    setHtmlBySelector("#minutes", "-")
    setHtmlBySelector("#seconds", "-")
}