import React from "react";

const ServiceList = ({ services, setSelectedService }) => {
  return (
    <div className="mt-3">
      <h4>Available Services</h4>
      <ul className="list-group">
        {services.map((service) => (
          <li key={service.id} className="list-group-item d-flex justify-content-between">
            <span>{service.name} - ${service.price}</span>
            <button className="btn btn-primary btn-sm" onClick={() => setSelectedService(service)}>
              Book Now
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
