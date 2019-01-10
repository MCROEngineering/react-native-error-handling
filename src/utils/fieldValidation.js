export const isEmailValid = (email) => {
  /* eslint-disable */
  const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  /* eslint-enable */

  return regex.test(email);
};

export const isPhoneValid = (text) => {
  /* eslint-disable */
  const regex = /^[0-9]{10}$/;
  /* eslint-enable */

  return regex.test(text);
};

export const isNumberValid = (text) => {
  /* eslint-disable */
  const regex = /^[0-9]+$/;
  /* eslint-enable */

  return regex.test(text);
};

export const isDefaultFieldValid = (value, length = 3) => value && value.length >= length;
