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


class Teacher {
    constructor(teacherCode, teacherName) {
        this.teacherCode = teacherCode
        this.teacherName = teacherName
        this.subject = {}
    }

    addTeachableSubjects(subject, grades) {
        this.teachableSubjects[subject] = grades;
    }

    isTeachingSubject(subject, grade) {
        if (subject in this.teachableSubjects) {
            const allowedGrades = this.teachableSubjects[subject];
            return allowedGrades.includes(grade);
        }
        return false;
    }
    getTeachableSubjects() {
        return this.subjects
    }
}

const teacher1 = new Teacher("001", "Mr Oscar")
const teacher2 = new Teacher("002", "Mr Daniel")
const teacher3 = new Teacher("003", "Md Sharon")
const teacher4 = new Teacher("004", "Md Kirui")
const teacher5 = new Teacher("005", "Mr Eric")
const teacher6 = new Teacher("006", "Md Rose")
const teacher7 = new Teacher("007", "Mr Magutu")

teacher1 = addTeachableSubjects("SST", [7])
teacher1 = addTeachableSubjects("MSC", [6])
teacher1 = addTeachableSubjects("LSKL", [6])

teacher2 = addTeachableSubjects("MATH", [6, 7])
teacher2 = addTeachableSubjects("ART", [4])
teacher2 = addTeachableSubjects("SCI", [7])
teacher2 = addTeachableSubjects("LSKL", [4])

teacher3 = addTeachableSubjects("HSCI", [4, 7])
teacher3 = addTeachableSubjects("SST", [4, 5, 6])
teacher3 = addTeachableSubjects("HED", [7])

teacher4 = addTeachableSubjects("MATH", [4,5])
teacher4 = addTeachableSubjects("AGRI", [5])
teacher4 = addTeachableSubjects("ENG", [4, 6, 7])

teacher5 = addTeachableSubjects("BST", [7])
teacher5 = addTeachableSubjects("SWA", [4, 5, 6])
teacher5 = addTeachableSubjects("PTPC", [7])

teacher6 = addTeachableSubjects("CRE", [5])
teacher6 = addTeachableSubjects("ENG", [5, 7])
teacher6 = addTeachableSubjects("SWA", [5])
teacher6 = addTeachableSubjects("PHE", [4])
teacher6 = addTeachableSubjects("HSCI", [5])

teacher7 = addTeachableSubjects("MATH", [6, 7])
teacher7 = addTeachableSubjects("SCI", [5])
teacher7 = addTeachableSubjects("CSCI", [7])
teacher7 = addTeachableSubjects("AGRI", [4])





























// time slots for every lesson, one lesson 40 minutes
const timeSlots = [
    "0800 - 0845",
    "0845 - 0920",
    "0950 - 1030",
    "1030 - 1110",
    "1140 - 1220",
    "1220 - 1300",
    "1330 - 1410",
    "1410 - 1450",
    "1450 - 1530",
    "1530 - 1600"
]

const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
];


// const gradeSubjects = {
//     "Grd 4": ["MATH", "ENG", "SWA", "PHE", "SCI", "CRE", "SST", "ART", "HSCI", "AGRI", "HED"],
//     "Grd 5": ["MATH", "ENG", "ENG-C", "SWA", "PHE", "SCI", "CRE", "SST", "ART", "HSCI", "AGRI"],
//     "Grd 6": ["MATH", "ENG", "SWA", "MSC", "PHE", "LSKL", "AGRI", "PHE", "CRE", "SST", "ART", "HSCI"],
//     "Grd 7": ["MATH", "ENG", "SWA", "SCI", "HSCI", "AGRI", "MSC", "LSKL", "BST", "PHE", "CRE", "CSCI", "PTPC", "SST"],
// };

// const teacherAvailability = {
//     "001": ["ENG", "SST", "LSKL", "MSC", ],
//     "002": ["MATH", "SCI", "ART", "LSKL"],
//     "003": ["HSCI", "HED", "SST"],
//     "004": ["ENG", "MATH", "AGRI"],
//     "005": ["BST", "SWA", "PHE", "PTPC", ],
//     "006": ["SWA", "CRE", "HSCI", ""],
//     "007": ["MATH", "CSCI", "SCI", "AGRI"],
// }

// const schedule = {}

// let assignTeacherToSubject = (grade) => {
//     const teachers = Object.keys(teacherAvailability);
//     const subjects = gradeSubjects[grade];
//     const assignedTeachers = {};

//     subjects.forEach((subject) => {
//         let teacherAssigned = false
//         tlen = teachers.length
//         for (let i = 0; i < tlen; i++) {
//             const teacher = teachers[i]
//             if (teacherAvailability[teacher].includes(subjects)) {
//                 assignedTeachers[subject] = teacher;
//                 teacherAssigned = true
//                 teacher.splice(i, 1)
//                 break
//             }
//         }

//         if (!teacherAssigned) {
//             console.log(`No available teacher for ${subject} in ${grade}`)
//         } 
//     });

//     return assignedTeachers;
// }

// Populate the schedule aka the timetable
// days.forEach((day) => {
//     schedule[day] = {}
//     timeSlots.forEach((timeSlot) => {
//         schedule[day][timeSlot] = {}

//         for (const grade in gradeSubjects) {
//             schedule[day][timeSlot][grade] = assignTeacherToSubject(grade)
        

//         }
//     })
// });

// console.log(JSON.stringify(schedule, null, 2))