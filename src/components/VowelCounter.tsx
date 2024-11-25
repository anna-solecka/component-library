import { useState } from "react";

const VowelCounter = () => {
  const [inputText, setInputText] = useState<string>("");
  const vowels = ["a", "e", "i", "o", "u"];
  const countVowels = (sentence: string) => {
    let count = 0;
    for (let i = 0; i < sentence.length; i++) {
      if (vowels.includes(sentence[i].toLowerCase())) {
        count++;
      }
    }
    return count;
  };

  return (
    <>
      <h2>Vowel Counter</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          countVowels(inputText);
        }}
      >
        <textarea
          placeholder="Enter a string"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
      {inputText && <p>Number of vowels: {countVowels(inputText)}</p>}
    </>
  );
};

export default VowelCounter;
