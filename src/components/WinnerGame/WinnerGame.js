import ButtonPlayer from "../ButtonPlayer/ButtonPlayer";
import "./WinnerGame.css";

const WinnerGame = ({ playerName }) => {
    return (
        <div className="winner-game">
            <ButtonPlayer text={`¡Ganó ${playerName}!`} active={true} />
        </div>
    );
};

export default WinnerGame;