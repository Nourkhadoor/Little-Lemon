const availableTimes = [
    '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  export const fetchAPI = (date) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(availableTimes);
      }, 1000);
    });
  };

  export const submitAPI = (formData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  };
