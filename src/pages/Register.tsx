import { useFormik } from "formik";
import { registerSchema } from "../validators";
import { FormInput } from "../components/FormInput";
import Bg from "../assets/Form.bg.jpg";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { Link } from "react-router-dom";
import { RegisterFormValues } from "../../types/types";
import FormLayout from "../components/FormLayout";

const Register = () => {
  const formik = useFormik<RegisterFormValues>({
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
    <FormLayout title="Create an Account">
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
          <FormControlLabel value="client" control={<Radio />} label="Client" />
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
          <button type="submit" className="btn-primary">
            Register
          </button>
        </Link>
        <Link to={"/"}>
          <button type="button" className="btn-secondary">
            Back
          </button>
        </Link>
      </div>
    </FormLayout>
  );
};

export default Register;
