import React, { useState, useEffect } from "react";

function UseEffect() {
    const [emotion, setEmotion] = useState("happy");
    const [secondary, setSecondary] = useState("tired");

    useEffect(() => {
        console.log(`It's ${emotion} around here`);
    }, [emotion,secondary]);

    useEffect(() => {
        console.log(`It's ${secondary} around here`);
    }, [secondary]);

    return (
        <div className="App">
            <h1>My emotion is {emotion}</h1>
            <button onClick={() => setEmotion("sad")}>
                Sad
            </button>
            <button onClick={() => setEmotion("excited")}>
                Excited 
            </button>
            <h2>Current emotion is {secondary}</h2>
            <button onClick={() => setSecondary("grateful")}>
                Grateful
            </button>
        </div>
    );
}

export default UseEffect;
