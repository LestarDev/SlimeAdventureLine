import React, { useState } from "react"
import "./Ground.css"

const Ground = () => {

    const [groundType, setGroundType] = useState("Normal");

    const groundName = "Ground "+groundType;

    return (
        <div className={groundName} onClick={(e: React.MouseEvent)=>{
            setGroundType((groundName)=>"Desert")
        }}>

        </div>
    )
}

export default Ground