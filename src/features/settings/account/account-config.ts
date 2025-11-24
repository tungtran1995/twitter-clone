import {
  SETTINGS_DEACTIVATE,
  SETTINGS_INFO,
  SETTINGS_PASSWORD,
} from '@/constants/path';

export const accountItems = [
  {
    title: 'Account Information',
    description:
      'See your account information like your phone number and email address.',
    path: SETTINGS_INFO,
    icon: 'ProfileIcon',
  },
  {
    title: 'Change your password',
    description:
      'Change your account password regularly to keep your account secure.',
    path: SETTINGS_PASSWORD,
    icon: 'KeyIcon',
  },
  {
    title: 'Download an archive of your data',
    description:
      'Get insights into the type of information stored for your account.',
    icon: 'DownloadIcon',
  },
  {
    title: 'Deactivate your account',
    description: 'Find out how you can deactivate your account.',
    path: SETTINGS_DEACTIVATE,
    icon: 'DeleteIcon',
  },
];
