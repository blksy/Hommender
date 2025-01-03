import Bg from "../assets/Requests.bg.jpg";
import RequestCard from "../components/RequestCard";

const requests = [
  {
    id: 1,
    type: "Repair",
    location: "New York, NY",
    contact: "repair@example.com",
  },
  {
    id: 2,
    type: "Delivery",
    location: "San Francisco, CA",
    contact: "delivery@example.com",
  },
  {
    id: 3,
    type: "Installation",
    location: "Seattle, WA",
    contact: "install@example.com",
  },
  {
    id: 4,
    type: "Consultation",
    location: "Chicago, IL",
    contact: "consult@example.com",
  },
];

const Requests = () => {
  return (
    <div
      className="page-container bg-cover bg-center text-white py-8"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="max-h-screen overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
          {requests.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requests;
