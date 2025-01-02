import React from "react";

function ServiceCard({ title, description }) {
  return (
    <div className="h-[132px] rounded-lg bg-cardColor px-4 py-3 shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex flex-col">
        {/* Title */}
        <p className="text-xl lg:text-4xl text-white mb-2 text-left font-saira">
          {title}
        </p>

        {/* Description */}
        <p className="text-xs lg:text-sm text-gray-300 text-left font-inter">
          {description}
        </p>
      </div>
    </div>
  );
}

function ServiceCards() {
  const services = [
    { title: "7,645", description: "Our active members since last year" },
    {
      title: "450",
      description: "Success Stories at CoreFit Club to motivate you",
    },
    {
      title: "90%",
      description: "Our Satisfied Customers Feed back about Corefit Club ",
    },
    {
      title: "20%",
      description: "Our members build muscle with in 2 - 6 month training",
    },
  ];

  return (
    <div className="container mx-auto px-1 sm:px-1 lg:px-1 my-3">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 lg:gap-5">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
}

export default ServiceCards;
