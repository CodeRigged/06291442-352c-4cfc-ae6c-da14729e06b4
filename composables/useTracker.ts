import { useStorage } from '@vueuse/core';
export interface User {
  id: string;
  assignedVariation: string;
  visits: number;
  hasSignedUp: boolean;
}

type PageName = string;

interface Page {
  visits: number;
  subscriptions: number;
}
export interface TrackedData {
  totalPageViews: number;
  totalSubscriptions: number;
  pages: Record<PageName, Page>;
}
/**
 * Initializes the useTracker function, which sets up user and tracking data,
 * and performs certain operations on user and tracking data on component mount.
 */
export const useTracker = () => {
  const user = useCookie<User>('user');
  const trackingData = useStorage<TrackedData>('tracking-data', defaultTrackingData());

  /**
   * This function handles the subscription process for the user.
   * If the user has already signed up, it logs a message. Otherwise, it updates some parameters and calls the trackEvent.
   */
  const subscribe = () => {
    try {
      if (user.value.hasSignedUp) {
        console.log('User has already subscribed');
      } else {
        trackingData.value.totalSubscriptions++;
        trackingData.value.pages[user.value.assignedVariation].subscriptions++;
        user.value.hasSignedUp = true;
        console.log('User has subscribed');
        trackEvent({
          eventName: 'Subscribe',
          timestamp: Date.now(),
          userId: user.value.id,
          url: window.location.href,
          clicks: trackingData.value.pages[user.value.assignedVariation].subscriptions,
          viewsOfPage: trackingData.value.pages[user.value.assignedVariation].visits,
          pageName: user.value.assignedVariation,
        });
      }
    } catch (error) {
      console.log('Please reload page. Subscriptions will not be tracked.');
    }
  };

  return { user, trackingData, subscribe };
};
