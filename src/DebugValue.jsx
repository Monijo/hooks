import React, {useEffect, useState, useDebugValue} from 'react';


function UseIsRaining(){
    const [isRaining, setIsRaining] = useState(false)
    useEffect(() => {
        setIsRaining(Math.random()>0.5)


    }, []);

    useDebugValue(isRaining ? "Is raining": "is not raining", (value)=>{
        return `it ${value.toLowerCase()} ${isRaining ? "🌧️" : "☀️"}`
    });


    return isRaining

}


function DebugValue(props) {
    const isRaining = UseIsRaining()
    return (
        <div>
            <h2>Use DebugeValue</h2>
            <p>Do you need a coat today ? {isRaining ? "Yes": "No"}</p>
        </div>
    );
}

export default DebugValue;
