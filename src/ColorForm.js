import React, { useState } from 'react'

function ColorForm (props) {
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        e.target[0].value = ""
        props.addColor(input)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Choose a new color!"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default ColorForm