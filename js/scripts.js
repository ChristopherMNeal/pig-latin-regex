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