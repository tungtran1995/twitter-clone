import React, { useState } from 'react';

import { type FieldError } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import Dialog from '@/components/ui/dialog/dialog';
import { HOME } from '@/constants/path';
import { CloseIcon, EyeClosedIcon, EyeOpenIcon } from '@/icon';
import { loginInputSchema, useLogin } from '@/lib/auth';

import { Button } from '../button/button';
import { Form } from '../form/form';
import { Input } from '../form/input';

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginModalProps {
  visible: boolean;
  onClose: () => void;
  onSwitchToRegister?: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  visible,
  onClose,
  onSwitchToRegister,
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo');

  const login = useLogin({
    onSuccess: () => {
      navigate(`${redirectTo ? redirectTo : HOME}`, { replace: true });
    },
  });
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState<Partial<LoginFormData>>({});
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: keyof LoginFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<LoginFormData> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleClose = () => {
    // Reset form when closing
    setFormData({
      email: '',
      password: '',
    });
    setErrors({});
    setShowPassword(false);
    onClose();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
        </button>

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

        <h1 className="mt-6 text-3xl font-bold text-black">Sign in to X</h1>

        <Form
          onSubmit={(values) => {
            const loginData = {
              email: (values as Record<string, string>).email,
              password: (values as Record<string, string>).password,
            };
            console.log('Final loginData:', loginData);
            login.mutate(loginData);
          }}
          schema={loginInputSchema}
          className="mt-6"
        >
          {({ register, formState }) => (
            <>
              <Input
                type="email"
                error={formState.errors.email as FieldError}
                registration={register('email')}
                placeholder="Email"
              />
              <div className="relative">
                <Input
                  type={showPassword ? 'text' : 'password'}
                  error={formState.errors.password as FieldError}
                  registration={register('password')}
                  placeholder="Password"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  <div className="h-5 w-5">
                    {showPassword ? EyeClosedIcon : EyeOpenIcon}
                  </div>
                </button>
              </div>
              <Button
                type="submit"
                className="w-full rounded-full bg-black py-4 font-bold text-white hover:bg-gray-800"
              >
                Log in
              </Button>
            </>
          )}
        </Form>

        <div className="mt-6 text-center">
          <button
            type="button"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot password?
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{' '}
            <button
              type="button"
              className="text-blue-500 hover:underline"
              onClick={onSwitchToRegister}
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </Dialog>
  );
};

export default LoginModal;
