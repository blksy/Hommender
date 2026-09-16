import { FormikProps, FormikValues } from "formik";
import TextField from "@mui/material/TextField";

type FormValues = yup.InferType<typeof yupSchema>;

export const FormInput = <T extends FormikValues>({
  formik,
  accessor,
  label,
  multiline = false,
  type = "text",
}: {
  formik: FormikProps<T>;
  accessor: keyof T & string;
  label: string;
  multiline?: boolean;
  type?: React.HTMLInputTypeAttribute;
}) => {
  return (
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
      multiline={multiline}
      minRows={multiline ? 4 : undefined}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values[accessor]}
      className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};
