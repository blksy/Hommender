import { FaStar } from "react-icons/fa6";
import Bg from "../assets/ServiceDetails.bg.jpg";

const AddReview = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <form className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col">
        {" "}
        <h2 className="text-xl font-bold mb-4 text-center">Add a Review</h2>
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) => {
            return (
              <FaStar
                key={index}
                className="cursor-pointer transition-all"
                size={30}
                color={"#ffc107"}
              />
            );
          })}
        </div>
        <textarea
          className="border p-2 rounded w-full mb-4"
          placeholder="Write your review here..."
          required
        ></textarea>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-all"
        >
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default AddReview;
