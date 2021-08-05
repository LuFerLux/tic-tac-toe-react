import MovementHistoryRow from './MovementHistoryRow';
import './MovementHistory.css';

const MovementHistory = ({ history, onClick }) => {
    const mapHistory = () => {
        return history.map((item, index) => {
            const text = index ? 'Movimiento N° ' + index : 'Inicio';
            return <MovementHistoryRow key={index} text={text} onClick={() => onClick(index)} />;
        });
    };

    return (
        <div className="movement-history">
            <div className="history-title">
                <h3>Movimientos</h3>
            </div>
            <ul className="history-body">
                {mapHistory()}
            </ul>
        </div>
    );
};

export default MovementHistory;