import type { FC, ReactElement, ReactNode } from 'react';

import BackButton from '../back-button/back-button';

interface PageHeaderWrapperProps {
  children: ReactNode;
  backButton?: boolean;
}

const PageHeaderWrapper: FC<PageHeaderWrapperProps> = ({
  children,
  backButton,
}): ReactElement => {
  return (
    <div className="fixed z-10 flex min-h-[53px] w-[600px] items-center border-b border-gray-200 bg-white/85 px-4 backdrop-blur-md dark:border-gray-800 dark:bg-black/85">
      {backButton && <BackButton />}
      {children}
    </div>
  );
};

export default PageHeaderWrapper;
