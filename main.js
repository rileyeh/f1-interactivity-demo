// console.log('hello world')

// console.dir(document)

const plusBtn = document.querySelector('#plus-btn')
const numberText = document.querySelector('#counter')
const minusBtn = document.querySelector('#minus-btn')
const resetBtn = document.querySelector('#reset-btn')

// console.log(numberText)

let count = 0

function setNumberText() {
    // console.log("textContent", numberText.textContent)
    // console.log("count", count)
    numberText.textContent = count
}

function increase() {
    count++
    setNumberText()
}

function decrease() {
    count--
    setNumberText()
}

function reset() {
    count = 0 
    setNumberText()

    //add notification 
    const notification = document.createElement('p')
    const notifBtn = document.createElement('button')

    notification.setAttribute('id', 'notif')

    notification.textContent = 'You have reset the number!'
    notifBtn.textContent = 'Hide Notification'
    notifBtn.addEventListener('click', function() {
        notification.remove()
    })

    console.log('notifcation', notification)

    const existingNotif = document.querySelector('#notif')

    if (existingNotif) {
        console.log('you already have a notification')
    } else {
        notification.appendChild(notifBtn)
        document.querySelector('main').appendChild(notification)
    }
}

plusBtn.addEventListener('click', increase)
minusBtn.addEventListener('click', decrease)
resetBtn.addEventListener('click', reset)

//////////////

const themeBtns = document.querySelectorAll('.theme-buttons')

// console.log(themeBtns)

function selectTheme(event) {
    // console.log(event)
    const theme = event.target.textContent
    // console.log(event.target.className)
    document.querySelector('main').className = theme
    document.body.className = theme

    const buttons = document.querySelectorAll('button')

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].className = theme
    }
}

// themeBtns[0].addEventListener('click', selectTheme)

for (let i = 0; i < themeBtns.length; i++) {
    themeBtns[i].addEventListener('click', selectTheme)
}