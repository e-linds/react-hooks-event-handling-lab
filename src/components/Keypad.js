import React from "react"

function Keypad (){
    return (
        <div>
            <input type="password" onChange={(e) => {console.log("Entering password...")}}/>
        </div>
    )
}

export default Keypad;