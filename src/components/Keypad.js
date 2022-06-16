import React from 'react';

function passwordEnter(){
    console.log("Entering password...")
}

function Keypad(){
    return (
        <input type="password" onChange={passwordEnter} />
    )
}

export default Keypad