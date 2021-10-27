function pigLatinTranslator(word) {
  const vowelArray = ["a", "e", "i", "o", "u"];
  let pigLatin = "";
  if (vowelArray.includes(word[0])) {
    pigLatin = (word + "-way");
  }
  return pigLatin;
}
