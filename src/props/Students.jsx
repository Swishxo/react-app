import "./student.css"
import PropTypes from 'prop-types'

function Students(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "NO"}</p>
        </div>
    );
}

//prop.type - ensures the data recieved is the correct value. In console you see warning
Students.prototype = {
    name: PropTypes.string,
    age: PropTypes.age,
    isStudent: PropTypes.bool,
}

//add default values if none is passed to component
Students.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

export default Students