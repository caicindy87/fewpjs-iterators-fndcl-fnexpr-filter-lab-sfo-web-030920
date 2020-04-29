// Callback function needs to return either true or false
// If returns true, the new array keeps that element
// If returns false, element is filtered out
// So, don't need to use if statement in the function

function findMatching(drivers, string) {
  return drivers.filter(
    (driver) => driver.toLowerCase() === string.toLowerCase()
  );
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((driver) => driver.startsWith(string));
}

function matchName(drivers, string) {
  return drivers.filter((driver) => driver.name === string);
}
