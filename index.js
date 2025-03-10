/**
 * Debugging Guide
 * 1. Make the code more readable
 * 2. Pick up calculation errors
 * 3. Make these calculations robust such that the calculation does not give an incorrect result, it throws an error to the user if something has gone wrong (parameter used with an incorrect unit of measurement, etc)
 */

// GIVEN PARAMETERS
const initialVelocity = 10000; // velocity (km/h)
const acceleration = 3; // acceleration (m/s^2)
const time = 3600; // seconds (1 hour)
const initialDistance = 0; // distance (km)
const initialFuel = 5000; // remaining fuel (kg)
const fuelBurnRate = 0.5; // fuel burn rate (kg/s)

// FUNCTION TO CONVERT KILOMETERS TO METERS
const kmhToMs = (kmh) => {
  return kmh * (1000 / 3600); // 1 km/h = 1000 meters / 3600 seconds
}

// CALCULATING NEW VELOCITY
const calculateNewVelocity = (initialVelocity, acceleration, time) => {
  const velocityInMs = kmhToMs(initialVelocity);
  return velocityInMs+ (acceleration * time);
}

// CALCULATING NEW DISTANCE
const calculateNewDistance = (initialVelocity, time) => {
  const velocityInMs = kmhToMs(initialVelocity); 
  const distanceInMeters = velocityInMs * time; // Distance in KM
  return distanceInMeters / 1000
}

// CALCULATING REMAINING FUEL
const calculateRemainingFuel = (burnRate, time) => {
  return burnRate * time;
}

console.log(`Corrected New Velocity: ${} km/h`);
console.log(`Corrected New Distance: ${} km`);
console.log(`Corrected Remaining Fuel: ${} kg`);






