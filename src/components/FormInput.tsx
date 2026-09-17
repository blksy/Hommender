import { FormikProps, FormikValues } from "formik";
import TextField from "@mui/material/TextField";

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
      fullWidth
      margin="normal"
      id={accessor}
      name={accessor}
      label={label}
      type={type}
      multiline={multiline}
      value={formik.values[accessor]}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      error={formik.touched[accessor] && Boolean(formik.errors[accessor])}
      helperText={
        formik.touched[accessor] && formik.errors[accessor]
          ? String(formik.errors[accessor])
          : ""
      }
    />
  );
};
