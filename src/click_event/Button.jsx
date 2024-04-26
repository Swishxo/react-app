
function Button(){

    //<button></button>: onClick={handleClick} CALLED without parameters
    //const handleClick = () => console.log("Ouch");
    
    //<button onClick={ ()=> handleClick2("Steph") }>: if your function has parameters
        //use () => to call function 
    //const handleClick2 = (name) => console.log(`${name} stop clicking me`)

/*
    let count = 0;
    const handleClick3 = (name) =>{
        if(count < 3){
            count++;
            console.log(`${count}`);
        }
        else{
            console.log(`${name} Stop clicking me`)
        }
    };
*/

    //using events to change button text
    const handleClick4 = (e) => e.target.textContent = "Ouch";
    return(
        <button onClick={ (e)=> handleClick4(e) }>Click me 🥹</button>
    );
}

export default Button