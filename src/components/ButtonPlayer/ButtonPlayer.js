import './ButtonPlayer.css';

const ButtonPlayer = ({ text, onClick, active }) => {
    const style = active ? "button-player active" : "button-player";

    return (
        <button onClick={onClick} className={style}>
            {text}
        </button>
    );
};

export default ButtonPlayer;