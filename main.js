const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

//trigger encryption function when button is clicked
const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', caesarCipher);

//the main function that does the encryption
function caesarCipher() {
  //get word and offset values from the user
  let word = document.getElementById('user-word').value;
  let offset = document.getElementById('user-offset').value;

  //create Array out of user's chosen word/phrase
  let originalWord = word.split(''); 

  //loop through the length of the word/phrase and update the characters based on the offset
  for (var i=0; i<originalWord.length; i++){
    let currentPos = getCharAlphabetPos(originalWord[i]);
    let newPos = currentPos+parseInt(offset);
    //ignore spaces and punctuation
    if (isLetter(originalWord[i])) {
      originalWord[i] = alphabetArray[newPos];
    }
  }
  
  /*turns array back into word and 
  writes encrypted word onto UI*/
  let encryptedWord = originalWord.join('');
  let encryptedWordArea = document.getElementById('user-word');
  encryptedWordArea.value = encryptedWord;
}

//gets the corresponding position in the alphabet
function getCharAlphabetPos(character){
    return alphabetArray.indexOf(character);
}

/*checks if current character is a letter. 
If it is space/punctuation will return false */
function isLetter(character) {
  let punctuation = ";:.,?!-'\"(){}";
  if ((punctuation.indexOf(character) === -1) && (character !== ' ')) {
    return true;
  }
  else return false;
}


