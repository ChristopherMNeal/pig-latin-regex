Describe: pigLatinTranslator()

Test: "It returns a single word string that beings with a vowel with "-way" appended."
Code: pigLatinTranslator("ate");
Expected Output: "ate-way"

Test: "It returns a single word string following previous Pig Latin rules regardless of capitalization."
Code: pigLatinTranslator("AtE")
Expected Output: "AtE-way"

Test: "It returns a word with the consonant(s) at the end plus -ay from a single word beginning with consonant(s)."
Code: pigLatinTranslator("cat")
Expected Output: "at-cay"

Test: "It returns a word with the consonants including 'qu' at the end plus -ay from a single word beginning with consonants including 'qu.'"
Code: pigLatinTranslator ("squeal")
Expected Output: "eal-say"

Test: "It returns an empty string if there is no input."
Code: pigLatinTranslator("")
Expected Output: ""

Test: "It will keep word-initial puctuation intact."
Code: pigLatinTranslator("¿creates")
Expected Output: "¿eates-cray"

Test: "It will keep word-final punctuation intact."
code: pigLatinTranslator("creates?")
Expected Output: "eates-cray?"

Test: "It will keep multiple instances of punctuation intact."
Code: pigLatinTranslator("creates...")
Expected Output: "eates-cray..."


Describe: paragraphTranslator()

Test: "It returns a string of words all following previous Pig Latin rules."
Code: pigLatinTranslator("Cats squeal")
Expected Output: "at-cays eal-squay"

Test: "It returns a string following previous Pig Latin rules leaving punctuation intact."
Code: pigLatinRules("Cats meow.")
Expected Output: "ats-cay eow-may."