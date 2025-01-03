import Bg from "../assets/Specialists.bg.jpg";
import SpecialistCard from "../components/SpecialistCard";

const specialists = [
  {
    id: 1,
    fullName: "Mr. John Doe",
    services: "Plumbing, Electrical",
    phone: "555-123-4567",
    profilePic: "https://www.w3schools.com/w3images/avatar5.png",
  },
  {
    id: 2,
    fullName: "Mr. John Doe",
    services: "Plumbing, Electrical",
    phone: "555-123-4567",
    profilePic: "https://www.w3schools.com/w3images/avatar5.png",
  },
  {
    id: 3,
    fullName: "Ms. Alice Renovator",
    services: "Home Renovation, Interior Design",
    phone: "456-789-0123",
    profilePic: "https://www.w3schools.com/w3images/avatar3.png",
  },
  {
    id: 4,
    fullName: "Mr. Bob Cleaner",
    services: "Residential Cleaning, Office Cleaning",
    phone: "789-012-3456",
    profilePic: "https://www.w3schools.com/w3images/avatar4.png",
  },
  {
    id: 5,
    fullName: "Ms. Clara Painter",
    services: "House Painting, Decorative Painting",
    phone: "987-654-3210",
    profilePic: "https://www.w3schools.com/w3images/avatar6.png",
  },
  {
    id: 6,
    fullName: "Mr. Mike Landscaper",
    services: "Gardening, Landscape Design",
    phone: "654-321-9876",
    profilePic: "https://www.w3schools.com/w3images/avatar7.png",
  },
  {
    id: 7,
    fullName: "Mrs. Susan Organizer",
    services: "Home Organization, Decluttering",
    phone: "321-987-6543",
    profilePic: "https://www.w3schools.com/w3images/avatar8.png",
  },
  {
    id: 8,
    fullName: "Mr. Alex Builder",
    services: "Construction, Masonry",
    phone: "123-456-7890",
    profilePic: "https://www.w3schools.com/w3images/avatar9.png",
  },
];

const Specialists = () => {
  return (
    <div
      className="page-container bg-cover bg-center text-white py-8"
      style={{
        backgroundImage: `url(${Bg})`,
      }}
    >
      <div className="max-h-screen overflow-y-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-4">
          {specialists.map((specialist) => (
            <SpecialistCard key={specialist.id} specialist={specialist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specialists;
