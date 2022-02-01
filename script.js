// HOMEWORK PART 1
// CREATE OBJECT ANIMAL WITH 2 PROPERTIES AND 1 METHOD:
// name
// kind
// speak (method)
// this method will take one parameter and will print in the console a message: e.g. dog.speak(“hey bro!!!”) will log in the console “Dog says: ‘Hey bro!!!’”

// Bonus: enter the values from prompt or from HTML inputs


let dog = {
    name: "Sparky",
    kind: "Husky",
    speak: function () {
       return `Hey Bro !!!`;
       
    },
}
console.log(`Dog says: ${dog.speak()}`);


// HOMEWORK PART 2
// Write a JavaScript program to display the reading status of some book. The object should have the next properties: title, author, readingStatus and a method that will return info depending on the readingStatus e.g.

// Already read 'The Robots of dawn' by Isaac Asimov. (if true)
// You still need to read 'Mockingjay: The Final Book of The Hunger Games' by Suzanne Collins. (if false).
// BONUS: ENTER THE VALUES FROM PROMPT() OR READ THEM FROM HTML

let inputText = document.getElementById("inputBookName");
let checkIfRead = document.getElementById("btnCheck");

let books = [
    {
    title: "Zoki Poki",
    author: "Olivera Nikolova",
    readingStatus: true,
    },
    {
    title: "Na rabot od vremeto",
    author: "Monika Trajkovska",  
    readingStatus: false,  
    },
    {
    title: "Krvava mesecina",
    author: "Katerina Shoshko",
    readingStatus: false,    
    }
];

console.log(books[2].title)


checkIfRead.addEventListener("click", function(){
   for (let i = 0; i < books.length; i++) 
   {
    let book = books[i].title;
    if (books[i].title == inputText.value && books[i].readingStatus) {
      console.log("Already read " + book);
    } else (books[i].title == inputText.value && !books[i].readingStatus)
    {
     console.log("You still need to read " + inputText.value);
    } 
   }
});

