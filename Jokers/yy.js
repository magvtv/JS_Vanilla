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


/*
    trying to make use of methods in objects
*/


// const Library = {
//     books: [],

//     addBooks: function(title, author) {
//         const book = {
//             title: title,
//             author: author,
//         }
//         this.books.push(book)
//     },

//     getBook: function (title) {
//         // let sortedBooks = this.books.sort()
//         // if (books.title === title) {
//         //     return books;
//         // } else {
//         //     console.log(`Could not find ${books.title}`)
//         // }

//         return this.books.find(book => book.title === title)
//     },

//     getAuthor: function () {
//         const authors = this.books.map(book => book.author);
//         return [...new Set(authors)];

//     },
//     getMostRecent: function () {
//         return this.books[0];
//     }
// }

// Library.addBooks("Millionaire Fastlane", "MJ DeMarco");
// Library.addBooks("The Great Gatsby", "F. Scott Fitzgerald");
// Library.addBooks("To Kill a Mockingbird", "Harper Lee");
// Library.addBooks("1984", "George Orwell");
// Library.addBooks("Rich Dad Poor Dad", "Robert Kiyosaki");
// Library.addBooks("The Way of the Superior Man", "David Deida");

// let sortedBooks = Library.books.sort();

// console.log(sortedBooks)



/*
    refreshing on simple data structures
    1 insertion sort
    - know the length of the array
    - commonly with numbers, then 
    - tried working out the kadane algorithm, did not work for some reason.
    - palindrome work around
*/

// const kadaneAlgorithm = (array) => {
//     const size = array.length;
//     let maxEndHere = 0, maxSoFar;
//     for (let x = 0; x < size; x++) {
//         maxEndHere = maxSoFar + array[x];
//         if (maxEndHere < 0) {
//             maxEndHere = 0;
//         }
//         if (maxEndHere< maxSoFar) {
//             maxSoFar = maxEndHere;
//         } 
//         return maxSoFar;
//     }
// }

// array = [-500, 200, -100, 900, -400, 600];
// kadaneAlgorithm(array);

// let palindrome = (word) => {
//     const checkWord = word.toLowerCase().replace(/[^a-z0-9]/g, '');
//     let startPoint = 0, endPoint = checkWord.length - 1;

//     while (startPoint < endPoint) {
//         if (checkWord[startPoint] !== checkWord[endPoint]) {
//             return "Word aint a palindrome"
//         }
//         else {
//             startPoint++;
//             endPoint--;
//         }
//     }
    
//     return `${word} is a palindrome`;
// } 


// let word = 'Eva, can i see bees in a cave'
// console.log(palindrome(word));





