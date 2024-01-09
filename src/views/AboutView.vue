<template>
  <div class="flex flex-col items-center gap- 6">
    <h1>This is an about page</h1>

    <div class="my-6">
      <ul class="flex flex-col gap-6 divide-y-2">
        <li v-for="(item, index) in getFilterData" class="flex flex-col gap-2">
          <span>{{ item?.title }}</span>
          <button class="btn" @click="() => checkIndex(index)">Click</button>
        </li>
      </ul>
    </div>

    <button class="btn" @click="toggleStatus">ToggleStatus</button>

    <router-link
      class="btn border-none bg-blue-400 hover:bg-blue-400 text-white"
      to="/"
      >Visit Home</router-link
    >
  </div>
</template>

<script>
import WelcomeItem from "../components/WelcomeItem.vue";

export default {
  data() {
    return {
      data: [
        {
          title: "a",
          status: true,
        },
        {
          title: "b",
          status: false,
        },
        {
          title: "c",
          status: true,
        },
        {
          title: "d",
          status: false,
        },
        {
          title: "e",
          status: false,
        },
        {
          title: "f",
          status: true,
        },
      ],
      isFalse: true,
    };
  },
  computed: {
    getAllValue() {
      return this.data;
    },

    getFilterData() {
      const newData = this.data.filter((item) => item?.status === this.isFalse);
      return newData;
    },
  },

  methods: {
    checkIndex(index) {
      console.log(index);
    },
    toggleStatus() {
      this.isFalse = !this.isFalse;
    },
  },

  components: {
    WelcomeItem,
  },
};
</script>
