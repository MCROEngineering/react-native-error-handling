export default (error) => {
  if (error) {
    const { status } = error;

    if (status === 502) {
      return {
        title: 'Server is Down',
        message: 'Something bad happened to our server.',
      };
    }

    return error;
  }
  return false;
};
