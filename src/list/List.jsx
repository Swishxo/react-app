
function List(props){

    const category = props.category;
    const items = props.items;
   

    //use the map function from fruits array
    //and use arrow funtion to place each fruit in a HTML list
    //finally store results in a const var

    //when using an array of objects, ensure that the key is unique. 
    //also can be str or num
    const listItems = items.map(item => <li key={item.id}>
                                            {item.name} : &nbsp;
                                            {item.calories}</li>);

    //display mapped const var in an <ol><ol/>, <ul><ul/>, or <li><li/>
    return(<>
        <h1>{category}</h1>
        <ol>{listItems}</ol>
    </>);
}

export default List