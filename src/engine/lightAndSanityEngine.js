//src/engine/lightAndSanityEngine.js
import { useEffect } from 'react';
import useGameStore from "../store/useGameStore";

//optional utility you already have
export function calculateSanityDrop(exposureTime, nearPresence = false) {
  let drain = 0;
  if (exposureTime > 10) drain += 5;
  if (nearPresence) drain += 10;
  return drain;
}

// Main engine function
export function useLightAndSanityEngine() {
  const sanity = useGameStore(state => state.sanity);
  const light = useGameStore(state => state.light);
  const setSanity = useGameStore(state => state.setSanity);
  const setLight = useGameStore(state => state.setLight);

  useEffect(() => {
    const interval = setInterval(() => {
// drain flashlight
if (light > 0) {
        setLight((prev) => Math.max(0, prev - 1));
      }
      // sanity drain logic
if (light <= 0 && sanity > 0) {
        setSanity((prev) => Math.max(0, prev - 1));
      }

      //future add conditional NPC proximity
    }, 1000); // every second

    return () => clearInterval(interval);
  }, [light, sanity, setLight, setSanity]);
}