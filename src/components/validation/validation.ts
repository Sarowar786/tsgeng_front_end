// Zod schema for form validation
// import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
export const schema = z.object({
  fullName: z.string().min(1, "Full Name is required"),
  email: z.string().email("Invalid email address"),
  companyName: z.string().min(1, "Company Name is required"),
  phoneNumber: z.string().min(1, "Phone Number is required"),
  fleetSize: z.string().min(1, "Fleet Size is required"),
  message: z.string().min(1, "Message is required"),
});


// Form Schema
export const quoteSchema = z.object({
  // Step 1: Contact Info
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  company: z.string().min(2, "Company / Organization is required"),
  jobTitle: z.string().optional(),

  // Step 2: Fleet Needs
  fleetSize: z.string().min(1, "Please select fleet size"),
  budget: z.string().min(1, "Please select budget"),
  timeline: z.string().min(1, "Please select timeline"),
  usage: z.string().min(1, "Please select primary usage"),

  // Step 3: Vehicle Preferences
  vehicleTypes: z.array(z.string()).min(1, "Select at least one vehicle type"),
  makes: z.array(z.string()).optional(),
  upfitNeeds: z.array(z.string()).optional(),
  specialRequirements: z.string().optional(),
});


// login schema
export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .nonempty("Email is required")
    .email("Invalid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .max(10, "Password max characters"),

  terms: z.boolean().refine((val) => val === true, {
    message: "You must accept Terms and Privacy Policy",
  }),
});


// register schema
export const registerSchema = z
  .object({
    full_name: z.string().nonempty("Name is required"),
    username: z.string().nonempty("Username is required"),
    email: z
      .string()
      .trim()
      .nonempty("Email is required")
      .email("Invalid email address"),
    password: z
      .string()
      .min(1, "Password is required")
      .max(10, "Password must be at least 10 characters"),
    confirm_password: z
      .string()
      .min(1, "Password is required")
      .max(10, "Password must be at least 10 characters"),
      terms: z.literal(true, {
  message: "You must accept Terms and Privacy Policy",
}),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });