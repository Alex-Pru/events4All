import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
export default defineNuxtPlugin((nuxt) => {
  const vuetify = createVuetify({
    components,
    directives,
  });

  nuxt.vueApp.use(vuetify);
});
