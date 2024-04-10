/**
 * Returns the error message from the provided error object.
 * If the error object is an instance of Error, it returns the error message.
 * Otherwise, it returns "An unknown error occurred."
 *
 * @param error - The error object.
 * @returns The error message or "An unknown error occurred."
 */
export const getErrorMessage = (error: unknown) => {
  return error instanceof Error ? error.message : "An unknown error occurred.";
};
