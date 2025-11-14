import React, { useState } from 'react';

import LoginModal from '@/components/ui/login-modal/login-modal';
import RegisterModal from '@/components/ui/register-modal/register-modal';

interface AuthModalProps {
  visible: boolean;
  onClose: () => void;
  initialMode?: 'login' | 'register';
}

const AuthModal: React.FC<AuthModalProps> = ({
  visible,
  onClose,
  initialMode = 'register',
}) => {
  const [currentMode, setCurrentMode] = useState<'login' | 'register'>(
    initialMode,
  );

  const handleClose = () => {
    setCurrentMode(initialMode);
    onClose();
  };

  const switchToLogin = () => {
    setCurrentMode('login');
  };

  const switchToRegister = () => {
    setCurrentMode('register');
  };

  if (currentMode === 'login') {
    return (
      <LoginModal
        visible={visible}
        onClose={handleClose}
        onSwitchToRegister={switchToRegister}
      />
    );
  }

  return (
    <RegisterModal
      visible={visible}
      onClose={handleClose}
      onSwitchToLogin={switchToLogin}
    />
  );
};

export default AuthModal;
