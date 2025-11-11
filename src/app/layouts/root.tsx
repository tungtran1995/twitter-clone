import { Outlet } from 'react-router-dom';

import ContentLayout from '@/components/layouts/content-layout';

export const RootLayout = () => {
  const changeBackgroundColor = () => {};
  const changeColorScheme = () => {};

  return (
    <ContentLayout
      changeBackgroundColor={changeBackgroundColor}
      changeColorScheme={changeColorScheme}
    >
      <Outlet />
    </ContentLayout>
  );
};
