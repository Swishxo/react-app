import React, { useState } from 'react';

function ArrayObj() {

    const [cars, setCars] = useState([]);//create array state to store obj
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){

        //create a new obj to store values
        const newCar = {year: carYear, 
                        make: carMake, 
                        model: carModel};
        
        //update previous state with new obj 
        setCars(c => [...c, newCar]);
        //adjust year for obj
        setCarYear(new Date().getFullYear());
        //blank str after user is done
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
        //get previous state and filter into a new array any element !== to index
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event){
        //set car year by getting the event of targeted <input/>
        setCarYear(event.target.value);
    }

    function handleMakeChange(event){
        //set car make by getting the event of targeted <input/>
        setCarMake(event.target.value);
    }

    function handleModelChange(event){
        //set car model by getting the event of targeted <input/>
        setCarModel(event.target.value);
    }

    return (<div>
                <h2>List of Car Objects</h2>
                <ul>
                {cars.map((car, index) => 
                        <li key={index} onClick={() => handleRemoveCar(index)}>
                            {car.year} {car.make} {car.model}
                        </li>)}  
                </ul>

                <input type="number" value={carYear} onChange={handleYearChange}/><br/>
                <input type="text" value={carMake} onChange={handleMakeChange}
                       placeholder="Enter car make"/><br/>
                <input type="text" value={carModel} onChange={handleModelChange}
                       placeholder="Enter car model"/><br/>
                <button onClick={handleAddCar}>Add Car</button>
            </div>);
}

export default ArrayObj;