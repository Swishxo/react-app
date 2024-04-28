import { useState } from "react";

//click on List items to remove it

function ArrayUpdate(){

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(event){
        //get value entered input
        const newFood = document.getElementById("foodInput").value;
        
        //clear input
        document.getElementById("foodInput").value = "";

        setFoods( f => [...foods, newFood] );

    }

    function handleRemoveFood(index){
        //array.filter(): creates a new array filled with elements that pass a test provided by a function.
            //use () inside filter to access its element & index ex: array.filter( (element, index) )
            //use arrow function to access element & index ex: ( (element, index) => LOGIC) 

                //use (_,i) to represent (element, index)!!!!!!! _  means ignore for devs
                //english: filter create new arr of elements where i !equal to the index
        setFoods(foods.filter( ( _, i) => i !== index) ); //LOGIC: filter(() => i !equal to index)
    }
    //array will access to element and index just use (var, index) => Munipulate LOGIC
    return(<div>
        <h2>List of Food</h2>
            <ul>
                {foods.map((food, index) => 
                    <li key={index} onClick={ ()=>handleRemoveFood(index)}>
                        {food}
                    </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="Enter Food Item" />
            <button onClick={handleAddFood}>Add Food: </button>
    </div>);
}

export default ArrayUpdate