import { useQuery } from "@tanstack/react-query";
import Bg from "../assets/Clients.bg.jpg";
import ClientCard from "../components/ClientCard";
import { fetchAllClients } from "../api/clientsRequests";

const Clients = () => {
  const {
    data: clients = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["clients"],
    queryFn: fetchAllClients,
  });

  if (error) {
    return <p>Cannot get clients</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="page-container bg-cover bg-center text-white py-8"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="max-h-screen overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-6">
          {clients.map((client) => (
            <ClientCard key={client.id} client={client} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
