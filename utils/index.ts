/**
 * Fetches a random variation from a given set of variations.
 *
 * @param {string} variations - the set of variations to choose from (default is 'ABC')
 * @return {string} a string representing the selected variation
 */
const fetchRandomVariation = (variations: string = 'ABC') => {
  const randomIndex = Math.floor(Math.random() * variations.length);
  const randomLetter = variations.charAt(randomIndex);
  return `Variation${randomLetter}`;
};

/**
 * Generates default user data, including a unique ID,
 * number of visits, assigned variation, and sign up status.
 *
 * @return {User} The default user data object with id, visits,
 * assignedVariation, and hasSignedUp properties.
 */
export const defaultUserData = (): User => {
  /**
   * Generates a unique ID using the crypto.randomUUID() function.
   *
   * !! IMPORTANT !! This doesn't work in unsecure environments.
   * Visit https://developer.mozilla.org/en-US/docs/Web/API/Crypto/randomUUID for more information.
   */
  const myuuid = crypto.randomUUID();
  /**
   * Initializes the number of visits to zero.
   */
  const visits = 0;
  /**
   * Initializes the assigned variation to a random one using
   * the fetchRandomVariation() function.
   */
  const assignedVariation = fetchRandomVariation();
  /**
   * Initializes the sign up status to false.
   */
  const hasSignedUp = false;
  return { id: myuuid, visits, assignedVariation, hasSignedUp };
};
/**
 * Generates default tracking data with zero page views, subscriptions,
 * and an empty pages object.
 *
 * @return {TrackedData} The default tracking data object.
 */
export const defaultTrackingData = (): TrackedData => {
  return {
    /**
     * Total number of page views across all pages
     */
    totalPageViews: 0,
    /**
     * Total number of subscriptions across all pages
     */
    totalSubscriptions: 0,
    /**
     * Object containing page data for each page. Each page has its own
     * number of subscriptions and visits.
     */
    pages: {},
  };
};
