import React, { useState, useRef } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");
  const [icon, setIcon] = useState("fas fa-copy");

  const resultRef = useRef(null);

  const setTextHandler = (e) => {
    const result = e.target.value.split("");
    result.forEach((sign, index) => {
      if (result[index] === "o" && result[index + 1] === "'") {
        result[index] = "";
        result[index + 1] = "ў";
      }
      if (result[index] === "g" && result[index + 1] === "'") {
        result[index] = "";
        result[index + 1] = "ғ";
      }
      if (result[index] === "s" && result[index + 1] === "h") {
        result[index] = "";
        result[index + 1] = "ш";
      }
      if (result[index] === "c" && result[index + 1] === "h") {
        result[index] = "";
        result[index + 1] = "ч";
      }
    });
    result.forEach((sign, index) => {
      if (sign == sign.toLowerCase()) {
        switch (sign) {
          case "a":
            result[index] = "a";
            break;
          case "b":
            result[index] = "б";
            break;
          case "c":
            result[index] = "c";
            break;
          case "d":
            result[index] = "д";
            break;
          case "e":
            result[index] = "e";
            break;
          case "f":
            result[index] = "ф";
            break;
          case "g":
            result[index] = "г";
            break;
          case "h":
            result[index] = "х";
            break;
          case "i":
            result[index] = "и";
            break;
          case "j":
            result[index] = "ж";
            break;
          case "k":
            result[index] = "к";
            break;
          case "l":
            result[index] = "л";
            break;
          case "m":
            result[index] = "м";
            break;
          case "n":
            result[index] = "н";
            break;
          case "o":
            result[index] = "о";
            break;
          case "p":
            result[index] = "п";
            break;
          case "q":
            result[index] = "қ";
            break;
          case "r":
            result[index] = "р";
            break;
          case "s":
            result[index] = "с";
            break;
          case "t":
            result[index] = "т";
            break;
          case "u":
            result[index] = "у";
            break;
          case "v":
            result[index] = "в";
            break;
          case "x":
            result[index] = "х";
            break;
          case "y":
            result[index] = "й";
            break;
          case "z":
            result[index] = "з";
            break;
        }
      } else {
        switch (sign.toLowerCase()) {
          case "a":
            result[index] = "a".toUpperCase();
            break;
          case "b":
            result[index] = "б".toUpperCase();
            break;
          case "c":
            result[index] = "c".toUpperCase();
            break;
          case "d":
            result[index] = "д".toUpperCase();
            break;
          case "e":
            result[index] = "e".toUpperCase();
            break;
          case "f":
            result[index] = "ф".toUpperCase();
            break;
          case "g":
            result[index] = "г".toUpperCase();
            break;
          case "h":
            result[index] = "х".toUpperCase();
            break;
          case "i":
            result[index] = "и".toUpperCase();
            break;
          case "j":
            result[index] = "ж".toUpperCase();
            break;
          case "k":
            result[index] = "к".toUpperCase();
            break;
          case "l":
            result[index] = "л".toUpperCase();
            break;
          case "m":
            result[index] = "м".toUpperCase();
            break;
          case "n":
            result[index] = "н".toUpperCase();
            break;
          case "o":
            result[index] = "о".toUpperCase();
            break;
          case "p":
            result[index] = "п".toUpperCase();
            break;
          case "q":
            result[index] = "қ".toUpperCase();
            break;
          case "r":
            result[index] = "р".toUpperCase();
            break;
          case "s":
            result[index] = "с".toUpperCase();
            break;
          case "t":
            result[index] = "т".toUpperCase();
            break;
          case "u":
            result[index] = "у".toUpperCase();
            break;
          case "v":
            result[index] = "в".toUpperCase();
            break;
          case "x":
            result[index] = "х".toUpperCase();
            break;
          case "y":
            result[index] = "й".toUpperCase();
            break;
          case "z":
            result[index] = "з".toUpperCase();
            break;
        }
      }

      setIcon("fas fa-copy");
    });

    setText(result.join(""));
  };

  function copyDivToClipboard() {
    var range = document.createRange();
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
