import React, { useState } from "react";

const BookingForm = ({ service, setBookingDetails }) => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    
    setBookingDetails({
      name: formData.name,
      contact: formData.contact,
      date: formData.date,
      serviceName: service.name,
      price: service.price,
    });
  };

  return (
    <div className="mt-4 p-3 border">
      <h4>Book Service: {service.name}</h4>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label className="form-label">Name:</label>
          <input type="text" name="name" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label className="form-label">Contact:</label>
          <input type="text" name="contact" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-2">
          <label className="form-label">Date:</label>
          <input type="date" name="date" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Confirm Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
