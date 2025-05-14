import Bg from "../assets/Specialists.bg.jpg";
import SpecialistCard from "../components/SpecialistCard";
import { useQuery } from "@tanstack/react-query";
import { fetchAllSpecialists } from "../api/specialistsRequests";

const Specialists = () => {
  const {
    data: specialists,
    isLoading,
    error,
  } = useQuery({ queryKey: ["specialists"], queryFn: fetchAllSpecialists });

  if (error) {
    return <p>Cannot get specialists</p>;
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
      <div className="max-h-screen overflow-y-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
          {specialists && specialists.length > 0 ? (
            specialists.map((specialist) => (
              <SpecialistCard key={specialist.id} specialist={specialist} />
            ))
          ) : (
            <p>No specialists available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Specialists;
