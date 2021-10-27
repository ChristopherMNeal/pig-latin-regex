function pigLatinTranslator(word) {
  const vowelArray = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  let pigLatin = "";
  if (vowelArray.includes(word[0])) {
    pigLatin = (word + "-way");
  }
  return pigLatin;
}
