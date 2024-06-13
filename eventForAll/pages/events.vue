<script setup lang="ts">
import searchBarLayout from "~/layouts/searchBarLayout.vue";
</script>
<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar title="Events">
      <v-btn flat to="/" nuxt>Home</v-btn>
      <v-btn flat to="/login" nuxt>Login</v-btn>
      <v-btn flat to="/register" nuxt>Register</v-btn>
    </v-app-bar>
    <v-main
      class="d-flex align-center justify-center"
      style="min-height: 300px"
    >
      <v-container class="border-thin">
        <v-row>
          <v-col>
            <searchBarLayout />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-layout>
</template>
