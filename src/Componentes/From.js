import React, { useState } from "react";

function Form() {
    const [name, setName] = useState("");

    return (
        <form>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Hello, {name}</p>
        </form>
    );
}

export default Form;
