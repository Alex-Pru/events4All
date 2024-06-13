<template>
  <v-sheet
    class="d-flex align-center justify-center flex-wrap text-center mx-auto px-4"
    elevation="4"
    min-height="250"
    max-width="800"
    width="100%"
    rounded
  >
    <div>
      <v-img class="mx-auto my-6" max-width="300" src="mainIcon.png"></v-img>

      <h2 class="text-h2 font-weight-black text-blue-darken-4">Welcome!</h2>

      <div class="text-h5 font-weight-medium mb-2">
        Do you want to join or plan an Event? You are in the right place.
      </div>

      <p class="text-body-2 mb-4">
        Take a look at the available Events. In case there is none of your
        interest, it doesn't matter if it's onsite or online, you can always
        create one!
      </p>

      <v-btn flat to="/events" nuxt class="text-blue text-decoration-none">
        Search Event
      </v-btn>
    </div>
  </v-sheet>
</template>
