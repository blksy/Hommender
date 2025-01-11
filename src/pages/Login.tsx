import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../validators";
import { FormInput } from "../components/FormInput";
import { LoginFormValues } from "../../types/types";
import FormLayout from "../components/FormLayout";
import { useAuth } from "../hooks/useAuth";
import { ROUTES } from "../router/routes";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
        toast.success("Login successful! Redirecting to the main page...");
        navigate(ROUTES.APP);
      } catch (err) {
        toast.error("Error logging in: " + (err as Error).message);
      }
    },
  });

  return (
    <FormLayout
      title="Provide user credentials to login"
      onSubmit={formik.handleSubmit}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <FormInput formik={formik} accessor="email" label="Email" />
      <FormInput formik={formik} accessor="password" label="Password" />
      <div className="flex flex-col gap-4 mt-4 items-center">
        <button type="submit" className="btn-primary">
          Login
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

export default Login;
