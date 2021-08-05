import './Board.css';
import Square from '../Square/Square';

const Board = ({ squares, onClick }) => {
    return (
        <div className="board">
            {squares.map((square, index) => (
                <Square key={index} text={square} onClick={() => onClick(index)} />
            ))}
        </div>
    );
};

export default Board;