// EXO I //

//TODO: Refaire cet exercice

let number = Math.floor((Math.random() * 2));


let test = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (number === 0) {
            resolve("Successfully Succeed")
        } else if (number === 1) {
            reject("Successfully failed")
        }
    }, 2000);
});
fetch("https://swapi.dev/api/people/5")
    .then(console.log("Starting Request..."))
    // .then(function(){return test})
    .then(response => response.json())
    .then(json => {
        console.log(json.name);
    })
    .catch(error => {
        console.log("Better luck next time !", error)
    })


//======================================================================//


// EXO II //

let test02 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ceci est la première étape"), 1000)
});



try {
    test02.then(result => {
        console.log(result)

        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Ceci est la seconde étape"), 1000)

        });
    })
        .then(result => {
            console.log(result)
        })
} catch (error) {
    console.log(error)
}


//======================================================================//


// EXO III //

let test03 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ceci est la première étape du troisième exercice"), 1000)
});

let test04 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ceci est la seconde étape du troisième exercice"), 3000)
});

let test05 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Ceci est la troisième étape du troisième exercice"), 2000)
});

Promise.all([test03, test04, test05])
    .then(result => {
    console.log(result)
})

//======================================================================//


// EXO IV //


function callFunction01() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Ceci est la première étape du quatrième exercice"), 4000)
    });
}

function callFunction02() {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("Ceci est la seconde étape du quatrième exercice"), 1000)
    });
}

async function testAwait() {
    console.log("Starting Request Async...");
    const result01 = await callFunction01();
    console.log(result01)
    const result02 = await callFunction02();
    console.log(result02)
    return console.log("Finished to call async function")
}
testAwait()

//======================================================================//


// EXO V //

async function handlingErrors() {

    new Promise((resolve, reject) => {
        if ((Math.random() * 2) === 0) {
            return resolve("There was no error.")
        } else {
            return reject("There was an error.")
        }

    })
}

// try {
//     handlingErrors()
// } catch (error) {
//     console.log(error)
// }