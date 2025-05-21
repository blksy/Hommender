import { useQuery } from "@tanstack/react-query";
import Bg from "../assets/Requests.bg.jpg";
import RequestCard from "../components/RequestCard";
import { fetchAllOrders } from "../api/ordersRequests";

const Requests = () => {
  const {
    data: requests,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["requests"],
    queryFn: fetchAllOrders,
  });

  if (error) {
    return <p>Cannot get requests</p>;
  }
  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div
      className="page-container bg-cover bg-center text-white py-8"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="max-h-screen overflow-y-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
          {requests?.map((request) => (
            <RequestCard key={request.id} request={request} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Requests;
