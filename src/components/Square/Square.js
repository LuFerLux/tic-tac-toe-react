import './Square.css';

const Square = ({ text, onClick }) => {
    const style = `square ${text}`;

    return (
        <div className={style} onClick={onClick}>
            {text}
        </div>
    );
};

export default Square;