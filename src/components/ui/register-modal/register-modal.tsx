import React, { useState } from 'react';

import { Button } from '@/components/ui/button/button';
import Dialog from '@/components/ui/dialog/dialog';
import { CloseIcon, EyeClosedIcon, EyeOpenIcon } from '@/icon';

interface RegisterFormData {
  name: string;
  phone: string;
  email: string;
  password: string;
  day: string;
  month: string;
  year: string;
}

interface RegisterModalProps {
  visible: boolean;
  onClose: () => void;
  onSwitchToLogin?: () => void;
}

const RegisterModal: React.FC<RegisterModalProps> = ({
  visible,
  onClose,
  onSwitchToLogin,
}) => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    phone: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: '',
  });

  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});
  const [currentStep, setCurrentStep] = useState<'signup' | 'verify'>('signup');
  const [showPassword, setShowPassword] = useState(false);
  const [useEmail, setUseEmail] = useState(false);

  const handleInputChange = (field: keyof RegisterFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<RegisterFormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "What's your name?";
    }

    if (useEmail) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email';
      }
    } else {
      if (!formData.phone.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number';
      }
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Your password needs to be at least 8 characters';
    }

    if (!formData.day || !formData.month || !formData.year) {
      newErrors.day = 'Please select your date of birth';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setCurrentStep('verify');
    }
  };

  const generateDays = () => {
    return Array.from({ length: 31 }, (_, i) => i + 1);
  };

  const generateMonths = () => {
    return [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let i = currentYear; i >= 1900; i--) {
      years.push(i);
    }
    return years;
  };

  const handleClose = () => {
    // Reset form when closing
    setFormData({
      name: '',
      phone: '',
      email: '',
      password: '',
      day: '',
      month: '',
      year: '',
    });
    setErrors({});
    setCurrentStep('signup');
    setShowPassword(false);
    setUseEmail(false);
    onClose();
  };

  if (currentStep === 'verify') {
    return (
      <Dialog visible={visible} onClose={handleClose}>
        <div className="relative mx-auto w-full max-w-sm">
          {/* Close button positioned outside modal border */}
          <button
            onClick={handleClose}
            className="absolute -top-2 -left-12 z-50 flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
            type="button"
          >
            <div className="h-5 w-5">{CloseIcon}</div>
          </button>{' '}
          {/* Header with Twitter X logo */}
          <div className="flex justify-center">
            <svg
              className="h-8 w-8 text-black"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </div>
          <h1 className="mt-4 text-3xl font-bold text-black">
            We sent you a code
          </h1>
          <div className="mb-6">
            <p className="text-sm text-gray-600">
              Enter it below to verify{' '}
              {useEmail ? formData.email : formData.phone}
            </p>
          </div>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                className="w-full rounded border border-gray-300 bg-white px-4 py-4 text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                placeholder="Verification code"
                maxLength={6}
              />
            </div>

            <Button className="w-full rounded-full bg-black py-4 font-bold text-white hover:bg-gray-800">
              Next
            </Button>

            <div className="text-center">
              <button
                type="button"
                className="text-sm text-blue-500 hover:underline"
              >
                Didn&apos;t receive email?
              </button>
            </div>
          </form>
        </div>
      </Dialog>
    );
  }

  return (
    <Dialog visible={visible} onClose={handleClose}>
      <div className="relative mx-auto w-full max-w-sm">
        {/* Close button positioned outside modal border */}
        <button
          onClick={handleClose}
          className="absolute -top-2 -left-12 z-50 flex h-8 w-8 items-center justify-center rounded-full hover:bg-gray-100"
          type="button"
        >
          <div className="h-5 w-5">{CloseIcon}</div>
        </button>{' '}
        {/* Header with Twitter X logo */}
        <div className="flex justify-center">
          <svg
            className="h-8 w-8 text-black"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>
        <h1 className="mt-4 text-3xl font-bold text-black">
          Create your account
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              className={`w-full rounded border bg-white px-4 py-4 text-black placeholder-gray-500 focus:outline-none ${
                errors.name
                  ? 'border-red-500'
                  : 'border-gray-300 focus:border-blue-500'
              }`}
              placeholder="Name"
              maxLength={50}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-500">{errors.name}</p>
            )}
          </div>

          <div>
            {useEmail ? (
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className={`w-full rounded border bg-white px-4 py-4 text-black placeholder-gray-500 focus:outline-none ${
                  errors.email
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Email"
              />
            ) : (
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                className={`w-full rounded border bg-white px-4 py-4 text-black placeholder-gray-500 focus:outline-none ${
                  errors.phone
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Phone"
              />
            )}
            <div className="mt-2 text-right">
              <button
                type="button"
                className="text-sm text-blue-500 hover:underline"
                onClick={() => {
                  setUseEmail(!useEmail);
                  // Clear errors when switching
                  setErrors((prev) => {
                    const newErrors = { ...prev };
                    delete newErrors.phone;
                    delete newErrors.email;
                    return newErrors;
                  });
                }}
              >
                {useEmail ? 'Use phone instead' : 'Use email instead'}
              </button>
            </div>
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
            )}
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </div>

          <div>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`w-full rounded border bg-white px-4 py-4 pr-12 text-black placeholder-gray-500 focus:outline-none ${
                  errors.password
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                <div className="h-5 w-5">
                  {showPassword ? EyeClosedIcon : EyeOpenIcon}
                </div>
              </button>
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-black">
              Date of birth
            </label>
            <p className="mb-4 text-xs text-gray-600">
              This will not be shown publicly. Confirm your own age, even if
              this account is for a business, a pet, or something else.
            </p>
            <div className="flex space-x-3">
              <div className="relative flex-1">
                <select
                  value={formData.month}
                  onChange={(e) => handleInputChange('month', e.target.value)}
                  className={`w-full appearance-none rounded border bg-white px-4 py-4 pr-10 text-black focus:outline-none ${
                    errors.day
                      ? 'border-red-500'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                >
                  <option value="" className="bg-white">
                    Month
                  </option>
                  {generateMonths().map((month, index) => (
                    <option key={month} value={index + 1} className="bg-white">
                      {month}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative flex-1">
                <select
                  value={formData.day}
                  onChange={(e) => handleInputChange('day', e.target.value)}
                  className={`w-full appearance-none rounded border bg-white px-4 py-4 pr-10 text-black focus:outline-none ${
                    errors.day
                      ? 'border-red-500'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                >
                  <option value="" className="bg-white">
                    Day
                  </option>
                  {generateDays().map((day) => (
                    <option key={day} value={day} className="bg-white">
                      {day}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>

              <div className="relative flex-1">
                <select
                  value={formData.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                  className={`w-full appearance-none rounded border bg-white px-4 py-4 pr-10 text-black focus:outline-none ${
                    errors.day
                      ? 'border-red-500'
                      : 'border-gray-300 focus:border-blue-500'
                  }`}
                >
                  <option value="" className="bg-white">
                    Year
                  </option>
                  {generateYears().map((year) => (
                    <option key={year} value={year} className="bg-white">
                      {year}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2">
                  <svg
                    className="h-4 w-4 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>
            {errors.day && (
              <p className="mt-1 text-sm text-red-500">{errors.day}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full rounded-full bg-black py-4 font-bold text-white hover:bg-gray-800"
          >
            Create account
          </Button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Have an account already?{' '}
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={onSwitchToLogin}
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default RegisterModal;
