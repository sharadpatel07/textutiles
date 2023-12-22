import React, { useState } from "react";

export default function Textutils(props) {
  let [text, setText] = useState("");
  let [count, setcount] = useState(0);
  let [space, setspace] = useState(0);
  let [read, setread] = useState(0);

  let handlechange = (event) => {
    setText(event.target.value);
    let num = text.length;
    let num2 = text.split(" ").length;
    setcount(num);
    setspace(num2);
    setread(0.008 * num2);
  };

  let toupper = (event) => {
    setText(text.toUpperCase());
  };
  let tolower = () => {
    setText(text.toLowerCase());
  };
  let toclear = () => {
    let clear = "";
    setText(clear);
    setcount(0);
    setread(0);
    setspace(0);
  };
  let toremovespace = () => {
    let b = text.split(/[ ] + /);
    setText(b.join(" "));
  };

  return (
    <>
      <div style={props.bgcolor}>
        <div className="container">
          <label className="label"> Textutils</label>
          <textarea
            cols="100"
            rows="14"
            className="textarea"
            placeholder="Enter Your text"
            value={text}
            onChange={handlechange}
          ></textarea>
          <button
            className="btn btn-primary"
            id="uppercase"
            type="submit"
            onClick={toupper}
          >
            to UpperCase
          </button>
          <button
            className="btn btn-primary"
            id="lowercase"
            type="submit"
            onClick={tolower}
          >
            to LowerCase
          </button>
          <button
            className="btn btn-primary"
            id="clear"
            type="submit"
            onClick={toclear}
          >
            To Clear
          </button>
          <button
            className="btn btn-primary"
            id="extraspace"
            type="submit"
            onClick={toremovespace}
          >
            remove Extraspace
          </button>
        </div>

        <div className="output">
          <p>text length is: {count}</p>
          <p>text space is: {space}</p>
          <p>text avg time for read this para: {read}</p>
        </div>
      </div>
    </>
  );
}
