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