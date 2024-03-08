<template>
  <v-container>
    <v-row>
      <v-col v-for="(article, index) in articles" :key="index" cols="12" md="4">
        <v-card>
          <v-img :src="article.image" height="200" alt="Article image"></v-img>
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-text>
            {{ article.description }}
          </v-card-text>
          <v-card-actions>
            <v-spacer />

            <v-dialog max-width="500">
              <template #activator="{ props: activatorProps }">
                <v-btn v-bind="activatorProps" variant="text">Read more</v-btn>
              </template>

              <template #default="{ isActive }">
                <v-card title="Subscribe">
                  <v-card-text> To further read more articles please subscribe! </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn variant="plain" text="Cancel" @click="isActive.value = false" />
                    <v-btn
                      color="primary"
                      text="Subscribe"
                      @click="
                        tracker.subscribe();
                        isActive.value = false;
                      "
                    />
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const tracker = useTracker();
</script>
