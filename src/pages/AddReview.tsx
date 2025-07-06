import { FaStar } from "react-icons/fa6";
import Bg from "../assets/ServiceDetails.bg.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Review } from "../../types/types";
import { toast } from "react-hot-toast";
import { addReview } from "../api/reviewsRequests";
import { useUser } from "../context/UserContext";
import { getClientById } from "../api/clientsRequests";

const AddReview = () => {
  const { id: specialistId } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();

  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number | null>(null);
  const [comment, setComment] = useState<string>("");
  const [fullName, setFullName] = useState<string>("");

  useEffect(() => {
    const fetchClientName = async () => {
      if (!user?.id) return;

      const client = await getClientById(user.id);
      if (client?.full_name) {
        setFullName(client.full_name);
      }
    };

    fetchClientName();
  }, [user?.id]);

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-red-600">
          You must be logged in to submit a review.
        </p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      toast.error("Please select a rating.");
      return;
    }

    const newReview: Partial<Review> = {
      rating,
      comment,
      specialist_id: specialistId,
      client_id: user.id,
      clients_name: fullName,
      created_at: new Date().toISOString(),
    };

    try {
      await addReview(newReview as Review);
      toast.success("Review submitted successfully!");
      console.log("fullName before submitting review:", fullName);
      navigate(`/app/specialists/${specialistId}`);
    } catch (error) {
      console.error("Error submitting review:", error);
      toast.error("Failed to submit review. Please try again.");
    }
  };
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-96 flex flex-col"
      >
        {" "}
        <h2 className="text-xl font-bold mb-4 text-center">Add a Review</h2>
        <div className="flex justify-center mb-4">
          {[...Array(5)].map((_, index) => {
            const starValue = index + 1;
            return (
              <FaStar
                key={index}
                className="cursor-pointer transition-all"
                size={30}
                color={starValue <= (hover ?? rating) ? "#ffc107" : "#e4e5e9"}
                onMouseEnter={() => setHover(starValue)}
                onMouseLeave={() => setHover(null)}
                onClick={() => setRating(starValue)}
              />
            );
          })}
        </div>
        <textarea
          className="border p-2 rounded w-full mb-4"
          placeholder="Write your review here..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
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
