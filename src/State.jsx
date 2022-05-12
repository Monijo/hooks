import React, {useState} from 'react';

function StateComponent(props) {
    const [isGreen, setGreen] = useState(true)
    return (
        <div>
            <h1 style={{color: isGreen ? "green" : "blue"}} onClick={(e)=>{
                setGreen((prevState)=>!prevState)
            }}>useState example</h1>

        </div>
    );
}

export default StateComponent;
