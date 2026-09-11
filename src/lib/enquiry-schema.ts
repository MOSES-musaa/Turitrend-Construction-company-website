import { z } from "zod";

export const contactEnquirySchema = z.object({
  type: z.literal("contact"),
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
  message: z.string().trim().min(10, "Please provide a little more information about the project."),
});

export const quoteEnquirySchema = z.object({
  type: z.literal("quote"),
  service: z.string().trim().min(1, "Service is required."),
  location: z.string().trim().min(2, "Project location is required."),
  details: z.string().trim().min(10, "Please provide more project details."),
  stage: z.string().trim().min(1, "Project stage is required."),
  name: z.string().trim().min(2, "Please enter your name."),
  phone: z.string().trim().min(7, "Please enter a valid phone number."),
  email: z
    .string()
    .trim()
    .email("Please enter a valid email address.")
    .optional()
    .or(z.literal("")),
});

export const enquirySchema = z.discriminatedUnion("type", [
  contactEnquirySchema,
  quoteEnquirySchema,
]);

export type ContactEnquiry = z.infer<typeof contactEnquirySchema>;
export type QuoteEnquiry = z.infer<typeof quoteEnquirySchema>;
export type Enquiry = z.infer<typeof enquirySchema>;
