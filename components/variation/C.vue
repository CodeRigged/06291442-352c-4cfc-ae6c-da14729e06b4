<template>
  <v-container>
    <v-row>
      <v-col v-for="(article, index) in articles" :key="index" cols="12" md="4">
        <v-card color="white" class="text-white" :image="article.image">
          <v-card-title>{{ article.title }}</v-card-title>
          <v-card-text class="bg-grey-lighten-5 ma-5 pa-5">
            {{ article.description }}
          </v-card-text>

          <v-card-actions>
            <v-btn color="white" variant="text" block @click="tracker.signUp">Sign up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const tracker = useTracker();
</script>
