<script setup lang="ts">
import LoginLayout from "~/layouts/loginLayout.vue";
</script>

<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Login">
      <v-btn flat to="/" nuxt>Home</v-btn>
      <v-btn flat to="/register" nuxt>Register</v-btn>
    </v-app-bar>

    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <LoginLayout />
    </v-main>
  </v-layout>
</template>
