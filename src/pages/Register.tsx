import { useFormik } from "formik";
import { registerSchema } from "../validators";
import { FormInput } from "../components/FormInput";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { RegisterFormValues } from "../../types/types";
import FormLayout from "../components/FormLayout";
import { ROUTES } from "../router/routes";
import { useAuth } from "../hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();

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
    onSubmit: async (values) => {
      const additionalInfo = {
        address: values.address,
        phone: values.phone,
        description:
          values.role === "specialist" ? values.description : undefined,
        services:
          values.role === "specialist"
            ? values.services.split(",").map((service) => service.trim())
            : undefined,
      };

      try {
        await signUp(
          values.full_name,
          values.email.trim(),
          values.password,
          values.role,
          additionalInfo
        );
        toast.success(
          "Registration successful! Please check your email for confirmation."
        );
        navigate(ROUTES.APP);
      } catch (err) {
        toast.error("Error registering: " + (err as Error).message);
      }
    },
  });
  return (
    <FormLayout title="Create an Account" onSubmit={formik.handleSubmit}>
      <Toaster position="top-center" reverseOrder={false} />
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
        style={{ alignItems: "center" }}
      >
        <button type="submit" className="btn-primary">
          Register
        </button>
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
