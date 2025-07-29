import useGameStore from "../store/useGameStore";

export default function HUD() {
    const sanity = useGameStore((state) => state.sanity);
    const light = useGameStore((state) => state.light);

    return (
      <div className="absolute top-4 left-4 bg-black/70 text-white px-4 py-2 rounded text-sm font-mono z-50">
        <div>Sanity: {sanity}%</div>
        <div>Light: {light}%</div>
      </div>
    );
}