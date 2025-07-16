import { z } from 'zod';

export const formSchema = z.object({
  firstName: z.string().min(1, 'First Name is required'),
  lastName: z.string().min(1, 'Last Name is required'),
  email: z.string().email('Invalid email address'),
  phone: z
    .string()
    .min(10, 'Phone number must be at least 10 digits'),
  subject: z.enum(['General Enquiries', 'Ask for support'], {
    required_error: 'Please select a subject',
  }),
  message: z.string().min(1, 'Message is required'),
});

export type FormSchema = z.infer<typeof formSchema>;
