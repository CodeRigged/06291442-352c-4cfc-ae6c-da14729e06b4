<template>
  <v-container>
    <v-row>
      <v-col v-for="(article, index) in articles" :key="index" cols="12" md="4">
        <v-card>
          <v-card-title>{{ article.title }}</v-card-title>
          <v-img :src="article.image" height="200"></v-img>
          <v-card-text>
            {{ article.description }}
          </v-card-text>
          <v-card-actions>
            <v-btn text @click="tracker.signUp">Sign up</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const tracker = useTracker();
</script>
