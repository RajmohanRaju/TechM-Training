import React, { useState, useEffect } from "react";
import ServiceList from "./ServiceList";
import BookingForm from "./BookingForm";
import BookingReceipt from "./BookingReceipt"; 
import servicesData from "../services.json"; 

const ServiceBooking = () => {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState(null);
  const [bookingDetails, setBookingDetails] = useState(null); 

  useEffect(() => {
    setServices(servicesData);
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="text-center">Car Service Booking</h2>

      {}
      {bookingDetails ? (
        <BookingReceipt details={bookingDetails} />
      ) : (
        <>
          <ServiceList services={services} setSelectedService={setSelectedService} />
          {selectedService && <BookingForm service={selectedService} setBookingDetails={setBookingDetails} />}
        </>
      )}
    </div>
  );
};

export default ServiceBooking;
