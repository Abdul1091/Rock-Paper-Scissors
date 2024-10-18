const randomNum = Math.random();

let randomString;

switch (true) {
    case (randomNum < 0.2):
        randomString = "Hello";
        break;
    case (randomNum < 0.4):
        randomString = "Goodbye";
        break;
    case (randomNum < 0.6):
        randomString = "Welcome";
        break;
    case (randomNum < 0.8):
        randomString = "Firewell";
        break;
    default:
        randomString = "Hi";
}

console.log(randomString)