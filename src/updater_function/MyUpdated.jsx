import { useState } from "react";


//this is the prefered way to update a state
    //it updates the previous to state current state
function MyUpdater(){

    const [by2, setBy2] = useState(0);
    const [by3, setBy3] = useState(0);

    //wrong way
        //updates by 2
    function handleBy2(){
        //updating the state like this is wrong
            //look at var before and after. no update is done
            console.log(by2);
            setBy2(by2 + 1);
            console.log(by2);
            setBy2(by2 + 1);

            //you find that each number is duplicated, so counting by two has to be hard-coded.
    }

    //correct way
        //updates by 3
    function handleBy3(){
        //use the previous state to update current state. like this
        console.log(by3);
        //its a built-in function that updates your var in real-time 
            //and uses an arrow function => to call updated value
        setBy3(currentBy3 => currentBy3 + 1);
        console.log(by3);
        setBy3(currentBy3 => currentBy3 + 1);
        console.log(by3);
        setBy3(currentBy3 => currentBy3 + 1);
        console.log(by3);

        //you find that printed values are synced
            //use this method for any useState update

    }



    return(
        <div>
            <p>Count: {by3}</p>
            <button onClick={handleBy3}>
                +
            </button>
        </div>
    );
}

export default MyUpdater