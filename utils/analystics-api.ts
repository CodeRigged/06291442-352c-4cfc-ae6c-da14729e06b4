type PageViewParams = {
  timestamp: number;
  pageName: string;
  userId: string;
  url: string;
  views: number;
  // Add more properties as needed
};

type EventParams = {
  timestamp: number;
  eventName: string;
  pageName: string;
  userId: string;
  url: string;
  clicks: number;
  viewsOfPage: number;
  // Add more properties as needed
};

/**
 * Tracks a pageview to our "imaginary api" - in this demo just the browser console. ;)
 *
 * @param {PageViewParams} params - Object with pageview details.
 */
export const trackPageView = (params: PageViewParams) => {
  // The browser console is our "Analytics API" in this demo
  console.log('--> Tracking Pageview:', params);
};
/**
 * Tracks an event to our "imaginary api" - in this demo just the browser console. ;)
 *
 * @param {EventParams} params - Object with event details.
 */
export const trackEvent = (params: EventParams) => {
  // The browser console is our "Analytics API" in this demo
  console.log('--> Tracking Event: ', params);
  // Calculate and log the CTR of the page
  console.log(`CTR of page: ${params.clicks / params.viewsOfPage}`);
};
