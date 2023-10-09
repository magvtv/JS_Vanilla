// import prompt from "prompt"
// let high = sort.length()
// let i = 8, low = 0
// let mid = sort[(high + low) * .5]

// let bSearch = (sort, ) => {
//     while (low <= high) {
//         if (i == mid) {
//             return mid
//         }
//         else if (i > mid) {
//             low = mid + 1
//         }
//         else {
//             high = mid - 1
//         }
//     }
//     return -1
// }


// let sort = [1, 2, 4, 5, 8, 9, 10, 11, 17, 23, 88]





// let newStack = simpleStack()
// newStack.push(4, 2, "Belize", "USA")
// newStack[7] = 'oranges'

// // newStack.splice()
// // console.log(newStack.copyWithin(0, 2, 8));
// console.log(newStack);

// const boroughs = new Map()
// boroughs.set('01', 'City of Westminster')
// boroughs.set('02', 'Redbridge')
// boroughs.set('03', 'Kensington and Chelsea')
// boroughs.set('04', 'Brent')
// boroughs.set('05', 'Barking and Dagenham')
// boroughs.set('06', 'Greenwich')
// boroughs.set('07', 'Merton')
// boroughs.set('08', 'Haringey')
// boroughs.set('09', 'Croydon')
// boroughs.set('10', 'Tower Hamlets')
// boroughs.set('11', 'Hillingdon')
// boroughs.set('12', 'Hounslow')
// boroughs.set('13', 'Lewisham')


// boroughs.clear()
// for (const [key, value] of boroughs) {
//     console.log(`${key}: ${value}`)
// }
// console.log(boroughs.get('A'))
// console.log(boroughs.size)

// let filmSet = new Set()
// filmSet.add("Miss Sloane")
// filmSet.add("Wakanda Forever")
// filmSet.add("Adam Project")
// console.log(filmSet)

// Array.from(filmSet);
// [...filmSet];
// let games = new Set(['Cyberpunk 2077', 'GTA', 'Fifa \'23', 'Witcher'])
// console.log(games)


// const myself = {
//     "names": {
//         "firstName": 'PH',
//         "surName": 'Magutu',
//         "lastName": 'Nyarang\'o'
//     },
//     "age": 21,
//     "gender": "Male",
//     "appearances": {
//         "hasBeard": true,
//         "hairColor": "black",
//         "eyeColor": "black",
//         "heightInMeters": 1.78,
//         "weightInKg": 70,
//         "disorders": NaN
//     },
//     "studies": {
//         "primarySchool": "Our Lady of Peace",
//         "highSchool": "MHSK",
//         "university": {
//             "title": "JKUAT",
//             "location": "Juja, Kiambu County",
//             "course": "B.Sc Computer Science",
//             "year": 2,
//             "sememster": 2
//         },
//     },
//     "hobbies": "Programming, Mind Exploring",
//     "relationships": {
//         "brotherTo": "Helen Kerubo, Virginia Nyanjiru",
//         "sonTo": {
//             "father": "Pharex Magutu",
//             "mother": "Susan Kinya"
//         },
//         "nephewTo": {
//             "aunts": "Philise Rasugu, Patricia Maithya",
//             "uncles": "Robert Ratemo",
//         },
//         "grandsonTo": {
//             "grandfather":"Alfred Ratemo",
//             "grandmother": "Hellen Kemunto"
//         },
//         "hasGirlfriend": false
//     },
//     "religion": "Christian",
//     "romanceHistory": {
//         "1": "Vanessa Jessica Juma",
//         "2": "Elsie Maina Gathoni",
//         "3": "Cecilia Mwasi Wakesho"
//     },
//     "travelDestinations": "Cape Verde, Mauritania, South Africa, Maldives",
//     "books": {
//         "best": "The Almanack of Naval Ravikant",
//         "worst": "Not Yet Found One 👽 - very choosy with books",
//         "recommendOthers": "Rich Dad Poor Dad, Millionaire FastLane, Make It Stick"
//     },
//     "bestCars": "Audi, Lamborghini, Aston Martin",
//     "favFilms": "Witcher: Nightmare of the Wolf, Ready Player One, Blacklist, Inside Job",
//     "favCelebrities": "Jorja Alice Smith 💯, Madelyn Cline 😲",
//     "bestQuote": {
//         "1": "More you sweat in peace, the less you bleed in war",
//         "2": "Do it like it is your last"
//     },
//     "politicalViews": "Never that interested in politics"
// }

    
// let x = JSON.stringify(myself)
// console.log(JSON.parse(x.romanceHistory));
// console.log(myself);


