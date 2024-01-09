<template>
  <div>about me</div>
</template>

<script>
import { getUppcomingBookings,getPastBookings } from "../../util/getUppcomingBookings";
export default {
  data() {
    return {
      selecteDate: "all", // all or unix date value 1703737833
      data: [
        {
          timestamp: "1703809833", // Wed Dec 27 2023 16:00:33 GMT+0600 (Bangladesh Standard Time)
          date: "1703692833", // Wed Dec 27 2023 22:00:33 GMT+0600 (Bangladesh Standard Time)
          name: "hello World",
        },
        {
          timestamp: "1703809833", // Fri Dec 29 2023 08:30:33 GMT+0600 (Bangladesh Standard Time)
          date: "1703737833", // Fri Dec 29 2023 06:30:33 GMT+0600 (Bangladesh Standard Time)
          name: "hello Earth",
        },
        {
          timestamp: "1703385933", // Sun Dec 24 2023 08:45:33 GMT+0600 (Bangladesh Standard Time)
          date: "1703378733", // Sun Dec 24 2023 06:45:33 GMT+0600 (Bangladesh Standard Time)
          name: "hello Universe",
        },
      ],
    };
  },
  computed: {
    getUpcomingBookings() {
      const upcomingBookings = getUppcomingBookings(
        this.selecteDate,
        this.data
      );

      if (upcomingBookings?.length > 0) {
        const margeData = upcomingBookings?.map(this.mergeData);
        return margeData;
      } else {
        return [];
      }
    },
    getPastBookings() {
      const upcomingBookings = getPastBookings(
        this.selecteDate,
        this.data
      );

      if (upcomingBookings?.length > 0) {
        const margeData = upcomingBookings?.map(this.mergeData);
        return margeData;
      } else {
        return [];
      }
    },
  },
  mounted() {
    const dates = this.mergeData();
  },
  methods: {
    mergeData(item) {
      const date = new Date(parseInt(item.date) * 1000);
      const time = new Date(parseInt(item.timestamp) * 1000);
      const mergedTimestamp =
        new Date(
          date.getFullYear(),
          date.getMonth(),
          date.getDate(),
          time.getHours(),
          time.getMinutes(),
          time.getSeconds()
        ).getTime() / 1000;
      return {
        ...item,
        showTimstamp: mergedTimestamp,
      };
    },
  },
};
</script>
