import React, { useState } from 'react'
// import propTypes from 'prop-types'
export default function TextForm(prop) {
    let flag = 0;
    const toUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const toLowerCase = () => {
        let ltext = text.toLowerCase();
        setText(ltext);
    }
    const cleartext = () => {
        let ntext = "";
        setText(ntext);
    }
    const HandleOnChange = (e) => {
        setText(e.target.value);
    }
    const toItalic = () => {
        if (flag === 0) {
            let mtext = document.getElementById("myBox");
            mtext.style.fontStyle = 'Italic';
            flag = flag + 1;
        } else {
            let xtext = document.getElementById("myBox");
            xtext.style.fontStyle = "normal";
            flag = flag - 1;
        }

    }
    const [text, setText] = useState("Enter text here");
    return (
        <>
            <div>

                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label">{prop.heading}:</label>
                    <textarea className="form-control" onChange={HandleOnChange} value={text} id="myBox" rows="8"></textarea>
                </div>
                <button className="btn btn-primary" onClick={toUpperCase}>Convert to upperCase</button>
                <button className="btn btn-primary mx-2" onClick={toLowerCase}>Convert to LowerCase</button>
                <button className="btn btn-primary mx-2" onClick={cleartext}>Clear text</button>
                <button className="btn btn-primary mx-2" onClick={toItalic}>Convert to Italic/Revert to normal</button>
            </div>
            <div className="container my-3">
                <h1>
                    Text Summary
                </h1>
                <p>There are {text.length===0?'0':text.split(" ").length} words and {text.length} characters and time taken to read is {0.008 * (text.length)} minutes</p>
            </div>
        </>
    )
}
TextForm.defaultProps = {
    heading: "HEADING DE BE"
}