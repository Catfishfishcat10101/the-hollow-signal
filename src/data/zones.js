const zones = {
  forest: {
    name: "Foggy Forest",
    description: "A dense forest shrouded in mist, where the trees whisper secrets.",
    exits: [{ label: "Go to Church", to: "/church"}],
  },
  church: {
    name: " Desolate Church",
    description: "Pews are shattered. Candles are melted into the floor. The air is thick with dust.",
    exits: [{ label: "Climb the Radio Tower", to: "/tower" }],
  },
    tower: {
        name: "Radio Tower",
        description: "You hear the broadcast now -- it's not a signal, it's a voice.",
        exits: [{ label: "End This", to: "/ending" }],
    },
};

export default zones;