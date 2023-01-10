// intersting things in JS



// create oobjects 
const person1 = {
    username: 'mehrshad',
    age: 22,
}
const person2 = {
    username: 'batman',
    age: 41,
}

// 1 
const printPersonInfo = (person1) => {
    console.log( 'usernaem: ' + person1.username);
}
// 2 (generic)
const printPersonInfo2 = ({username}) => {
    console.log( 'username: ' + username);
}


printPersonInfo(person1);

// ***
printPersonInfo2(person2);
printPersonInfo2(person1);




