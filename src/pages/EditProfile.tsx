import Bg from "../assets/Profile.bg.jpg";

const EditProfile = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-2xl shadow-lg w-96 flex flex-col items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Profile Edition
        </h1>
        <form className="w-full flex flex-col items-center gap-4">
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