// let add = (x, ...others) => {
//     let t = others.map((element) => element + x)
//     return t
// }

// let num = add(" Magutu", "Pharex", "Helen", "PH", "Virginia")
// console.log(num.pop())
// console.log(typeof(num));



// let text = "", total = 0
// cart.forEach(function (x, y) {
//     text += y + ': ' + x + ", "
// })
// for (let x of cart.values()) {
//     total += x
// }
// console.log(total.toFixed(2))

// for (let x of cart.keys())
//     text += x + ', '
// console.log(text)

// let cart = new Map()
// cart.set("Energy Drink", 69.95)
// cart.set('Milk', 69.95)
// cart.set("Chocolate Bar", 119.45)
// cart.set("Potato Chips", 55.45)

// let purchased = (item) => {
//     // let item = cart.keys.toLowerCase()
//     return new Promise(resolve => {
//         setTimeout(() => {
//             let text = '', total = 0
//             cart.forEach(function (cost, item) {
//                 console.log(`${item}: ${cost}`)
//                 total += cost
//                 resolve(total)
//             })
//         }, 3000)
//     })
// }

// async function call() {
//     console.log("Processing your purchase receipt...");
//     const feedback = await purchased (cart.get(total))
//     console.log(feedback)
// }  

// call()

const Library = {
    books: [],

    addBooks: function(title, author) {
        const book = {
            title: title,
            author: author,
        }
        this.books.push(book)
    },

    getBook: function (title) {
        // let sortedBooks = this.books.sort()
        // if (books.title === title) {
        //     return books;
        // } else {
        //     console.log(`Could not find ${books.title}`)
        // }

        return this.books.find(book => book.title === title)
    },

    getAuthor: function () {
        const authors = this.books.map(book => book.author);
        return [...new Set(authors)];

    },
    getMostRecent: function () {
        return this.books[0];
    }
}

Library.addBooks("Millionaire Fastlane", "MJ DeMarco");
Library.addBooks("The Great Gatsby", "F. Scott Fitzgerald");
Library.addBooks("To Kill a Mockingbird", "Harper Lee");
Library.addBooks("1984", "George Orwell");
Library.addBooks("Rich Dad Poor Dad", "Robert Kiyosaki");
Library.addBooks("The Way of the Superior Man", "David Deida");

let sortedBooks = Library.books.sort();

console.log(sortedBooks)

// Define a function to create a teacher object
function createTeacher(teacherName, teacherCode, subjectsAndGrades) {
    const teacher = {
        name: teacherName,
        code: teacherCode,
        subjects: {},
    };

    // Add subjects and grades to the teacher's object
    for (const { subject, grades } of subjectsAndGrades) {
        teacher.subjects[subject] = grades;
    }

    return teacher;
}

// Example usage:
const teacherCode = "007";
const subjectsAndGrades = [
    { subject: "Math", grades: [6, 7] },
    { subject: "Science", grades: [6] },
];

const teacher = createTeacher(teacherCode, subjectsAndGrades);

// Access teacher data
console.log(`Teacher Code: ${teacher.code}`);
console.log("Subjects and Grades:");
for (const subject in teacher.subjects) {
    const grades = teacher.subjects[subject];
    console.log(`${subject}: Grades ${grades.join(", ")}`);
}


// import prompt from "prompt";
const prompt = require('prompt-sync')()

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

