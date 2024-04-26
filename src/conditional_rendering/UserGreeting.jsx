import "./userStyle.css"

function UserGreeting(props){

    const welcomeMsg = <h2 className="welcome-message">Welcome {props.userName}</h2>
    const loginPromt = <h2 className="loggin-prompt">Please Login to continue</h2>

   return(props.isLoggedIn ?  welcomeMsg :  loginPromt);
}

export default UserGreeting