// Define HQ block
const hq = 42;

// Function 1: distanceFromHqInBlocks
function distanceFromHqInBlocks(block) {
  return Math.abs(block - hq);
}

// Function 2: distanceFromHqInFeet
function distanceFromHqInFeet(block) {
  const blocks = distanceFromHqInBlocks(block);
  return blocks * 264;
}

// Function 3: distanceTravelledInFeet
function distanceTravelledInFeet(start, destination) {
  const blocks = Math.abs(destination - start);
  return blocks * 264;
}

// Function 4: calculatesFarePrice
function calculatesFarePrice(start, destination) {
  const distanceInFeet = distanceTravelledInFeet(start, destination);

  if (distanceInFeet <= 400) {
    return 0; // Free sample for the first 400 feet
  } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
    return (distanceInFeet - 400) * 0.02; // 2 cents per foot after first 400 feet
  } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
    return 25; // Flat fare of $25 for distance over 2000 feet but below 2500 feet
  } else {
    return "cannot travel that far"; // No ride over 2500 feet
  }
}
