import type { BackgroundTheme, ColorScheme } from './common';

export interface IDisplayProps {
  changeBackgroundColor: (background: BackgroundTheme) => void;
  changeColorScheme: (color: ColorScheme) => void;
}
