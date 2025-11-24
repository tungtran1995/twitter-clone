import {
  SETTINGS,
  SETTINGS_ABOUT,
  SETTINGS_ACCESSIBILITY_DISPLAY_AND_LANGUAGES,
  SETTINGS_DEACTIVATE,
  SETTINGS_INFO,
  SETTINGS_INFO_AGE,
  SETTINGS_INFO_COUNTRY,
  SETTINGS_INFO_EMAIL,
  SETTINGS_INFO_GENDER,
  SETTINGS_INFO_LANGUAGES,
  SETTINGS_INFO_PHONE,
  SETTINGS_INFO_USERNAME,
  SETTINGS_NOTIFICATION,
  SETTINGS_PASSWORD,
  SETTINGS_PRIVACY_AND_SAFETY,
  SETTINGS_SECURITY_AND_ACCOUNT_ACCESS,
  SETTINGS_TEAMS,
} from '@/constants/path';

export const settingRoutes = [{}];

export interface SettingsItemType {
  index: number;
  linkTo: string;
  title: string;
}

export const settingsItemConfig: SettingsItemType[] = [
  {
    index: 1,
    linkTo: SETTINGS,
    title: 'Your account',
  },
  {
    index: 2,
    linkTo: SETTINGS_SECURITY_AND_ACCOUNT_ACCESS,
    title: 'Security and account access',
  },
  {
    index: 3,
    linkTo: SETTINGS_PRIVACY_AND_SAFETY,
    title: 'Privacy and safety',
  },
  {
    index: 4,
    linkTo: SETTINGS_NOTIFICATION,
    title: 'Notifications',
  },
  {
    index: 5,
    linkTo: SETTINGS_ACCESSIBILITY_DISPLAY_AND_LANGUAGES,
    title: 'Accessibility, display, and languages',
  },
  {
    index: 6,
    linkTo: SETTINGS_ABOUT,
    title: 'Additional resources',
  },
];

export const settingsHeaderConfig = [
  // YOUR ACCOUNT
  {
    path: SETTINGS,
    title: 'Your account',
    excludeBackButton: false,
  },
  {
    path: SETTINGS_INFO,
    title: 'Account information',
    excludeBackButton: false,
  },
  {
    path: SETTINGS_INFO_USERNAME,
    title: 'Change username',
  },
  {
    path: SETTINGS_INFO_PHONE,
    title: 'Change phone',
  },
  {
    path: SETTINGS_INFO_EMAIL,
    title: 'Change email',
  },
  {
    path: SETTINGS_INFO_COUNTRY,
    title: 'Change country',
  },
  {
    path: SETTINGS_INFO_LANGUAGES,
    title: 'Change display language',
  },
  {
    path: SETTINGS_INFO_GENDER,
    title: 'Gender',
  },
  {
    path: SETTINGS_INFO_AGE,
    title: 'Age',
  },
  {
    path: SETTINGS_PASSWORD,
    title: 'Change your password',
  },
  {
    path: SETTINGS_TEAMS,
    title: 'TweetDeck Teams',
  },
  {
    path: SETTINGS_DEACTIVATE,
    title: 'Deactivate account',
  },

  // SECURITY AND ACCOUNT ACCESS
  {
    title: 'Security and account access',
    excludeBackButton: true,
  },
  {
    title: 'Security',
  },
  {
    title: 'Two-factor authentication',
  },
  {
    title: 'Apps and sessions',
  },
  {
    title: 'Connected apps',
  },
  {
    path: 'SETTINGS_SECURITY_SESSIONS',
    title: 'Sessions',
  },
  {
    title: 'Current session',
  },
  {
    path: 'SETTINGS_SECURITY_LOGIN_HISTORY',
    title: 'Account access history',
  },
  {
    path: 'SETTINGS_SECURITY_DEVICES',
    title: 'Logged-in devices and apps',
  },

  // PRIVACY AND SAFETY
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY',
    title: 'Privacy and safety',
    excludeBackButton: true,
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_AUDIENCE',
    title: 'Audience and tagging',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_TAGGING',
    title: 'Photo tagging',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_YOUR_TWEETS',
    title: 'Your Tweets',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_LOCATION',
    title: 'Add location information to your Tweets',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_CONTENT_YOU_SEE',
    title: 'Content you see',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_MUTE_AND_BLOCK',
    title: 'Mute and block',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_BLOCKED',
    title: 'Blocked accounts',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_MUTED',
    title: 'Muted accounts',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_MUTED_KEYWORDS',
    title: 'Muted words',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_ADVANCED_FILTERS',
    title: 'Muted notifications',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_DIRECT_MESSAGES',
    title: 'Direct Messages',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_SPACES',
    title: 'Spaces',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_CONTACTS',
    title: 'Discoverability and contacts',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_CONTACTS_DASHBOARD',
    title: 'Manage contacts',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_ADS_PREFERENCES',
    title: 'Ads preferences',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_AUDIENCES',
    title: 'Your advertiser list',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_OFF_TWITTER_ACTIVITY',
    title: 'Off-Twitter activity',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_DATA_SHARING_WITH_BUSINESS_PARTNERS',
    title: 'Data sharing with business partners',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_LOCATION_INFORMATION',
    title: 'Location information',
  },
  {
    path: 'SETTINGS_PRIVACY_AND_SAFETY_LOCATIONS',
    title: 'See places you’ve been',
  },

  // NOTIFICATIONS
  {
    path: 'SETTINGS_NOTIFICATION',
    title: 'Notifications',
    excludeBackButton: true,
  },
  {
    path: 'SETTINGS_NOTIFICATION_FILTERS',
    title: 'Filters',
  },
  {
    path: 'SETTINGS_NOTIFICATION_PREFERENCES',
    title: 'Preferences',
  },
  {
    path: 'SETTINGS_NOTIFICATION_PUSH_NOTIFICATIONS',
    title: 'Push notifications',
  },
  {
    path: 'SETTINGS_NOTIFICATION_EMAIL_NOTIFICATIONS',
    title: 'Email notifications',
  },

  // ACCESSIBILITY, DISPLAY, AND LANGUAGES
  {
    path: 'SETTINGS_ACCESSIBILITY_DISPLAY_AND_LANGUAGES',
    title: 'Accessibility, display, and languages',
    excludeBackButton: true,
  },
  {
    path: 'SETTINGS_ACCESSIBILITY_DISPLAY_AND_LANGUAGES_ACCESSIBILITY',
    title: 'Accessibility',
  },
  {
    path: 'SETTINGS_ACCESSIBILITY_DISPLAY_AND_LANGUAGES_DISPLAY',
    title: 'Display',
  },
  {
    path: 'SETTINGS_ACCESSIBILITY_DISPLAY_AND_LANGUAGES_LANGUAGES',
    title: 'Languages',
  },
  {
    path: 'SETTINGS_ACCESSIBILITY_DISPLAY_AND_LANGUAGES_DATA',
    title: 'Data usage',
  },
  {
    path: 'SETTINGS_ACCESSIBILITY_DISPLAY_AND_LANGUAGES_AUTOPLAY',
    title: 'Autoplay',
  },

  // OTHERS
  {
    path: 'SETTINGS_PERSONALIZATION',
    title: 'Personalization and data',
  },
  {
    path: 'SETTINGS_ABOUT',
    title: 'Additional resources',
    excludeBackButton: true,
  },
  {
    title: 'Content preferences',
    excludeBackButton: true,
  },
];
