import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    // Using Array Destructuring Concept
    const [text, setText] = useState("Enter Text Here: ")

    // text = "Text Changed" // Wrong way to change the text


    const handleUpClick = () => {
        console.log("UpperCase Clicked " + text)
        let newText = text.toUpperCase()
        setText(newText)
    }

    const handleLoClick = () => {
        console.log("LowerCase Clicked ")
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleOnChange = (event) => {
        setText(event.target.value)
    }


    return (
        <>
            <div className='container' >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>

                    <button className="btn btn-primary mx-1 my-3" onClick={handleUpClick} >Convert To UpperCase</button>

                    <button className="btn btn-primary mx-1 my-3" onClick={handleLoClick} >Convert To LowerCase</button>


                </div>
            </div>

            <div className="container my-3">
                <h1>Youe Text Summary: </h1>
                <p>{text.split(" ").length - 1} words, {text.length} characters </p>
                <p>{0.008 * text.split(" ").length} Minutes Read</p>
                <h3>Preview: </h3>
                <p>{text}</p>
                
            </div>
        </>
    )
}

TextForm.prototype = {
    heading: PropTypes.string
}

TextForm.prototype = {
    heading: PropTypes.string.isRequired
}

TextForm.defaultProps = {
    heading: 'Set Heading'
}