import Bg from "../assets/ServiceDetails.bg.jpg";

const AddReview = () => {
  return (
    <div
      className="w-full h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${Bg})` }}
    >
      Add a new review
    </div>
  );
};

export default AddReview;
