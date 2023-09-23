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


let teachableSubjects = teacher7.getTeachableSubjects()
console.log(`Name: ${teacher7.teacherName}\nCode: ${teacher7.teacherCode}\nTeachable Subjects: `)
for (const subject in teachableSubjects) {
    const grade = teachableSubjects[subject]
    console.log(`${subject}: Grd${grade.join(', ')}`)
}


























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