export type UserRole = "student" | "admin";

export type RegistrationInput = {
  full_name: string;
  school: string;
  district: string;
  phone: string;
  parent_phone: string;
  email: string;
  stream: string;
  class_type: string;
  notes: string;
};
