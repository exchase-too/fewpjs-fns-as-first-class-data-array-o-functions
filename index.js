

var wakeDog = function(dogName, dogBreed) {
    let message = (`Wake ${dogName} the ${dogBreed}`)
    console.log(message)
    return message
}

var leashDog = function(dogName, dogBreed) {
    let message = (`Leash ${dogName} the ${dogBreed}`)
    console.log(message)
    return message
}

var walkToPark = function(dogName, dogBreed) {
    let message = (`Walk to the park with ${dogName} the ${dogBreed}`)
    console.log(message)
    return message
}

var throwFrisbee = function(dogName, dogBreed) {
    let message = (`Throw the frisbee for ${dogName} the ${dogBreed}`)
    console.log(message)
    return message
}

var walkHome = function(dogName, dogBreed) {
    let message = (`Walk home with ${dogName} the ${dogBreed}`)
    console.log(message)
    return message
}

var unleashDog = function(dogName, dogBreed) {
    let message = (`Unleash ${dogName} the ${dogBreed}`)
    console.log(message)
    return message
}

const  routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
    return routine.map (fn =>fn(dogName,dogBreed))
}