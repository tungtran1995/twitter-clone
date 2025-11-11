import { create } from 'zustand';

type Theme = 'light' | 'dark' | 'system';

interface UIState {
  // Modal states
  registerModalOpen: boolean;
  loginModalOpen: boolean;
  composeTweetModalOpen: boolean;
  profileModalOpen: boolean;

  // UI states
  theme: Theme;
  sidebarCollapsed: boolean;
  mobileMenuOpen: boolean;

  // Loading states
  isGlobalLoading: boolean;

  // Actions - Modals
  openRegisterModal: () => void;
  closeRegisterModal: () => void;
  openLoginModal: () => void;
  closeLoginModal: () => void;
  openComposeTweetModal: () => void;
  closeComposeTweetModal: () => void;
  openProfileModal: () => void;
  closeProfileModal: () => void;

  // Actions - UI
  setTheme: (theme: Theme) => void;
  toggleSidebar: () => void;
  setSidebarCollapsed: (collapsed: boolean) => void;
  toggleMobileMenu: () => void;
  setMobileMenuOpen: (open: boolean) => void;

  // Actions - Loading
  setGlobalLoading: (loading: boolean) => void;

  // Utility actions
  closeAllModals: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Modal states
  registerModalOpen: false,
  loginModalOpen: false,
  composeTweetModalOpen: false,
  profileModalOpen: false,

  // UI states
  theme: 'light',
  sidebarCollapsed: false,
  mobileMenuOpen: false,

  // Loading states
  isGlobalLoading: false,

  // Actions - Modals
  openRegisterModal: () => set({ registerModalOpen: true }),
  closeRegisterModal: () => set({ registerModalOpen: false }),

  openLoginModal: () => set({ loginModalOpen: true }),
  closeLoginModal: () => set({ loginModalOpen: false }),

  openComposeTweetModal: () => set({ composeTweetModalOpen: true }),
  closeComposeTweetModal: () => set({ composeTweetModalOpen: false }),

  openProfileModal: () => set({ profileModalOpen: true }),
  closeProfileModal: () => set({ profileModalOpen: false }),

  // Actions - UI
  setTheme: (theme: Theme) => set({ theme }),

  toggleSidebar: () =>
    set((state) => ({ sidebarCollapsed: !state.sidebarCollapsed })),
  setSidebarCollapsed: (collapsed: boolean) =>
    set({ sidebarCollapsed: collapsed }),

  toggleMobileMenu: () =>
    set((state) => ({ mobileMenuOpen: !state.mobileMenuOpen })),
  setMobileMenuOpen: (open: boolean) => set({ mobileMenuOpen: open }),

  // Actions - Loading
  setGlobalLoading: (loading: boolean) => set({ isGlobalLoading: loading }),

  // Utility actions
  closeAllModals: () =>
    set({
      registerModalOpen: false,
      loginModalOpen: false,
      composeTweetModalOpen: false,
      profileModalOpen: false,
    }),
}));
