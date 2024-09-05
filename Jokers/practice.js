// import prompt from "prompt";
// const prompt = require('prompt-sync')

// let actresses;
// actresses =[
//     'Marsai Martin',
//     'Sydney Sweeney',
//     'Maitrey Ramakrishnan',
//     'LaToya Tonodeo',
//     'Halle Bailey'
// ]

// let family = [
//     "Dad",
//     "Ma",
//     "Virginia",
//     "Raphael",
//     "Helen",
//     "PH"
// ]

// let countriesAfrica = [
//     "Cape Verde",
//     "Ethiopia",
//     "Malawi",
//     "Algeria",
//     "South Africa",
//     "Egypt"
// ]



// let joinTheTwo = family.concat(countriesAfrica)
// console.log(family)
// console.log(family.splice(1, 0, -12))



// let marsaiMartin = {
//     fullName: "Marsai Martin",
//     age: 17,
//     profession: "Actress",
//     films: "Little, Black-ish, Insecure, Fantasy Football", 
//     awards: [
//         "NAACP Image Award for Outstanding Supporting Actress in a Comedy Series",
//         "Young Artist Award for Best Supporting Young Actress in a TV Series"
//     ],
//     interests: ["singing", "songwriting", "producing"],
//     socialMedia: {
//         twitter: "@marsaimartin",
//         instagram: "@marsaimartin",
//         facebook: "Marsai Martin"
//     }, 
//     simpForMe: function () {
//         let phoneNumber = prompt("Hey, can I get your phone number? ")
//         console.log(`I will be sure to call your number ${phoneNumber} tonight. Ciao!`);
//     }
// }


// marsaiMartin.talkToMe()
// let { fullName, socialMedia: {twitter, instagram}} = marsaiMartin
// console.log(twitter);

// let [a1, ...a2] = actresses
// console.log(a2);


// class Student {
//     constructor(fullName, course, gender) {
//         this.fullName = fullName
//         this.gender = gender
//         this.course = course
//     }

//     getStudentDetails() {
//         return this.fullName
//     }  
// }

// let student1 = new Student
// student1.fullName = "Johann Von Goethe"
// student1.gender = "Male"
// student1.course = "Philosophy"

// console.log(student1.getStudentDetails())
// console.log(lady2)

// class myBucketList {
//     constructor (time, todo) {
//         this.todo = todo
//         this.time = time
//         this.entry = `${time + ": " + todo }`
//     }
// }


// let list1 = new myBucketList("Ride in an exotic car", 25)
// myBucketList.prototype.editor = "Magutu"
// // let list2 = new myBucketList(23, "Travelled outside Kenya")
// console.log(list1.editor)



// let car1 = new car("Audi", "Zwickau, Germany", "R8")
// console.log(`${car1.horsepower} pp`)

// let superCars = [
//     {
//         brand: "Aston Martin",
//         countryOfOrigin: "London, United Kingdom",
//         model: "Vantage",
//         img: "https://bit.ly/3XOauE5" 
//     },
//     {
//         brand: "Lamborghini",
//         countryOfOrigin: "Sant'Agata Bolognese, Italy",
//         model: "Urus Graphite Capsule",
//         img: "https://bit.ly/3D4EL9M"
//     },
//     {
//         brand: "Koenigsegg",
//         countryOfOrigin: "Sweden",
//         model: "Regera",
//         img: "https://bit.ly/3J3BJX8"
//     },
//     {
//         brand: "Porsche",
//         countryOfOrigin: "Stuttgart, Germany",
//         model: "911 Carrera",
//         img: "https://bit.ly/3Xp7Bd1"
//     }
// ]


// console.log(superCars.sort())


// mostPopular = actresses[2]
// mostStunning = actresses[4]



// let x = 10, y = 70;
// [x, y] = [y, x];
// console.log(x);
// console.log(y);




// function pyrmd(n) {
//     for (let i = 1; i <= n; i++) {
//         let str = ' '.repeat(n - i)
//         let str2 = '$'.repeat((i * 2) - 1)
//         console.log(str2)
//     }
// }

// function pyrmd(n) {
//     let i = 1
//     while (i <= n) {
//         let str = ' '.repeat(n - i)
//         let str2 = '$'.repeat((i * 2) - 1)
//         console.log(str + str2)
//         i++
//     }
// }

// pyrmd(20)


// function interact() {
//     let fullName = prompt("Enter your name: ")

// }

// let fullName = prompt("Enter your name: ")
// let choice = prompt(`You're ${fullName} correct? `).toLowerCase;
// if (choice == "yes") {
//     console.log("That is a nice name. I am ZRW")
// }
// else if (choice == "no") {
//     prompt("Sorry for that. Re-enter your name please: ")
// }
// else {
//     console.log("Invalid choice")
// }


// function preach() {
    //     console.log("Jesus Loves You");
    // }

    
// let countdown = (num) => {
//     console.log(num)
//     let nextNum = num - 1
//     if (nextNum > 0)
//         countdown(nextNum)
//     // while (nextNum > 0) {
//     //     console.log(nextNum)
//     //     nextNum --
//     // }
// }

// countdown(50)

// let factorial = (num) => {
//     if (num === 0) {
//         return 1;
//     }
//     else {
//         return num * factorial(num - 1);
//     }
// }

// let t = factorial(4)
// console.log(t);


const footballer = {
    fullName: 'Lionel Messi',
    nationality: 'Argentina',
    currentClub: "Inter Miami", 
    position: ["LW", "CF"],
    jerseyNumber: 10,
    get summary() {
        return `${this.fullName}: ${this.currentClub} #${this.jerseyNumber}` 
    }    
}

let x = Object.keys(footballer)
x = Object.defineProperty(footballposition, {enumerable: false})
console.log(x)