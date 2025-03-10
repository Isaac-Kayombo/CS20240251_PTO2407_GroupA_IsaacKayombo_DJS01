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



// TRY AND CATCH BLOCK FOR PERFORMING CALCULATIONS
try {
  const newVelocityMs = calculateNewVelocity(initialVelocity, acceleration, time); // in meters
  const newVelocityKmh = newVelocityMs * (3600 / 1000); // converts to km/h
  const newDistance = calculateNewDistance(initialVelocity, time);
  const remainingFuel = calculateRemainingFuel(fuelBurnRate, time);

  // ENSURES WE DON'T USE MORE FUEL THAN AVAILABLE
  if (remainingFuel > initialFuel) {
    throw new Error("Not enough fuel for the given time and burn rate.")
  }

  // LOGGING RESULTS
  console.log(`Corrected New Velocity: ${newVelocityKmh} km/h`);
  console.log(`Corrected New Distance: ${newDistance} km`);
  console.log(`Corrected Remaining Fuel: ${initialFuel - remainingFuel} kg`);

} catch (error) {
  console.error("Error in calculation:", error.message);
}







