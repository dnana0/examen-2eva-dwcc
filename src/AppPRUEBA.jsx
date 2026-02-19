import "./App.css";
import Team from "./components/Team"

function App(){
    return (
        <Team
            name="PruebaNombre"
            goalKeeperSkill="7"
            shirtColor="#66a5d6"
            shortsColor="#ffffff"
            isGameActive="false"
        />
    );
}
export default App;