function findMatching(drivers, string) {
  return drivers.filter((driver) => {
    if (driver === string || driver.toLowerCase() === string.toLowerCase()) {
      return driver;
    }
  });
}

function fuzzyMatch(drivers, string) {
  return drivers.filter((driver) => {
    if (driver.startsWith(string)) {
      return driver;
    }
  });
}

function matchName(drivers, string) {
  return drivers.filter((driver) => {
    if (driver.name === string) {
      return driver;
    }
  });
}
