import React from 'react';

import { useNavigate, useSearchParams } from 'react-router-dom';

import AuthModal from '@/components/ui/auth-modal/auth-modal';
import { Button } from '@/components/ui/button/button';
import { useUIStore } from '@/store';

const Welcome: React.FC = () => {
  const {
    registerModalOpen,
    openRegisterModal,
    closeRegisterModal,
    loginModalOpen,
    openLoginModal,
    closeLoginModal,
  } = useUIStore();
  // const user = useUser();
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get('redirectTo') || '/home';
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (user.data) {
  //     navigate(redirectTo ? redirectTo : HOME, {
  //       replace: true,
  //     });
  //   }
  // }, [user.data, navigate, redirectTo]);

  const handleCloseAuthModal = () => {
    closeRegisterModal();
    closeLoginModal();
  };

  const authModalVisible = registerModalOpen || loginModalOpen;
  const authModalMode = registerModalOpen ? 'register' : 'login';

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

      {/* Right side - Welcome content */}
      <div className="flex flex-1 flex-col justify-center px-16">
        <div className="max-w-none">
          <h1 className="mb-12 text-7xl leading-tight font-bold text-black">
            Happening now
          </h1>

          <h2 className="mb-8 text-3xl font-bold text-black">Join today.</h2>

          <div className="flex w-[300px] max-w-[400px] flex-col space-y-4">
            {/* Google Sign Up */}
            <Button className="relative w-full rounded-full border border-gray-400 bg-white py-3 font-medium text-black shadow-sm hover:bg-gray-50">
              <svg
                className="absolute left-4 h-5 w-5"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Sign up with Google
            </Button>

            {/* Apple Sign Up */}
            <Button className="relative w-full rounded-full border border-gray-400 bg-white py-3 font-medium text-black shadow-sm hover:bg-gray-50">
              <svg
                className="absolute left-4 h-5 w-5"
                viewBox="0 0 24 24"
                fill="black"
              >
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Sign up with Apple
            </Button>

            <div className="my-4 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-700">OR</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            {/* Create Account */}
            <Button
              className="w-full rounded-full bg-black py-3 font-bold text-white hover:bg-blue-600"
              onClick={openRegisterModal}
            >
              Create account
            </Button>

            <p className="text-xs leading-4 text-gray-600">
              By signing up, you agree to the{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Privacy Policy
              </a>
              , including{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Cookie Use
              </a>
              .
            </p>

            <div className="pt-10">
              <h3 className="mb-5 text-lg font-bold text-black">
                Already have an account?
              </h3>
              <Button
                className="w-full rounded-full border border-gray-400 bg-transparent py-3 font-bold text-black hover:bg-blue-50"
                onClick={openLoginModal}
              >
                Sign in
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal
        visible={authModalVisible}
        onClose={handleCloseAuthModal}
        initialMode={authModalMode}
      />
    </div>
  );
};

export default Welcome;
