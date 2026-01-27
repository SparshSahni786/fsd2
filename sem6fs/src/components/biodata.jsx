import React from "react";
import { useState } from "react";
import Prf from "./profile";

function Bio(props) {
    const [name, setName] = useState('my name is sparsh!')

    // const person = {
    //     firstName: "Sparsh",
    //     lastName: "Sahni",
    //     age: 20,
    //     eyeColor: "brown",
    // };

    return (
        <div className="container">
            <div className="row">
                <h1
                    onClick={() => {
                        setName("Sparsh Sahni is my name")
                    }}
                >
                    {name}
                </h1>

                <h2 className="">
                    I am currently pursuing 3rd year in Bachelors' of Engineering,
                    specialization in Artificial Intelligence and Machine Learning from
                    Chandigarh University, Mohali.
                </h2>
            </div>
            <h2>{props.val.firstName}</h2>

        </div>
    );

}
export default Bio;