import {useState, useLayoutEffect, useRef} from "react";

function LayoutEffect(){
    const [width, setWidth] = useState(null)
    const [height, setHeight] = useState(null)

    const refTextarea = useRef(null);

    useLayoutEffect(() => {
        setWidth(refTextarea.current.clientWidth)
        setHeight(refTextarea.current.clientHeight)
    });




    return <div>
        <h2>LayoutEffect</h2>
        <p>Textarea width: {width}</p>
        <p>Textarea height: {height}</p>

        <textarea ref={refTextarea} onClick={
            ()=>{
               setWidth(0)
            }
        }/>


    </div>
}
export default LayoutEffect;
