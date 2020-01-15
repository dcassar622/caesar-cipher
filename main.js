const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', caesarCipher);


function caesarCipher() {
  let word = document.getElementById('user-word').value;
  console.log(word);
  let offset = document.getElementById('user-offset').value;

  let originalWord = word.split(''); //creates Array out of user's chosen word
  console.log(originalWord);

  for (var i=0; i<originalWord.length; i++){
    let currentPos = getCharAlphabetPos(originalWord[i]);
    console.log(originalWord[i]);
    console.log(currentPos);
    console.log(offset);
    
    let newPos = currentPos+parseInt(offset);
    originalWord[i]  = alphabetArray[newPos];
  }
  
  console.log(originalWord);
  let encryptedWord = originalWord.join('');
  console.log(encryptedWord);

  let encryptedWordArea = document.getElementById('encrypted-word');
  encryptedWordArea.textContent = encryptedWord;
}

function getCharAlphabetPos(character)
{
    console.log(alphabetArray.indexOf(character));
    return alphabetArray.indexOf(character);
}


