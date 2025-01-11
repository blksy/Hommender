import Bg from "../assets/Clients.bg.jpg";
import ClientCard from "../components/ClientCard";

const clients = [
  {
    id: 1,
    fullName: "John Doe",
    address: "Address: 1234 Elm St, Springfield, IL",
    phone: "Phone: 605-992|",
    profilePic: "https://www.w3schools.com/w3images/avatar2.png",
  },
  {
    id: 2,
    fullName: "Jane Smith",
    address: "Address: 5678 Oak St, Madison, WI",
    phone: "Phone:  605-992",
    profilePic: "https://www.w3schools.com/w3images/avatar5.png",
  },
  {
    id: 3,
    fullName: "Mike Johnson",
    address: "Address: 1357 P3",
    phone: "Phone:  605-992",
    profilePic: "https://www.w3schools.com/w3images/avatar3.png",
  },
  {
    id: 4,
    fullName: "Alice Brown",
    address: "Address: 2468 Maple St, Seattle, WA",
    phone: "Phone:  605-992",
    profilePic: "https://www.w3schools.com/w3images/avatar4.png",
  },
];
const Clients = () => {
  return (
    <div
      className="page-container bg-cover bg-center text-white py-8"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="max-h-screen overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
