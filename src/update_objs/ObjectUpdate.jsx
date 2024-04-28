import { useState } from "react";

//to update obj use js spread operator
            //concept: because updating one value erases all previous data
            //use the spread operator to add the value
            //the array will replace old value with updated value

        //inorder to use spread operator make a reference using updater function 
            //surround odj with () to use 
            //ex: setObj( o => ({...obj, year: event.target.value}) );

function ObjectUpdate(){
    
    const [car, setCar] = useState({year: 2017, 
                                    make: "VW", 
                                    model: "Jetta"});

    function handleYearChange(event){
        
        setCar( c => ({...car, year: event.target.value}) );
    }
    function handleMakeChange(event){
        setCar( c => ({...car, make: event.target.value}) );
    }
    function handleModelChange(event){
        setCar( c => ({...car, model: event.target.value}) );
    }

    return(<>
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>
        </div>
        <input type="number" value={car.year} onChange={handleYearChange}/><br/>
        <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
        <input type="text" value={car.model} onChange={handleModelChange}/><br/>
    </>);
}

export default ObjectUpdate