export default function Team ({name, goalKeeperSkill, shirtColor, shortsColor, onShoot, isGameActive})
{
    //Para desactivar el botón durante el tiempo de espera
    const[isDisabled, setIsDisabled] = useState(false);
    

    // Manejador del disparo
    const handleShoot = () =>{
        const power = Math.floor(Math.random() * 10)+1;
        onShoot(power);
        handleDebounce();
        //LLamamos a la función que pone el cooldown
    };


    const handleDebounce = () =>{
        //Para no poder pulsar el boton constantemente
        setIsDisabled(true);
        setTimeout(() => {
            setIsDisabled(false);
        }, 3000); // 3 segundos de espera
    };

    return(
    <>
    <h1>TEAM</h1>
    <button onClick={handleShoot} disabled={isDisabled}></button>
    </>
    );

};
