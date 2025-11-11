import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface NotificationSettings {
  email: boolean;
  push: boolean;
  sms: boolean;
  mentions: boolean;
  likes: boolean;
  retweets: boolean;
  follows: boolean;
  directMessages: boolean;
}

interface PrivacySettings {
  profileVisible: boolean;
  tweetsProtected: boolean;
  allowDirectMessages: boolean;
  allowPhotoTagging: boolean;
  discoverableByEmail: boolean;
  discoverableByPhone: boolean;
}

interface DisplaySettings {
  language: string;
  dateFormat: 'relative' | 'absolute';
  timeFormat: '12h' | '24h';
  reducedMotion: boolean;
  highContrast: boolean;
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
}

interface SettingsState {
  // Settings
  notifications: NotificationSettings;
  privacy: PrivacySettings;
  display: DisplaySettings;

  // Draft tweet storage
  draftTweet: string;
  draftImages: string[];

  // User preferences
  autoplay: boolean;
  dataUsage: 'normal' | 'reduced';

  // Actions
  updateNotificationSettings: (settings: Partial<NotificationSettings>) => void;
  updatePrivacySettings: (settings: Partial<PrivacySettings>) => void;
  updateDisplaySettings: (settings: Partial<DisplaySettings>) => void;

  setDraftTweet: (text: string) => void;
  setDraftImages: (images: string[]) => void;
  clearDraft: () => void;

  setAutoplay: (autoplay: boolean) => void;
  setDataUsage: (usage: 'normal' | 'reduced') => void;

  resetAllSettings: () => void;
}

const defaultNotificationSettings: NotificationSettings = {
  email: true,
  push: true,
  sms: false,
  mentions: true,
  likes: true,
  retweets: true,
  follows: true,
  directMessages: true,
};

const defaultPrivacySettings: PrivacySettings = {
  profileVisible: true,
  tweetsProtected: false,
  allowDirectMessages: true,
  allowPhotoTagging: true,
  discoverableByEmail: false,
  discoverableByPhone: false,
};

const defaultDisplaySettings: DisplaySettings = {
  language: 'en',
  dateFormat: 'relative',
  timeFormat: '12h',
  reducedMotion: false,
  highContrast: false,
  fontSize: 'medium',
};

export const useSettingsStore = create<SettingsState>()(
  persist(
    (set) => ({
      // Settings
      notifications: defaultNotificationSettings,
      privacy: defaultPrivacySettings,
      display: defaultDisplaySettings,

      // Draft tweet storage
      draftTweet: '',
      draftImages: [],

      // User preferences
      autoplay: true,
      dataUsage: 'normal',

      // Actions
      updateNotificationSettings: (settings: Partial<NotificationSettings>) =>
        set((state) => ({
          notifications: { ...state.notifications, ...settings },
        })),

      updatePrivacySettings: (settings: Partial<PrivacySettings>) =>
        set((state) => ({
          privacy: { ...state.privacy, ...settings },
        })),

      updateDisplaySettings: (settings: Partial<DisplaySettings>) =>
        set((state) => ({
          display: { ...state.display, ...settings },
        })),

      setDraftTweet: (text: string) => set({ draftTweet: text }),
      setDraftImages: (images: string[]) => set({ draftImages: images }),
      clearDraft: () => set({ draftTweet: '', draftImages: [] }),

      setAutoplay: (autoplay: boolean) => set({ autoplay }),
      setDataUsage: (usage: 'normal' | 'reduced') => set({ dataUsage: usage }),

      resetAllSettings: () =>
        set({
          notifications: defaultNotificationSettings,
          privacy: defaultPrivacySettings,
          display: defaultDisplaySettings,
          autoplay: true,
          dataUsage: 'normal',
        }),
    }),
    {
      name: 'settings-storage',
      partialize: (state) => ({
        notifications: state.notifications,
        privacy: state.privacy,
        display: state.display,
        draftTweet: state.draftTweet,
        draftImages: state.draftImages,
        autoplay: state.autoplay,
        dataUsage: state.dataUsage,
      }),
    },
  ),
);
