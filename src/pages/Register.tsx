import { useFormik } from "formik";
import { registerSchema } from "../validators";
import { FormInput } from "../components/FormInput";
import Bg from "../assets/Form.bg.jpg";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
  full_name: string;
  role: "client" | "specialist";
  phone: string;
  address: string;
  description?: string; // Description for specialists
  services?: string[]; // Services for specialists
};

const Register = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      email: "",
      password: "",
      full_name: "",
      role: "client", //default
      phone: "",
      address: "",
      description: "",
      services: [],
    },
    validationSchema: registerSchema,
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
          Create an Account
        </h2>

        <FormInput formik={formik} accessor="full_name" label="Full Name" />
        <FormInput formik={formik} accessor="email" label="Email" />
        <FormInput formik={formik} accessor="password" label="Password" />

        <div className="mb-4">
          <RadioGroup
            aria-label="role"
            name="role"
            value={formik.values.role}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <FormControlLabel
              value="client"
              control={<Radio />}
              label="Client"
            />
            <FormControlLabel
              value="specialist"
              control={<Radio />}
              label="Specialist"
            />
          </RadioGroup>
        </div>

        {/* Conditional Fields Based on Role */}
        {formik.values.role === "specialist" && (
          <>
            <FormInput formik={formik} accessor="address" label="Address" />
            <FormInput formik={formik} accessor="phone" label="Phone" />
            <FormInput
              formik={formik}
              accessor="description"
              label="Description"
            />
            <FormInput
              formik={formik}
              accessor="services"
              label="Enter services (comma separated)"
            />
          </>
        )}

        {formik.values.role === "client" && (
          <>
            <FormInput formik={formik} accessor="address" label="Address" />
            <FormInput formik={formik} accessor="phone" label="Phone" />
          </>
        )}

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
              Register
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

export default Register;
