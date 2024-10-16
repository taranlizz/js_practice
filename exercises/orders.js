/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
const juices = {
  "Pure Strawberry Joy": 0.5,
  Energizer: 1.5,
  "Green Garden": 1.5,
  "Tropical Island": 3,
  "All or Nothing": 5,
};

export function timeToMixJuice(name) {
  if (Object.keys(juices).includes(name)) {
    return juices[name];
  } else {
    return 2.5;
  }
}
/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
const limeSizes = {
  small: 6,
  medium: 8,
  large: 10,
};

export function limesToCut(wedgesNeeded, limes) {
  let wedgesCutted = 0;
  let i = 0;

  while (wedgesCutted < wedgesNeeded) {
    if (limes[i]) {
      wedgesCutted += limeSizes[limes[i]];
      i++;
    } else {
      return i;
    }
  }
  return i;
}
/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  let timeTotal = 0;
  while (timeTotal < timeLeft) {
    timeTotal += timeToMixJuice(orders[0]);
    orders.shift();
  }
}
