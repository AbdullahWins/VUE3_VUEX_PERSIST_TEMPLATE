function getUppcomingBookings(param, data) {
  const currentDate = new Date().getTime() / 1000; // current date in Unix timestamp format

  if (param && data && data?.length > 0) {
    const newValues = data?.filter((item) => {
      const itemDate = parseInt(item.date);
      const itemTimestamp = parseInt(item.timestamp);

      if (param === "all") {
        const currentDateStr = new Date(currentDate * 1000)
          .toISOString()
          .split("T")[0];
        const itemDateStr = new Date(itemDate * 1000)
          .toISOString()
          .split("T")[0];

        return (
          itemDateStr > currentDateStr ||
          (itemDateStr === currentDateStr && itemTimestamp >= currentDate)
        );
      } else {
        const selectedDate = parseInt(param);
        const selectedTimestamp = selectedDate + (currentDate % 86400); // Add current time to selected date

        const currentDateStr = new Date(currentDate * 1000)
          .toISOString()
          .split("T")[0];
        const selectedDateStr = new Date(selectedDate * 1000)
          .toISOString()
          .split("T")[0];
        const itemDateStr = new Date(itemDate * 1000)
          .toISOString()
          .split("T")[0];

        return (
          (selectedDateStr === currentDateStr &&
            itemTimestamp >= currentDate) ||
          (selectedDateStr === itemDateStr &&
            itemTimestamp >= selectedTimestamp)
        );
      }
    });
    return newValues;
  } else {
    return [];
  }
}

function getPastBookings(param, data) {
  const currentDate = new Date().getTime() / 1000; // current date in Unix timestamp format

  if (param && data && data?.length > 0) {
    const newValues = data?.filter((item) => {
      const itemDate = parseInt(item.date);
      const itemTimestamp = parseInt(item.timestamp);

      if (param === "all") {
        const currentDateStr = new Date(currentDate * 1000)
          .toISOString()
          .split("T")[0];
        const itemDateStr = new Date(itemDate * 1000)
          .toISOString()
          .split("T")[0];

        return (
          itemDateStr < currentDateStr ||
          (itemDateStr === currentDateStr && itemTimestamp < currentDate)
        );
      } else {
        const selectedDate = parseInt(param);
        const selectedTimestamp = selectedDate + (currentDate % 86400); // Add current time to selected date

        const currentDateStr = new Date(currentDate * 1000)
          .toISOString()
          .split("T")[0];
        const selectedDateStr = new Date(selectedDate * 1000)
          .toISOString()
          .split("T")[0];
        const itemDateStr = new Date(itemDate * 1000)
          .toISOString()
          .split("T")[0];

        return (
          (selectedDateStr === currentDateStr && itemTimestamp < currentDate) ||
          (selectedDateStr === itemDateStr && itemTimestamp < selectedTimestamp)
        );
      }
    });
    return newValues;
  } else {
    return [];
  }
}

export { getPastBookings, getUppcomingBookings };
