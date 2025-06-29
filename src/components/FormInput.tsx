import TextField from "@mui/material/TextField";

type FormInputProps<T extends Record<string, string | null>> = {
  values: T;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleBlur: (e: React.FocusEvent<unknown>) => void;
  touched: Partial<Record<keyof T, boolean>>;
  errors: Partial<Record<keyof T, string>>;
  accessor: keyof T;
  label: string;
  multiline?: boolean;
  type?: string;
};

export const FormInput = <T extends Record<string, string | null>>({
  values,
  handleChange,
  handleBlur,
  touched,
  errors,
  accessor,
  label,
  multiline = false,
  type = "text",
}: FormInputProps<T>) => {
  return (
    <TextField
      error={Boolean(touched[accessor] && errors[accessor])}
      helperText={
        touched[accessor] && errors[accessor] ? errors[accessor] : null
      }
      id={accessor as string}
      label={label}
      name={accessor as string}
      type={type || "text"}
      multiline={multiline}
      minRows={multiline ? 4 : undefined}
      onChange={handleChange}
      onBlur={handleBlur}
      value={values[accessor] ?? ""}
      className="w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  );
};
