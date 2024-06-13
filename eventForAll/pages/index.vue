<script setup lang="ts">
import homeLayout from "~/layouts/homeLayout.vue";
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Home">
      <v-btn flat to="/login" nuxt>Login</v-btn>
      <v-btn flat to="/register" nuxt>Register</v-btn>
    </v-app-bar>
    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <homeLayout />
    </v-main>
  </v-layout>
</template>
