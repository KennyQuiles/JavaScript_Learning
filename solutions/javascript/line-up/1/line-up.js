//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Returns the correct ordinal suffix for a given number.
 * Handles special cases for 11, 12, and 13.
 *
 * @param {number} n - An integer in the range 1..999
 * @returns {string} "st" | "nd" | "rd" | "th"
 */
function ordinalSuffix(n) {
  const mod100 = n % 100;
  if (mod100 >= 11 && mod100 <= 13) return 'th';

  switch (n % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

/**
 * Formats the sentence for the deli ticket.
 *
 * @param {string} name - Customer name
 * @param {number} number - Ticket number (1..999)
 * @returns {string} Sentence with ordinal numeral
 */

export const format = (name, number) => {
  const suffix = ordinalSuffix(number);
  return `${name}, you are the ${number}${suffix} customer we serve today. Thank you!`;
};
