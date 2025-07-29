import { create } from 'zustand';

const useGameStore = create((set) => ({
    sanity: 100,
    light: 100,
    visitedZones: [],
    endingFlags: {},

    changeSanity: (amount) =>
        set((state) => ({
          sanity: Math.max(0, Math.min(100, state.sanity + amount)) })),
   
    drainLight: () =>
        set((state) => ({
          light: Math.max(0, state.light - 1) })),

    addZone: (zone) =>
        set((state) => ({
            visitedZones: [...new Set([...state.visitedZones, zone])],
        })),
}));
export default useGameStore;
