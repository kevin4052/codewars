decodeMorse = function(morseCode){

    morseCode = morseCode.trim().split("   ");
    let morseDecode = "";
  
    for (morseWord of morseCode) {
  
      morseWord = morseWord.split(" ");
  
      for (morseLetter of morseWord) {
  
        morseDecode += MORSE_CODE[morseLetter];
  
      }    
      morseDecode += " ";
    }
    return morseDecode.slice(0, -1);
  }