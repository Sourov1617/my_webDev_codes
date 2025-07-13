/*

The calculateNetPayable() function should accept 3 inputs:
pricePerKilo, quantityInKilo and discountPercentage.

Calculate the net amount post discount that would be payable.

The function should return the computed value.

The function should return error message "Invalid Input Types, All Inputs Should Be of Type Number !!", 
for any non-numeric value passed to the function.

*/

module.exports = function calculateNetPayable(pricePerKilo, quantityInKilo, discountPercentage) {
  // Check if all inputs are numbers
  if ( 
    typeof pricePerKilo !== 'number' ||
    typeof quantityInKilo !== 'number' ||
    typeof discountPercentage !== 'number'
  ) {
    return "Invalid Input Types, All Inputs Should Be of Type Number !!";
  }

  // Calculate total price before discount
  const totalPrice = pricePerKilo * quantityInKilo;

  // Calculate discount amount
  const discountAmount = (totalPrice * discountPercentage) / 100;

  // Calculate net payable amount
  const netPayable = totalPrice - discountAmount;

  // Return net payable as a string to match test case expectations
  return netPayable.toString();
};