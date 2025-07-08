import { useFormik } from "formik";
import { registerSchema } from "../validators";
import { FormInput } from "../components/FormInput";
import { RadioGroup, Radio, FormControlLabel } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { RegisterFormValues } from "../../types/types";
import FormLayout from "../components/FormLayout";
import { ROUTES } from "../router/routes";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
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
      services: undefined,
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      console.log("Form submitted with values:", values);
      console.log("Formik Errors:", formik.errors);

      const additionalInfo = {
        address: values.address,
        phone: values.phone,
        description:
          values.role === "specialist" ? values.description : undefined,
        services:
          values.role === "specialist"
            ? typeof values.services === "string"
              ? values.services
                  .split(",")
                  .map((service: string) => service.trim())
              : values.services
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
        console.log("Navigating to:", ROUTES.APP);
        navigate(ROUTES.APP);
      } catch (err) {
        toast.error("Error registering: " + (err as Error).message);
      }
    },
  });

  return (
    <FormLayout title="Create an Account" onSubmit={formik.handleSubmit}>
      <Toaster position="top-center" reverseOrder={false} />
      <FormInput
        values={formik.values}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        touched={formik.touched}
        errors={formik.errors}
        accessor="full_name"
        label="Full Name"
      />
      <FormInput
        values={formik.values}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        touched={formik.touched}
        errors={formik.errors}
        accessor="email"
        label="Email"
      />
      <div className="relative">
        <FormInput
          values={formik.values}
          handleChange={formik.handleChange}
          handleBlur={formik.handleBlur}
          touched={formik.touched}
          errors={formik.errors}
          accessor="password"
          label="Password"
          type={showPassword ? "text" : "password"}
        />
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl"
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </button>
      </div>
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
          <FormInput
            values={formik.values}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched}
            errors={formik.errors}
            accessor="address"
            label="Address"
          />
          <FormInput
            values={formik.values}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched}
            errors={formik.errors}
            accessor="phone"
            label="Phone"
          />
          <FormInput
            values={formik.values}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched}
            errors={formik.errors}
            accessor="description"
            label="Description"
          />
          <FormInput
            values={formik.values}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched}
            errors={formik.errors}
            accessor="services"
            label="Enter services (comma separated)"
          />
        </>
      )}

      {formik.values.role === "client" && (
        <>
          <FormInput
            values={formik.values}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched}
            errors={formik.errors}
            accessor="address"
            label="Address"
          />
          <FormInput
            values={formik.values}
            handleChange={formik.handleChange}
            handleBlur={formik.handleBlur}
            touched={formik.touched}
            errors={formik.errors}
            accessor="phone"
            label="Phone"
          />
        </>
      )}

      <div className="flex flex-col gap-4 mt-4 w-full">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white rounded-md px-4 py-2 w-full transition-all"
        >
          Register
        </button>
        <Link to="/">
          <button
            type="button"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md px-4 py-2 w-full transition-all"
          >
            Back
          </button>
        </Link>
      </div>
    </FormLayout>
  );
};

export default Register;
