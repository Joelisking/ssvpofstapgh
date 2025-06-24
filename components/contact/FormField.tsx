'use client';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { FormSchema } from './formSchema';
import { Icon } from '@/components/ui';

interface FormFieldProps {
  name: keyof FormSchema;
  type?: 'text' | 'email' | 'tel';
  label: string;
  placeholder: string;
  isTextArea?: boolean;
  register: UseFormRegister<FormSchema>;
  errors: Partial<Record<keyof FormSchema, FieldError>>;
}

const InputField = ({
  name,
  type,
  label,
  placeholder,
  register,
  errors,
}: FormFieldProps) => (
  <div className="relative">
    {label && (
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-gray-700">
        {label}
      </label>
    )}
    <input
      type={type}
      id={name}
      placeholder={placeholder}
      className={`appearance-none bg-[#F2F2F2] text-black focus:ring-1 focus:ring-[#0099FF] active:ring-0 focus:outline-none placeholder:text-gray-500 w-full transition-all duration-300 p-2 sm:p-3 text-sm rounded-lg ${
        errors[name] ? 'border-red-500' : ''
      }`}
      {...register(name)}
    />
  </div>
);

const TextAreaField = ({
  name,
  label,
  placeholder,
  register,
  errors,
}: FormFieldProps) => (
  <div className="relative">
    {label && (
      <label
        htmlFor={name}
        className="block mb-1 text-sm text-gray-700">
        {label}
      </label>
    )}
    <textarea
      id={name}
      placeholder={placeholder}
      className={`appearance-none bg-[#F2F2F2] text-black focus:ring-1 focus:ring-[#0099FF] active:ring-0 focus:outline-none placeholder:text-gray-500 w-full transition-all duration-300 p-2 sm:p-3 text-sm rounded-lg ${
        errors[name] ? 'border-red-500' : ''
      }`}
      {...register(name)}
      rows={4}
    />
    <div className="absolute right-2 sm:right-0 top-2 -translate-y-1/2 pointer-events-none">
      <Icon
        name="ArrowRight"
        className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
      />
    </div>
  </div>
);

const FormField = (props: FormFieldProps) => {
  return (
    <div className="flex flex-col gap-2 sm:gap-3 mb-4 sm:mb-6">
      <div className="relative">
        {props.isTextArea ? (
          <TextAreaField {...props} />
        ) : (
          <InputField {...props} />
        )}
      </div>
      {props.errors[props.name as keyof FormSchema] && (
        <p className="text-red-500 text-xs sm:text-sm mt-1">
          {props.errors[props.name]?.message}
        </p>
      )}
    </div>
  );
};

export default FormField;
