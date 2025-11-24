import { useLocation } from 'react-router-dom';

import { settingsHeaderConfig } from './settings-config';
import SettingsHeader from './settings-header';

export default function SettingsHeaderWrapper() {
  const { pathname } = useLocation();
  const normalized = (pathname ?? '').split('?')[0].replace(/\/+$/, '');

  const found = settingsHeaderConfig.reduce<
    (typeof settingsHeaderConfig)[number] | null
  >((bestMatch, currentItem) => {
    if (typeof currentItem.path !== 'string') return bestMatch;

    // 1. Check for exact match first
    if (currentItem.path === normalized) {
      return currentItem; // Return immediately if exact match is found
    }

    // 2. Check for best partial match (longest path match)
    if (normalized.startsWith(currentItem.path)) {
      if (
        !bestMatch ||
        (typeof bestMatch.path === 'string' &&
          currentItem.path.length > bestMatch.path.length)
      ) {
        return currentItem;
      }
    }
    return bestMatch;
  }, null);

  if (!found) return null;

  return <SettingsHeader title={found.title} />;
}
