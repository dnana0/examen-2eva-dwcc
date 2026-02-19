import { useEffect, useState } from "react";
import Team from "./Team"
import "./Match.css"


const teamA = {
    name: "Celta",
    goalKeeperSkill: 7,
    shirtColor:"#66a5d6",
    shortsColor: "#ffffff"
}
const teamB = {
    name: "Pontevedra",
    goalKeeperSkill: 8,
    shirtColor:"#870e4b",
    shortsColor: "#ffffff"
}


export default function Match(){
    const [teamAScore, setTeamAScore] = useState(0);
    const [teamBScore, setTeamBScore] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(30);
    const [gameState, setGameState] = useStart("starting"); // starting, running, finished


    useEffect ( () => {
        let timer = null;

        if (gameState === "running"){
            timer = setInterval(() => {setTimeRemaining((prev) =>{
                if (prev <= 1) {
                    setGameState("finished");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        return () => clearInterval(timer);
    }
    });

}