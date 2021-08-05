import { Row, Col } from 'react-grid-system';
import ButtonPlayer from '../ButtonPlayer/ButtonPlayer';
import './PlayersBoard.css';

const PlayersBoard = ({ nextTurn, player1Name, player2Name }) => {
    const activePlayer1 = nextTurn === "X";
    return (
        <div className="players-board">
            <label>Jugadores</label>
            <Row>
                <Col sm={12}>
                    <ButtonPlayer text={player1Name} active={activePlayer1} />
                </Col>
                <Col sm={12}>
                    <ButtonPlayer text={player2Name} active={!activePlayer1} />
                </Col>
            </Row>
        </div>
    );
};

export default PlayersBoard;