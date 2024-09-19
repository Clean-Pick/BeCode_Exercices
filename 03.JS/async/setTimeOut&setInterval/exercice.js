// EXO I
let count = 0


function spelling(string) {
    if (count === string.length) {
        count = 0
        clearInterval(interval)
        return "Finished"
    } else {
        console.log(string[count])
        count++
    }
}


let interval = setInterval(() => spelling("Je suis un test"), 1000)

// EXO II is in hiw own JS file ('exercice02.js')