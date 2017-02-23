// Generate a random String which can be separated into several 'words' by spaces
// Split the string to a list of words and print out the longest word with unique characters

const stringGenerator = () => {
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  let range = Math.floor(Math.random() * (300 - 100) + 100),
      sentence = '';

  for ( var i = 0; i <= range; i++ ) {
    let letter = Math.floor(Math.random() * (alphabet.length - 0) + 0),
        space = Math.floor(Math.random() * (5 - 0) + 0);
    if ( space === 3 && sentence.charAt(sentence.length - 1) !== ' ' ) {
      sentence += ' '
    } else {
      sentence += alphabet[letter]
    }
  }
  // console.log('words: ', words);
  // console.log('sentence: ', sentence);
  // console.log('length: ', range);
  // console.log('longest word: ', sentence.split(' ').sort((a,b)=> b.length - a.length)[0]);
  
  return sentence.split(' ').sort((a,b)=> b.length - a.length)[0];
};

stringGenerator();

module.exports = { stringGenerator };