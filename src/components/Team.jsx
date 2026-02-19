import { useState } from "react";

export default function Team({
  name,
  goalKeeperSkill,
  shirtColor,
  shortsColor,
  onShoot,
  isGameActive,
}) {
  //Para desactivar el botón durante el tiempo de espera
  const [isDisabled, setIsDisabled] = useState(false);

  isGameActive ? setIsDisabled(false) : setIsDisabled(true);

  // Manejador del disparo
  const handleShoot = () => {
    const power = Math.floor(Math.random() * 10) + 1; // Calculo potencia de tiro
    onShoot(power);
    handleDebounce();
    //LLamamos a la función que pone el cooldown
  };

  const handleDebounce = () => {
    //Para no poder pulsar el boton constantemente
    setIsDisabled(true);
    setTimeout(() => {
      setIsDisabled(false);
    }, 3000); // 3 segundos de espera
  };

  return (
    <>
      <div class="team">
        <div className="team-header"></div>
        <div className="team-colors">
          <div
            className="shirt-color"
            style={{ backgroundColor: shirtColor }}
          ></div>
          <div
            className="shorts-color"
            style={{ backgroundColor: shortsColor }}
          ></div>
        </div>
        <h2>{name}</h2>
        <p className="goalkeeper-skill">Portero: {goalKeeperSkill}</p>
        <button onClick={handleShoot} disabled={isDisabled}>
          TIRA
        </button>
      </div>
    </>
  );
}
