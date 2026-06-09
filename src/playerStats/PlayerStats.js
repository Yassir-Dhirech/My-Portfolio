import "../styles/playerStats.css";
import CV from "../assets/YASSIR_Dhirech_CV.pdf";
import DownloadImg from "../assets/telecharger.png";
const PlayerStats = () => {
    return (
        <>
        
        <div id="playerStats">
            <h1>DHIRECH Yassir</h1>
            <div id="playerStats__lines">
                <span id="playerStats__lines__thick"></span>
                <span id="playerStats__lines__thin"></span>
            </div>
            <h2>Future Computer Science Engineer</h2>
        </div>
        <a id="Button-CV" href={CV} download="Yassir_DHIRECH_CV">
            <img src={DownloadImg} href={DownloadImg} alt=""/>
            <p>Download CV</p> </a>
        </>
    );
};

export default PlayerStats;