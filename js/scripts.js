function pigLatinTranslator(word) {
  const vowelArray = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  const punctuation = [".", "!", ",", '"', "'", "#", "(", ")", "?"]
  let pigLatinString = "";
  const wordArray = word.split("");
  const modWordArray = wordArray.slice(0, wordArray.length);
  let beforePunctuation = [];
  let afterPunctuation = [];
  for (let i = 0; i < wordArray.length; i++) {
     if (punctuation.includes(wordArray[i])) {
      beforePunctuation.push(wordArray[i])
      modWordArray.shift();
     } else {
       beforePunctuation = beforePunctuation.join("")
       break;
     }
  }
  for (let i = wordArray.length-1; i >= 0; i--) {
      if (punctuation.includes(wordArray[i])) {
        afterPunctuation.push(wordArray[i])
        modWordArray.pop();
    } else {
        afterPunctuation = afterPunctuation.join("")
        break;
    }
  }

  console.log(beforePunctuation);
  console.log(afterPunctuation);
  console.log(modWordArray);
  
  if (vowelArray.includes(modWordArray[0])) {
    pigLatinString = modWordArray.slice(0, modWordArray.length).join("") + "-way";
    console.log(modWordArray);
  } else {
  for (let i = 0; i < modWordArray.length; i++) {
    if (vowelArray.includes(modWordArray[i])) {
      if (modWordArray[i] === "u" && modWordArray[i-1] === "q") {
        const consonants = modWordArray.slice(0, i+1);
        pigLatinString = beforePunctuation + modWordArray.slice(i+1, modWordArray.length).join("") + "-" + consonants.join("") + "ay" + afterPunctuation;
        break;
        } else {
        const consonants = modWordArray.slice(0, i);
        pigLatinString = beforePunctuation + modWordArray.slice(i, modWordArray.length).join("") + "-" + consonants.join("") + "ay" + afterPunctuation;
        break;
        }
      }
    }
  }
  return pigLatinString;
}

console.log(pigLatinTranslator("##squab##"));
