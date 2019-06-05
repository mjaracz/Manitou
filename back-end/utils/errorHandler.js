async function errorHandler(error) {
  const errorMessage = await error.message;
  console.error(errorMessage);
  throw new Error(errorMessage);
}

module.exports = errorHandler;
