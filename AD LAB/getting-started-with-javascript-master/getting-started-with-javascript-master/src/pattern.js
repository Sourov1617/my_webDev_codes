/*

The drawPattern() function should accept number of rows as input.

The function should return string that contains the pyramid structure for the number of rows inputted.

The pyramid structure should have the following pattern:

        *
       * *
      * * *
     * * * *
    * * * * *

The function should return error message "Invalid Input Type, Row Input Should Be of Type Number !!", 
if non-numeric value is passed to the function.

*/

module.exports = function drawPattern(rows) {
  // Check if input is a number
  if (typeof rows !== 'number') {
    return "Invalid Input Type, Row Input Should Be of Type Number !!";
  }

  let pyramid = '';

  for (let i = 1; i <= rows; i++) {
    const spaces = ' '.repeat(rows - i);
    const stars = '* '.repeat(i).trim();
    pyramid += spaces + stars + '\n'; // Adjusted to match the exact format
  }

  return pyramid; // Return without adding extra spaces or newlines
};