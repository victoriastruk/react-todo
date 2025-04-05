import * as yup from "yup";

export const NOTE_VALIDATION_SCHEMA = yup.object({
  note: yup
    .string()
    .required("Is required")
    .min(3, "Must be at least 3 characters long")
    .max(50, "Must be at most 50 characters long ")
    .trim(),
});
