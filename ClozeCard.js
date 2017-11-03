
var flashCards = require('./flashCards.js');

var champagne = new flashCards.BasicCard('Who was the legendary Benedictine monk who invented champagne?', 'Dom Perignon');
console.log(champagne.front);
console.log(champagne.back);
console.log('-----------------------------');

var pringles = new flashCards.BasicCard('Who invented the Pringles can?', 'Fredric Baur');
console.log(pringles.front);
console.log(pringles.back);
console.log('-----------------------------');

var movies = new flashCards.BasicCard('What is the greatest movie series of all time?', 'Star Wars');
console.log(movies.front);
console.log(movies.back);
console.log('-----------------------------');


champagne = new flashCards.ClozeCard('Fredric Baur invented the Pringles can. When he passed away in 2008, his ashes were buried in one.', 'Pringles Can');
console.log(champagne.full);
console.log(champagne.cloze);
console.log(champagne.partial);
console.log('-----------------------------');

pringles = new flashCards.ClozeCard('Dom Perignon was the legendary Benedictine monk who invented champagne.', 'Dom Perignon');
console.log(pringles.full);
console.log(pringles.cloze);
console.log(pringles.partial);
console.log('-----------------------------');

movies = new flashCards.ClozeCard('Star Wars is the greatest movie series of all time.', 'Star Wars');
console.log(movies.full);
console.log(movies.cloze);
console.log(movies.partial);
console.log('-----------------------------');
