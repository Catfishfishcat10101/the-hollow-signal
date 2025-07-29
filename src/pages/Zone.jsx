import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useGameStore from "../store/useGameStore";
import zones from "../data/zones";
import HUD from "../components/HUD";
import InsanityFX from '../components/insanityFX';
import { useLightAndSanityEngine } from '../engine/lightAndSanityEngine';


export default function Zone() {
    const { zoneId } = useParams();
    const zone = zones[zoneId];
    const navigate = useNavigate();
    const addZone = useGameStore((state) => state.addZone);

    useLightAndSanityEngine(); //activates drain

    useEffect(() => {
        if (zoneId) addZone(zoneId);
    }, [zoneId, addZone]);

    if (!zone) {
      return (
        <div className='h-screen bg-black text-white flex flex-col items-center justify-center'>
            <h1 className='text-3xl mb-2'>Lost In the Void</h1>
            <p className='text-fog'>The place you tried to reach doesnt exist</p>
            <button
                onClick={() => navigate('/')}
                className='mt-4 px-4 py-2 bg-gray-700 rounded hover:bg-gray-600'
      >
        Return Home
      </button>
        </div>
      );
    }
    return (
        <div className='h-screen bg-black text-white flex flex-col items-center justify-center text-center p-10'>
            <HUD />
            <InsanityFX />

            <h1 className='text-4xl mb-4'>{zone.name}</h1>
            <p className='max-w-xl text-fog mb-8 text-center'>{zone.description}</p>
            <div className='flex gap-4 flex-wrap justify-center'>
                {zone.exits &&
                zone.exits.map((exit, i) => (
                    <button
                        key={i}
                        onClick={() => navigate(exit.to)}
                        className='bg-gray-700 px-6 py-2 rounded hover:bg-gray-500 transition'
                    >
                        {exit.label}
                    </button>
                ))}
            </div>
        </div>
    );
}