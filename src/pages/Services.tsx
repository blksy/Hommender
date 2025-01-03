import Bg from "../assets/Services.bg.jpg";
import ServiceCard from "../components/ServiceCard";

const services = [
  {
    id: 1,
    type: "Plumbing",
    contact: "plumbing@example.com",
    specialistName: "John Plumber",
    priceRange: "$50 - $200",
    location: "New York, NY",
  },
  {
    id: 2,
    type: "Electrical",
    contact: "electrician@example.com",
    specialistName: "Jane Electrician",
    priceRange: "$100 - $500",
    location: "San Francisco, CA",
  },
  {
    id: 3,
    type: "Landscaping",
    contact: "landscape@example.com",
    specialistName: "Mike Landscaper",
    priceRange: "$30 - $150",
    location: "Seattle, WA",
  },
  {
    id: 4,
    type: "Cleaning",
    contact: "cleaning@example.com",
    specialistName: "Alice Cleaner",
    priceRange: "$20 - $100",
    location: "Chicago, IL",
  },
];

const Services = () => {
  return (
    <div
      className="page-container bg-cover bg-center text-white py-8"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="max-h-screen overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
