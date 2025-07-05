'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema, FormSchema } from './formSchema';
import FormField from './FormField';

function Form() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormSchema) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // Web3Forms endpoint
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message,
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(
          'Thank you! Your message has been sent successfully.'
        );
        reset();
      } else {
        // Show the specific error message from Web3Forms
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'Failed to send message');
        console.error('Web3Forms error:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage(
        'Sorry, there was an error sending your message. Please try again.'
      );
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tighter text-primary">
        Society Of St. Vincent De Paul, Legon Conference
      </h2>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="mt-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          {submitMessage}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {submitMessage}
        </div>
      )}

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
          disabled={isSubmitting}
          className="w-full bg-primary text-white py-3 px-6 rounded-lg hover:bg-accent-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
}

export default Form;
