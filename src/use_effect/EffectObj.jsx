import React, {useState, useEffect} from "react";

//useEffect: is executed as side code

function EffectObj() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    
    //useEffect: without dependencies updates for any state change
        /*
            useEffect( () =>{ console.log()
            });
        */

    //useEffect: with empty dependencies useEffect executes once
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("EVENT LISTENER ADDED");

        return () => {
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    //useEffect: with dependencies it execute based on the state or 
        //states its given
    useEffect(() => {
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>);
}

export default EffectObj;