<script setup lang="ts">
import registerLayout from "~/layouts/registerLayout.vue";
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Register">
      <v-btn flat to="/" nuxt>Home</v-btn>
      <v-btn flat to="/login" nuxt>Login</v-btn>
    </v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <registerLayout />
    </v-main>
  </v-layout>
</template>
