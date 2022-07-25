import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState("");
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Low Case", "success");
  };
  const handleClear = () => {
    setText(" ");
    props.showAlert("Cleared Text", "success");
  };
  const handleRep = () => {
    let i = 0;
    let w = 0;
    for (i = 0; i < text.length; i++) {
      if (text.charAt(i) != " ") w = w + 1;
    }
    setText("Total Characters without Space=" + w);
  };

  const handleOnChange = (event) => {
    console.log("on change.");
    setText(event.target.value);
  };

  const handleCap = (event) => {
    const lower = text.toLowerCase();

    setText(lower.charAt(0).toUpperCase() + lower.slice(1) + ".");
    props.showAlert("First Letter Capitalized", "success");
  };

  const handleCopy = (event) => {
    var copyText = document.getElementById("myBox");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
    props.showAlert("Copied to Clipboard!", "success");
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 className="my-3">{props.heading}</h1>
        <div className="mb-3 my-3">
          <textarea
            className="form-control"
            id="myBox"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#0f3040" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary my-1 mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>

        <button className="btn btn-primary my-1 mx-1 " onClick={handleCopy}>
          Copy
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleCap}>
          Capitalize
        </button>

        <button className="btn btn-primary my-1 mx-1" onClick={handleClear}>
          Delete
        </button>
        <button className="btn btn-primary my-1 mx-1" onClick={handleRep}>
          Total Count without Space
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <hr />
        <h2>Your Text Summary</h2>
        <p>
          Your text has{" "}
          <b>
            {
              text
                .replace(/\n/g, " ")
                .split(" ")
                .filter((value) => value != "").length
            }
          </b>{" "}
          words and <b>{text.length} </b>
          characters.
        </p>
        <p>
          About <b>{Math.round(0.008 * text.split(" ").length)} Minutes</b>{" "}
          read.
        </p>
        <hr />
        <h2>Preview</h2>

        <p>{text.length > 0 ? text : "Enter Something to Preview it here."}</p>
      </div>
    </>
  );
}
