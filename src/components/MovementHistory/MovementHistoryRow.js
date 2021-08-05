import './MovementHistoryRow.css';

const MovementHistoryRow = ({ text, onClick }) => {
    return (
        <li onClick={onClick}>
            <label>{text}</label>
        </li>
    );
};


export default MovementHistoryRow;