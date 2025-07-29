//src/engine/lightAndSanityEngine.js
import { useEffect } from 'react';
import useGameStore from "../store/useGameStore";


// Main engine function
export function useLightAndSanityEngine() {
  const light = useGameStore(state => state.light);
  const sanity = useGameStore(state => state.sanity);
  const drainLight = useGameStore(state => state.drainLight);
  const changeSanity = useGameStore(state => state.changeSanity);

  useEffect(() => {
    const interval = setInterval(() => {
// drain flashlight
if (light > 0) {
        drainLight();
      }
// sanity drain
if (light <= 0 && sanity > 0) {
       changeSanity(-1);
      }
    }, 1000); // every second

    return () => clearInterval(interval);
  }, [light, sanity, drainLight, changeSanity]);
}