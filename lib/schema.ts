import { z } from "zod";

export const enrollSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(60, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  whatsapp: z
    .string()
    .min(7, "Please enter a valid WhatsApp number")
    .max(20, "Number is too long")
    .regex(/^[\+]?[\d\s\-\(\)]+$/, "Please enter a valid phone number"),
  course: z.string().min(1, "Please select a course"),
  freeTrial: z.enum(["yes", "no"]),
});

export type EnrollFormData = z.infer<typeof enrollSchema>;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(60, "Name is too long"),
  email: z
    .string()
    .email("Please enter a valid email address"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject is too long"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
