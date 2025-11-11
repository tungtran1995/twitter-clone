import React, { useState } from 'react';

import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button/button';

interface RegisterFormData {
  name: string;
  email: string;
  password: string;
  day: string;
  month: string;
  year: string;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    name: '',
    email: '',
    password: '',
    day: '',
    month: '',
    year: '',
  });

  const [errors, setErrors] = useState<Partial<RegisterFormData>>({});
  const [currentStep, setCurrentStep] = useState<'signup' | 'verify'>('signup');

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

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
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

  if (currentStep === 'verify') {
    return (
      <div className="flex min-h-screen bg-white">
        {/* Left side - Large X Logo */}
        <div className="flex flex-1 items-center justify-center">
          <svg
            className="h-96 w-96 text-black"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </div>

        {/* Right side - Verification form */}
        <div className="flex min-h-screen flex-1 items-center justify-center px-16">
          <div className="w-full max-w-md">
            <div className="mb-8">
              <h1 className="mb-4 text-2xl font-bold text-black">
                We sent you a code
              </h1>
              <p className="text-sm text-gray-600">
                Enter it below to verify {formData.email}
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
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left side - Large X Logo */}
      <div className="flex flex-1 items-center justify-center">
        <svg
          className="h-96 w-96 text-black"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      </div>

      {/* Right side - Sign up form */}
      <div className="flex min-h-screen flex-1 items-center justify-center px-16">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="mb-6 text-3xl font-bold text-black">
              Create your account
            </h1>
          </div>

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
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
                className={`w-full rounded border bg-white px-4 py-4 text-black placeholder-gray-500 focus:outline-none ${
                  errors.password
                    ? 'border-red-500'
                    : 'border-gray-300 focus:border-blue-500'
                }`}
                placeholder="Password"
              />
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
                <select
                  value={formData.month}
                  onChange={(e) => handleInputChange('month', e.target.value)}
                  className={`flex-1 rounded border bg-white px-4 py-4 text-black focus:outline-none ${
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

                <select
                  value={formData.day}
                  onChange={(e) => handleInputChange('day', e.target.value)}
                  className={`flex-1 rounded border bg-white px-4 py-4 text-black focus:outline-none ${
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

                <select
                  value={formData.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                  className={`flex-1 rounded border bg-white px-4 py-4 text-black focus:outline-none ${
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

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-600">
              Have an account already?{' '}
              <Link to="/login" className="text-blue-500 hover:underline">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
