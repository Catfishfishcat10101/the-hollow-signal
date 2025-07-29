import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useGameStore from "../store/useGameStore";
import zones from "../data/zones";
import HUD from "../components/HUD";

export default function Zone({ zoneId }) {
    const zone = zones[zoneId];
    const navigate = useNavigate();
    const addZone = useGameStore(state => state.addZone);

    useEffect(() => {
        if (zoneId) addZone(zoneId);
    }, [zoneId, addZone]);

    if (!zone) return <div className='p-10 text-white'>Unknown zone.</div>;

    return (
        <div className='h-screen bg-black text-white flex flex-col items-center justify-center text-center p-10'>
            <HUD />
            <h1 className='text-4xl mb-4'>{zone.name}</h1>
            <p className='max-w-xl text-fog mb-8'>{zone.description}</p>
            <div className='flex gap-4'>
                {zone.exits && zone.exits.map((exit, i) => (
                    <button
                        key={i}
                        onClick={() => navigate(exit.to)}
                        className='bg-gray-700 px-6 py-2 rounded hover:bg-gray-500'
                    >
                        {exit.label}
                    </button>
                ))}
            </div>
        </div>
    );
}