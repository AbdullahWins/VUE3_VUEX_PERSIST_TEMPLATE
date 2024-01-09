<template>
  <div class="flex items-center justify-center h-screen">
    <div class="bg-white p-8 rounded shadow-md">
      <div class="text-2xl font-semibold mb-4">Clock Picker</div>

      <div class="flex items-center space-x-4">
        <div class="relative">
          <div class="clock-face" v-show="!showMinutes" @click="toggleClock">
            <div
              class="hour-text"
              v-for="hour in 12"
              :key="hour"
              @click="selectHour(hour)"
              :style="{ transform: `rotate(${hour * 30}deg)` }"
            >
              <span
                class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                >{{ hour }}</span
              >
            </div>
          </div>
          <div class="clock-face" v-show="showMinutes" @click="selectMinute">
            <div
              class="minute-text"
              v-for="minute in 60"
              :key="minute"
              :style="{ transform: `rotate(${minute * 6}deg)` }"
            >
              <span
                class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center"
                @click="selectMinute(minute)"
              >
                {{ minute.toString().padStart(2, "0") }}
              </span>
            </div>
          </div>
        </div>

        <div class="flex flex-col">
          <div class="mb-2">Selected Time: {{ selectedTime }}</div>
          <div>
            <label class="block text-sm font-medium text-gray-700">Hour</label>
            <input
              v-model="selectedHour"
              type="number"
              min="1"
              max="12"
              class="border px-2 py-1"
            />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700"
              >Minute</label
            >
            <input
              v-model="selectedMinute"
              type="number"
              min="0"
              max="59"
              class="border px-2 py-1"
            />
          </div>
        </div>
      </div>

      <div class="mt-4">
        <button @click="getCurrentTime">Get Current Time</button>
        <div v-if="currentTime">
          Current Time: {{ currentTime.toLocaleTimeString() }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMinutes: false,
      selectedHour: 12,
      selectedMinute: 0,
      currentTime: null,
    };
  },
  computed: {
    selectedTime() {
      return `${this.padZero(this.selectedHour)}:${this.padZero(
        this.selectedMinute
      )}`;
    },
  },
  methods: {
    toggleClock() {
      this.showMinutes = !this.showMinutes;
    },
    selectHour(hour) {
      this.selectedHour = hour;
      this.showMinutes = true;
    },
    selectMinute(minute) {
      if (this.showMinutes) {
        this.selectedMinute = minute;
        this.showMinutes = false;
      }
    },
    padZero(value) {
      return value.toString().padStart(2, "0");
    },
    getCurrentTime() {
      this.currentTime = new Date();
      this.currentTime.setHours(this.selectedHour, this.selectedMinute, 0);
    },
  },
};
</script>

<style scoped>
.clock-face {
  width: 200px;
  height: 200px;
  border: 2px solid #333;
  border-radius: 50%;
  position: relative;
}

.hour-text,
.minute-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: 50% 100%;
  transform: translateX(-50%);
  cursor: pointer;
}

.hour-text span,
.minute-text span {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hour-text {
  font-size: 14px;
}

.minute-text {
  font-size: 12px;
}

.clock-face .minute-text {
  display: none;
}
</style>
