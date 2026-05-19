/**
 * Input Validation Utilities
 * Stateless helper algorithms for input checks.
 */

/**
 * Validates email layout compliance.
 */
export function validateEmail(email) {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(String(email).toLowerCase());
}

/**
 * Validates that text content exists and is not blank.
 */
export function validateRequired(value) {
  return typeof value === 'string' && value.trim().length > 0;
}
