import React, {useState} from 'react';
import './Booking.css'

export default function Booking(props:any) {

    const [ displayInitiated, displayInitiatedSetter] = useState(false);
    const [ name, setName] = useState('')
    const [ phone, setPhone] = useState('')

    function renderBookingForm(event: React.MouseEvent<HTMLButtonElement,MouseEvent>) {
        event.preventDefault();
        displayInitiatedSetter(true);
    }

    function changeHandler(event: React.ChangeEvent<HTMLInputElement>){
        if (event.target.name === "name"){
            setName(event.target.value)
        }else if (event.target.name === "phone"){
            setPhone(event.target.value)
        }
    }

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
    }

    const initiateBookingButton = <button onClick={renderBookingForm}>BOOK A BED</button> ;

    const bookingForm = (
    <div>
        <form onSubmit={handleSubmit}>
            <label id="label">Your Full Name</label>
            <br/>
            <input name="name" type="text" value={name} onChange={changeHandler} />
            <br/>
            <br/>
            <label id="label">Your Mobile Number</label>
            <br/>
            <input name="phone" type="text" value={phone} onChange={changeHandler} />
            <br/>
            <br/>
            <button type="submit">Confirm Booking</button>
        </form>
    </div>)
  
    return (
        <div>
            <h1>{props.provider.name}</h1>
            <p>{props.provider.location.address}</p>
            
            {displayInitiated ? initiateBookingButton: bookingForm }

        </div>
    );
}
