// store/index.js
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

// Import your modules here
import { authModule } from "./modules/auth/auth";
import { counterModule } from "./modules/counter/counter";
import { regionModal } from "./modules/regions/regions";

export const store = createStore({
  modules: {
    // Your modules here
    auth: authModule,
    counter: counterModule,
    regionModal: regionModal,
  },
  plugins: [
    createPersistedState({
      paths: ["menuModal.selectedMenu", "auth"],
    }),
  ],
});
