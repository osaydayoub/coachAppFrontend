export const getFullDate = (date) => {
  let year = date.getFullYear();
  // Months are zero-based, so add 1
  let month = date.getMonth() + 1;
  let m = month >= 10 ? month : `0${month}`;
  let day = date.getDate();
  return `${year}-${m}-${day}`;
};

export const getTime = (date) => {
  let hour = date.getHours();
  let minutes = date.getMinutes();
  return `${hour}:${minutes}`;
};

export const isSameDay = (date1, date2) =>
  date1.getDate() === date2.getDate() &&
  date1.getMonth() === date2.getMonth() &&
  date1.getFullYear() === date2.getFullYear();

// export const getDayAndMonth = (date) => {
//     let year = date.getFullYear();
//     // Months are zero-based, so add 1
//     let month = date.getMonth() + 1;
//     let m = month >= 10 ? month : `0${month}`;
//     let day = date.getDate();
//     return `${m}-${day}`;
//   };


