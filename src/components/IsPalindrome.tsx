import { useState } from "react";

const IsPalindrome = () => {
  const [inputText, setInputText] = useState<string>("");
  const palindromeCheck = (sentence: string) => {
    const reversed = sentence.split("").reverse().join("");
    return reversed === sentence;
  };

  return (
    <>
      <h2>Is Palindrome</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setInputText(inputText);
        }}
      >
        <textarea
          placeholder="Enter a string"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
      </form>
      {inputText && (
        <>
          <p>Is this sentence is palindrome?</p>
          <p> {palindromeCheck(inputText) ? "Yes" : "No"}</p>
        </>
      )}
    </>
  );
};

export default IsPalindrome;
