//famous quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. 
//Then compose your message and store it in a new variable called message. Print your message.
var famouspersons = "Albert Einstein";
var famousquotes = '"A person who never made a mistake never tried anything new"';
//compose message
var messages = "".concat(famouspersons, " once said,").concat(famousquotes);
console.log(messages);
