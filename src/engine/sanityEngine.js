// Placeholder for future sanity drain logic
export function calculateSanityDrop(exposureTime, nearPresence = false) {
  let drain = 0;
  if (exposureTime > 10) drain += 5;
  if (nearPresence) drain += 10;
  return drain;
}