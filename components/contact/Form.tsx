'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormSchema } from './formSchema';
import FormField from './FormField';

function Form() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = (data: FormSchema) => {
    // Format the message for WhatsApp
    const whatsappMessage =
      `*New Contact Form Submission*\n\n` +
      `*Name:* ${data.firstName} ${data.lastName}\n` +
      `*Email:* ${data.email}\n` +
      `*Phone:* ${data.phone}\n` +
      `*Subject:* ${data.subject}\n` +
      `*Message:* ${data.message}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp number (using the one from Info component)
    const whatsappNumber = '233542728856'; // Removed the leading 0 and + for WhatsApp API

    // Open WhatsApp link
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodedMessage}`,
      '_blank'
    );

    // Reset the form
    reset();
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tighter text-primary">
        Society Of St. Vincent De Paul, Legon Conference
      </h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-6 lg:mt-8 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-x-4">
          <FormField
            name="firstName"
            label="First Name"
            placeholder="Your name"
            register={register}
            errors={errors}
          />
          <FormField
            name="lastName"
            label="Last Name"
            placeholder="Your last name"
            register={register}
            errors={errors}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-x-4">
          <FormField
            name="phone"
            label="Phone"
            placeholder="Phone number"
            register={register}
            errors={errors}
          />
          <FormField
            name="email"
            label="Email"
            placeholder="Email Address"
            register={register}
            errors={errors}
          />
        </div>

        <FormField
          name="subject"
          label="Subject"
          placeholder="Select a subject"
          isSelect
          register={register}
          errors={errors}
        />

        <FormField
          name="message"
          label="Message"
          placeholder="Message"
          isTextArea
          register={register}
          errors={errors}
        />

        <button
          type="submit"
          className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-accent-dark transition-colors">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Form;
