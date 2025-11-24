import { Outlet, useLocation } from 'react-router-dom';

import ContentLayout from '@/components/layouts/main-layout';

export const RootLayout = () => {
  const location = useLocation();
  const isLandingRoute = location.pathname === '/';
  const changeBackgroundColor = () => {};
  const changeColorScheme = () => {};

  if (isLandingRoute) {
    return <Outlet />;
  }

  return (
    <ContentLayout
      changeBackgroundColor={changeBackgroundColor}
      changeColorScheme={changeColorScheme}
    >
      <Outlet />
    </ContentLayout>
  );
};
