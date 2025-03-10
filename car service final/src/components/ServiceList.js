import React from "react";

const ServiceList = ({ services, setSelectedService }) => {
  return (
    <div className="service-list">
      {services.map((service) => (
        <div key={service.id} className="service-item" onClick={() => setSelectedService(service)}>
          <h4>{service.name}</h4>
          <p>Price: ₹{service.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;
