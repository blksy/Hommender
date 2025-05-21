import { FormikProps } from "formik";
import TextField from "@mui/material/TextField";

type FormInputProps<T> = {
  formik: FormikProps<T>;
  accessor: keyof T;
  label: string;
  multiline?: boolean;
};

export const FormInput = <T extends Record<string, string>>({
  formik,
  accessor,
  label,
  multiline = false,
}: FormInputProps<T>) => {
  const error =
    formik.touched[accessor] && typeof formik.errors[accessor] === "string"
      ? formik.errors[accessor]
      : null;

  return (
    <TextField
      error={!!error}
      helperText={error}
      id={String(accessor)}
      label={label}
      name={String(accessor)}
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
