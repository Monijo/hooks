import React, {useId} from 'react';

function Id(props) {
    const id = useId()
    return (
        <div><h2>useId example</h2>

        <label htmlFor={id}>innput- {id}</label>
            <input type="text" id={id}/>
        </div>
    );
}

export default Id;
