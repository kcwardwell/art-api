
export const createResponse = (statusCode, message) => {
  return {
    statusCode: statusCode,
    body: JSON.stringify(message)
  };
};