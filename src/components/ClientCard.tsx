export const ClientCard = ({ client }) => {
  return (
    <div className="bg-white bg-opacity-80 p-4 rounded-lg shadow-lg flex items-center space-x-4">
      <div className="flex-shrink-0">
        <img
          src={client.profilePic}
          alt="profile"
          className="w-28 h-28 rounded-full object-cover"
        />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{client.fullName}</h3>
        <p className="text-gray-600 mb-2">{client.address}</p>
        <p className="text-gray-600 mb-4">{client.phone}</p>
        <button
          className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
          onClick={() => alert("Profile to be implemented")}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};
