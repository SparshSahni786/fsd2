import Bio from "./biodata";

function Prf() {

    const student = {
        firstName: "Sparsh",
        lastName: "Sahni",
        age: 20,
        eyeColor: "brown",
    };

    return (
        <div>
            <h1>Hello World</h1>
            <Bio val={student} />
        </div>
    );
}

export default Prf;