import { RootLayout } from '@/app/layouts/root';

import SettingsLayout from './settings-layout';

export const Layouts = {
  root: RootLayout,
  settings: SettingsLayout,
};

export type LayoutKey = keyof typeof Layouts;
