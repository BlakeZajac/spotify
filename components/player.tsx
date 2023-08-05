"use client";

import usePlayer from "@/hooks/usePlayer";

interface PlayerProps {}

const Player = ({}) => {
  const player = usePlayer();

  return <div>Player</div>;
};

export default Player;
