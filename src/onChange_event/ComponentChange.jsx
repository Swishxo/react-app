//onChange = used with form elements
//  ex. <input/>, <textarea/>, <select/>, <radio/>
//  triggers a function everytime the value of the input changes

import { useState } from "react";

function ComponentChange(){

  const [name, setName] = useState("Guest");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShiping] = useState("Deliver");

  function handleNameChange(event){
      setName(event.target.value);
  }

  function handleQuantity(event){
    setQuantity(event.target.value)
  }

  function handleComment(event){
    setComment(event.target.value);
  }

  function handlePayment(event){
    setPayment(event.target.value);
  }

  function handleShipping(event){
    setShiping(event.target.value);
  }

    return(<div>
        <input value={name} onChange={handleNameChange}/>
        <p>Name: {name}</p>
  
        <input value={quantity} onChange={handleQuantity} type="number" />
        <p>Quantity: {quantity}</p>
  
        <textarea value={comment} onChange={handleComment} placeholder="Enter delivery instructions"/>
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePayment}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment Type: {payment}</p>

        <label>
            <input type="radio" value="Pick up"
                checked={shipping === "Pick up"}
                onChange={handleShipping}/>
            Pick up!
        </label>
        <label>
        <input type="radio" value="Deliver"
                checked={shipping === "Deliver"}
                onChange={handleShipping}/>
            Delivery!
        </label>
        <p>Shipping: {shipping}</p>
      </div>);
}

export default ComponentChange