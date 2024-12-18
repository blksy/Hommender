import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import { loginSchema } from "../validators";
import { FormInput } from "../components/FormInput";
import { LoginFormValues } from "../../types/types";
import FormLayout from "../components/FormLayout";

const Login = () => {
  const navigate = useNavigate();

  const formik = useFormik<LoginFormValues>({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {},
  });

  return (
    <FormLayout title="Provide user credentials to login">
      <FormInput formik={formik} accessor="email" label="Email" />
      <FormInput formik={formik} accessor="password" label="Password" />
      <div className="flex flex-col gap-4 mt-4 items-center">
        <Link to={"/app"}>
          <button type="submit" className="btn-primary">
            Login
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

export default Login;
