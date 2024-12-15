import { FormikProps } from "formik";
import * as yup from "yup";
import TextField from "@mui/material/TextField";

type FormValues = yup.InferType<typeof yupSchema>;

export const FormInput = ({
  formik,
  accessor,
  label,
}: {
  formik: FormikProps<FormValues>;
  accessor: keyof FormValues;
  label: string;
}) => {
  return (
    <div className="mb-4">
      <TextField
        error={Boolean(formik.touched[accessor] && formik.errors[accessor])}
        helperText={
          formik.touched[accessor] && formik.errors[accessor]
            ? formik.errors[accessor]
            : null
        }
        id={accessor}
        label={label}
        name={accessor}
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[accessor]}
        className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};
