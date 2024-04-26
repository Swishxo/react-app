import {useState} from 'react';

function MyComponent(){
    //array destructing
        //first element is the variable and second element is a fuction
        //use var to store default value and function to change or update
    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () =>{
        setName("Steph");
    } 

    const updateAge = () =>{
        setAge(age + 1);
    }

    //correct way to munipulate boolean value
    const toggleEmployed = ()=>{
        //first click !isEmployed == true
            //second click !isEmplyed == false 
        setIsEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={updateAge}>Set Age</button>

        <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={ ()=>toggleEmployed() } >{isEmployed ? "Fire!": "Hire!"}</button>
    </div>);
}


export default MyComponent