import React, { useState, useRef } from "react";
import "./App.css";

const ALPHABET_MAPPING = {
  a: "а",
  b: "б",
  c: "с",
  d: "д",
  e: "е",
  f: "ф",
  g: "г",
  h: "х",
  i: "и",
  j: "ж",
  k: "к",
  l: "л",
  m: "м",
  n: "н",
  o: "о",
  p: "п",
  q: "қ",
  r: "р",
  s: "с",
  t: "т",
  u: "у",
  v: "в",
  x: "х",
  y: "й",
  z: "з",
  "'": "",
  ch: "Ч",
  sh: "ш",
  ye: "е",
  ya: "я",
  yo: "ё",
};

function App() {
  const [text, setText] = useState("");
  const [icon, setIcon] = useState("fas fa-copy");

  const resultRef = useRef(null);

  const setTextHandler = (e) => {
    const inputText = e.target.value.toLowerCase();
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
      const currentChar = inputText[i];
      const nextChar = i < inputText.length - 1 ? inputText[i + 1] : null;

      if (ALPHABET_MAPPING[currentChar]) {
        result += ALPHABET_MAPPING[currentChar];
      } else if (currentChar === "o" && nextChar === "'") {
        result += "ў";
        i++; // skip the next character
      } else if (currentChar === "g" && nextChar === "'") {
        result += "ғ";
        i++; // skip the next character
      } else if (currentChar === "s" && nextChar === "h") {
        result += "сх";
        i++; // skip the next character
      } else if (currentChar === "c" && nextChar === "h") {
        result += "ч";
        i++; // skip the next character
      } else if (currentChar === "y" && nextChar === "e") {
        result += "е";
        i++; // skip the next character
      } else if (currentChar === "y" && nextChar === "a") {
        result += "я";
        i++; // skip the next character
      } else if (currentChar === "y" && nextChar === "o") {
        result += "ё";
        i++; // skip the next character
      } else {
        result += currentChar;
      }
    }

    setIcon("fas fa-copy");
    setText(result);
  };

  function copyDivToClipboard() {
    const range = document.createRange();
    range.selectNode(resultRef.current);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();
    setIcon("fas fa-check");
  }

  return (
    <div className="App">
      <div className="title">LOTIN-KRILL</div>
      <textarea
        spellCheck="false"
        className="textarea"
        onChange={setTextHandler}
        placeholder="Bu yerga yozing ✍"
        cols="30"
        rows="10"
      ></textarea>
      <div className="result" ref={resultRef}>
        {!text ? "Natija bu yerda 😄" : text}
        <button
          onClick={copyDivToClipboard}
          style={!text ? { display: "none" } : { display: "inline-block" }}
          className="copy"
        >
          <i className={icon}></i>
        </button>
      </div>
    </div>
  );
}

export default App;
