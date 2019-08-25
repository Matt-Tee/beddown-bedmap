import React from 'react';

export default function Booking(props:any) {

    function renderBookingForm(event) {
        
    }
  
    return (
        <div>
            <h1>{props.provider.name}</h1>
            <p>{props.location.address}</p>
            <button onClick={renderBookingForm}>BOOK A BED</button>
        </div>
    );
}
