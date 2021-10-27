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
  
  if (vowelArray.includes(modWordArray[0])) {
    pigLatinString = modWordArray.slice(0, modWordArray.length).join("") + "-way";
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

function paragraphTranslator(paragraph) {
  const paragraphArray = paragraph.split(" ");
  const translatedParagraph = []
  paragraphArray.forEach(function(word) {
    translatedParagraph.push(pigLatinTranslator(word))
  })
  return translatedParagraph.join(" ");
}


console.log(paragraphTranslator("'Call me Ishmael. Some years ago - never mind how long precisely - having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen, and regulating circulation'"));