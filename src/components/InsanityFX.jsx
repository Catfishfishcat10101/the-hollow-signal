import { useEffect, useState } from 'react';
import useGameStore from "../store/useGameStore";

export default function InsanityFX() {
    const sanity = useGameStore((state) => state.sanity);
    const [pulse, setPulse] = useState(false);

    useEffect(() => {
        if (sanity < 25) {
          const flicker = setInterval(() => {
            setPulse(prev => !prev);
          }, 800);
          return () => clearInterval(flicker);
        } else {
            setPulse(false);
        }
    }, [sanity]);

        if (sanity >= 25) {
            return null;
        }
    
        return (
            <div
                className={`fixed inset-0 z-40 pointer-events-none transition duration-300 ${
                    pulse ? "bg-red-900 bg-opacity-30" : "bg-transparent"
                }`}
            />
        );
    }