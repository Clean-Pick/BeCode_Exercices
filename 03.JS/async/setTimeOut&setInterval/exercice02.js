// EXO II
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const authorized = ["yes", "y", "oui", "n", "no", "non"];
const confirm = ["yes", "y", "oui"]
const deny = ["n", "no", "non"]// Helps to make conditions cleaner

let win = false;

function welcome() {
    console.log(`Welcome to "Guess My Number" !
You have 10 seconds to guess the correct number from 1 to 10 !`
    )
}

function pickRandomNumber() {
    return number = Math.floor(Math.random() * (11 - 1) + 1)
}

function failureTimer() {
    timeOut = setTimeout(() => failure(), 10000)
    return timeOut
}

function failure() {
    if (win === true) {
        return
    } else
        console.log()
    console.log("================ FAILURE ================")
    console.log(`                Time's up !
          You failed to guess ${number} !
          Better Luck next time !`)
    console.log("================ FAILURE ================")
    win = false
    rl.close()
}

function ready() {
    rl.question("Are you ready ? :", (answer) => {
        if (confirm.includes(answer)) {
            console.log("-----------------------------------")
            console.log("Go !")
            console.log("-----------------------------------")
            failureTimer()
            return start()
        } else if (deny.includes(answer)) {
            console.log("-----------------------------------")
            console.log("Cancelling...")
            console.log("-----------------------------------")
            return userInterface()
        } else if (!authorized.includes(answer)) {
            console.log("-----------------------------------")
            console.log("Please type a correct answer.")
            console.log("-----------------------------------")
            return ready()
        }
    })
}

function start() {
    rl.question("Your guess : " , (answer) => {
        if (answer != number) {
            console.log("-----------------------------------")
            console.log("Try again !")
            return start()
        } else {
            console.log("================ WINNER ================")
            console.log("                You win !")
            console.log("================ WINNER ================")
            win = true
            clearTimeout(timeOut)
            return userInterface()
        }
    })
}


function userInterface() {
    win = false
    welcome()
    rl.question("Do you want to play ? : ", (answer) => {
            console.log("-----------------------------------")
            if (answer === "no" || answer === "n" || answer === "non") {
                console.log("Farewell then !")
                rl.close()
            } else if (!authorized.includes(answer)) {
                console.log(`Incorrect answer.
Please type "Yes" or "no".`)
                console.log("-----------------------------------")
                return userInterface()
            } else if (answer === "yes" || answer === "y" || answer === "oui") {
                pickRandomNumber()
                ready()
            }

        }
    )
}

userInterface()