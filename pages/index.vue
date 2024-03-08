<template>
  <div>
    <component :is="selectedComponent" />
  </div>
</template>

<script setup lang="ts">
const tracker = useTracker();

// if no variation is assigned to user default to variation A
const selectedComponent = computed(() =>
  resolveComponent(tracker.user.value ? tracker.user.value.assignedVariation : 'VariationA'),
);
onMounted(() => {
  const { user, trackingData } = tracker;
  // if user is undefined assign default user data
  user.value = user.value || defaultUserData();
  if (user.value.hasSignedUp) {
    // I stop tracking if a user has already signed up
    return;
  }
  user.value.visits++;
  // checks if variation has already been visited, if not add it to our tracking data
  if (trackingData.value.pages[user.value.assignedVariation] === undefined) {
    trackingData.value.pages[user.value.assignedVariation] = { visits: 1, subscriptions: 0 };
  } else {
    trackingData.value.pages[user.value.assignedVariation].visits++;
  }

  trackingData.value.totalPageViews++;

  trackPageView({
    pageName: user.value.assignedVariation,
    timestamp: Date.now(),
    userId: user.value.id,
    url: window.location.href,
    views: trackingData.value.pages[user.value.assignedVariation].visits,
  });
});
</script>
