import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../validators";
import { FormInput } from "../components/FormInput";
import Bg from "../assets/Form.bg.jpg";

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {},
  });

  return (
    <div
      className="page-container-col"
      style={{
        backgroundImage: `url(${Bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <form
        className=" p-6 rounded-lg"
        onSubmit={formik.handleSubmit}
        style={{
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          maxWidth: "400px",
          width: "50%",
          padding: "30px",
          opacity: "0.9",
        }}
      >
        <h2 className="font-bold text-4xl text-center mb-6">
          Provide user credentials to login
        </h2>
        <FormInput formik={formik} accessor="email" label="Email" />
        <FormInput formik={formik} accessor="password" label="Password" />
        <div
          className="flex flex-col gap-4 mt-4"
          style={{
            alignItems: "center",
          }}
        >
          <Link to={"/app"}>
            <button
              type="submit"
              className="bg-blue-700 text-white py-2 px-4 w-full max-w-xs rounded-lg hover:bg-blue-800"
            >
              Login
            </button>
          </Link>
          <Link to={"/"}>
            <button
              type="button"
              className="bg-black text-white py-2 px-4 w-full max-w-xs rounded-lg hover:bg-gray-800"
            >
              Back
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};
export default Login;
