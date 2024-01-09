<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from "../components/shared/Navbar.vue";

export default {
  components: {
    Navbar,
  },
};
</script>
