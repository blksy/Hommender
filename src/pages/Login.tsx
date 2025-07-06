import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../validators";
import { FormInput } from "../components/FormInput";
import { LoginFormValues } from "../../types/types";
import FormLayout from "../components/FormLayout";
import { ROUTES } from "../router/routes";
import toast, { Toaster } from "react-hot-toast";
import { useAuth } from "../hooks/useAuth";
import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";

const Login = () => {
  const navigate = useNavigate();
  const [isPending, setIsPending] = useState(false);
  const { login } = useAuth();
  const { user } = useUser();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        setIsPending(true);
        await login(values.email, values.password);
        toast.success("Login successful! Redirecting...");
      } catch (err) {
        toast.error("Login failed: " + (err as Error).message);
      } finally {
        setIsPending(false);
      }
    },
  });

  useEffect(() => {
    if (user) {
      navigate(ROUTES.APP);
    }
  }, [user]);

  return (
    <FormLayout
      title="Provide user credentials to login"
      onSubmit={formik.handleSubmit}
    >
      <Toaster position="top-center" reverseOrder={false} />
      <FormInput
        values={formik.values}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        touched={formik.touched}
        errors={formik.errors}
        accessor="email"
        label="Email"
      />
      <FormInput
        values={formik.values}
        handleChange={formik.handleChange}
        handleBlur={formik.handleBlur}
        touched={formik.touched}
        errors={formik.errors}
        accessor="password"
        label="Password"
        type="password"
      />
      <div className="flex flex-col gap-4 mt-4 items-center">
        <button type="submit" className="btn-primary" disabled={isPending}>
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
