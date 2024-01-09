<template>
  <div class="flex flex-col items-center justify-center gap-10 py-20">
    <div>
      <div
        class="w-64 h-64 border border-gray-400 rounded-full relative flex items-center justify-center before:content-[''] before:absolute before:w-2 before:h-2 before:bg-blue-600 before:rounded-full"
      >
        <!-- hours  -->
        <div
          v-for="hour in 12"
          :key="hour"
          class="absolute h-full text-center z-10"
          :style="{ transform: `rotate(${hour * 30}deg)` }"
        >
          <span
            class="inline-block z-40 cursor-pointer"
            :style="{ transform: `rotate(-${hour * 30}deg)` }"
            @click="handleHourSelect(hour)"
            >{{ hour }}</span
          >
        </div>

        <!-- hour hand  -->
        <div
          class="absolute flex items-end justify-center"
          :style="{ transform: `rotate(${selectedHour * 30}deg)` }"
        >
          <div class="absolute w-1 h-28 bg-green-200 rounded-full"></div>
        </div>
      </div>
    </div>

    <div class="">
      <router-link
        to="/about"
        class="btn border-none bg-blue-500 text-white hover:bg-blue-500 hover:text-white"
      >
        Back to About
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedHour: 0,
    };
  },

  methods: {
    handleHourSelect(hour) {
      console.log(hour);
      this.selectedHour = hour;
    },
  },
};
</script>
