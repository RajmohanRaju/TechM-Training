import React from "react";

const BookingReceipt = ({ details }) => {
  return (
    <div className="receipt">
      <h3>Booking Receipt</h3>
      <p><strong>Name:</strong> {details.name}</p>
      <p><strong>Contact:</strong> {details.contact}</p>
      <p><strong>Service:</strong> {details.serviceName}</p>
      <p><strong>Booking Date:</strong> {details.date}</p>
      <p><strong>Price:</strong> ₹{details.price}</p> {}
      <button onClick={() => window.location.reload()}>Book Another Service</button>
    </div>
  );
};

export default BookingReceipt;
