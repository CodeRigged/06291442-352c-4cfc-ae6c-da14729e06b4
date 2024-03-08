<template>
  <v-app-bar app dense flat>
    <v-app-bar-title>Blinkist AB-Testing App</v-app-bar-title>
    <v-spacer></v-spacer>

    <v-menu>
      <template #activator="{ props }">
        <v-btn icon v-bind="props">
          <v-icon>mdi-account-outline</v-icon>
        </v-btn>
      </template>
      <v-list>
        <!-- small bonus info ;) -->
        <v-list-item class="text-caption">
          CTR of entire App:
          {{ trackingData.totalSubscriptions / trackingData.totalPageViews }}
        </v-list-item>
        <!-- helper button ;) -->
        <v-list-item class="text-center" @click="clearCache"> Clear Cache</v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script setup>
import { useStorage } from '@vueuse/core';
const user = useCookie('user');
const trackingData = useStorage('tracking-data', defaultTrackingData());
/**
 * Function to clear the cache by setting the user value to null. Reloads the page.
 */
const clearCache = () => {
  user.value = null;
  window.history.go();
};
</script>
