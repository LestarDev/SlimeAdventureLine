import { useState } from "react";
import { createSlimePlayer } from "../components/SlimePlayer";
import Ground from "./Ground/Ground"

const GameScreen = () => {

    const [count, lvlUp] = useState(0)

  const Player = createSlimePlayer();

  Player.lvl=count;

    return (
        <>
            <Ground />
            <button onClick={()=>{lvlUp(count=>count+1); console.log(Player)}} />
        </>
    )
}

export default GameScreen