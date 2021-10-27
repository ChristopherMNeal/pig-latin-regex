function pigLatinTranslator(word) {
  const vowelArray = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let pigLatinArray = [];
  const wordArray = word.split("");
  console.log(wordArray);
  if (vowelArray.includes(wordArray[0])) {
    pigLatinArray = wordArray.slice(0, wordArray.length);
    pigLatinArray.push("-way")
    console.log(wordArray);
  } else {
  for (let i = 0; i < wordArray.length; i++) {
    if (vowelArray.includes(wordArray[i])) {
      if (wordArray[i] === "u" && wordArray[i-1] === "q") {
        const consonants = wordArray.slice(0, i+1);
        pigLatinArray = wordArray.slice(i+1, wordArray.length);
        pigLatinArray.push("-", consonants.join(""), "ay")
        console.log(pigLatinArray);
        break;
      }
      const consonants = wordArray.slice(0, i);
      pigLatinArray = wordArray.slice(i, wordArray.length);
      pigLatinArray.push("-", consonants.join(""), "ay")
      console.log(pigLatinArray);
      break;
    }
  }
  return pigLatinArray.join("");
  }
}